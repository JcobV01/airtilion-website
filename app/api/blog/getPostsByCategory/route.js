// pages/api/postsByCategory.js

export async function POST(req) {
    try {
      const { categoryName, limit, paginate, page } = await req.json();
  
      if (!categoryName) {
        return new Response(
          JSON.stringify({ error: 'Brak wymaganego parametru categoryName' }),
          { status: 400 }
        );
      }
  
      // Jeśli paginate=true, wymagamy podania page
      if (paginate && (page === undefined || page === null)) {
        return new Response(
          JSON.stringify({ error: 'Parametr page jest wymagany, gdy paginate ma wartość true' }),
          { status: 400 }
        );
      }
  
      // 1) Pobierz ID kategorii na podstawie nazwy
      const catUrl = new URL('http://localhost:8886/wp-json/wp/v2/categories');
      catUrl.searchParams.set('search', categoryName);
      const catResp = await fetch(catUrl);
      if (!catResp.ok) {
        throw new Error(`WP API (categories) zwróciło błąd ${catResp.status}`);
      }
      const catData = await catResp.json();
      const matched = catData.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
      if (!matched) {
        return new Response(
          JSON.stringify({ error: `Kategoria o nazwie "${categoryName}" nie znaleziona` }),
          { status: 404 }
        );
      }
      const categoryId = matched.id;
  
      // 2) Pobierz posty z API używając ID znalezionej kategorii
      const perPage = limit ?? 100;
      const postsUrl = new URL('http://localhost:8886/wp-json/wp/v2/posts');
      postsUrl.searchParams.set('_embed', '');
      postsUrl.searchParams.set('categories', categoryId);
      postsUrl.searchParams.set('per_page', perPage);
      if (paginate) {
        postsUrl.searchParams.set('page', page);
      }
  
      const resp = await fetch(postsUrl);
      if (!resp.ok) {
        throw new Error(`WP API (posts) zwróciło błąd ${resp.status}`);
      }
      const posts = await resp.json();
  
      const simplified = posts.map(post => ({
        title: post.title.rendered,
        category: categoryName,
        intro: post.acf?.intro_text || null,
        image: post.acf?.image_link || null
      }));
  
      return new Response(JSON.stringify(simplified), { status: 200 });
    } catch (error) {
      console.error('Błąd pobierania:', error);
      return new Response(
        JSON.stringify({ error: 'Błąd serwera' }),
        { status: 500 }
      );
    }
  }
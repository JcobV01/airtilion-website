const BLOG_URL = process.env.BLOG_URL;
export const revalidate = 60;

export default async function sitemap() {
  const staticPages = [
    { url: 'https://airtilion.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1, },
    { url: 'https://airtilion.com/area', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/bialystok', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/bydgoszcz', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/czestochowa', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/gdansk', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/gorzowwielkopolski', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/katowice', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/kielce', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/krakow', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/lodz', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/lublin', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/nowysacz', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/olsztyn', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/poznan', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/rzeszow', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/slupsk', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/szczecin', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/tarnow', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/torun', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/warszawa', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/area/wroclaw', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7, },
    { url: 'https://airtilion.com/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8, },
    { url: 'https://airtilion.com/offer/websites', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/offer/shops', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/offer/apps', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/offer/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/offer/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/portfolio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6, },
    { url: 'https://airtilion.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6}
  ];

  const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?per_page=100`);
  if (!res.ok) {
    console.error('Błąd pobierania postów:', res.status);
    return staticPages;
  }

  const posts = await res.json();

  const blogPages = posts.map(post => ({
    url: `https://airtilion.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages]
}
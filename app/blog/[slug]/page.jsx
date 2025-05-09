import React from 'react'

import Route from '@components/blog-singlePost/Route';
import BgBlog from '@components/blog-singlePost/BgBlog';
import Category from '@components/blog-all/Category';
import Introduction from '@components/blog-singlePost/Introduction';
import ArticleIntro from '@components/blog-singlePost/ArticleIntro';
import TableContents from '@components/blog-singlePost/TableContents';
import Content from '@components/blog-singlePost/Content';
import Author from '@components/blog-singlePost/Author';
import OtherPosts from '@components/blog-singlePost/OtherPosts';
import CustomCooperate from '@components/blog-singlePost/CustomCooperate';


export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:8882/wp-json/wp/v2/posts/').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    slug: String(post.slug),
  }))
}

const page = async ({ params }) => {
  const { slug } = await params
  const posts = await fetch(`http://localhost:8882/wp-json/wp/v2/posts?slug=${slug}&_embed`).then((res) =>
    res.json()
  )

  const post = posts[0]

  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name

  console.log(post)

  return (
    <main className='mt-[150px] relative'>

      <BgBlog />
      <Route title={post.title.rendered} />

      <article className='relative z-10'>
        <div className=' mt-[52px] w-[1240px] mx-auto'>
          <Category name={category} />
        </div>

        <Introduction title={post.title.rendered} date={post.date} time={post.acf.time} />
        <ArticleIntro title={post.title.rendered} image_link={post.acf.image_link} intro_text={post.acf.intro_text} />
        <TableContents content={post.content.rendered} />
        <Content content={post.content.rendered} />
        <Author authorName={post.acf.author} />
        <OtherPosts category={category} />

        <div className='mt-[96px] w-[1240px] mx-auto'>
          <CustomCooperate />
        </div>

      </article>


    </main>
  )
}

export default page
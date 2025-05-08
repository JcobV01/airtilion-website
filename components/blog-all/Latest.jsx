'use client'

import Heading from '@components/Heading'
import React, { useEffect, useState } from 'react'
import SinglePost from './SinglePost'
import AsideSection from './AsideSection'

const Latest = () => {

    const [posts, setPosts] = useState([])

    const getData = async () => {
        const data = await fetch('/api/blog/getAll', { method: 'POST' });
        const postsJ = await data.json();
        console.log(postsJ)
        setPosts(postsJ)
    }

    useEffect(() => { getData() }, [])


    return (
        <section className='w-[1400px] mx-auto flex flex-col gap-[128px] '>
            <Heading title="Najnowsze" subtitle="bądź na bierząco z nowościami" />

            <div className='flex justify-between gap-[32px]'>
                <article className='w-[952px] flex flex-wrap gap-[16px]'>
                    {posts?.map((post, index) => (
                        <SinglePost key={index} title={post?.title} category={post?.category} intro={post?.intro} image={post?.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    ))}
                </article>
                <AsideSection/>
            </div>
        </section>
    )
}

export default Latest
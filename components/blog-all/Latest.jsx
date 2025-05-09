'use client'

import Heading from '@components/Heading'
import React, { useEffect, useState } from 'react'
import SinglePost from './SinglePost'
import AsideSection from './AsideSection'
import Pagination from './Pagination'
import { useCategory } from '@context/PostCategoryContext'
import SinglePostLoader from './SinglePostLoader'
import useIntersectionObserver from '@hooks/useObserver'

const Latest = () => {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [phrase, setPhrase] = useState('')
    // const [category, setCategory] = useState('')
    const [totalPages, setTotalPages] = useState(1)
    const { category, setCategory } = useCategory()

    const raw = [1, 2, 3, 4, 5, 6]

    const [loading, setLoading] = useState(false)


    const getData = async () => {
        setLoading(true)
        const data = await fetch('/api/blog/getPostsByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryName: category,
                limit: 6,
                paginate: true,
                page: page,
                searchTerm: phrase,
            })
        });
        const postsJ = await data.json();
        setPosts(postsJ.posts)
        setTotalPages(postsJ.totalPages)
        setLoading(false)
    }

    const clearFilters = () => {
        setCategory('')
        setPhrase('')
    }

    useEffect(() => {
        getData();
    }, [phrase, page, category])

    const [ ref, isVisible ] = useIntersectionObserver();

    return (
        <section ref={ref} className={`w-[1400px] mx-auto flex flex-col gap-[128px] transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`}>
            <Heading title="Najnowsze" subtitle="bądź na bierząco z nowościami" />

            <div className='flex justify-between gap-[32px] relative'>

                {(category || phrase) && <div className='absolute left-0 top-[-64px] flex gap-[8px] items-center'>
                    <p className='font-light text-[#ABABAB]'>Filtry:</p>
                    {category && <p className='bg-[#EFD8A7] text-black px-[16px] py-[3px] rounded-[5px]'>{category}</p>}
                    {phrase && <p className='bg-[#EFD8A7] text-black px-[16px] py-[3px] rounded-[5px]'>"{phrase}"</p>}
                    <button className='text-[#ABABAB] ml-[32px]' onClick={clearFilters}>Wyczyść filtry</button>
                </div>}

                <article className='w-[952px] flex flex-wrap gap-[16px]'>
                    {!loading ?
                        posts.length > 0 ? 
                            posts?.map((post, index) => (
                                <SinglePost key={index} title={post?.title} category={post?.category} intro={post?.intro} slug={post?.slug} image={post?.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                            ))
                            :
                            <p className='font-light text-[#ABABAB]'>Brak wyników</p>
                        :
                        raw.map(element => <SinglePostLoader />)
                    }
                </article>
                <AsideSection phrase={phrase} setPhrase={setPhrase} />
            </div>

            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </section>
    )
}

export default Latest
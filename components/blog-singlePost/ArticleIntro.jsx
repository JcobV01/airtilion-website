import React from 'react'
import Image from 'next/image'

const ArticleIntro = ({ title, image_link, intro_text }) => {
    return (
        <section className='mt-[64px] w-[1240px] mx-auto flex gap-[32px] xl:w-[1000px] lg:w-[90%] md:flex-col md:items-center'>

            <div className='flex-1 relative'>
                <Image src={image_link} alt={title.replace(/<[^>]+>/g, '').replace(/&#8211;/g, '-')} width="600" height="400" sizes={`(min-width: 1280px) 50vw, (min-width: 1024px) 484px, (min-width: 768px) 50vw, 100%`} className='rounded-[5px] object-cover h-[400px] ' />
                <div className='rounded-[5px] bg-[linear-gradient(202deg,#E2B35000_60%,#E2B350ff_140%)] brightness-50 absolute top-0 left-0 w-[600px] h-[400px] xl:w-[484px] lg:w-full' />
            </div>

            <div className='flex-1 flex gap-[16px] text-[16px] font-light' dangerouslySetInnerHTML={{ __html: intro_text }} />

        </section>
    )
}

export default ArticleIntro
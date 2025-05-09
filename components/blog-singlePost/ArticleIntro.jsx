import React from 'react'
import Image from 'next/image'

const ArticleIntro = ({ title, image_link, intro_text }) => {
    return (
        <section className='mt-[64px] w-[1240px] mx-auto flex gap-[32px]'>

            <div className='flex-1 relative'>
                <Image src={image_link} alt={title.replace(/<[^>]+>/g, '').replace(/&#8211;/g, '-')} width="600" height="400" className='object-cover h-[400px]'/>
                <div className='bg-[linear-gradient(202deg,#E2B35000_60%,#E2B350ff_140%)] brightness-50 absolute top-0 left-0 w-[600px] h-[400px]' />
            </div>

            <div className='flex-1'>
                <p className='text-[16px] font-light' dangerouslySetInnerHTML={{ __html: intro_text }} />
            </div>

        </section>
    )
}

export default ArticleIntro
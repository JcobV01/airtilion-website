import React from 'react'
import Image from 'next/image'
import bg from '@public/assets/images/headers/blog-bg.webp'

const BgBlog = () => {
    return (
        <div>
            <Image src={bg} alt="Zdjęcie tła" className='w-full fixed object-cover top-0 left-0' />
            <div className='fixed top-0 left-0 bg-[#040404B3] w-full h-full' />
        </div>
    )
}

export default BgBlog
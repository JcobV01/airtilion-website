import React from 'react'
import Category from './Category'
import Image from 'next/image'

const SinglePost = ({ category, title, intro, image }) => {
    return (
        <div className='h-[438px] w-[468px] flex flex-col p-[32px] relative justify-between rounded-[15px] overflow-hidden'>
            <Category name={category} />
            <div className='z-[4]'>
                <h4 className='text-[25px] font-semibold line-clamp-3 mb-[8px]' dangerouslySetInnerHTML={{__html: title}}></h4>
                <p className='text-[16px] text-[#B4B4B4] line-clamp-3' dangerouslySetInnerHTML={{__html: intro}}></p>
            </div>

            <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(270deg,#000000_0%,#00000000_100%)] z-[2] opacity-[0.95]'></div>
            <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(#E2B35000_0%,#E2B350ff_100%)] z-[1] opacity-[0.2]'></div>
            <Image src={image} width={500} height={500} alt={title} className='object-cover absolute top-0 left-0 w-full h-full z-0 brightness-[0.4]' />
        </div>
    )
}

export default SinglePost
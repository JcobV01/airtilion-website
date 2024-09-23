import Image from 'next/image'
import React from 'react'

const EncourageCard = ({image, title, desc}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-[15px] flex-1 lg:flex-auto lg:w-[40%] sm:w-[100%]'>
            <Image src={image} width={50} height={50} alt={`Ikona ${title}`} className='xl:w-[40px] xl:h-[40px]'/>
            <h3 className='text-[18px] xl:text-[15px] text-center'>{title}</h3>
            <p className='text-[12px] xl:text-[11px] font-light text-center'>{desc}</p>
        </div>
    )
}

export default EncourageCard
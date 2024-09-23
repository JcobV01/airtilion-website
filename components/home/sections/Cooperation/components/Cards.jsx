import React from 'react'

import Image from 'next/image'

const Cards = ({title, desc, image, flexRow}) => {
    return (
        <div className={`w-[575px] h-[175px] xl:w-[400px] xl:h-[150px] xl:gap-[20px] flex bg-[rgba(27,27,27,0.40)] rounded-[20px] justify-between items-center px-[20px] backdrop-blur-[2px] ${flexRow}`}>
            <div className='pt-[10px] w-[400px] xl:w-auto xl:flex-1'>
                <h5 className='text-[22px] xl:text-[18px] tracking-[5px] font-light'>{title}</h5>
                <p className='text-[14px] xl:text-[10px] tracking-[1.2px] font-extralight mt-[10px]'>{desc}</p>
            </div>
            <div className='flex items-center justify-center bg-[#1B1B1B] rounded-[15px] w-[100px] h-[100px] xl:w-[70px] xl:h-[70px] px-[10px]'>
                <Image src={image} alt="Ikona lupy" />
            </div>
        </div>
    )
}

export default Cards
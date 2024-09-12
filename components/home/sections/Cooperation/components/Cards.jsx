import React from 'react'

import Image from 'next/image'

const Cards = ({title, desc, image, flexRow}) => {
    return (
        <div className={`w-[575px] h-[175px] flex bg-[rgba(27,27,27,0.40)] rounded-[20px] justify-between items-center px-[20px] mt-[75px] ${flexRow}`}>
            <div className='pt-[10px] w-[400px]'>
                <h5 className='text-[22px] tracking-[5px] font-light'>{title}</h5>
                <p className='text-[14px] tracking-[1.4px] font-light mt-[20px]'>{desc}</p>
            </div>
            <div className='flex items-center justify-center bg-[#1B1B1B] rounded-[25px] w-[100px] h-[100px] px-[10px]'>
                <Image src={image} alt="Ikona lupy" />
            </div>
        </div>
    )
}

export default Cards
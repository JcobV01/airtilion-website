import { Icon } from '@iconify/react'
import React from 'react'

const EncourageCard = ({image, title, desc}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-[15px] flex-1 lg:flex-auto lg:w-[40%] sm:w-[100%]'>
            <Icon icon={image} width={50} height={50} alt={`Ikona ${title}`} className='text-[#E2B350] xl:w-[40px] xl:h-[40px]'/>
            <h3 className='text-[18px] xl:text-[15px] xxl:text-[20px] text-center'>{title}</h3>
            <p className='text-[12px] xl:text-[11px] xxl:text-[16px] font-light text-center'>{desc}</p>
        </div>
    )
}

export default EncourageCard
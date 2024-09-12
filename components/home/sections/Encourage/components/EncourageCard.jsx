import Image from 'next/image'
import React from 'react'

const EncourageCard = ({image, title, desc}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-[15px] flex-1'>
            <Image src={image} width={50} height={50} alt={`Ikona ${title}`} />
            <h3 className='text-[18px] text-center'>{title}</h3>
            <p className='text-[12px] font-light text-center'>{desc}</p>
        </div>
    )
}

export default EncourageCard
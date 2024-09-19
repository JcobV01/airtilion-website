import Image from 'next/image'
import React from 'react'

import { achivements } from '@data/portfolio'

const Achivement = ({icon, title, description}) => {
  return (
    <div className='flex flex-1 gap-[20px]'>
        <div className='w-[50px]'>
            <Image src={achivements[icon]} width={50} height={50} alt={`ikona ${title}`}/>
        </div>
        <div className='flex-1'>
            <h6 className='text-[20px] font-bold w-[100px] mb-[20px]'>{title}</h6>
            <p className='text-[13px] font-light'>{description}</p>
        </div>
    </div>
  )
}

export default Achivement
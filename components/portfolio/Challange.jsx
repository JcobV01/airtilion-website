import Image from 'next/image'
import React from 'react'

import bg from '@public/assets/images/portfolioChallangesGradient.png'

import { challanges } from '@data/portfolio'
import { Icon } from '@iconify/react'

const Challange = ({icon, title, description}) => {
  return (
    <div className='relative w-[400px] h-[200px] flex flex-col justify-center items-center gap-[15px] bg-[#1B1B1B99] px-[40px] rounded-[5px] decoration-lines z-10 sm:w-[90%] sm:h-auto sm:py-[25px] sm:px-[20px]'>
        <Icon icon={challanges[icon]} width="50" height="50" alt='Ikona wyzwania' className='text-[#E2B350] absolute top-[-30px] left-[50%] translate-x-[-50%]'/>
        <h6 className='text-[15px] font-semibold text-center'>{title}</h6>
        <p className='text-[12px] text-center'>{description}</p>
        <Image src={bg} width={400} height={200} alt='Tło kafelka' className='absolute left-0 top-0 brightness-50 sm:w-full sm:h-full'/>
    </div>
  )
}

export default Challange
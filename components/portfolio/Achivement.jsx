import React from 'react'

import { achivements } from '@data/portfolio'
import { Icon } from '@iconify/react'

const Achivement = ({icon, title, description}) => {
  return (
    <div className='flex flex-1 gap-[20px] xl:flex-auto xl:w-[40%] sm:w-[100%]'>
        <div className='w-[50px]'>
            <Icon icon={icon} width="50" height="50" alt={`Ikona ${title}`} className='text-[#E2B350]' style={{color: '#e2b350'}}/>
        </div>
        <div className='flex-1'>
            <h6 className='text-[20px] font-bold w-[100px] mb-[20px] xxl:text-[24px]'>{title}</h6>
            <p className='text-[13px] font-light xxl:text-[16px]'>{description}</p>
        </div>
    </div>
  )
}

export default Achivement
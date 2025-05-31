import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import React from 'react'

const WhyCityTile = ({tile, index}) => {
  return (  
    <div className={`border-[1px] border-[#343434] rounded-[5px] p-[20px] py-[16px] ${index >= 2 ? 'xl:col-span-2 lg:col-span-1' : 'xl:py-[32px] lg:py-[16px]' }`}>
        <div className='flex gap-[4px] items-center'>
            <Icon icon={tile.icon} width="15" height="15" className='text-[#E2B350]'/>
            <p className='text-[#E2B350] font-extralight text-[13px] xl:text-[11px]'>{tile.iconText}</p>
        </div>

        <h3 className='text-[17px] font-medium text-white mt-[8px] xl:text-[16px]'>{tile.title}</h3>
        <p className={`text-[15px] text-[#ABABAB] mt-[16px] xl:text-[14px] ${index >= 2 ? 'xl:mt-[8px]' : 'xl:mt-[32px] lg:mt-[8px]'}`}>{tile.desc}</p>
    </div>
  )
}

export default WhyCityTile
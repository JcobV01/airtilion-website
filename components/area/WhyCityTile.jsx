import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import React from 'react'

const WhyCityTile = ({tile}) => {
  return (  
    <div className='border-[1px] border-[#343434] rounded-[5px] p-[20px] py-[32px]'>
        <div className='flex gap-[4px] items-center'>
            <Icon icon={tile.icon} width="15" height="15" className='text-[#E2B350]'/>
            <p className='text-[#E2B350] font-extralight text-[13px]'>{tile.iconText}</p>
        </div>

        <p className='text-[18px] font-medium text-white mt-[8px]'>{tile.title}</p>
        <p className='text-[15px] text-[#ABABAB] mt-[32px]'>{tile.desc}</p>
    </div>
  )
}

export default WhyCityTile
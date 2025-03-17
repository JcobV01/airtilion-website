import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import React from 'react'

const SingleSlide = ({slug, icon, name}) => {
    return (
        <div className='w-[180px] h-[330px] bg-[#00000080] backdrop-blur-[20px] rounded-[25px] p-[16px] flex flex-col justify-between items-center absolute'>
            <p className='text-center font-light text-[#777777] text-[10px]'>{slug[0]} <br /> {slug[1]}</p>
            <div className='w-[120px] h-[120px] rounded-full bg-[#0404041a] shadow-inner-[0px_4px_10px_#00000080] flex justify-center items-center'>
                <Icon icon={icon} width="80" height="80" className='text-white' />
            </div>
            <p className='text-[20px] font-light'>{name}</p>
        </div>
    )
}

export default SingleSlide
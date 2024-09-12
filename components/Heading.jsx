import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div>
        <div className='flex gap-[30px] items-center'>
            <div className='h-[2px] w-[100px] bg-[#E2B350]'></div>
            <h3 className='text-[30px] font-bold'>{title}</h3>
        </div>
        <h4 className='text-[15px] uppercase text-[#AEAEAE]'>{subtitle}</h4>
    </div>
  )
}

export default Heading
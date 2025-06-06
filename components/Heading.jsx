import React from 'react'

const Heading = ({title, subtitle, id=""}) => {
  return (
    <div id={id} className='z-10'>
        <div className='flex gap-[30px] sm:gap-[15px] items-center'>
            <div className='h-[2px] w-[100px] xl:w-[70px] sm:w-[50px] bg-[#E2B350]'></div>
            <h2 className='text-[30px] xl:text-[25px] sm:text-[20px] font-bold xxl:text-[35px]'>{title}</h2>
        </div>
        <h3 className='text-[15px] xl:text-[13px] sm:text-[11px] uppercase text-[#AEAEAE] xxl:text-[17.5px]'>{subtitle}</h3>
    </div>
  )
}

export default Heading
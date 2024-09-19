import React from 'react'

const Realization = ({title, desc, arrow, accent}) => {
  return (
    <div className='w-[270px] h-[150px]'>
        <div className='flex gap-[28px] items-center relative mb-[15px]'>
            <div className='w-[30px] h-[30px] rounded-full bg-[#E2B350] shadow-[0px_0px_10px_#E2B35080]'></div>
            <div className={`h-[2px] bg-[#959595] relative ${arrow == 'line' ? 'w-[50%]' : 'flex-1'}`}>
                <span className={`absolute ${arrow == 'line' ? 'hidden' : arrow == 'left' ? 'left-[-10px] rotate-180' : 'right-[-10px]'} top-[50%] translate-y-[-50%] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-[#959595] inline-block`}></span>
                <p className='absolute left-[15px] top-[-25px] text-[#B8B8B8] text-[12px]'>{accent}</p>
            </div>
        </div>

        <div>
            <h6 className='text-[20px] font-bold tracking-[3px] mb-[10px]'>{title}</h6>
            <p className='text-[15px] text-[#B8B8B8] w-[80%]'>{desc}</p>
        </div>
    </div>
  )
}

export default Realization
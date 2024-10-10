import React from 'react'
import { Icon } from '@iconify/react';

const SliderCard = ({author, page, desc, key}) => {
    return (
        <div className='h-[250px] w-[420px] xxl:h-[300px] xxl:w-[470px] bg-[rgba(16,16,16,0.40)] rounded-[10px] backdrop-blur-[2.5px] px-[15px] py-[15px] relative' key={key}>
            <div className='absolute right-[-20px] top-[-20px]'>
                <Icon icon="bi:quote" width={200} height={200} alt="Ikona cytatu" className='text-[#121212]' />
            </div>
            <div className='flex gap-[50px] z-10 relative'>
                <div className='w-[40px] h-[40px] bg-[rgba(22,22,22,0.60)] rounded-[5px] backdrop-blur-[2px] flex justify-center items-center'>
                    <Icon icon="material-symbols:person" width={25} height={25} alt="Ikona człowieka" className='text-[#E2B350]' />
                </div>
                <div className='flex flex-col'>
                    <h5 className='text-[20px] xxl:text-[24px] font-extralight tracking-[1px]'>{author}</h5>
                    <span className='pl-[15px] text-[#AEAEAE] text-[16px] xxl:text-[20px] font-extralight lg:text-[13px]'>{page}</span>
                </div>
            </div>
            <p className='text-[16px] font-extralight mt-[15px] px-[15px] z-10 relative xxl:text-[20px] lg:text-[14px]'>{desc}</p>
            <div className='absolute top-[30px] left-[65px]'>
                <hr className='w-[30px] h-[1px] border-[rgba(226,179,80,0.50);]' />
            </div>
            <div className='absolute bottom-[10px] left-[50%] translate-x-[-50%]'>
                <hr className='w-[85px] h-[1px] border-[rgba(226,179,80,0.50);]' />
            </div>
        </div>
    )
}

export default SliderCard
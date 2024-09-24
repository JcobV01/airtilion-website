import React from 'react'

import { Icon } from '@iconify/react'


const PortfolioOpinion = ({client}) => {
    return (
        <article className='w-[1240px] xl:w-[90%]'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>REFERENCJA</h5>

            <div className='flex flex-col w-full justify-center items-center gap-[40px] relative fold:gap-[20px]'>

                <Icon icon="bxs-quote-alt-left" width="175" height="112" alt='Ikona cudzosłowu' className='text-[#121212] absolute z-10 left-[-20px] top-[-20px]' />

                <span className='h-[2px] w-[30%] bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E] fold:z-10'></span>

                <p className='z-20 text-[18px] text-center mb-[30px]'>{client.opinion}</p>
                <p className='z-20 text-[20px] text-center text-[#A8A8A8]'>~ {client.author}</p>

                <span className='h-[2px] w-[30%] bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'></span>

            </div>
        </article>
    )
}

export default PortfolioOpinion
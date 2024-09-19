import Image from 'next/image'
import React from 'react'

const PortfolioImages = ({screenshots}) => {
    return (
        <article className='relative h-[446px] w-dvw'>
            <span className='absolute bottom-0 left-0 h-[1px] bg-[#E2B350] w-[200px]'></span>
            <Image src={screenshots[0]} height={450} width={870} alt='Zdjęcie strony internetowej 1' className='absolute left-[50%] translate-x-[-50%] z-20 rounded-[10px]' />
            <Image src={screenshots[2]} height={380} width={740} alt='Zdjęcie strony internetowej 2' className='absolute left-0 top-0 z-10 brightness-50' />
            <Image src={screenshots[1]} height={380} width={740} alt='Zdjęcie strony internetowej 3' className='absolute right-0 bottom-0 z-10 brightness-50' />
            <span className='absolute top-0 right-0 h-[1px] bg-[#E2B350] w-[200px]'></span>
        </article>
    )
}

export default PortfolioImages
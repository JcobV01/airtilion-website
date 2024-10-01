import Image from 'next/image'
import React from 'react'

const PortfolioImages = ({screenshots}) => {
    return (
        <article id="images" className='relative h-[446px] w-dvw flex xl:flex-col xl:items-center xl:h-auto xl:w-[90%] observer'>
            <span className='absolute bottom-0 left-0 h-[1px] bg-[#E2B350] w-[200px] xl:bottom-[-5%] sm:inset-x-auto'></span>
            <Image src={screenshots[0]} height={450} width={870} alt='Zdjęcie strony internetowej 1' className='w-[870px] h-[450px] object-cover absolute left-[50%] translate-x-[-50%] z-20 rounded-[10px] xl:relative xl:left-auto xl:translate-x-0' />
            <Image src={screenshots[2]} height={380} width={740} alt='Zdjęcie strony internetowej 2' className='w-[740px] h-[380px] object-cover absolute left-0 top-0 z-10 brightness-50 xl:relative xl:top-auto xl:left-auto' />
            <Image src={screenshots[1]} height={380} width={740} alt='Zdjęcie strony internetowej 3' className='w-[740px] h-[380px] object-cover absolute right-0 bottom-0 z-10 brightness-50 xl:relative xl:right-auto xl:bottom-auto' />
            <span className='absolute top-0 right-0 h-[1px] bg-[#E2B350] w-[200px] xl:top-[-5%] sm:inset-x-auto'></span>
        </article>
    )
}

export default PortfolioImages
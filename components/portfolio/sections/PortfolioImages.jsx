import Image from 'next/image'
import React from 'react'

const PortfolioImages = ({screenshots, clientID}) => {
    return (
        <article id="images" className='relative h-[446px] w-dvw flex xl:flex-col xl:items-center xl:gap-[16px] xl:h-auto xl:w-[90%] observer max-w-[1920px]'>
            <span className='absolute bottom-0 left-0 h-[1px] bg-[#E2B350] w-[200px] xl:bottom-[-5%] sm:inset-x-auto'></span>
            <Image 
                src={`https://api.airtilion.com/uploads/projects/${clientID}/${screenshots[0].file}`} 
                placeholder='blur'
                blurDataURL={`data:image/webp;base64,${screenshots[0].base64}`}
                quality={100} 
                height={450} 
                width={870} 
                alt='Zdjęcie strony internetowej 1' 
                className='w-[870px] h-[450px] object-cover absolute left-[50%] translate-x-[-50%] z-20 rounded-[10px] xl:relative xl:left-auto xl:translate-x-0 lg:object-contain lg:h-auto lg:w-full' />
            <Image 
                src={`https://api.airtilion.com/uploads/projects/${clientID}/${screenshots[1].file}`}
                placeholder='blur'
                blurDataURL={`data:image/webp;base64,${screenshots[1].base64}`} 
                quality={100}
                height={380} 
                width={740} 
                alt='Zdjęcie strony internetowej 2' 
                className='w-[740px] h-[380px] object-cover absolute left-0 top-0 z-10 brightness-50 xl:relative xl:top-auto xl:left-auto lg:object-contain lg:h-auto lg:w-full lg:rounded-[10px]' />
            <Image 
                src={`https://api.airtilion.com/uploads/projects/${clientID}/${screenshots[2].file}`} 
                placeholder='blur'
                blurDataURL={`data:image/webp;base64,${screenshots[2].base64}`}
                quality={100} 
                height={380} 
                width={740} 
                alt='Zdjęcie strony internetowej 3' 
                className='w-[740px] h-[380px] object-cover absolute right-0 bottom-0 z-10 brightness-50 xl:relative xl:right-auto xl:bottom-auto lg:object-contain lg:h-auto lg:w-full lg:rounded-[10px]' />
            <span className='absolute top-0 right-0 h-[1px] bg-[#E2B350] w-[200px] xl:top-[-5%] sm:inset-x-auto'></span>
        </article>
    )
}

export default PortfolioImages
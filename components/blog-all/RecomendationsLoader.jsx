import React from 'react'

import placeholder from '@public/assets/images/area/cities/krakow.webp'
import Image from 'next/image'

const styles = [
    'row-span-2 col-start-1',
    '',
    'row-span-2 col-start-5',
    'col-start-2 col-span-2 row-start-2',
    'col-start-3 col-span-2 row-start-1',
    'col-start-4 row-start-2'
]


const RecomendationsLoader = () => {
    return (
        <article className="grid [grid-template-columns:350px_298px_40px_298px_350px] [grid-template-rows:298px_298px] gap-[16px]">
            {styles?.map((style, index) => (
                    <div key={index} className={`h-full w-full flex flex-col justify-between p-[16px] rounded-[15px] relative overflow-hidden ${style} group`}>

                        <div className='bg-[#EFD8A7] relative z-10 w-fit px-[16px] py-[2px] rounded-[5px] category-span cursor-pointer hover:brightness-75 duration-500 blur-[4px] animate-pulse'>
                            <p className='text-[#242424] text-[14px]'>Lorem ipsum</p>
                        </div>


                        <p className='text-[20px] font-semibold relative z-10 blur-[5px] animate-pulse'>Znalazłeś ciekawostkę, napisz do nas</p>
                        <div className='absolute w-full h-full top-0 left-0 z-[1] bg-[linear-gradient(#E2B35000_0%,#E2B350ff_100%)] opacity-50 brightness-[0.4]'></div>
                        <Image src={placeholder} width={612} height={612} alt='zdjęcie artykułu' className='blur-[20px] animate-pulse object-cover h-full w-full absolute top-0 left-0 z-0 brightness-50 group-hover:scale-110 duration-500' />
                    </div>
            ))}
        </article>
    )
}

export default RecomendationsLoader
import React from 'react'
import map from '@public/assets/images/area-map.webp'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const CityComponent = ({ city }) => {
    return (
        <section className='flex justify-center px-[130px] gap-[100px] mt-[100px] 2xl:gap-[50px] 2xl:px-[100px] xl:flex-col xl:gap-[100px] sm:px-[40px]'>
            <article className='flex flex-col gap-[32px] flex-1 justify-center xl:items-center'>
                <h1 className='text-[48px] 2xl:text-[40px] lg:text-[30px] font-medium xl:text-center'>Strony i aplikacje internetowe {city}</h1>
                <h2 className='text-[#E2B350] text-[20px] 2xl:text-[18px] lg:text-[15px] font-light xl:text-center'>Tworzymy nowoczesne i eleganckie strony internetowe dopasowane do potrzeb klientów na terenie całej Polski, w tym {city}. Działamy przede wszystkim online, dlatego nie mamy ograniczeń. Skontaktuj się z nami, a wszystko wyjaśnimy.</h2>
                <Link href="/">
                    <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-500 flex gap-[10px] items-center w-max hover:text-[#d9d9d9] hover:bg-gradient-to-r hover:text-[15px] hover:py-[12px] hover:tracking-[1.5px] nav-button xl:text-[15px]'>
                        Dowiedz się więcej
                        <Icon icon="hugeicons:arrow-right-double" width="16" height="16" />
                    </button>
                </Link>
            </article>
            <article className='flex-1 xl:pb-[50px]'>
                <Image src={map} width="751" className='aspect-[1028/960] xl:m-auto' alt="Zdjęcie mapy z obszarami działania"/>
            </article>
        </section>
    )
}

export default CityComponent
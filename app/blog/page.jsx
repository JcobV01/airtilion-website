import Image from 'next/image'
import React from 'react'
import bg from '@public/assets/images/headers/blog-bg.webp'
import Recomendations from '@components/blog-all/Recomendations'

const page = () => {
  return (
    <>
        <header className='min-h-[600px] flex flex-col justify-end items-start px-[128px] pb-[128px]'>
            <h1 className='text-[50px] font-bold'>Blog pełen wiedzy i inspiracji</h1>
            <p className='text-[25px] w-[700px] font-light mt-[8px]'>Zagłęb się w artykuły, porady i historie, pobudzające Twoją kreatywność i poszerzające horyzonty.</p>
        </header>

        <main className='w-full bg-[#04040487] backdrop-blur-[7px] h-[1000px] rounded-tl-[150px] rounded-tr-[150px] pt-[96px]'>
            <Recomendations/>
        </main>

        <Image src={bg} alt='zdjęcie tła' width={1920} height={1080} quality={100} className='object-cover w-full h-dvh fixed z-[-1] top-0 left-0'/>
    </>
  )
}

export default page
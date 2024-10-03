import Image from 'next/image'
import React from 'react'

const Header = ({ title, subtitle, img }) => {
  return (
    <header className='w-full h-dvh relative top-[-133px] flex justify-center items-center z-10'>
      <Image
          src={img.src}
          alt="Tło nagłówka"
          layout="fill" // Zajmuje cały obszar nagłówka
          objectFit="cover" // Pokrywa cały obszar
          objectPosition="center calc(100% + 10px)" // Pozycjonowanie obrazu
          priority // Ważny obraz
        />
      <article className='flex flex-col items-center justify-center sm:gap-[20px] relative header-border h-[230px] 2xl:h-[180px] md:h-[120px] sm:h-auto px-[120px] 2xl:px-[80px] md:px-[40px] lg:mx-[30px]'>
        <p className='text-[#E2B350] text-[15px] 2xl:text-[13px] lg:text-[10px] font-light lg:text-center'>TWÓJ SUKCES ZACZYNA SIĘ TUTAJ</p>
        <h1 className='text-[45px] font-semibold 2xl:text-[35px] lg:text-[30px] md:text-[25px] lg:text-center'>{title}</h1>
        <h2 className='text-[#E2B350] text-[20px] 2xl:text-[18px] lg:text-[13px] md:text-[11px] lg:text-center'>{subtitle}</h2>
      </article>
    </header>
  )
}

export default Header
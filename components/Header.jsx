import React from 'react'

const Header = ({title, subtitle, img}) => {
  return (
    <header className='w-full h-[1156px] bg-right bg-no-repeat bg-cover relative top-[-133px] flex justify-center items-center z-10' style={{backgroundImage: `url(${img.src})`}}>
        <article className='flex flex-col items-center justify-center relative header-border h-[230px] px-[120px] mt-[-240px]'>
            <p className='text-[#E2B350] text-[15px] font-light'>TWÓJ SUKCES ZACZYNA SIĘ TUTAJ</p>
            <h1 className='text-[45px] font-semibold'>{title}</h1>
            <h2 className='text-[#E2B350] text-[20px]'>{subtitle}</h2>
        </article>
    </header>
  )
}

export default Header
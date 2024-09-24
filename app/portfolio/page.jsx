"use client"

import Heading from '@components/Heading'
import PortfolioSites from '@components/portfolio/PortfolioSites'
import React, { useState } from 'react'

const page = () => {
  const [active, setActive] = useState('sites')

  return (
    <section className='w-[1240px] flex flex-col gap-[100px] xl:w-[90%]'>
        <div className='relative z-10 flex flex-col gap-[50px]'>
            <Heading title="Portfolio" subtitle="ZOBACZ NASZE REALIZACJE"/>
            <p className='text-[15px]'>Poznaj nasze pełne portfolio, gdzie każdy projekt opowiada unikalną historię sukcesu. Przedstawiamy szeroką gamę realizacji, które odzwierciedlają nasze zaangażowanie w tworzenie innowacyjnych rozwiązań. Każdy projekt zawiera szczegółowy opis, ukazujący naszą metodykę pracy, wykorzystane technologie oraz efekty współpracy z klientami. Zanurz się w świat kreatywnych pomysłów i sprawdź, jak możemy wspólnie przekroczyć granice możliwości, budując przyszłość Twojej marki!</p>
        </div>
        
        <nav className='flex relative gap-[40px] px-[40px] py-[20px] w-max m-auto md:w-[90%] md:flex-wrap md:justify-center'>
            <span className='absolute w-[326px] h-full top-0 left-0 rounded-full border-[#E2B350] border-l-[3px] z-10 sm:w-[30px]'></span>
            <button className={`rounded-full w-[180px] h-[50px] border-[1px] border-[#7A6B4E] z-20 ${active === 'sites' && 'bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'}`} onClick={() => setActive('sites')}>Strony</button>
            <button className={`rounded-full w-[180px] h-[50px] border-[1px] border-[#7A6B4E] z-20 ${active === 'shops' && 'bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'}`} onClick={() => setActive('shops')}>Sklepy</button>
            <button className={`rounded-full w-[180px] h-[50px] border-[1px] border-[#7A6B4E] z-20 ${active === 'apps' && 'bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'}`} onClick={() => setActive('apps')}>Aplikacje</button>
            <span className='absolute w-[326px] h-full top-0 right-0 rounded-full border-[#E2B350] border-r-[3px] z-10 sm:w-[30px]'></span>
        </nav>

        {
          active == 'sites' ? <PortfolioSites/> : active == 'shops' ? '' : ''
        }
    </section>
  )
}

export default page
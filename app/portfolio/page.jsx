"use client"

import React, { useState } from 'react'
import Heading from '@components/Heading'
import PortfolioApps from '@components/portfolio/PortfolioApps'
import PortfolioShops from '@components/portfolio/PortfolioShops'
import PortfolioSites from '@components/portfolio/PortfolioSites'

const page = () => {
  const [active, setActive] = useState('sites')

  return (
    <>
      <section className='w-[1240px] flex flex-col gap-[100px] xxl:w-[1500px] xl:w-[90%]'>
        <div className='relative z-10 flex flex-col gap-[50px]'>
          <Heading title="Portfolio" subtitle="ZOBACZ NASZE REALIZACJE" />
          <p className='text-[15px] xxl:text-[22px]'>Poznaj nasze pełne portfolio, gdzie każdy projekt opowiada unikalną historię sukcesu. Przedstawiamy szeroką gamę realizacji, które odzwierciedlają nasze zaangażowanie w tworzenie innowacyjnych rozwiązań. Każdy projekt zawiera szczegółowy opis, ukazujący naszą metodykę pracy, wykorzystane technologie oraz efekty współpracy z klientami. Zanurz się w świat kreatywnych pomysłów i sprawdź, jak możemy wspólnie przekroczyć granice możliwości, budując przyszłość Twojej marki!</p>
        </div>

        <nav className='flex relative gap-[40px] px-[40px] py-[20px] w-max m-auto md:w-[90%] md:flex-wrap md:justify-center'>
          <span className='absolute w-[326px] h-full top-0 left-0 rounded-full border-[#E2B350] border-l-[3px] z-10 sm:w-[30px]'></span>
          <button className={`rounded-full w-[180px] h-[50px] border-[1px] border-[#7A6B4E] duration-700 relative z-10 ${active === 'sites' ? 'cursor-default' : 'hover:scale-90'} ${active ? '' : 'hover:scale-90'} ${active === 'sites' && 'bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'} xxl:text-[20px]`} onClick={() => setActive('sites')}>Strony</button>
          {/* <button className={`rounded-full w-[180px] h-[50px] border-[1px] border-[#7A6B4E] duration-700 relative z-10 ${active === 'shops' ? 'cursor-default' : 'hover:scale-90'} ${active === 'shops' && 'bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'} xxl:text-[20px]`} onClick={() => setActive('shops')}>Sklepy</button> */}
          <button className={`rounded-full w-[180px] h-[50px] border-[1px] border-[#7A6B4E] duration-700 relative z-10 ${active === 'apps' ? 'cursor-default' : 'hover:scale-90'} ${active === 'apps' && 'bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'} xxl:text-[20px]`} onClick={() => setActive('apps')}>Aplikacje</button>
          <span className='absolute w-[326px] h-full top-0 right-0 rounded-full border-[#E2B350] border-r-[3px] sm:w-[30px]'></span>
        </nav>

        {
          active == 'sites' ? <PortfolioSites />
            : active == 'shops' ? <PortfolioShops />
              : <PortfolioApps />
        }
      </section>

      <div className='absolute top-[100px] xxl:hidden 2xl:top-[50px] xl:top-[50px] lg:hidden left-[50%] translate-x-[-50%] z-[1] w-full opacity-50'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="900" viewBox="0 0 1864 900" fill="none" className='w-full'>
          <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
        </svg>
      </div>

      {/* Linie mobilne */}

      <div className='absolute hidden lg:block lg:top-[-100px] md:top-[-200px] left-[50%] translate-x-[-50%] z-[1] w-full opacity-50 md:opacity-70'>
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1849" viewBox="0 0 900 700" fill="none" className='w-full'>
          <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
        </svg>
      </div>
    </>
  )
}

export default page
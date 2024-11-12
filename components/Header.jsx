"use client"
import useIntersectionObserver from '@hooks/useObserver'
import useWindowWidth from '@hooks/useWindowWidth'
import Image from 'next/image'
import {useEffect, useState} from 'react'

const Header = ({ title, subtitle, img, positionBottom=true }) => {
  const width = useWindowWidth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1
  });
  
  return (
    <header ref={ref} className={`w-full h-dvh relative top-[-133px] flex justify-center items-center z-10  transition-opacity duration-1000 fold:top-[-180px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isClient &&
      <Image
      src={img.src}
      alt="Tło nagłówka"
      fill 
      sizes="(max-width: 1024px) 100vw, 1920px"
      // sizes="100vw"
      className={`w-full h-dvh absolute object-cover object-bottom ${positionBottom && 'object-bottom'}`}
      loading='eager'
      priority
      quality={100}
      fetchPriority="auto"
      unoptimized={width > 1023}
      style={{objectPosition: positionBottom == true ? 'center bottom' : 'center calc(100% + 10px)' }}
      />
    }
      <article className='flex flex-col items-center justify-center sm:gap-[20px] relative header-border h-[230px] 2xl:h-[180px] md:h-[120px] sm:h-auto px-[120px] 2xl:px-[80px] md:px-[40px] lg:mx-[30px]'>
        <p className='text-[#E2B350] text-[15px] 2xl:text-[13px] lg:text-[10px] font-light lg:text-center'>TWÓJ SUKCES ZACZYNA SIĘ TUTAJ</p>
        <h1 className='text-[45px] font-semibold 2xl:text-[35px] lg:text-[30px] md:text-[25px] lg:text-center'>{title}</h1>
        <h2 className='text-[#E2B350] text-[20px] 2xl:text-[18px] lg:text-[13px] md:text-[11px] lg:text-center'>{subtitle}</h2>
      </article>
    </header>
  )
}

export default Header
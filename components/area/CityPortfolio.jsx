"use client"

import React from 'react'
import Subtitle from './Subtitle'

import ButtonArea from './ButtonArea'
import Image from '@node_modules/next/image'
import bg from '@public/assets/images/area/portfolio-bg.webp'
import useIntersectionObserver from '@hooks/useObserver'

const CityPortfolio = ({ portfolio }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className='relative z-10 w-full py-[64px]'>
      <article className={`w-[1240px] mx-auto xl:w-[1000px] lg:w-[90%] flex flex-col items-center relative z-20 transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
        <Subtitle subtitle="PORTFOLIO" />
        <h2 className='mt-[16px] text-[30px] font-semibold lg:text-[25px] text-center'>{portfolio.title}</h2>
        <p className='mt-[8px] font-light text-[16px] sm:text-[14px] text-center'>{portfolio.paragraph1}</p>
        <p className='font-light text-[16px] lg:mt-[8px] sm:text-[14px] text-center'><span className='font-bold'>{portfolio.paragraph2}</span> Skontaktuj się z nami i stwórzmy razem coś wyjątkowego!</p>

        <div className='mt-[32px]'>
          <ButtonArea text="Przejdź do portfolio" width={270} link="/portfolio" margin={32} />
        </div>

      </article>
      <Image src={bg} width={1920} height={500} quality={100} alt='Zdjecie przedstawiające grafikę portfolio strony internetowej w Tarnowie' className='w-full h-full absolute top-0 left-0 object-cover brightness-[0.1] z-10' />
    </section>
  )
}

export default CityPortfolio
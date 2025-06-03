"use client"

import React from 'react'
import Image from '@node_modules/next/image'
import WhyCityTile from './WhyCityTile'
import useIntersectionObserver from '@hooks/useObserver'

const WhyCity = ({ whyCity, cityImg, city }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  return (
    <section className='w-full flex flex-col gap-[64px] bg-[#00000033] z-20 pt-[64px] backdrop-blur-[10px]'>
      <article ref={ref2} className={`w-[1220px] mx-auto flex flex-col gap-[32px] xl:w-[960px] lg:w-[90%] transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-left' : 'element-hidden-left'}`}>

        <div>
          <div className='flex gap-[30px] sm:gap-[15px] items-center'>
            <div className='h-[2px] w-[100px] xl:w-[70px] sm:w-[50px] bg-[#E2B350]' />
            <h2 className='text-[30px] xl:text-[25px] sm:text-[20px] font-bold xxl:text-[35px]'>{whyCity.mainTitle}</h2>
          </div>
          <p className='text-[15px] xl:text-[13px] sm:text-[11px] uppercase text-[#AEAEAE] xxl:text-[17.5px]'>{whyCity.decoration}</p>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h3 className='text-[20px] font-medium xl:text-[18px]'>{whyCity.subTitle}</h3>
          <p className='font-light'>{whyCity.paragraph}</p>
        </div>
      </article>

      <article ref={ref} className={`z-20 py-[64px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
        
        <div className='grid gap-[16px] w-[1220px] mx-auto grid-cols-4 grid-rows-2-custom xl:w-[960px] lg:grid-cols-2 lg:grid-rows-3-custom lg:w-[500px] sm:flex sm:flex-col sm:w-[90%]'>
          
          <div className='w-[600px] h-[650px] z-20 relative p-[48px] flex items-end col-span-2 row-span-2 xl:row-span-1 xl:w-[472px] xl:h-[472px] lg:w-[500px] lg:h-[500px] sm:h-auto sm:w-[100%] aspect-square sm:p-[32px]'>
            <Image src={cityImg} width={600} height={600} quality={100} className='object-cover absolute top-0 left-0 w-full h-full brightness-[1.5]' alt={`Tworzenie stron www ${city}`} />
            <h2 className='relative z-20 text-[25px] font-extralight lg:text-[20px]'>{whyCity.titleWhyInvest}</h2>
          </div>

          {whyCity.elements.map((tile, index) => (
            <WhyCityTile key={index} tile={tile} index={index} />
          ))}
        </div>
      </article>
    </section>
  )
}

export default WhyCity
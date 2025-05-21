"use client"

import React from 'react'
import Image from '@node_modules/next/image'
import Heading from '@components/Heading'
import WhyCityTile from './WhyCityTile'
import useIntersectionObserver from '@hooks/useObserver'

const WhyCity = ({data}) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  return (
    <section className='w-full flex flex-col gap-[64px] bg-[#00000033] z-20 pt-[64px] backdrop-blur-[10px]'>
        <article ref={ref2} className={`w-[1220px] mx-auto flex flex-col gap-[32px] xl:w-[960px] lg:w-[90%] transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-left' : 'element-hidden-left'}`}>
          <Heading title={data.title} subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM MIEJSCU"/>
          <p>{data.content}</p>
        </article>
        
        <article ref={ref} className={`z-20 py-[64px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
          <div className='grid gap-[16px] w-[1220px] mx-auto grid-cols-4 grid-rows-2 xl:w-[960px] lg:grid-cols-2 lg:grid-rows-4 lg:w-[500px] sm:flex sm:flex-col sm:w-[90%]'>
            <div className='w-[600px] h-[600px] z-20 relative p-[64px] flex items-end col-span-2 row-span-2 xl:w-[472px] xl:h-[472px] lg:w-[500px] lg:h-[500px] sm:h-auto sm:w-[100%] aspect-square sm:p-[32px]'>
              <Image src={data.tiles.image} width={600} height={600} quality={100} className='absolute top-0 left-0 w-full h-full' alt={`Tworzenie stron internetowych w ${data.city}`}/>
              <p className='relative z-20 text-[25px] font-extralight lg:text-[20px]'>{data.tiles.title}</p>
            </div>

            {data?.tiles?.elements.map((tile, index) => (
                <WhyCityTile key={index} tile={tile}/>
            ))}
          </div>
        </article>
      </section>
  )
}

export default WhyCity
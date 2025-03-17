import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import React from 'react'
import SingleSlide from './techSlider/SingleSlide'

const SliderSection = ({data}) => {
  return (
    <section className='w-[1240px] mx-auto flex justify-between'>
        <article className='w-[480px]'>
            <h3 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] sm:text-[20px]'>{data.title}</h3>
            <p className='mt-[16px] font-extralight text-[18px] sm:text-[16px]'>{data.desc}</p>    
        </article>
        <article className='w-[600px]'>
            <div className='perspective-container flex gap-[8px] items-center w-full h-full relative'>
                {data.techs.map((tech) => (
                    <SingleSlide slug={tech.slug} icon={tech.icon} name={tech.name}/>
                ))}
            </div>
        </article>
    </section>
  )
}

export default SliderSection
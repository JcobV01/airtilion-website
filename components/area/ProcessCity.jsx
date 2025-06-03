"use client"

import React from 'react'
import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import useIntersectionObserver from '@hooks/useObserver';
import CustomContact from './CustomContact';

const ProcessCity = ({ processCity }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref} className="z-10 relative bg-[#00000033] w-full">
            <div className='absolute w-full h-full left-0 top-0 backdrop-blur-[]' />
            <article className="relative w-[1240px] mx-auto py-[64px] flex justify-center items-center gap-[128px] xl:w-[1000px] xl:gap-[64px] lg:w-[90%] lg:flex-col lg:items-center lg:gap-[0px]">
                <div className={`w-[500px] xl:w-[400px] lg:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                    <h2 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] sm:text-[20px]' dangerouslySetInnerHTML={{__html: processCity.title}} />
                    <p className='mt-[16px] font-extralight text-[18px] sm:text-[16px]'>{processCity.paragraph1}</p>
                    <p className='mt-[48px] text-[16px] font-extralight sm:text-[14px]'>{processCity.cta}</p>
                </div>
                <div className='absolute left-0 bottom-[150px] w-[240px] xl:bottom-[90px] lg:relative lg:mt-[16px] lg:bottom-0 lg:self-start'>
                    <CustomContact text="Skontaktuj się z nami" width={240} />
                </div>
                <div className='mt-[32px] w-[600px] flex gap-x-[100px] gap-y-[40px] flex-wrap xl:gap-x-[40px] lg:mt-[64px] lg:justify-center lg:gap-x-[100px] sm:w-full sm:flex-col sm:items-center'>
                    {processCity.elements.map((element, index) => (
                        <div key={index} className={`w-[250px] xl:w-[225px] lg:w-[250px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                            <Icon icon={element.icon} alt="Ikona przedstawiająca proces tworzenia stron internetowych" width="40" height="40" className='text-[#E2B350]' />
                            <h3 className='mt-[32px] font-medium text-[18px] sm:text-[16px]'>{element.title}</h3>
                            <p className='mt-[8px] text-[16px] font-extralight sm:text-[14px]'>{element.desc}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default ProcessCity
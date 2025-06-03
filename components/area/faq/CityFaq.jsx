"use client"

import React from 'react'
import Subtitle from '../Subtitle'
import CityAccordion from './CityAccordion'
import Link from '@node_modules/next/link'
import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import useIntersectionObserver from '@hooks/useObserver'


const CityFaq = ({ faq }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref} className="relative z-10 bg-[#00000033] w-full py-[128px] backdrop-blur-[10px] mt-[-128px] sm:mt-[-64px]">
            <article className={`w-[1240px] mx-auto flex gap-[64px] xl:w-[1000px] lg:w-[90%] lg:flex-col items-center lg:justify-center`}>

                <div className={`flex flex-col w-[451px] lg:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                    <Subtitle subtitle="CZĘSTO ZADAWANE PYTANIA" />
                    <h2 className='mt-[32px] text-[30px] font-semibold lg:text-[25px] lg:mt-[16px]'>{faq.title}</h2>
                    <p className='mt-[16px] text-[18px] lg:text-[18px]'>{faq.paragraph}</p>

                    <Link href="/faq" aria-label='Przejdź do pełnego FAQ' className='mt-[48px] inline-flex items-center gap-[12px] max-w-max duration-700 hover:scale-90'>
                        <span className='text-[#E2B350] text-[16px] tracking-[2.5px] sm:text-[14px]'>Przejdź do pełnego FAQ</span>
                        <Icon icon="ep:right" width="20" height="20" alt="Ikona strzałki w prawo" className="text-[#E2B350]" />
                    </Link>
                </div>

                <div className={`w-[725px] lg:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
                    <CityAccordion data={faq.elements} />
                </div>

            </article>
        </section>
    )
}

export default CityFaq
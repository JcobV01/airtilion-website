"use client"

import useIntersectionObserver from '@hooks/useObserver';
import React from 'react'

const Work = () => {
    const [ ref, isVisible ] = useIntersectionObserver();

    return (
        <article ref={ref} className={`flex gap-[120px] xl:gap-[70px] items-center relative overflow-x-hidden lg:flex-col about-section transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`}>
            
            <div className={`flex-1 element-visible-right transition-all duration-1000 delay-500 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
                <h5 className='text-[20px] xl:text-[18px] lg:text-[15px] tracking-[3px] text-[#E2B350] mb-[20px]'>CZYM DOKŁADNIE SIĘ ZAJMUJEMY?</h5>
                <p className='text-[16px] xl:text-[15px] lg:text-[13px] font-light mb-[40px]'>Naszym podstawowym zajęciem jest tworzenie stron oraz aplikacji internetowych, będących jednymi z najnowocześniejszych i odzianych w detale. Dodatkowo w naszej ofercie znajdziesz możliwość zamówienia strony wraz z prostą aplikacją mobilną, która jest tworzona na tych samych zasadach.</p>
                <p className='text-[16px] xl:text-[15px] lg:text-[13px] font-light'>Czy to wszystko? Otóż nie, oprócz tego pracujemy nad własnymi projektami, które można znaleźć w osobnej zakładce. Jesteśmy w stanie zaangażować się również w różnie inne customowe projekty.</p>
            </div>

            <div className={`flex-1 sm:w-full element-visible-left transition-all duration-1000 delay-500 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                <div className='w-[600px] h-[600px] xl:w-[500px] xl:h-[500px] sm:w-[100%] sm:h-auto aspect-square rounded-full border-[#272727] border-[1px] relative'>
                    <div className='absolute left-[50%] translate-x-[-50%] w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] sm:w-[50%] sm:h-[50%] rounded-full bg-gradient-to-t from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] sm:px-[30px] flex flex-col justify-center items-center gap-[10px] sm:gap-[5px]'>
                        <h6 className='text-[20px] xl:text-[15px]  sm:text-[12px] font-extralight text-center'>Strony i aplikacje <br /> internetowe</h6>
                        <p className='text-[15px] xl:text-[13px]  sm:text-[10px] font-light text-[#BCBCBC] text-center'>Wszystkie rodzaje</p>
                    </div>
                    <div className='absolute left-[20px] top-[50%] translate-y-[-30%] w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] sm:w-[50%] sm:h-[50%] rounded-full bg-gradient-to-bl from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] sm:px-[30px] flex flex-col justify-center items-center gap-[10px] sm:gap-[5px]'>
                        <h6 className='text-[20px] xl:text-[15px]  sm:text-[12px] font-extralight text-center'>Aplikacje mobilne</h6>
                        <p className='text-[15px] xl:text-[13px]  sm:text-[10px] font-light text-[#BCBCBC] text-center'>W pakiecie ze stroną</p>
                    </div>
                    <div className='absolute right-[20px] top-[50%] translate-y-[-30%] w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] sm:w-[50%] sm:h-[50%] rounded-full bg-gradient-to-br from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] sm:px-[30px] flex flex-col justify-center items-center gap-[10px] sm:gap-[5px]'>
                        <h6 className='text-[20px] xl:text-[15px]  sm:text-[12px] font-extralight text-center'>Własne projekty</h6>
                        <p className='text-[15px] xl:text-[13px]  sm:text-[10px] font-light text-[#BCBCBC] text-center'>Coś więcej niż strony</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Work
"use client"

import Image from 'next/image'
import React from 'react'
import ButtonArea from './ButtonArea'
import useIntersectionObserver from '@hooks/useObserver';

import firstCard from '@public/assets/images/area/offer/card-1.webp'
import secondCard from '@public/assets/images/area/offer/card-2.webp'
import thirdCard from '@public/assets/images/area/offer/card-3.webp'
import fourthCard from '@public/assets/images/area/offer/card-4.webp'
import fifthCard from '@public/assets/images/area/offer/card-5.webp'
import firstIllustration from '@public/assets/images/area/offer/illustration-1.svg'
import secondllustration from '@public/assets/images/area/offer/illustration-2.svg'
import thirdllustration from '@public/assets/images/area/offer/illustration-3.svg'

import mobilePhoto from '@public/assets/images/area/offer/card-4.webp'

const OfferCity = ({ fromCity, inCity }) => {
    const [ref, isVisible] = useIntersectionObserver();

    const elements = [
        {
            title: "Strony wizytówki",
            desc: `Idealne dla małych przedsiębiorstw i freelancerów, którzy chcą zaprezentować się online.`,
            bg: firstCard,
            illustration: firstIllustration
        },
        {
            title: "Strony firmowe",
            desc: "Kompleksowe rozwiązania dla przedsiębiorstw, wspierające wizerunek i sprzedaż w regionie.",
            bg: secondCard,
            illustration: secondllustration
        },
        {
            title: "Sklepy internetowe",
            desc: "Bezpieczne i funkcjonalne sklepy dostosowane do potrzeb lokalnego rynku.",
            bg: thirdCard,
            illustration: thirdllustration
        },
        {
            title: "Landing page",
            desc: "Skuteczne strony docelowe, które zwiększą konwersję Twoich kampanii reklamowych.",
            bg: fourthCard
        },
        {
            title: "Darmowa wycena w 48h!",
            desc: `Masz pytania? Chcesz poznać koszt strony dostosowanej do Twoich potrzeb? Wypełnij formularz, a przygotujemy dla Ciebie spersonalizowaną ofertę w ciągu 48 godzin!`,
            bg: fifthCard
        },
    ]

    return (
        <section ref={ref} className="z-10 relative offerCity">
            <article className={`mx-auto w-[1240px] xl:w-[1000px] lg:w-[95%] sm:w-[90%]`}>
                <h2 className={`text-[25px] text-[#E2B350] tracking-[2.5px] font-medium transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>Nasza oferta strony www dla firm {fromCity}</h2>
                <p className={`mt-[16px] text-[18px] font-light lg:text-[16px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>Tworzymy nowoczesne, szybkie i przyjazne SEO strony internetowe, które przyciągną klientów {fromCity} i okolic. Specjalizujemy się w:</p>

                <div className='mt-[64px] flex gap-[30px] flex-wrap lg:justify-center'>
                    {elements.map((element, index) => (
                        <div key={index} className={`flex rounded-[15px] relative backdrop-blur-35 shadow-[0_4px_15px_0_rgba(0,_0,_0,_0.25)] lg:flex-col sm:py-[16px]
                        ${index === 0 ? 'w-[300px] h-[300px] lg:w-[605px] sm:w-full' : ''}
                        ${index === 1 ? 'w-[910px] h-[300px] xl:w-[670px] lg:w-[605px] sm:w-full' : ''}
                        ${index === 2 || index === 3 ? 'w-[605px] h-[250px] xl:w-[485px] lg:w-[605px] sm:w-full' : ''}
                        ${index === 4 ? 'w-full h-[150px] justify-between items-center lg:w-[605px] lg:h-[250px] lg:justify-center sm:w-full sm:h-full' : ''}
                        transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}
                        `}>

                            <div className={`w-full h-full relative z-10 px-[32px] flex flex-col justify-center sm:px-[16px]
                                ${index === 4 ? 'w-[675px] lg:w-full max-h-max sm:w-full' : ''} ${index === 3 ? 'mx-auto flex items-center' : ''} 
                                ${index === 1 || index === 2 ? 'sm:justify-start sm:items-center' : ''}`}
                            >
                                {index < 3 && (
                                    <div className='flex justify-center'>
                                        <Image src={element.illustration} alt="Ilustracja promująca usługę" className={`object-cover 
                                            ${index === 0 ? 'mb-[32px]' : ''} 
                                            ${index === 1 ? 'absolute right-[128px] xl:right-[64px] sm:right-[50%] sm:-translate-x-[-50%] sm:top-[110%] sm:-translate-y-[110%]' : ''}
                                            ${index === 2 ? 'absolute top-[50%] -translate-y-[50%] right-[48px] sm:right-[50%] sm:-translate-x-[-50%] sm:top-[110%] sm:-translate-y-[110%]' : ''}`}
                                        />
                                    </div>
                                )}

                                <h3 className={`font-semibold sm:text-center
                                    ${index === 1 || index === 3 ? 'text-[30px] sm:text-[20px]' : 'text-[20px]'}`}>
                                    {element.title}
                                </h3>

                                <p className={`text-[16px] font-extralight sm:text-[14px] sm:text-center
                                    ${index === 1 ? 'w-[375px] xl:w-[250px] sm:w-full' : ''}
                                    ${index === 2 ? 'w-[340px] xl:w-[240px] sm:w-full' : ''}
                                    ${index === 3 ? 'text-center w-[350px] mx-auto sm:w-full' : ''} 
                                    ${index === 1 || index === 3 ? 'mt-[16px]' : 'mt-[8px]'}`}>
                                    {element.desc}
                                </p>

                            </div>

                            {index === 4 && (
                                <div className='z-10 relative pr-[32px] lg:mt-[16px] sm:w-[95%] sm:pr-0'>
                                    <ButtonArea text="Przejdź do darmowej wyceny" link="/oferta/darmowa-wycena" margin={0} width={300} />
                                </div>
                            )}
                            {index === 0 ?
                                <>
                                    <Image src={element.bg} alt={`Tło kafelka z widokiem strony internetowej ${inCity}`} className='object-cover w-full h-full rounded-[15px] absolute top-0 left-0 z-0 lg:hidden' />
                                    <Image src={mobilePhoto} alt={`Tło kafelka z widokiem strony internetowej ${inCity}`} className='hidden object-cover w-full h-full rounded-[15px] absolute top-0 left-0 z-0 rotate-[180deg] lg:block' />
                                </>
                                :
                                <Image src={element.bg} alt={`Tło kafelka z widokiem strony internetowej ${inCity}`} className='object-cover w-full h-full rounded-[15px] absolute top-0 left-0 z-0' />
                            }
                        </div>
                    ))}
                </div>

            </article>
        </section>
    )
}

export default OfferCity
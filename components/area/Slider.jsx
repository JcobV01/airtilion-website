"use client"

import React, { useEffect, useState } from 'react'
import SingleSlide from './techSlider/SingleSlide'
import useIntersectionObserver from '@hooks/useObserver';

const SliderSection = ({ inCity }) => {
    const [techs, setTechs] = useState([
        {
            name: "TypeScript",
            slug: ["BEZPIECZEŃSTWO", "PRZEJRZYSTOŚĆ"],
            icon: "akar-icons:typescript-fill"
        },
        {
            name: "NextJS",
            slug: ["ELASTYCZNOŚĆ", "SKALOWALNOŚĆ"],
            icon: "akar-icons:nextjs-fill"
        },
        {
            name: "ReactJS",
            slug: ["SZYBKOŚĆ", "WYDAJNOŚĆ"],
            icon: "mdi:react"
        },
        {
            name: "Wordpress",
            slug: ["POPULARNOŚĆ", "PROSTOTA"],
            icon: "ic:baseline-wordpress"
        },
        {
            name: "Tailwind",
            slug: ["MINIMALIZM", "SWOBODA"],
            icon: "mdi:tailwind"
        }
    ]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [ref, isVisible] = useIntersectionObserver();


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                    setTechs((prevArray) => {
                        if (prevArray.length > 1) {
                            return [...prevArray.slice(1), prevArray[0]];
                        }
                        return prevArray;
                    });
                    setIsAnimating(false);
                }, 500); // Czas animacji (0.5s)
            }
        }, 3500); // Co 3.5 sekundy

        return () => clearInterval(interval);
    }, [isAnimating]);

    return (
        <section ref={ref} className='w-[1240px] mx-auto flex justify-between items-center my-[64px] 2xl:w-[960px] 2xl:flex-col 2xl:gap-[64px] lg:w-[90%] sm:mt-0'>
            <article className={`w-[480px] 2xl:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                <h2 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] sm:text-[20px]'>Bezpieczne systemy i&nbsp;technologie dla stron www {inCity}</h2>
                <p className='mt-[16px] font-extralight text-[16px]'>Tworzymy funkcjonalne, estetyczne i w pełni responsywne witryny oparte na nowoczesnych technologiach, które gwarantują niezawodność, szybkość działania i bezproblemowe funkcjonowanie strony w każdych warunkach. Nasze projekty stron powstają z myślą o indywidualnych potrzebach klienta – Twoja witryna będzie nie tylko atrakcyjna wizualnie, ale przede wszystkim intuicyjna w obsłudze.</p>
                <p className='mt-[8px] font-extralight text-[16px]'>Wykorzystujemy rozwiązania przyspieszające ładowanie (minifikacja kodu, kompresja obrazów), dbamy o optymalizację SEO oraz w razie potrzeby implementujemy system CMS, dzięki któremu będziesz mógł/mogła samodzielnie edytować swoją stronę www. Dzięki temu wszystko działa płynnie na komputerach i urządzeniach mobilnych, a regularne aktualizacje i backupy chronią dane osobowe użytkowników.</p>
            </article>
            <article className={`w-[600px] relative lg:w-[460px] sm:w-[290px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
                <div className={`perspective-container flex gap-[8px] items-center w-full h-full relative ${isAnimating ? 'animating' : ''}`}>
                    {techs?.map((tech, index) => (
                        <SingleSlide
                            key={tech.slug}
                            slug={tech.slug}
                            icon={tech.icon}
                            name={tech.name}
                            className={isAnimating && index === 0 ? 'fade-in' : ''}
                        />
                    ))}
                </div>
                <div className='absolute bottom-[-40px] left-[50%] translate-x-[-50%] w-[80%] h-[100px] rounded-[50%/50%] border-b-[1px] border-b-[#e2b350] lg:h-[60px] sm:h-[30px]'></div>
            </article>
        </section>
    );
};

export default SliderSection
"use client"


import dynamic from 'next/dynamic';
import CoopCards from './components/Cards'
import useIntersectionObserver from '@hooks/useObserver';

const Heading = dynamic(() => import('@components/Heading'), { ssr: true, loading: () => <div className="loader"></div> });
const Cooperation = () => {
    const [ ref, isVisible ] = useIntersectionObserver();

    const cooperation = [
        {
            title: "Analiza potrzeb",
            desc: "Rozpoczynamy od szczegółowej analizy Twoich wymagań i celów. Spotykamy się, aby omówić Twoje oczekiwania, preferencje dotyczące designu oraz funkcjonalności strony.",
            image: "bi:search",
        },
        {
            title: "Projektowanie",
            desc: "Na podstawie zebranych informacji tworzymy wizualizacje projektu. Omawiamy je z Tobą, aby upewnić się, że wszystko jest zgodne z Twoją wizją.",
            image: "bxs:pencil",
        },
        {
            title: "Realizacja",
            desc: "Po zatwierdzeniu projektu przechodzimy do fazy realizacji. Rozpoczynamy prace nad stroną, implementując wszystkie zaplanowane funkcje i elementy graficzne.",
            image: "tabler:code",
        },
        {
            title: "Testowanie i poprawki",
            desc: "Przeprowadzamy szczegółowe testy funkcjonalności i wydajności strony. Wprowadzamy niezbędne poprawki na podstawie Twoich uwag.",
            image: "tabler:list-check",
        },
        {
            title: "Uruchomienie",
            desc: "Po finalnym zatwierdzeniu strony, przeprowadzamy jej wdrożenie na serwerze i uruchamiamy. Sprawdzamy, czy wszystko działa zgodnie z planem.",
            image: "ion:cloud-upload",
        },
        {
            title: "Wsparcie i utrzymanie",
            desc: "Zapewniamy wsparcie przez 1 rok po uruchomieniu strony, pomagając w ewentualnych problemach oraz zapewniając aktualizacje i konserwację.",
            image: "fluent:shield-48-filled",
        }
    ]

    return (
        <section ref={ref} id="cooperation" className={`relative w-[1240px] xxl:w-[1500px] 2xl:w-[80%] m-auto z-10 transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'} observer-navbar`}>
            <article className='flex flex-col pb-[50px] z-10'>
                <Heading title="Współpraca" subtitle="ZOBACZ JAK PRZEBIEGA PROCES TWORZENIA TWOICH MARZEŃ" id="cooperation-title"/>
                <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] mt-[30px]'>Stawiamy na otwartą komunikację i bliską współpracę, aby dokładnie zrozumieć Twoje potrzeby i dostosować nasze rozwiązania. Dzięki elastyczności i zaangażowaniu, dążymy do osiągnięcia najlepszych rezultatów i budowania długotrwałych relacji.</p>

                <div className='flex flex-col gap-[20px] mt-[100px] overflow-hidden'>
                    {cooperation.map((coop, index) => (
                        <CoopCards title={coop.title} desc={coop.desc} index={index + 1} icon={coop.image} key={index} isVisible={isVisible}/>
                    ))}
                </div>
                
            </article>
        </section>
    )
}

export default Cooperation
import Heading from '@components/Heading'
import React from 'react'
import Cards from './components/Cards'

import search from '@public/assets/icons/home/cooperation/search.png'
import pencil from '@public/assets/icons/home/cooperation/pencil.png'
import sourceCode from '@public/assets/icons/home/cooperation/source-code.png'
import checkAll from '@public/assets/icons/home/cooperation/check-all.png'
import cloud from '@public/assets/icons/home/cooperation/cloud.png'
import protect from '@public/assets/icons/home/cooperation/protect.png'
import lines from '@public/assets/icons/home/cooperation/lines.svg'
import Image from 'next/image'

const Cooperation = () => {
    const cooperation = [
        {
            title: "Analiza potrzeb",
            desc: "Rozpoczynamy od szczegółowej analizy Twoich wymagań i celów. Spotykamy się, aby omówić Twoje oczekiwania, preferencje dotyczące designu oraz funkcjonalności strony.",
            image: search,
            flexRow: "flex-row",
        },
        {
            title: "Projektowanie",
            desc: "Na podstawie zebranych informacji tworzymy wizualizacje projekty. Omawiamy je z Tobą, aby upewnić się, że wszystko jest zgodne z Twoją wizją.",
            image: pencil,
            flexRow: "flex-row-reverse",
        },
        {
            title: "Realizacja",
            desc: "Po zatwierdzeniu projektu przechodzimy do fazy realizacji. Rozpoczynamy prace nad stroną, implementując wszystkie zaplanowane funkcje i elementy graficzne.",
            image: sourceCode,
            flexRow: 'flex-row',
        },
        {
            title: "Testowanie i poprawki",
            desc: "Przeprowadzamy szczegółowe testy funkcjonalności i wydajności strony. Wprowadzamy niezbędne poprawki na podstawie Twoich uwag.",
            image: checkAll,
            flexRow: 'flex-row-reverse',
        },
        {
            title: "Uruchomienie",
            desc: "Po finalnym zatwierdzeniu strony, przeprowadzamy jej wdrożenie na serwerze i uruchamiamy. Sprawdzamy, czy wszystko działa zgodnie z planem.",
            image: cloud,
            flexRow: 'flex-row',
        },
        {
            title: "Wsparcie i utrzymanie",
            desc: "Zapewniamy wsparcie przez 1 rok po uruchomieniu strony, pomagając w ewentualnych problemach oraz zapewniając aktualizacje i konserwację.",
            image: protect,
            flexRow: 'flex-row-reverse',
        }
    ]
    return (
        <section className='relative w-[1240px] 2xl:80% m-auto z-10'>
            <article className='flex-col gap-[50px] pb-[50px] z-10'>
                <Heading title="Współpraca" subtitle="ZOBACZ JAK PRZEBIEGA PROCES TWORZENIA TWOICH MARZEŃ" />
                <p className='text-[16px] xl:text-[15px] lg:text-[13px] mt-[30px]'>Stawiamy na otwartą komunikację i bliską współpracę, aby dokładnie zrozumieć Twoje potrzeby i dostosować nasze rozwiązania. Dzięki elastyczności i zaangażowaniu, dążymy do osiągnięcia najlepszych rezultatów i budowania długotrwałych relacji.</p>


                <div className='flex justify-between relative mt-[70px] xl:justify-center xl:gap-[50px]'>
                    <div className='flex flex-col gap-[380px]'>
                        {cooperation.map((post, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <Cards title={post.title} desc={post.desc} image={post.image} flexRow={post.flexRow} key={index} />
                                )
                            }
                        })}
                    </div>

                    <div className='flex absolute top-[85px] left-[525px]'>
                        <Image src={lines} alt="Linie z kropkami" width="236" height="1399" />
                    </div>

                    <div className='flex flex-col gap-[375px] justify-end mt-[275px]'>
                        {cooperation.map((post, index) => {
                            if (index % 2 != 0) {
                                return (
                                    <Cards title={post.title} desc={post.desc} image={post.image} flexRow={post.flexRow} key={index} />
                                )
                            }
                        })}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Cooperation
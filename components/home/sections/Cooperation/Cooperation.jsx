import Heading from '@components/Heading'
import React from 'react'
import Cards from './components/cards'

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
        <section className='relative w-[1240px] m-auto'>
            <article className='flex-col gap-[50px] pb-[50px]'>
                <Heading title="Współpraca" subtitle="POZNAJ JAK PRZEBIEGA PROCES TWORZENIA TWOICH MARZEŃ" />
                <p className='text-[16px] mt-[30px]'>Stawiamy na otwartą komunikację i bliską współpracę, aby dokładnie zrozumieć Twoje potrzeby i dostosować nasze rozwiązania. Dzięki elastyczności i zaangażowaniu, dążymy do osiągnięcia najlepszych rezultatów i budowania długotrwałych relacji.</p>


                <div className='flex justify-between relative mt-[70px]'>
                    <div className='flex flex-col gap-[390px]'>
                        {cooperation.map((post, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <Cards title={post.title} desc={post.desc} image={post.image} flexRow={post.flexRow} key={index} />
                                )
                            }
                        })}
                    </div>

                    <div className='flex absolute top-[100px] left-[525px]'>
                        <Image src={lines} alt="Linie" width="236" height="1399"/>
                        {/* <div className='absolute top-[300px] flex flex-col'>
                            {cooperation.map((_, index) => (
                                <div className='relative' key={index}>
                                    {index % 2 == 0 ? (
                                        <div className="relative flex flex-col items-center top-[15px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="290" viewBox="0 0 180 290" fill="none">
                                                <path d="M78.2667 2H128C155.614 2 178 24.3858 178 52V98.4048C178 126.019 155.614 148.405 128 148.405H52C24.3858 148.405 2 170.791 2 198.405V238C2 265.614 24.3858 288 52 288H85" stroke="#E2B350" strokeWidth="2.5" strokeDasharray="25 25" />
                                            </svg>
                                        </div>
                                    ) : (
                                        index < 4 ? (
                                            <div className="relative flex flex-col items-center top-[10px]">
                                                <svg className='relative' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                    <circle cx="12.5" cy="12.5" r="12" fill="#1B1B1B" fillOpacity="0.4" stroke="#E2B350" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="240" viewBox="0 0 4 231" fill="none">
                                                    <path d="M2 0V231" stroke="#E2B350" strokeWidth="2.5" strokeDasharray="25 25" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                    <circle cx="12.5" cy="12.5" r="12" fill="#1B1B1B" fillOpacity="0.4" stroke="#E2B350" />
                                                </svg>
                                            </div>
                                        ) : null
                                    )}
                                </div>
                            ))}
                        </div> */}
                    </div>

                    <div className='flex flex-col gap-[375px] justify-end mt-[300px]'>
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
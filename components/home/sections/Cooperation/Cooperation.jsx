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
        <section className='relative w-[1240px] m-auto z-10'>
            <article className='flex-col gap-[50px] pb-[50px] z-10'>
                <Heading title="Współpraca" subtitle="POZNAJ JAK PRZEBIEGA PROCES TWORZENIA TWOICH MARZEŃ" />
                <p className='text-[16px] mt-[30px]'>Stawiamy na otwartą komunikację i bliską współpracę, aby dokładnie zrozumieć Twoje potrzeby i dostosować nasze rozwiązania. Dzięki elastyczności i zaangażowaniu, dążymy do osiągnięcia najlepszych rezultatów i budowania długotrwałych relacji.</p>


                <div className='flex justify-between relative mt-[70px]'>
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

            <div className='absolute top-0 left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1920 1849" fill="none">
                    <path d="M2217.32 1007.42C2094.37 808.553 1838.69 590.847 1582.41 511.641C1382.21 449.766 1143.27 413.391 900.183 259.34C711.245 139.602 367.382 73.4967 99.5697 212.605C-244.377 391.26 -148.722 84.5441 -289.636 1.81794" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3"/>                        
                    <path d="M2265.47 1107.86C2142.52 908.989 1886.84 691.282 1630.56 612.076C1430.36 550.202 1191.41 513.827 948.333 359.776C759.395 240.038 415.531 173.932 147.719 313.041C-196.228 491.696 -100.572 184.9797 -241.486 102.25349" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3"/>
                    <path d="M2248.1 1207.34C2125.16 1008.469 1869.47 790.763 1613.2 711.557C1412.99 649.682 1174.05 613.307 930.968 459.256C742.029 339.518 398.166 273.4128 130.354 412.521C-213.593 591.176 -117.938 184.4602 -258.852 101.73395" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3"/>
                    <path d="M2233.34 1287.05C2110.4 1088.178 1854.71 870.472 1598.44 791.266C1398.23 729.391 1159.29 693.016 916.208 538.965C727.27 419.227 383.406 353.1217 115.594 492.23C-228.353 670.885 -132.697 364.1691 -273.611 281.44294" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3"/>
                </svg>
            </div>
        </section>
    )
}

export default Cooperation
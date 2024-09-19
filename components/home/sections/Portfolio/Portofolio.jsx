"use client"

import Heading from '@components/Heading'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import bgTlo from '@public/assets/images/portfolio/organy.webp'
import bgBienko from '@public/assets/images/portfolio/bienko.webp'

import arrow from '@public/assets/icons/home/portfolio-arrow.png'
import Link from 'next/link'
import PortfolioItem from './components/PortfolioItem'

const Portofolio = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/portfolio/get', { method: "POST" }); // Fetch do lokalnego endpointa
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                console.log(data);

                setData(data); // Przechowujemy dane w stanie
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();

    }, [])

    return (
        <section className='z-10 w-[1240px] m-auto flex flex-col gap-[50px] relative'>
            <Heading title="Portfolio" subtitle="ZOBACZ NASZE REALIZACJE" />

            <p className='text-[15px]'>Zapraszamy do zapoznania się z naszymi najnowszymi realizacjami! Poniżej znajdziesz trzy najnowsze projekty, które pokazują naszą pasję do tworzenia nowoczesnych i funkcjonalnych stron oraz aplikacji internetowych. Każda realizacja posiada swoją dedykowaną podstronę z pełnym opisem i szczegółami projektu, abyś mógł dokładnie zobaczyć, jak podchodzimy do każdego zadania. Jeśli chcesz zobaczyć więcej naszych prac i dowiedzieć się, jak możemy pomóc Tobie w rozwoju Twojego biznesu, zapraszamy do odwiedzenia pełnego portfolio na dedykowanej podstronie.</p>

            {data?.slice(0, 3).map((item) => (
                <PortfolioItem title={item.Name} desc={item.Opis} bg={item.Background} image={item.Screens[0]} key={item._id} />
            ))}

            <div className='flex flex-col gap-[30px] items-center mt-[50px] z-10'>
                <h5 className='text-[20px] tracking-[3px] text-[#E2B350] text-center'>To tylko początek! Zobacz nasze pełne portfolio!</h5>
                <p className='text-[15px] tracking-[1.5px] text-center'>Prezentujemy tu jedynie nasze najnowsze projekty, aby dać Ci przedsmak naszych umiejętności i kreatywności. Każdy projekt to unikalna historia, dopasowana do indywidualnych potrzeb klientów. Chcesz zobaczyć więcej? </p>

                <div className='flex gap-[40px]'>
                    <p className='text-[15px] tracking-[1.5px]'>Przejdź do pełnego portfolio</p>
                    <Image src={arrow} width={20} height={20} alt='Inkona strzałki' />
                </div>

            </div>
            <div className='absolute top-[100px] left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1150" viewBox="0 0 1864 650" fill="none">
                    <path d="M2399.94 139.833C2194.53 28.1574 1864.52 -34.0171 1602.71 24.3574C1398.19 69.9589 1172.68 156.921 885.195 143.763C661.744 133.536 330.387 246.737 166.872 500.386C-43.1268 826.143 -112.241 512.379 -275.632 510.461" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2399.94 219.833C2194.53 108.157 1864.52 45.9829 1602.71 104.357C1398.19 149.959 1172.68 236.921 885.195 223.763C661.744 213.536 330.387 326.737 166.872 580.386C-43.1268 906.143 -112.241 592.379 -275.632 590.461" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2399.94 299.833C2194.53 188.157 1864.52 125.983 1602.71 184.357C1398.19 229.959 1172.68 316.921 885.195 303.763C661.744 293.536 330.387 406.737 166.872 660.386C-43.1268 986.143 -112.241 672.379 -275.632 670.461" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2399.94 379.833C2194.53 268.157 1864.52 205.983 1602.71 264.357C1398.19 309.959 1172.68 396.921 885.195 383.763C661.744 373.536 330.387 486.737 166.872 740.386C-43.1268 1066.14 -112.241 752.379 -275.632 750.461" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                </svg>
            </div>

            <div className='absolute top-[1600px] left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1196" viewBox="0 0 1864 1196" fill="none">
                    <path d="M2226.65 1194.39C2119.13 986.777 1880.69 750.316 1631.15 651.913C1436.21 575.041 1200.71 520.66 970.009 348.627C790.69 214.912 452.826 122.933 175.24 241.341C-181.259 393.412 -62.63 94.8287 -196.868 1.65952" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2226.65 1294.39C2119.13 1086.78 1880.69 850.316 1631.15 751.913C1436.21 675.041 1200.71 620.66 970.009 448.627C790.69 314.912 452.826 222.933 175.24 341.341C-181.259 493.412 -62.63 194.829 -196.868 101.66" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2226.65 1394.39C2119.13 1186.78 1880.69 950.316 1631.15 851.913C1436.21 775.041 1200.71 720.66 970.009 548.627C790.69 414.912 452.826 322.933 175.24 441.341C-181.259 593.412 -62.63 294.829 -196.868 201.66" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2226.65 1494.39C2119.13 1286.78 1880.69 1050.32 1631.15 951.913C1436.21 875.041 1200.71 820.66 970.009 648.627C790.69 514.912 452.826 422.933 175.24 541.341C-181.259 693.412 -62.63 394.829 -196.868 301.66" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                </svg>
            </div>
        </section>
    )
}

export default Portofolio
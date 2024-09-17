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
            const response = await fetch('/api/portfolio/get', {method: "POST"}); // Fetch do lokalnego endpointa
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
        <section className='z-10 w-[1240px] m-auto flex flex-col gap-[50px]'>
            <Heading title="Portfolio" subtitle="ZOBACZ NASZE REALIZACJE" />

            <p className='text-[15px]'>Zapraszamy do zapoznania się z naszymi najnowszymi realizacjami! Poniżej znajdziesz trzy najnowsze projekty, które pokazują naszą pasję do tworzenia nowoczesnych i funkcjonalnych stron oraz aplikacji internetowych. Każda realizacja posiada swoją dedykowaną podstronę z pełnym opisem i szczegółami projektu, abyś mógł dokładnie zobaczyć, jak podchodzimy do każdego zadania. Jeśli chcesz zobaczyć więcej naszych prac i dowiedzieć się, jak możemy pomóc Tobie w rozwoju Twojego biznesu, zapraszamy do odwiedzenia pełnego portfolio na dedykowanej podstronie.</p>

            {data?.slice(0,3).map((item) => (
                <PortfolioItem title={item.Name} desc={item.Opis} bg={item.Background} image={item.Screens[0]} key={item._id}/>
            ))}

            <div className='flex flex-col gap-[30px] items-center mt-[50px]'>
                <h5 className='text-[20px] tracking-[3px] text-[#E2B350] text-center'>To tylko początek! Zobacz nasze pełne portfolio!</h5>
                <p className='text-[15px] tracking-[1.5px] text-center'>Prezentujemy tu jedynie nasze najnowsze projekty, aby dać Ci przedsmak naszych umiejętności i kreatywności. Każdy projekt to unikalna historia, dopasowana do indywidualnych potrzeb klientów. Chcesz zobaczyć więcej? </p>

                <div className='flex gap-[40px]'>
                    <p className='text-[15px] tracking-[1.5px]'>Przejdź do pełnego portfolio</p>
                    <Image src={arrow} width={20} height={20} alt='Inkona strzałki' />
                </div>

            </div>

        </section>
    )
}

export default Portofolio
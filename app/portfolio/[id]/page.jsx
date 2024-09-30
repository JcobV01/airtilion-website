"use client"
import React, { useEffect, useState } from 'react'

import Heading from '@components/Heading'

import Cooperate from '@components/home/sections/AboutUs/sections/Cooperate'
import PortfolioImages from '@components/portfolio/sections/PortfolioImages'
import PortfolioWork from '@components/portfolio/sections/PortfolioWork'
import PortfolioTechnologies from '@components/portfolio/sections/PortfolioTechnologies'
import PortfolioChallanges from '@components/portfolio/sections/PortfolioChallanges'
import PortfolioSteps from '@components/portfolio/sections/PortfolioSteps'
import PortfolioAchivements from '@components/portfolio/sections/PortfolioAchivements'
import PortfolioClient from '@components/portfolio/sections/PortfolioClient'
import PortfolioOpinion from '@components/portfolio/sections/PortfolioOpinion'
import Dot from '@components/portfolio/dot'

const dotsData = [
    '#images',
    '#work',
    '#technologies',
    '#challanges',
    '#steps',
    '#achivements',
    '#client',
    '#opinion'
]

const page = ({ params }) => {
    const id = params.id

    const [data, setData] = useState([])
    const [dots, setDots] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    const updateDots = (index) => {
        if (index < 0 || index > 7) return; // Sprawdzenie, czy indeks jest w dozwolonym zakresie
        setDots(prevDots => {
            const newDots = Array(8).fill(0); // Tworzy nową tablicę z 8 elementami, wszystkie 0
            newDots[index] = 1; // Ustawia wskazany element na 1
            return newDots; // Zwraca nową tablicę
        });

    }

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch('/api/portfolio/get', {
                    method: "POST", headers: {
                        'Content-Type': 'application/json',
                    }, body: JSON.stringify({ id })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();

                setData(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProject().then(() => {
            window.scrollTo(0, 0)
        });
    }, [id])


    return (
        <section className='z-10 flex flex-col items-center gap-[150px] sm:gap-[100px]'>
            {data.length > 0 ?
                <>
                    <article className='w-[1240px] flex flex-col gap-[50px] xl:w-[90%]'>
                        <Heading title={data[0]?.Name} subtitle="NASZE PORTFOLIO" />
                        <p className='text-[15px]'>{data[0]?.Description}</p>
                    </article>

                    <PortfolioImages screenshots={data[0]?.Screens} />
                    <PortfolioWork steps={data[0]?.Work} />
                    <PortfolioTechnologies technologies={data[0]?.Technologies} />
                    <PortfolioChallanges challange={data[0]?.Challanges} />
                    <PortfolioSteps steps={data[0]?.Steps} />
                    <PortfolioAchivements achivement={data[0]?.Achivements} />
                    <PortfolioClient client={data[0]?.Client} />
                    <PortfolioOpinion client={data[0]?.Client} />

                    <section className='w-[1240px] xl:w-[90%]'>
                        <Cooperate />
                    </section>
                    <aside className='fixed z-20 right-[10px] top-[50%] translate-y-[-50%] flex flex-col items-center justify-center gap-[10px] w-[20px] py-[20px] bg-[#0000006d] backdrop-blur-[5px] rounded-full'>
                        {dotsData.map((dot, index) => (
                            <Dot dots={dots} updateDots={updateDots} index={index} link={dot} key={index}/>
                        ))}
                    </aside>
                </>
                :
                <div className="loader"></div>
            }

        </section>
    )
}

export default page
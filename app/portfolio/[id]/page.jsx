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

const page = ({ params }) => {
    const id = params.id

    const [data, setData] = useState([])

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

        fetchProject();
    }, [id])


    return (
        <section className='z-10 flex flex-col items-center gap-[150px] sm:gap-[100px]'>
            {data.length > 0 ? 
            <>
                <article className='w-[1240px] flex flex-col gap-[50px] xl:w-[90%]'>
                    <Heading title={data[0]?.Name} subtitle="NASZE PORTFOLIO"/>
                    <p className='text-[15px]'>{data[0]?.Description}</p>
                </article>
                
                <PortfolioImages screenshots={data[0]?.Screens}/>
                <PortfolioWork steps={data[0]?.Work}/>
                <PortfolioTechnologies technologies={data[0]?.Technologies}/>
                <PortfolioChallanges challange={data[0]?.Challanges}/>
                <PortfolioSteps steps={data[0]?.Steps}/>
                <PortfolioAchivements achivement={data[0]?.Achivements}/>
                <PortfolioClient client={data[0]?.Client}/>
                <PortfolioOpinion client={data[0]?.Client}/>

                <section className='w-[1240px] xl:w-[90%]'>
                    <Cooperate/>    
                </section>
            </>
            :
            <p>Brak danych</p>   
            }
            
        </section>
    )
}

export default page
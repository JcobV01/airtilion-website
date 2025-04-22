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
import Dot from '@components/portfolio/Dot'
import Link from '@node_modules/next/link'

const dotsData = [
    {
        link: '#images',
        text: 'Zdjęcia',
    },
    {
        link: '#work',
        text: 'Zakres Prac',
    },
    {
        link: '#technologies',
        text: 'Technologie',
    },
    {
        link: '#challanges',
        text: 'Wyzwania',
    },
    {
        link: '#steps',
        text: 'Realizacja',
    },
    {
        link: '#achivements',
        text: 'Osiągnięcia',
    },
    {
        link: '#client',
        text: 'O Kliencie',
    },
    {
        link: '#opinion',
        text: 'Referencja',
    },
]

const page = ({ params }) => {
    const id = params.id

    const [data, setData] = useState([])
    const [dots, setDots] = useState([0, 0, 0, 0, 0, 0, 0, 0])
    const [client, setClient] = useState(null)

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
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json',
                    }, body: JSON.stringify({ id })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                else{
                    const projectData = await response.json();
                    setData(projectData);

                    try{
                        const clientResult = await fetch('/api/client/get', {
                            method: "POST",
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({id: projectData[0].Client})
                        })

                        if(clientResult.ok){
                            const clientData = await clientResult.json()
                            setClient(clientData)
                        }
                    }
                    catch(error){
                        console.log(error)
                    }
                }

            } catch (error) {
                console.log(error);
            }
        };

        fetchProject()
    }, [id])

    useEffect(() => {
        const sections = document.querySelectorAll('.observer'); 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {                    
                    if(entry.target.id == 'images'){updateDots(0)}
                    else if(entry.target.id == 'work'){updateDots(1)}
                    else if(entry.target.id == 'technologies'){updateDots(2)}
                    else if(entry.target.id == 'challanges'){updateDots(3)}
                    else if(entry.target.id == 'steps'){updateDots(4)}
                    else if(entry.target.id == 'achivements'){updateDots(5)}
                    else if(entry.target.id == 'client'){updateDots(6)}
                    else if(entry.target.id == 'opinion'){updateDots(7)}
                }
            });
        }, { threshold: 0.8 });
    
        sections.forEach(section => {
            observer.observe(section);
        });
    
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    },[data])

    useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }), [])

    return (
        <section className='z-10 flex flex-col items-center gap-[150px] sm:gap-[100px]'>
            {data.length > 0 ?
                <>
                    <article id="description" className='w-[1240px] flex flex-col gap-[50px] xxl:w-[1500px] xl:w-[90%] observer'>
                        <Heading title={data[0]?.Name} subtitle="NASZE PORTFOLIO" />
                        <p className='text-[15px] xxl:text-[22px]'>{data[0]?.Description}</p>
                        {data[0]?.Link.slice(0, 5) === 'https' && <Link href={data[0]?.Link} className='text-[#e2b250]'>Odwiedź stronę: {data[0]?.Link}</Link>}
                    </article>

                    <PortfolioImages screenshots={data[0]?.Screens} clientID={data[0].Client} />
                    <PortfolioWork steps={data[0]?.Work} />
                    <PortfolioTechnologies technologies={data[0]?.Technologies} />
                    <PortfolioChallanges challange={data[0]?.Challanges} />
                    <PortfolioSteps steps={data[0]?.Steps} />
                    <PortfolioAchivements achivement={data[0]?.Achivements} />
                    <PortfolioClient client={client} />
                    <PortfolioOpinion opinion={data[0]?.Opinion} author={data[0]?.Author} />

                    <section className='w-[1240px] xl:w-[90%] xxl:w-[1500px]'>
                        <Cooperate />
                    </section>
                    <aside className='fixed z-20 right-[10px] top-[50%] translate-y-[-50%] flex flex-col items-center justify-center gap-[10px] w-[20px] py-[20px] bg-[#0000006d] backdrop-blur-[5px] rounded-full'>
                        {dotsData.map((dot, index) => (
                            <Dot dots={dots} updateDots={updateDots} index={index} link={dot.link} text={dot.text} key={index}/>
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
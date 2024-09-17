"use client"

import Heading from '@components/Heading'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import checkIcon from '@public/assets/icons/portfolio/checkMark.svg'
import Technology from '@components/portfolio/Technology'
import Challange from '@components/portfolio/Challange'

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
                console.log(data);

                setData(data); 
            } catch (error) {
                console.log(error);
            }
        };

        fetchProject();
    }, [id])


    return (
        <section className='z-10 flex flex-col items-center gap-[150px]'>
            {data.length > 0 ? 
            <>
                <article className='w-[1240px] flex flex-col gap-[50px]'>
                    <Heading title={data[0]?.Name} subtitle="NASZE PORTFOLIO"/>
                    <p className='text-[15px]'>{data[0]?.Description}</p>
                </article>
                
                <article className='relative h-[446px] w-dvw'>
                    <span className='absolute bottom-0 left-0 h-[1px] bg-[#E2B350] w-[200px]'></span>
                    <Image src={data[0].Screens[0]} height={450} width={870} alt='Zdjęcie strony internetowej 1' className='absolute left-[50%] translate-x-[-50%] z-20 rounded-[10px]'/>
                    <Image src={data[0].Screens[2]} height={380} width={740} alt='Zdjęcie strony internetowej 2' className='absolute left-0 top-0 z-10 brightness-50'/>
                    <Image src={data[0].Screens[1]} height={380} width={740} alt='Zdjęcie strony internetowej 3' className='absolute right-0 bottom-0 z-10 brightness-50'/>
                    <span className='absolute top-0 right-0 h-[1px] bg-[#E2B350] w-[200px]'></span>
                </article>

                <article className='w-[1240px] bg-[#1B1B1B4D] rounded-[10px] backdrop-blur-[2px] shadow-[0px_4px_4px_0px_#00000025] py-[50px] px-[100px]'>
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[30px]'>ZAKRES PRAC</h5>
                    <div className='flex flex-col gap-[15px]'>
                        {data[0]?.Work.map((step, index) => (
                            <div className='flex gap-[30px]' key={index}>
                                <Image src={checkIcon} width={20} height={20} alt='ikona listy'/>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className='w-[1240px] '> 
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>WYKORZYSTANE TECHNOLOGIE</h5>
                    <div className='flex gap-[60px] justify-center'>
                        {data[0]?.Technologies.map((item, index) => (
                            <Technology name={item} key={index}/>
                        ))}
                    </div>
                </article>

                <article className='w-[1240px]'>
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>WYZWANIA</h5>
                    <div className='flex flex-wrap gap-[20px] gap-y-[75px] m-auto'>
                        {data[0]?.Challanges.map((challange, index) => (
                            <Challange icon={challange.icon} title={challange.title} description={challange.description} key={index}/>
                        ))}
                    </div>
                </article>
            </>
            :
            <p>Brak danych</p>   
            }
            
        </section>
    )
}

export default page
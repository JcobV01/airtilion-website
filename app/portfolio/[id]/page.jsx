"use client"

import Heading from '@components/Heading'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import checkIcon from '@public/assets/icons/portfolio/checkMark.svg'
import Technology from '@components/portfolio/Technology'
import Challange from '@components/portfolio/Challange'
import Realization from '@components/portfolio/Realization'
import Achivement from '@components/portfolio/Achivement'

import quote from '@public/assets/icons/portfolio/quote.svg'
import Cooperate from '@components/home/sections/AboutUs/sections/Cooperate'

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

                <article className="w-[1240px]">
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px]'>JAK PRZEBIEGŁA REALIZACJA?</h5>
                    <div className='flex flex-wrap gap-[30px] gap-y-[60px] justify-end w-[1170px] m-auto relative'>
                        {data[0]?.Steps.map((step, index) => (
                            <Realization arrow={index === 3 ? 'line': index === data[0]?.Steps.length - 1 ? 'line' : index > 3 ? 'left' : 'right'} title={step.title} desc={step.description} accent={index === 0 ? 'przygotowanie' : index === 1 ? 'start' : index === data[0]?.Steps.length ? 'koniec' : ''} key={index}/>
                        ))}
                        <div className='absolute right-0 top-[14px] w-[100px] h-[212px] rounded-tr-[30px] rounded-br-[30px] border-r-[2px] border-r-[#959595] border-t-[2px] border-t-[#959595] border-b-[2px] border-b-[#959595]'></div>
                    </div>
                </article>

                <article className='w-[1400px]'>
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px]'>CO UDAŁO SIĘ OSIĄGNĄĆ?</h5>
                    
                    <div className='bg-[#1B1B1B4D] rounded-[10px] shadow-[0px_4px_4px_0px_#00000025] backdrop-blur-[5px] flex justify-between p-[40px] gap-[30px]'>
                        {data[0]?.Achivements.map((achi, index) => (
                            <Achivement icon={achi.icon} title={achi.title} description={achi.description} key={index}/>
                        ))}
                    </div>
                </article>

                <article className='w-full'>
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>KILKA SŁÓW O KLIENCIE</h5>
                    
                    <div className='w-full py-[140px] flex items-center gap-[120px] justify-center relative'>
                        <div className='absolute top-0 left-0 w-full h-full transparent-x z-10 brightness-[0.2]' style={{backgroundImage: `url(${data[0]?.Client.background})`}}></div>
                        <Image src={data[0]?.Client.logo} alt='Logo klienta' width={0} height={0} sizes="100vw" className='w-auto h-[100px] relative z-20'/>
                        <div className='z-20 relative w-[40%]'>
                            <h6 className='text-[25px] font-semibold mb-[20px]'>{data[0]?.Client.name}</h6>
                            <p className='text-[17px]'>{data[0]?.Client.description}</p>
                        </div>
                    </div>
                    
                </article>

                <article className='w-[1240px]'>
                    <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>REFERENCJA</h5>
                    
                    <div className='flex flex-col w-full justify-center items-center gap-[40px] relative'>

                        <Image src={quote} width={175} height={112} alt='ikona cudzosłowu' className='absolute z-10 left-[-20px] top-[-20px]'/>

                        <span className='h-[2px] w-[30%] bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'></span>

                        <p className='z-20 text-[18px] text-center mb-[30px]'>{data[0]?.Client.opinion}</p>
                        <p className='z-20 text-[20px] text-center text-[#A8A8A8]'>~ {data[0]?.Client.author}</p>

                        <span className='h-[2px] w-[30%] bg-gradient-to-r from-[#CEA75B] to-[#7A6B4E]'></span>

                    </div>
                </article>

                <section className='w-[1240px]'>
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
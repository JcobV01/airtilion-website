'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import orangeGradient from '@public/assets/images/offer/orangeGradient.webp'
import goldGradient from '@public/assets/images/offer/goldGradient.webp'
import logo from '@public/assets/icons/logo.svg'
import LightButton from '@components/LightButton';

const CardsWithoutPrice = ({ offer, handleOpenDialog }) => {
    const [activeIndex, setActiveIndex] = useState(undefined);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
            if (newWidth < 1279 && activeIndex !== null) {
                setActiveIndex(undefined);
            } else if (newWidth >= 1279 && activeIndex === undefined) {
                setActiveIndex(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex]);

    const handleClick = (index) => {
        if (windowWidth >= 1279) {
            setActiveIndex(index);
        }
    };
    return (
        <div className="flex justify-between items-center h-screen w-full p-4 xxl:h-[100%] xxl:mt-[60px] xl:mt-[50px] xl:flex-col xl:gap-[50px] xl:h-full sm:p-0">
            {offer.map((cards, index) => {
                return (
                    <div key={index} className={`transition cursor-pointer ${activeIndex === index ? 'w-[400px] h-[700px] z-10 xxl:w-[500px] xxl:h-[800px]' : 'w-[350px] h-[575px] xxl:w-[450px] xxl:h-[675px]'} xl:w-[400px] xl:h-[700px] sm:w-[350px] sm:h-[575px] fold:w-[100%] fold:h-[auto]`} onClick={() => handleClick(index)}>
                        <div className="relative rounded-[10px] backdrop-blur-[5px] bg-[rgba(27,27,27,0.40)] flex flex-col h-full px-[20px] fold:pb-[50px]">
                            <Image className={`absolute top-0 left-0 transition ${activeIndex === index ? 'w-[400px] h-auto xxl:w-[500px]' : 'w-[350px] h-auto xxl:w-[450px]'} xl:w-[400px] sm:w-[350px]`} src={index === 1 ? orangeGradient : goldGradient} alt={index === 1 ? "Pomarańczowy gradient" : "Złoty gradient"} width={activeIndex === index ? 400 : 350} height={429} />

                            <div className={`transition mt-[30px] ${activeIndex === index ? 'w-[100px] xxl:w-[125px]' : 'w-[50px] xxl:w-[75px]'} xl:w-[100px] sm:w-[50px] sm:mt-[40px] sm:mx-auto`}>
                                <Image src={logo} width="auto" height="auto" alt="Logo firmy" className={`filter ${activeIndex === index ? 'brightness-[70%]' : 'brightness-[60%]'} xl:brightness-[70%] sm:brightness-100`} />
                            </div>

                            <h5 className={`font-light transition ${activeIndex === index ? 'text-[20px] tracking-[2px] mt-[40px] xxl:text-[25px]' : 'text-[15px] tracking-[1.5px] mt-[20px] xxl:text-[20px]'} xl:text-[20px] xl:tracking-[2px] xl:mt-[40px] sm:text-[17px] sm:mt-[20px] fold:text-center`}>{cards.title}</h5>
                            <p className={`font-light transition mt-[10px] ${activeIndex === index ? 'text-[13px] tracking-[1.3px] xxl:text-[16px]' : 'text-[11px] tracking-[1px] xxl:text-[14px]'} xl:text-[13px] xl:tracking-[1.3px] sm:text-[12px] fold:text-center`}>{cards.desc}</p>
                            <h6 className={`font-medium text-[#E2B350] mt-[25px] mb-[20px] ${activeIndex === index ? 'text-[16px] tracking-[2.5px] xxl:text-[20px]' : 'text-[13px] tracking-[2px] xxl:text-[17px]'} xl:text-[16px] xl:tracking-[2.5px] sm:text-[14px] sm:my-[10px] fold:text-center`}>{cards.price}</h6>

                            <div className='z-10'>
                                <LightButton handleClick={() => handleOpenDialog(cards.title)} text="Wybieram" paddingBlock={windowWidth <= 639 ? "10px" : windowWidth <= 1279 ? "15px" : (activeIndex === index ? "15px" : "10px")} paddingInline="20px" rounded="10px" isInCardsOffer={true} />
                            </div>

                            <div className='flex items-center justify-center mt-[25px]'>
                                <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);] fold:w-[20px] xxl:w-[90px]'></span>
                                <span className={`font-light transition ${activeIndex === index ? 'text-[18px] tracking-[1.8px] mx-[20px] xxl:text-[22px]' : 'text-[15px] tracking-[1.5px] mx-[10px] xxl:text-[19px]'} xl:text-[18px] xl:tracking-[1.8px] xl:mx-[20px] sm:text-[15px] sm:tracking-[1.5px] sm:mx-[10px] fold:text-[14px] fold:tracking-[1px]`}>Zawartość pakietu</span>
                                <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);] fold:w-[20px] xxl:w-[90px]'></span>
                            </div>

                            <ul className={`transition font-light space-y-[10px] mt-[15px] ${activeIndex === index ? 'text-[15px] tracking-[1.5px] xxl:text-[20px]' : 'text-[13px] tracking-[1.3px] xxl:text-[16px]'} xl:text-[15px] xl:tracking-[1.5px] sm:text-[13px] sm:tracking-[1.3px]`}>
                                {cards.points.map((point, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <div className='w-[20px] h-[20px]'>
                                            <Icon icon="lets-icons:check-fill" width="20" height="20" alt='Ikona listy' className='text-[#E2B350]' />
                                        </div>
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                )
            })
            }
        </div >
    );
}

export default CardsWithoutPrice;

'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import orangeGradient from '@public/assets/images/offer/orangeGradient.webp'
import goldGradient from '@public/assets/images/offer/goldGradient.webp'
import logo from '@public/assets/icons/offer/logo.svg'
import LightButton from '@components/LightButton';

const Cards = ({ offer, isNetto, handleOpenDialog }) => {
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

    const flexClass = offer.length >= 3 ? 'justify-between' : 'justify-center gap-[50px]';
    return (
        <div className={`flex items-center h-screen w-full p-4 ${flexClass} xl:flex-col xl:gap-[50px] xl:h-full sm:p-0`}>
            {offer.map((cards, index) => {
                const price = isNetto ? cards.priceNetto : cards.priceBrutto;
                return (
                    <div key={index} className={`transition cursor-pointer ${activeIndex === index ? 'w-[400px] h-[700px] z-10' : 'w-[350px] h-[575px]'} xl:w-[400px] xl:h-[700px] sm:w-[350px] sm:h-[575px] fold:w-[100%] fold:h-[auto]`} onClick={() => handleClick(index)}>
                        <div className="relative rounded-[10px] backdrop-blur-[5px] bg-[rgba(27,27,27,0.40)] flex flex-col h-full px-[20px] fold:pb-[50px]">
                            <Image className={`absolute top-0 left-0 transition ${activeIndex === index ? 'w-[400px] h-auto' : 'w-[350px] h-auto'} xl:w-[400px] sm:w-[350px]`} src={index === 1 ? orangeGradient : goldGradient} alt={index === 1 ? "Pomarańczowy gradient" : "Złoty gradient"} width={activeIndex === index ? 400 : 350} height={429} />

                            {offer.length >= 3 && index === 1 && (
                                <div className="absolute top-5 right-[-18px] py-[5px] px-[30px] rounded-[11.5px] sm:relative sm:text-center sm:mx-[0px] sm:right-0" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #222 0%, #1E1E1E 100%)' }}>
                                    <span className='text-[#FFDE98] text-[12px] tracking-[1px] font-light'>Najlepszy wybór</span>
                                </div>
                            )}

                            <div className={`transition mt-[30px] ${activeIndex === index ? 'w-[100px]' : 'w-[50px]'} xl:w-[100px] sm:w-[50px] sm:mt-[40px] sm:mx-auto`}>
                                <Image src={logo} width="auto" height="auto" alt="Logo firmy" className={`filter ${activeIndex === index ? 'brightness-[70%]' : 'brightness-[60%]'} xl:brightness-[70%] sm:brightness-100`} />
                            </div>

                            <h5 className={`font-light transition ${activeIndex === index ? 'text-[20px] tracking-[2px] mt-[40px]' : 'text-[15px] tracking-[1.5px] mt-[20px]'} xl:text-[20px] xl:tracking-[2px] xl:mt-[40px] sm:text-[17px] sm:mt-[20px] fold:text-center`}>{cards.title}</h5>
                            <p className={`font-light transition mt-[10px] ${activeIndex === index ? 'text-[13px] tracking-[1.3px]' : 'text-[11px] tracking-[1px]'} xl:text-[13px] xl:tracking-[1.3px] sm:text-[12px] fold:text-center`}>{cards.desc}</p>
                            <h6 className={`font-medium text-[#E2B350] mt-[25px] mb-[20px] ${activeIndex === index ? 'text-[25px] tracking-[2.5px]' : 'text-[20px] tracking-[2px]'} xl:text-[25px] xl:tracking-[2.5px] sm:text-[20px] sm:my-[15px] fold:text-center`}>{price}<span className={`font-light text-[#E2B350] ${activeIndex === index ? 'text-[16px] tracking-[1.6px]' : 'text-[13px] tracking-[1.3px]'} xl:text-[16px] xl:tracking-[1.6px] sm:text-[13px]`}>&nbsp;{isNetto ? 'netto' : 'brutto'}</span></h6>

                            <div className='z-10'>
                                <LightButton handleClick={() => handleOpenDialog(cards.title)} text="Wybieram" paddingBlock={windowWidth <= 639 ? "10px" : windowWidth <= 1279 ? "15px" : (activeIndex === index ? "15px" : "10px")} paddingInline="20px" rounded="10px" isInCardsOffer={true} />
                            </div>

                            <div className='flex items-center justify-center mt-[25px]'>
                                <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);] fold:w-[20px]'></span>
                                <span className={`font-light transition ${activeIndex === index ? 'text-[18px] tracking-[1.8px] mx-[20px]' : 'text-[15px] tracking-[1.5px] mx-[10px]'} xl:text-[18px] xl:tracking-[1.8px] xl:mx-[20px] sm:text-[15px] sm:tracking-[1.5px] sm:mx-[10px] fold:text-[12px] fold:tracking-[1px]`}>Zawartość pakietu</span>
                                <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);] fold:w-[20px]'></span>
                            </div>

                            <ul className={`transition font-light space-y-[10px] mt-[15px] ${activeIndex === index ? 'text-[15px] tracking-[1.5px]' : 'text-[13px] tracking-[1.3px]'} xl:text-[15px] xl:tracking-[1.5px] sm:text-[13px] sm:tracking-[1.3px] `}>
                                {cards.points.map((point, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <div className='w-[20px] h-[20px]'>
                                            <Icon icon="lets-icons:check-fill" width="20" height="20" alt='Ikona listy' className='text-[#E2B350]' />
                                        </div>
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex justify-center'>
                                <Link href={cards.link} className={`absolute bottom-2 transition text-[#ECD8AD] font-light ${activeIndex === index ? 'text-[14px] tracking 1.3px' : 'text-[12px] tracking 1px'} xl:text-[12px] xl:tracking-[1px] sm:text-[10px] sm:text-center`}>Poznaj pełne szczegóły pakietu&nbsp;<span className={`transition text-[#E2B350] font-medium ${activeIndex === index ? 'text-[14px] tracking 1.3px' : 'text-[12px] tracking 1px'} xl:text-[12px] xl:tracking 1px fold:text-[10px]`}>"{cards.linkText}"</span></Link>
                            </div>

                        </div>

                    </div>
                )
            })
            }
        </div >
    );
}

export default Cards;

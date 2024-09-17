'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import orangeGradient from '@public/assets/images/offer/orangeGradient.webp'
import goldGradient from '@public/assets/images/offer/goldGradient.webp'
import check from '@public/assets/icons/offer/check.png'
import logo from '@public/assets/icons/offer/logo.svg'
import LightButton from '@components/LightButton';

const CardsWithoutPrice = ({ offer }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="flex justify-between items-center h-screen w-full p-4">
            {offer.map((cards, index) => {
                return (
                    <div key={index} className={`transition cursor-pointer ${activeIndex === index ? 'w-[400px] h-[700px] z-10' : 'w-[350px] h-[575px]'}`} onClick={() => handleClick(index)}>
                        <div className="relative rounded-[10px] backdrop-blur-[5px] bg-[rgba(27,27,27,0.40)] flex flex-col h-full px-[20px]">
                            <Image className='absolute top-0 left-0 transition' src={index === 1 ? orangeGradient : goldGradient} alt={index === 1 ? "Pomarańczowy gradient" : "Złoty gradient"} width={activeIndex === index ? 400 : 350} height={429} />

                            <div className={`transition mt-[30px] ${activeIndex === index ? 'w-[100px]' : 'w-[50px]'}`}>
                                <Image src={logo} width="auto" height="auto" alt="Logo firmy" className={`filter ${activeIndex === index ? 'brightness-[70%]' : 'brightness-[60%]'}`} />
                            </div>

                            <h5 className={`font-light transition ${activeIndex === index ? 'text-[20px] tracking-[2px] mt-[40px]' : 'text-[15px] tracking-[1.5px] mt-[20px]'}`}>{cards.title}</h5>
                            <p className={`font-light transition mt-[10px] ${activeIndex === index ? 'text-[13px] tracking-[1.3px]' : 'text-[11px] tracking-[1px]'}`}>{cards.desc}</p>
                            <h6 className={`font-medium text-[#E2B350] mt-[25px] mb-[20px] ${activeIndex === index ? 'text-[16px] tracking-[2.5px]' : 'text-[13px] tracking-[2px]'}`}>{cards.price}</h6>

                            <LightButton text="Wybieram" paddingBlock={activeIndex === index ? "15px" : "10px"} paddingInline="20px" rounded="10px" isInCardsOffer={true} />

                            <div className='flex items-center justify-center mt-[25px]'>
                                <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);] '></span>
                                <span className={`font-light transition ${activeIndex === index ? 'text-[18px] tracking-[1.8px] mx-[20px]' : 'text-[15px] tracking-[1.5px] mx-[10px]'}`}>Zawartość pakietu</span>
                                <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);]'></span>
                            </div>

                            <ul className={`transition font-light space-y-[10px] mt-[15px] ${activeIndex === index ? 'text-[15px] tracking-[1.5px]' : 'text-[13px] tracking-[1.3px]'}`}>
                                {cards.points.map((point, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <Image src={check} alt="Ikona fajki" />
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

'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import orangeGradient from '@public/assets/images/offer/orangeGradient.webp'
import goldGradient from '@public/assets/images/offer/goldGradient.webp'
import check from '@public/assets/icons/offer/check.png'
import LightButton from '@components/LightButton';

const Cards = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const cardsSwitcher = [
        {
            title: 'Pakiet "Lwiątko"',
            desc: 'Ten pakiet jest idealny dla małych firm i osób, które potrzebują prostych, ale profesjonalnych stron internetowych. Obejmuje:',
            price: '1600 zł',
            points: [
                'strona onepage lub do 6 podstron',
                'implementacja mediów dostarczonych przez klienta',
                'podstawowe SEO',
                'w przypadku CMS, krótkie szkolenie z obsługi',
            ],
            link: 'Lwiątko',
        },
        {
            title: 'Pakiet "Lew"',
            desc: 'Oferuje bardziej rozbudowaną stronę, idealną dla firm średniej wielkości, które chcą zwiększyć swoją widoczność online.',
            price: '3000 zł',
            points: [
                'strona onepage lub do 6 podstron',
                'implementacja mediów dostarczonych przez klienta',
                'podstawowe SEO',
                'w przypadku CMS, krótkie szkolenie z obsługi',
            ],
            link: 'Lew',
        },
        {
            title: 'Pakiet "Przywódca Stada"',
            desc: 'Pakiet "Przywódca stada" to nasze najbardziej zaawansowane rozwiązanie, stworzone z myślą o firmach, które potrzebują indywidualnie dopasowanej strony internetowej o najwyższej jakości.',
            price: 'od 5000 zł',
            points: [
                'strona onepage lub do 6 podstron',
                'implementacja mediów dostarczonych przez klienta',
                'podstawowe SEO',
                'w przypadku CMS, krótkie szkolenie z obsługi',
            ],
            link: 'Przywódca Stada',
        },
    ]

    return (
        <div className="flex justify-between items-center w-full h-screen p-4">
            {cardsSwitcher.map((cards, index) => (
                <div key={index} className={`transition cursor-pointer ${activeIndex === index ? 'w-[400px] h-[700px] z-10' : 'w-[350px] h-[575px]'}`} onClick={() => handleClick(index)}>
                    <div className="relative rounded-[10px] backdrop-blur-[5px] bg-[rgba(27,27,27,0.40)] flex flex-col justify-center h-full px-[20px]">
                        <Image className='absolute top-0 left-0 transition' src={index === 1 ? orangeGradient : goldGradient} alt={index === 1 ? "Pomarańczowy gradient" : "Złoty gradient"} width={activeIndex === index ? 400 : 350} height={429} />

                        {index === 1 && (
                            <div className="absolute top-5 right-[-18px] py-[5px] px-[30px] rounded-[11.5px]" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #222 0%, #1E1E1E 100%)' }}>
                                <span className='text-[#FFDE98] text-[12px] tracking-[1px] font-light'>Najlepszy wybór</span>
                            </div>
                        )}

                        <h5 className={`font-light ${activeIndex === index ? 'text-[20px] tracking-[2px]' : 'text-[15px] tracking-[1.5px]'}`}>{cards.title}</h5>
                        <p className={`font-light transition ${activeIndex === index ? 'text-[13px] tracking-[1.3px]' : 'text-[10px] tracking-[1px]'}`}>{cards.desc}</p>
                        <h6 className={`font-medium ${activeIndex === index ? 'text-[25px] tracking-[2.5px]' : 'text-[20px] tracking-[2px]'}`}>{cards.price}<span className={`font-light ${activeIndex === index ? 'text-[16px] tracking-[1.6px]' : 'text-[13px] tracking-[1.3px]'}`}> netto</span></h6>
                        <LightButton text="Wybieram" paddingBlock={activeIndex === index ? "15px" : "10px"} paddingInline="20px" rounded="10px" isInCardsOffer={true} />

                        <div className='flex items-center justify-center mt-[25px]'>
                            <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);] '></span>
                            <span className={`font-light transition ${activeIndex === index ? 'text-[18px] tracking-[1.8px] mx-[20px]' : 'text-[15px] tracking-[1.5px] mx-[10px]'}`}>Zawartość pakietu</span>
                            <span className='w-[60px] h-[1px] bg-[rgba(226,179,80,0.50);]'></span>
                        </div>

                        <ul>
                            {cards.points.map((point, index) => (
                                <li key={index}>
                                    <Image src={check} alt="Ikona fajki" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <Link href={index === 0 ? '/home' : index === 1 ? '/#' : '/#x'} className={`transition text-center text-[#ECD8AD] font-light ${activeIndex === index ? 'text-[14px] tracking 1.3px' : 'text-[12px] tracking 1px'}`}>Poznaj pełne szczegóły pakietu&nbsp;<span className={`transition text-[#E2B350] font-medium ${activeIndex === index ? 'text-[14px] tracking 1.3px' : 'text-[12px] tracking 1px'}`}>"{cards.link}"</span></Link>

                    </div>

                </div>
            ))
            }
        </div >
    );
}

export default Cards;

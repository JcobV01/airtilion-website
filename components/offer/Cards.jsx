'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import orangeGradient from '@public/assets/images/offer/orangeGradient.webp'
import goldGradient from '@public/assets/images/offer/goldGradient.webp'
import check from '@public/assets/icons/offer/check.png'
import logo from '@public/assets/icons/offer/logo.svg'
import LightButton from '@components/LightButton';

const Cards = ({ isNetto }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const cardsSwitcher = [
        {
            title: 'Pakiet "Lwiątko"',
            desc: 'Ten pakiet jest idealny dla małych firm i osób, które potrzebują prostych, ale profesjonalnych stron internetowych. Obejmuje:',
            priceNetto: '1600 zł',
            priceBrutto: '1968 zł',
            points: [
                'strona onepage lub do 6 podstron',
                'implementacja mediów dostarczonych przez klienta',
                'podstawowe SEO',
                'w przypadku CMS, krótkie szkolenie z obsługi',
            ],
            linkText: 'Lwiątko',
            link: '#lionCub',
        },
        {
            title: 'Pakiet "Lew"',
            desc: 'Oferuje bardziej rozbudowaną stronę, idealną dla firm średniej wielkości, które chcą zwiększyć swoją widoczność online.',
            priceNetto: '3000 zł',
            priceBrutto: '3690 zł',
            points: [
                'zawartość pakietu "Lwiątko"',
                'do 12 podstron',
                'podstawowe SEO',
                'integracja z Google Analytics / Google Search Console',
                'integracja z social mediami',
            ],
            linkText: 'Lew',
            link: '#lion',
        },
        {
            title: 'Pakiet "Przywódca Stada"',
            desc: 'Pakiet "Przywódca stada" to nasze najbardziej zaawansowane rozwiązanie, stworzone z myślą o firmach, które potrzebują indywidualnie dopasowanej strony internetowej o najwyższej jakości.',
            priceNetto: 'od 5000 zł',
            priceBrutto: 'od 6150 zł',
            points: [
                'zawartość pakietu "Lwiątko" oraz "Lew"',
                'nielimitowana ilość podstron',
                'zaawansowane SEO',
                'integracja z, np. płatnościami online',
                'indywidualne wtyczki',
            ],
            linkText: 'Przywódca Stada',
            link: '#',
        },
    ]

    return (
        <div className="flex justify-between items-center h-screen w-full p-4">
            {cardsSwitcher.map((cards, index) => {
                const price = isNetto ? cards.priceNetto : cards.priceBrutto;
                return (
                    <div key={index} className={`transition cursor-pointer ${activeIndex === index ? 'w-[400px] h-[700px] z-10' : 'w-[350px] h-[575px]'}`} onClick={() => handleClick(index)}>
                        <div className="relative rounded-[10px] backdrop-blur-[5px] bg-[rgba(27,27,27,0.40)] flex flex-col h-full px-[20px]">
                            <Image className='absolute top-0 left-0 transition' src={index === 1 ? orangeGradient : goldGradient} alt={index === 1 ? "Pomarańczowy gradient" : "Złoty gradient"} width={activeIndex === index ? 400 : 350} height={429} />

                            {index === 1 && (
                                <div className="absolute top-5 right-[-18px] py-[5px] px-[30px] rounded-[11.5px]" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #222 0%, #1E1E1E 100%)' }}>
                                    <span className='text-[#FFDE98] text-[12px] tracking-[1px] font-light'>Najlepszy wybór</span>
                                </div>
                            )}

                            <div className={`transition mt-[30px] ${activeIndex === index ? 'w-[100px]' : 'w-[50px]'}`}>
                                <Image src={logo} width="auto" height="auto" alt="Logo firmy" className={`filter ${activeIndex === index ? 'brightness-[70%]' : 'brightness-[60%]'}`} />
                            </div>

                            <h5 className={`font-light transition ${activeIndex === index ? 'text-[20px] tracking-[2px] mt-[40px]' : 'text-[15px] tracking-[1.5px] mt-[20px]'}`}>{cards.title}</h5>
                            <p className={`font-light transition mt-[10px] ${activeIndex === index ? 'text-[13px] tracking-[1.3px]' : 'text-[11px] tracking-[1px]'}`}>{cards.desc}</p>
                            <h6 className={`font-medium text-[#E2B350] mt-[25px] mb-[20px] ${activeIndex === index ? 'text-[25px] tracking-[2.5px]' : 'text-[20px] tracking-[2px]'}`}>{price}<span className={`font-light text-[#E2B350] ${activeIndex === index ? 'text-[16px] tracking-[1.6px]' : 'text-[13px] tracking-[1.3px]'}`}>&nbsp;{isNetto ? 'netto' : 'brutto'}</span></h6>

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

                            <div className='flex justify-center'>
                                <Link href={cards.link} className={`absolute bottom-2 transition text-[#ECD8AD] font-light ${activeIndex === index ? 'text-[14px] tracking 1.3px' : 'text-[12px] tracking 1px'}`}>Poznaj pełne szczegóły pakietu&nbsp;<span className={`transition text-[#E2B350] font-medium ${activeIndex === index ? 'text-[14px] tracking 1.3px' : 'text-[12px] tracking 1px'}`}>"{cards.linkText}"</span></Link>
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

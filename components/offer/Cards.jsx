'use client'

import React, { useState } from 'react';

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
        },
        {
            title: 'Pakiet "Lew"',
            desc: 'Oferuje bardziej rozbudowaną stronę, idealną dla firm średniej wielkości, które chcą zwiększyć swoją widoczność online.',
            price: '3000 zł',
        },
        {
            title: 'Pakiet "Przywódca Stada"',
            desc: 'Pakiet "Przywódca stada" to nasze najbardziej zaawansowane rozwiązanie, stworzone z myślą o firmach, które potrzebują indywidualnie dopasowanej strony internetowej o najwyższej jakości.',
            price: 'od 5000 zł',
        },
    ]

    return (
        <div className="flex justify-between items-center w-full h-screen p-4">
            {cardsSwitcher.map((cards, index) => (
                <div key={index} className={`transition-all duration-700 ease-in-out cursor-pointer ${activeIndex === index ? 'w-[400px] h-[700px] z-10' : 'w-[375px] h-[575px]'}`} onClick={() => handleClick(index)}>
                    <div className="bg-red-500 flex flex-col justify-center h-full px-[20px]">
                        <h5 className={`font-light ${activeIndex === index ? 'text-[20px] tracking-[2px]' : 'text-[15px] tracking-[1.5px]'}`}>{cards.title}</h5>
                        <p className={`font-light ${activeIndex === index ? 'text-[13px] tracking-[1.3px]' : 'text-[10px] tracking-[1px]'}`}>{cards.desc}</p>
                        <h6 className={`font-medium ${activeIndex === index ? 'text-[25px] tracking-[2.5px]' : 'text-[20px] tracking-[2px]'}`}>{cards.price}<span className={`font-light ${activeIndex === index ? 'text-[16px] tracking-[1.6px]' : 'text-[13px] tracking-[1.3px]'}`}> netto</span></h6>
                </div>
                </div>
    ))
}
        </div >
    );
}

export default Cards;

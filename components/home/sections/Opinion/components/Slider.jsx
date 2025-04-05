'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderCard from './SliderCard';
import { Icon } from '@iconify/react';

const slide = [
    {
        author: 'Radosław Jaźwiec',
        page: 'aktywnekobiety.com',
        desc: 'Z pełnym przekonaniem rekomendujemy firmę Airtilion Sp. z o.o. jako solidnego, rzetelnego i profesjonalnego partnera w realizacji projektów internetowych. Efekt ich pracy w pełni odpowiada naszym założeniom.'
    },
    {
        author: 'Edyta Kożuch',
        page: 'stowarzyszenie.amos.org.pl',
        desc: 'Z przyjemnością rekomendujemy firmę Airtilion. Za realizację usługi odpowiedzialni byli panowie Jakub Wadycki oraz Artur Plebańczyk, którzy wykazali sięwysokimi kompetencjami, zaangażowaniem oraz terminowością.'
    },
    {
        author: 'Lorem ipsum',
        page: 'page-one-site.pl',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    // {
    //     author: 'Józek Nowak',
    //     page: 'page-one-site.pl',
    //     desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    // },
    // {
    //     author: 'Józek Nowak',
    //     page: 'page-one-site.pl',
    //     desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    // },
    // {
    //     author: 'Józek Nowak',
    //     page: 'page-one-site.pl',
    //     desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    // },
]

const Slider = () => {
    return (
        <div className='flex items-center justify-center gap-[40px] h-[300px]'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2, 
                    },
                    1536: {
                        slidesPerView: 3,
                    }
                }}
            >
                {slide.map((slide, index) => (
                    <SwiperSlide key={index} className="backdrop-blur-[2.5px]">
                        <div className='flex flex-col z-10 h-[250px] w-full xxl:h-[300px] xxl:w-[470px] bg-[rgba(16,16,16,0.40)] rounded-[10px] px-[15px] py-[15px] relative'>
                            <SliderCard author={slide.author} page={slide.page} desc={slide.desc} />
                        </div>
                        <Icon icon="bi:quote" width={200} height={200} alt="Ikona cytatu" className='text-[#121212] absolute right-[-20px] top-[-20px] z-[5]' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
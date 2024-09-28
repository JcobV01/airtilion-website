'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderCard from './SliderCard';

const slide = [
    {
        author: 'Szymon Mikos',
        page: 'stowarzyszeni.amos.org.pl',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Kasia Nowak',
        page: 'aktywnekobiety.com',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        page: 'page-one-site.pl',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        page: 'page-one-site.pl',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        page: 'page-one-site.pl',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        page: 'page-one-site.pl',
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
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
                    <SwiperSlide>
                        <div className='flex justify-center items-center'>
                            <SliderCard author={slide.author} page={slide.page} desc={slide.desc} key={index} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
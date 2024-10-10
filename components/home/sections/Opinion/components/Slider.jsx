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
                        <div className='flex justify-center items-center z-10 relative'>
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
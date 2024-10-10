"use client"

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import bgImage from '@public/assets/images/main-photo.webp'
import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'
import { Jura } from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
    weight: ['300'],
})

const MainDialog = ({setDialogV}) => {
    const [isLoading, setIsLoading] = useState(true);
    const dialogRef = useRef()

    useEffect(() => {
        const text = document.querySelector('.bouncingText');
        const letters = text.textContent.split('');
        text.innerHTML = '';

        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter;
            span.style.animationDelay = `${index * 0.1}s`;
            text.appendChild(span);
        });

        let currentIndex = 0;
        const spans = text.querySelectorAll('span');

        function animateLetter() {
            spans.forEach((span) => {
                span.classList.remove('active');
            });
            spans[currentIndex].classList.add('active');

            currentIndex = (currentIndex + 1) % spans.length;

            setTimeout(animateLetter, 1000);
        }

        animateLetter();
    }, []);

    useEffect(() => {
        // Symulacja ładowania strony
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <dialog ref={dialogRef} className="fixed w-full h-full top-0 left-0 z-30" open>
            <section style={{ backgroundImage: `url(${bgImage.src})` }} className='w-full h-full bg-cover 2xl:bg-center'>
                <div className='w-full h-full bg-[#0b0b0bef] flex items-center flex-col justify-between py-[50px]'>

                    {isLoading ? (
                        <div className='w-[600px] rounded-full border-[#B4A179] border-r-[2px] border-l-[2px] flex justify-center items-center spin aspect-square sm:w-[90%] sm:px-[20px] fold:border-none'>
                        </div>
                    ) : (

                        <div className='w-[600px] rounded-full border-[#B4A179] border-r-[2px] border-l-[2px] flex justify-center items-center aspect-square sm:w-[90%] sm:px-[20px] fold:border-none'>
                            <Image src={logo} width={400} height="auto" alt="Logo firmy" className='sm:w-[300px] animationOpacity duration-700' />
                        </div>
                    )}
                    <button onClick={() => { setDialogV(false); dialogRef.current.close() }} className='relative h-[60px] px-[60px] text-[18px] flex justify-center items-center hover:scale-105 hover:text-[15px] duration-500 animationOpacity sm:h-[50px] sm:text-[14px]'>
                        <span className='absolute h-[15px] top-0 left-0 w-[2px] bg-[#E2B350]'></span>
                        <span className='absolute h-[2px] top-0 left-0 w-[15px] bg-[#E2B350]'></span>

                        <span className='absolute h-[15px] bottom-0 left-0 w-[2px] bg-[#E2B350]'></span>
                        <span className='absolute h-[2px] bottom-0 left-0 w-[15px] bg-[#E2B350]'></span>

                        <span className='absolute h-[15px] top-0 right-0 w-[2px] bg-[#E2B350]'></span>
                        <span className='absolute h-[2px] top-0 right-0 w-[15px] bg-[#E2B350]'></span>

                        <span className='absolute h-[15px] bottom-0 right-0 w-[2px] bg-[#E2B350]'></span>
                        <span className='absolute h-[2px] bottom-0 right-0 w-[15px] bg-[#E2B350]'></span>
                        PRZEJDŹ DALEJ
                    </button>

                    <p className={`${jura.className} text-[20px] font-extralight text-[#E2B350] tracking-[22.5px] bouncingText animationOpacity lg:tracking-[15px] lg:text-center sm:text-[12px] sm:tracking-[6px] fold:w-[90%]`}>PASSION MAKES IT BETTER</p>
                </div>
            </section>
        </dialog>
    )
}

export default MainDialog
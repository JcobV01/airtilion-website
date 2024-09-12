"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'

import bgImage from '@public/assets/images/main-photo.webp'
import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'

const page = () => {

  
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
      spans.forEach((span, index) => {
        span.classList.remove('active');
      });
      spans[currentIndex].classList.add('active');

      currentIndex = (currentIndex + 1) % spans.length; 

      setTimeout(animateLetter, 1000); 
    }

    animateLetter(); 
  }, []);

  return (
    <section style={{backgroundImage: `url(${bgImage.src})`}} className='w-full h-full bg-cover'>
        <div className='w-full h-full bg-[#0b0b0bef] flex items-center flex-col justify-between py-[50px]'>
          
          <div className='w-[600px] h-[600px] rounded-full border-[#B4A179] border-r-[2px] border-l-[2px] flex justify-center items-center'>
            <Image src={logo} width={400} height="auto"/>
          </div>
          
          <Link href="/home" className='relative h-[60px] px-[60px] text-[18px] flex justify-center items-center hover:scale-105 hover:text-[15px] duration-500'>
            <span className='absolute h-[15px] top-0 left-0 w-[2px] bg-[#E2B350]'></span>
            <span className='absolute h-[2px] top-0 left-0 w-[15px] bg-[#E2B350]'></span>

            <span className='absolute h-[15px] bottom-0 left-0 w-[2px] bg-[#E2B350]'></span>
            <span className='absolute h-[2px] bottom-0 left-0 w-[15px] bg-[#E2B350]'></span>

            <span className='absolute h-[15px] top-0 right-0 w-[2px] bg-[#E2B350]'></span>
            <span className='absolute h-[2px] top-0 right-0 w-[15px] bg-[#E2B350]'></span>

            <span className='absolute h-[15px] bottom-0 right-0 w-[2px] bg-[#E2B350]'></span>
            <span className='absolute h-[2px] bottom-0 right-0 w-[15px] bg-[#E2B350]'></span>
            PRZEJDŹ DALEJ
          </Link>

          <p className='font-[Jura] text-[20px] font-extralight text-[#E2B350] tracking-[22.5px] bouncingText'>PASSION MAKES IT BETTER</p>
        </div>
    </section>
  )
}

export default page
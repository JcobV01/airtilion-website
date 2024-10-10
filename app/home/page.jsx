"use client"

import React, { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import HeaderBg from '@public/assets/images/Header_xD.png'
import HeaderBgDesktop from '@public/assets/images/mainHeader.webp'
import HeaderBgDesktop2 from '@public/assets/images/mainHeader-BigSize.webp'
import useWindowWidth from '@hooks/useWindowWidth';
import Head from 'next/head'

const Header = dynamic(() => import('@components/Header'), { ssr: true, loading: () => <div className="loader"></div> });
const AboutUs = dynamic(() => import('@components/home/sections/AboutUs/AboutUs'), { ssr: true, loading: () => <div className="loader"></div> });
const Encourage = dynamic(() => import('@components/home/sections/Encourage/Encourage'), { ssr: false, loading: () => <div className="loader"></div> });
const Cooperation = dynamic(() => import('@components/home/sections/Cooperation/Cooperation'), { ssr: false, loading: () => <div className="loader"></div> });
const Offer = dynamic(() => import('@components/home/sections/Offer/Offer'), { ssr: false, loading: () => <div className="loader"></div> });
const Portfolio = dynamic(() => import('@components/home/sections/Portfolio/Portfolio'), { ssr: false, loading: () => <div className="loader"></div> });
const Opinion = dynamic(() => import('@components/home/sections/Opinion/Opinion'), { ssr: false, loading: () => <div className="loader"></div> });
const Contact = dynamic(() => import('@components/home/sections/Contact/Contact'), { ssr: false, loading: () => <div className="loader"></div> });
const Footer = dynamic(() => import('@components/Footer'), { ssr: false, loading: () => <div className="loader"></div> });
const DesktopHomeLines = dynamic(() => import('@components/lines/DesktopHomeLines'), { ssr: false, loading: () => <div className="loader"></div> });
const MobileHomeLines = dynamic(() => import('@components/lines/MobileHomeLines'), { ssr: false, loading: () => <div className="loader"></div> });


import bgImage from '@public/assets/images/main-photo.webp'
import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'
import { Jura } from 'next/font/google'
import Link from 'next/link'


const jura = Jura({
  subsets: ['latin'],
  weight: ['300'],
})

const home = () => {

  const width = useWindowWidth()


  const changeMenu = (id) => {
    const menuItems = document.querySelectorAll('.menu-button')
    menuItems.forEach((item) => item.classList.remove('menu-active'))
    menuItems[id].classList.add('menu-active')
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.observer-navbar');

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'nav-aboutus') {
            changeMenu(0);
          } else if (entry.target.id === 'nav-coop') {
            changeMenu(1);
          } else if (entry.target.id === 'nav-offer') {
            changeMenu(2);
          } else if (entry.target.id === 'nav-portfolio') {
            changeMenu(3);
          } else if (entry.target.id === 'nav-contact') {
            changeMenu(4);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    sections.forEach(section => {
      const threshold = section.offsetHeight > 500 ? 0.3 : 0.1;
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

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

  const dialogRef = useRef()

  return (
    <>
      <Head>
        <link rel="preload" href={HeaderBgDesktop} as="image" fetchPriority="high" />
      </Head>

      <Header title="Budujemy przyszłość Twojej marki w Internecie" subtitle="Nowoczesne strony i aplikacje internetowe dopasowane do Twoich potrzeb." img={HeaderBgDesktop} positionBottom={false} />
      <main className='flex flex-col relative mt-[-250px] gap-[200px] md:gap-[100px]'>
        <Encourage />
        <AboutUs />
        <Cooperation />
        <Offer />
        <Portfolio />
        <Opinion />
        <Contact />

        <Footer />
        <div className='absolute top-0 left-0 w-full h-full background'></div>

        {
          width > 1023 ?
            <DesktopHomeLines />
            :
            <MobileHomeLines />
        }
      </main>

      <dialog className="fixed w-full h-full top-0 left-0 bg-black z-30" open ref={dialogRef}>
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
            <button className='relative h-[60px] px-[60px] text-[18px] flex justify-center items-center hover:scale-105 hover:text-[15px] duration-500 animationOpacity sm:h-[50px] sm:text-[14px]' onClick={() => {dialogRef.current.close()}}>
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
    </>
  )
}

export default home
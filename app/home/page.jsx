"use client"

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeaderBg from '@public/assets/images/mainHeader.webp'

// import Footer from '@components/Footer'
// import Header from '@components/Header'
// import AboutUs from '@components/home/sections/AboutUs/AboutUs'
// import Contact from '@components/home/sections/Contact/Contact'
// import Cooperation from '@components/home/sections/Cooperation/Cooperation'
// import Encourage from '@components/home/sections/Encourage/Encourage'
// import Offer from '@components/home/sections/Offer/Offer'
// import Opinion from '@components/home/sections/Opinion/Opinion'
// import Portfolio from '@components/home/sections/Portfolio/Portfolio'
// import DesktopHomeLines from '@components/lines/DesktopHomeLines'
// import MobileHomeLines from '@components/lines/MobileHomeLines'

const Header = dynamic(() => import('@components/Header'),{ssr: true,});
const AboutUs = dynamic(() => import('@components/home/sections/AboutUs/AboutUs'),{ssr: true,});
const Encourage = dynamic(() => import('@components/home/sections/Encourage/Encourage'),{ssr: false, });
const Cooperation = dynamic(() => import('@components/home/sections/Cooperation/Cooperation'),{ssr: false,});
const Offer = dynamic(() => import('@components/home/sections/Offer/Offer'),{ssr: true,});
const Portfolio = dynamic(() => import('@components/home/sections/Portfolio/Portfolio'),{ssr: false,});
const Opinion = dynamic(() => import('@components/home/sections/Opinion/Opinion'),{ssr: false,});
const Contact = dynamic(() => import('@components/home/sections/Contact/Contact'),{ssr: false,});
const Footer = dynamic(() => import('@components/Footer'),{ssr: false,});
const DesktopHomeLines = dynamic(() => import('@components/lines/DesktopHomeLines'),{ssr: false,});
const MobileHomeLines = dynamic(() => import('@components/lines/MobileHomeLines'),{ssr: false,});

const home = () => {

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


  return (
    <>
      <Header title="Budujemy przyszłość Twojej Marki w Internecie" subtitle="Nowoczesne strony i aplikacje internetowe dopasowane do Twoich potrzeb." img={HeaderBg} />
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

        <DesktopHomeLines/>
        <MobileHomeLines/>
      </main>
    </>
  )
}

export default home
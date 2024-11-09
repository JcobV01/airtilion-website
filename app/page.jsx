"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import HeaderBgDesktop from '@public/assets/images/mainHeader.webp'
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




const home = () => {

  const width = useWindowWidth()

  const changeMenu = (id) => {
    const menuItems = document.querySelectorAll('.menu-button')
    menuItems.forEach((item) => item.classList.remove('menu-active'))
    menuItems[id].classList.add('menu-active')
  }

  useEffect(() => {

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
            changeMenu(5);
          }
        }
      });      
    };

    let threshold

    const observer = new IntersectionObserver(observerCallback, { threshold });

    const observeSections = () => {
      const sections = document.querySelectorAll('.observer-navbar');
      threshold = 
      sections.forEach(section => {
        section.offsetHeight > 500 ? threshold = 0.3 : threshold = 0.1; 
        observer.observe(section);
      })
    }

    observeSections();

    const observerMutation = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          observeSections();
        }
      });
    });

    observerMutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      observerMutation.disconnect();
    };
  }, []);




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

        { width > 1023 ? <DesktopHomeLines /> : <MobileHomeLines /> }
      </main>

    </>
  )
}

export default home
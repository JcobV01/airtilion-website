"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import HeaderBgDesktop from '@public/assets/images/mainHeader.webp'
import useWindowWidth from '@hooks/useWindowWidth';
import Head from 'next/head'
import useScrollObserver from '@hooks/useScrollbarObserver';

const Header = dynamic(() => import('@components/Header'), { ssr: true, loading: () => <div className="loader"></div> });
const AboutUs = dynamic(() => import('@components/home/sections/AboutUs/AboutUs'), { ssr: true, loading: () => <div className="loader"></div> });
const Encourage = dynamic(() => import('@components/home/sections/Encourage/Encourage'), { ssr: true, loading: () => <div className="loader"></div> });
const Cooperation = dynamic(() => import('@components/home/sections/Cooperation/Cooperation'), { ssr: true, loading: () => <div className="loader"></div> });
const Offer = dynamic(() => import('@components/home/sections/Offer/Offer'), { ssr: true, loading: () => <div className="loader"></div> });
const Portfolio = dynamic(() => import('@components/home/sections/Portfolio/Portfolio'), { ssr: false, loading: () => <div className="loader"></div> });
const Opinion = dynamic(() => import('@components/home/sections/Opinion/Opinion'), { ssr: false, loading: () => <div className="loader"></div> });
const Contact = dynamic(() => import('@components/home/sections/Contact/Contact'), { ssr: true, loading: () => <div className="loader"></div> });
const Footer = dynamic(() => import('@components/Footer'), { ssr: true, loading: () => <div className="loader"></div> });
const DesktopHomeLines = dynamic(() => import('@components/lines/DesktopHomeLines'), { ssr: true, loading: () => <div className="loader"></div> });
const MobileHomeLines = dynamic(() => import('@components/lines/MobileHomeLines'), { ssr: true, loading: () => <div className="loader"></div> });

const home = () => {

  const width = useWindowWidth()

  const changeMenu = (id) => {
    const menuItems = document.querySelectorAll('.menu-button')
    menuItems.forEach((item) => item.classList.remove('menu-active'))
    menuItems[id].classList.add('menu-active')
  }

  useScrollObserver(changeMenu);

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
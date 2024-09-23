import Footer from '@components/Footer'
import Header from '@components/Header'
import AboutUs from '@components/home/sections/AboutUs/AboutUs'
import Contact from '@components/home/sections/Contact/Contact'
import Cooperation from '@components/home/sections/Cooperation/Cooperation'
import Encourage from '@components/home/sections/Encourage/Encourage'
import Offer from '@components/home/sections/Offer/Offer'
import Portofolio from '@components/home/sections/Portfolio/Portofolio'
import HeaderBg from '@public/assets/images/mainHeader.webp'
import React from 'react'

const home = () => {
  return (
    <>
      <Header title="Budujemy przyszłość Twojej Marki w Internecie" subtitle="Nowoczesne strony i aplikacje internetowe dopasowane do Twoich potrzeb." img={HeaderBg} />
      <main className='flex flex-col relative mt-[-250px] gap-[200px]'>
        <Encourage />
        <AboutUs />
        {/* <Cooperation />
        <Offer />
        <Portofolio />
        <Contact />

        <Footer /> */}
        <div className='absolute top-0 left-0 w-full h-full background'></div>
      </main>
    </>
  )
}

export default home
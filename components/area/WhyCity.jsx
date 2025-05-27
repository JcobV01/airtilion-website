"use client"

import React from 'react'
import Image from '@node_modules/next/image'
import Heading from '@components/Heading'
import WhyCityTile from './WhyCityTile'
import useIntersectionObserver from '@hooks/useObserver'

const WhyCity = ({ cityName, inCity, fromCity, cityImg }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  const elements = [
    {
      icon: "gis:location-poi",
      iconText: "ZASIĘG LOKALNY",
      title: `Zdobędziesz klientów ${inCity} i okolicach`,
      desc: `Zwiększ zasięg swojego biznesu i przyciągnij nowych klientów ${fromCity}`
    },
    {
      icon: "material-symbols:trophy",
      iconText: "PRZEWAGA NAD KONKURENCJĄ",
      title: "Wyróżnisz się na tle konkurencji",
      desc: `Profesjonalne strony przyciągają nowych klientów ${fromCity} i okolic`
    },
    {
      icon: "fa6-solid:handshake-simple",
      iconText: "WIARYGODNOŚĆ MARKI",
      title: "Zbudujesz zaufanie i wiarygodność swojej marki",
      desc: "Strona internetowa to w dzisiejszych czasach nieodłączna wizytówka"
    },
    {
      icon: "icomoon-free:stats-dots",
      iconText: "WIĘCEJ KLIENTÓW",
      title: "Zwiększysz sprzedaż i liczbę zapytań ofertowych",
      desc: "Skuteczna strona internetowa to więcej zapytań i większa sprzedaż"
    }
  ]

  return (
    <section className='w-full flex flex-col gap-[64px] bg-[#00000033] z-20 pt-[64px] backdrop-blur-[10px]'>
      <article ref={ref2} className={`w-[1220px] mx-auto flex flex-col gap-[32px] xl:w-[960px] lg:w-[90%] transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-left' : 'element-hidden-left'}`}>
        <Heading title={`Strony internetowe ${cityName}`} subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM MIEJSCU" />
        <p>Twoja firma zasługuje na stronę, która przyciąga klientów i dominuje w Google! Tworzymy nowoczesne strony internetowe {inCity} – szybkie, responsywne i zoptymalizowane pod SEO. Postaw na jakość i technologię przyszłości!</p>
      </article>

      <article ref={ref} className={`z-20 py-[64px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
        <div className='grid gap-[16px] w-[1220px] mx-auto grid-cols-4 grid-rows-2 xl:w-[960px] lg:grid-cols-2 lg:grid-rows-4 lg:w-[500px] sm:flex sm:flex-col sm:w-[90%]'>
          <div className='w-[600px] h-[600px] z-20 relative p-[64px] flex items-end col-span-2 row-span-2 xl:w-[472px] xl:h-[472px] lg:w-[500px] lg:h-[500px] sm:h-auto sm:w-[100%] aspect-square sm:p-[32px]'>
            <Image src={cityImg} width={600} height={600} quality={100} className='absolute top-0 left-0 w-full h-full brightness-[1.5]' alt={`Tworzenie stron internetowych ${inCity}`} />
            <h2 className='relative z-20 text-[25px] font-extralight lg:text-[20px]'>Dlaczego warto zainwestować w stronę internetową {inCity}?</h2>
          </div>

          {elements.map((tile, index) => (
            <WhyCityTile key={index} tile={tile} />
          ))}
        </div>
      </article>
    </section>
  )
}

export default WhyCity
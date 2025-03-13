import React from 'react'

import CityComponent from '@components/area/CityComponent'
import WhyCity from '@components/area/WhyCity'

import tarnow from '@public/assets/images/area/tarnow.webp'

const cityData = {
  firstSection: {
    title: "Strony internetowe Tarnów",
    content: "Twoja firma zasługuje na stronę, która przyciąga klientów i dominuje w Google! Tworzymy nowoczesne strony internetowe w Tarnowie – szybkie, responsywne i zoptymalizowane pod SEO. Postaw na jakość i technologię przyszłości!",
    tiles: {
      title: "Dlaczego warto zainwestować w stronę internetową w Tarnowie?",
      image: tarnow,
      elements: [
        {
          icon: "gis:location-poi",
          iconText: "ZASIĘG LOKALNY",
          title: "Zdobędziesz klientów w Tarnowie i okolicach",
          desc: "Zwiększ zasięg swojego biznesu i przyciągnij nowych klientów z Tarnowa"
        },
        {
          icon: "material-symbols:trophy",
          iconText: "PRZEWAGA NAD KONKURENCJĄ",
          title: "Wyróżnisz się na tle konkurencji",
          desc: "Profesjonalne strony przyciągają nowych klientów z Tarnowa i okolic"
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
    }
  }
}

const page = () => {
  return (
    <>
      <CityComponent city="w Tarnowie"/>
      <WhyCity data={cityData.firstSection}/>
    </>
  )
}

export default page
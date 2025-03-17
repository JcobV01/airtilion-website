import React from 'react'

import CityComponent from '@components/area/CityComponent'
import WhyCity from '@components/area/WhyCity'

import tarnow from '@public/assets/images/area/tarnow.webp'
import CityPortfolio from '@components/area/CityPortfolio'
import CityFaq from '@components/area/faq/CityFaq'

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
  },
  accordion: {
    elements: [
      {
        id: 1,
        question: "Jak długo trwa stworzenie strony internetowej w Tarnowie?",
        answer: "Czas realizacji zależy od skomplikowania projektu oraz Twoich indywidualnych wymagań. Standardowo proces ten trwa od kilku tygodni do kilku miesięcy. Po wstępnej analizie potrzeb możemy przedstawić dokładniejszy harmonogram."
      },
      {
        id: 2,
        question: "Ile kosztuje strona internetowa w Tarnowie?",
        answer: "Koszt zależy od wielu czynników, takich jak zakres funkcjonalności, stopień skomplikowania projektu oraz dodatkowe usługi. Po zapoznaniu się z Twoimi wymaganiami przygotujemy indywidualną wycenę."
      },
      {
        id: 3,
        question: "Czy będę mógł samodzielnie zarządzać treścią na mojej stronie?",
        answer: "Tak, nasze strony są wyposażone w intuicyjne systemy zarządzania treścią (CMS), które pozwalają na łatwe dodawanie i edytowanie treści bez potrzeby posiadania wiedzy programistycznej."
      },
      {
        id: 4,
        question: "Jakie informacje są potrzebne do rozpoczęcia współpracy?",
        answer: "Na początek potrzebujemy poznać Twoje oczekiwania i cele związane ze stroną, informacje o Twojej firmie, preferencje dotyczące designu oraz funkcjonalności, a także ewentualne materiały, takie jak logo czy treści."
      },
    ]
  }
}

const page = () => {
  return (
    <>
      <CityComponent city="w Tarnowie"/>
      <WhyCity data={cityData.firstSection}/>
      <CityFaq data={cityData.accordion}/>
      <CityPortfolio city="w Tarnowie" />
    </>
  )
}

export default page
import React from 'react'

import CityComponent from '@components/area/CityComponent'
import WhyCity from '@components/area/WhyCity'

import CityPortfolio from '@components/area/CityPortfolio'
import CityFaq from '@components/area/faq/CityFaq'
import OfferCity from '@components/area/OfferCity'

import tarnow from '@public/assets/images/area/tarnow.webp'
import firstCard from '@public/assets/images/area/offer/card-1.webp'
import secondCard from '@public/assets/images/area/offer/card-2.webp'
import thirdCard from '@public/assets/images/area/offer/card-3.webp'
import fourthCard from '@public/assets/images/area/offer/card-4.webp'
import fifthCard from '@public/assets/images/area/offer/card-5.webp'
import firstIllustration from '@public/assets/images/area/offer/illustration-1.svg'
import secondllustration from '@public/assets/images/area/offer/illustration-2.svg'
import thirdllustration from '@public/assets/images/area/offer/illustration-3.svg'
import Cooperate from '@components/home/sections/AboutUs/sections/Cooperate'

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
  offer: {
    desc: "Tworzymy nowoczesne, szybkie i przyjazne SEO strony internetowe, które przyciągną klientów z Tarnowa i okolic. Specjalizujemy się w:",
    elements: [
      {
        title: "Strony wizytówki",
        desc: "Idealne dla małych firm i freelancerów z Tarnowa, które chcą zaprezentować się online.",
        bg: firstCard,
        illustration: firstIllustration
      },
      {
        title: "Strony firmowe",
        desc: "Kompleksowe rozwiązania dla przedsiębiorstw, wspierające wizerunek i sprzedaż w regionie.",
        bg: secondCard,
        illustration: secondllustration
      },
      {
        title: "Sklepy internetowe",
        desc: "Bezpieczne i funkcjonalne sklepy dostosowane do potrzeb lokalnego rynku.",
        bg: thirdCard,
        illustration: thirdllustration
      },
      {
        title: "Landing page",
        desc: "Skuteczne strony docelowe, które zwiększą konwersję Twoich kampanii reklamowych.",
        bg: fourthCard
      },
      {
        title: "Darmowa wycena w 48h!",
        desc: "Masz pytania? Chcesz poznać koszt strony dostosowanej do Twoich potrzeb? Wypełnij formularz, a przygotujemy dla Ciebie spersonalizowaną ofertę dla strony internetowej w Tarnowie!",
        bg: fifthCard
      },
    ],
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
      {/* <CityComponent city="w Tarnowie" />
      <WhyCity data={cityData.firstSection} /> */}

      <OfferCity data={cityData.offer} />
      <CityFaq data={cityData.accordion} />
      <CityPortfolio city="w Tarnowie" />
      {/* <Cooperate /> */}
    </>
  )
}

export default page
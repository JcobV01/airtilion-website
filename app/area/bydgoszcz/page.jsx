import React from 'react'

import CityComponent from '@components/area/CityComponent'
import Cooperate from '@components/home/sections/AboutUs/sections/Cooperate'
import CityFaq from '@components/area/faq/CityFaq'
import CityPortfolio from '@components/area/CityPortfolio'
import OfferCity from '@components/area/OfferCity'
import ProcessCity from '@components/area/ProcessCity'
import SliderSection from '@components/area/Slider'
import WhyCity from '@components/area/WhyCity'

import bydgoszcz from '@public/assets/images/area/cities/bydgoszcz.webp'
import firstCard from '@public/assets/images/area/offer/card-1.webp'
import secondCard from '@public/assets/images/area/offer/card-2.webp'
import thirdCard from '@public/assets/images/area/offer/card-3.webp'
import fourthCard from '@public/assets/images/area/offer/card-4.webp'
import fifthCard from '@public/assets/images/area/offer/card-5.webp'
import firstIllustration from '@public/assets/images/area/offer/illustration-1.svg'
import secondllustration from '@public/assets/images/area/offer/illustration-2.svg'
import thirdllustration from '@public/assets/images/area/offer/illustration-3.svg'

const cityData = {
  firstSection: {
    title: "Strony internetowe Bydgoszcz",
    content: "Twoja firma zasługuje na stronę, która przyciąga klientów i dominuje w Google! Tworzymy nowoczesne strony internetowe w Bydgoszczy – szybkie, responsywne i zoptymalizowane pod SEO. Postaw na jakość i technologię przyszłości!",
    tiles: {
      title: "Dlaczego warto zainwestować w stronę internetową w Bydgoszczy?",
      image: bydgoszcz,
      elements: [
        {
          icon: "gis:location-poi",
          iconText: "ZASIĘG LOKALNY",
          title: "Zdobędziesz klientów w Bydgoszczy i okolicach",
          desc: "Zwiększ zasięg swojego biznesu i przyciągnij nowych klientów z Bydgoszczy"
        },
        {
          icon: "material-symbols:trophy",
          iconText: "PRZEWAGA NAD KONKURENCJĄ",
          title: "Wyróżnisz się na tle konkurencji",
          desc: "Profesjonalne strony przyciągają nowych klientów z Bydgoszczy i okolic"
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
  technologies: {
    title: "TECHNOLOGIE",
    desc: "Tworzymy funkcjonalne, estetyczne i responsywne strony internetowe w Bydgoszczy oparte o nowoczesne technologie, które zapewniają niezawodność, szybkość i łatwość użytkowania. Nasze projekty są zaprojektowane z myślą o użytkownikach, dzięki czemu Twoja strona będzie nie tylko piękna, ale również intuicyjna i łatwa w nawigacji. Wykorzystujemy najnowsze technologie, które pozwalają na szybkie ładowanie stron, lepszą optymalizację pod kątem SEO oraz pełną responsywność.",
    techs: [
      {
        name: "TypeScript",
        slug: ["BEZPIECZEŃSTWO", "PRZEJRZYSTOŚĆ"],
        icon: "akar-icons:typescript-fill"
      },
      {
        name: "NextJS",
        slug: ["ELASTYCZNOŚĆ", "SKALOWALNOŚĆ"],
        icon: "akar-icons:nextjs-fill"
      },
      {
        name: "ReactJS",
        slug: ["SZYBKOŚĆ", "WYDAJNOŚĆ"],
        icon: "mdi:react"
      },
      {
        name: "Wordpress",
        slug: ["POPULARNOŚĆ", "PROSTOTA"],
        icon: "ic:baseline-wordpress"
      },
      {
        name: "Tailwind",
        slug: ["MINIMALIZM", "SWOBODA"],
        icon: "mdi:tailwind"
      }
    ]
  },
  process: {
    title: "PROCES TWORZENIA STRON INTERNETOWYCH W BYDGOSZCZY",
    desc: "Tworzenie stron internetowych w Bydgoszczy",
    question: "Chcesz stworzyć profesjonalną stronę internetową w Bydgoszczy?",
    elements: [
      {
        icon: "mdi:clipboard-text",
        title: "Analiza potrzeb klienta",
        desc: "Na początku poznajemy specyfikę Twojej działalności oraz cele biznesowe, aby stworzyć stronę internetową w Bydgoszczy dopasowaną do Twoich oczekiwań."
      },
      {
        icon: "solar:pallete-2-bold",
        title: "Projekt graficzny",
        desc: "Projektujemy nowoczesne, responsywne i przyciągające uwagę layouty, które wyróżnią Twoją firmę. Każda strona internetowa jest tworzona z myślą o przejrzystości i wygodzie użytkownika."
      },
      {
        icon: "fa6-solid:laptop-code",
        title: "Programowanie",
        desc: "Wdrażamy stronę z użyciem najnowszych technologii. Dbamy o szybkość działania i bezpieczeństwo strony, zapewniając pełną funkcjonalność."
      },
      {
        icon: "material-symbols:rocket",
        title: "Wdrożenie i wsparcie",
        desc: "Publikujemy gotową stronę w Bydgoszczy i oferujemy pomoc techniczną po jej uruchomieniu, aby wszystko działało sprawnie od samego początku."
      },
    ],
  },
  offer: {
    desc: "Tworzymy nowoczesne, szybkie i przyjazne SEO strony internetowe, które przyciągną klientów z Bydgoszczy i okolic. Specjalizujemy się w:",
    elements: [
      {
        title: "Strony wizytówki",
        desc: "Idealne dla małych firm i freelancerów z Bydgoszczy, które chcą zaprezentować się online.",
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
        desc: "Masz pytania? Chcesz poznać koszt strony dostosowanej do Twoich potrzeb? Wypełnij formularz, a przygotujemy dla Ciebie spersonalizowaną ofertę dla strony internetowej w Bydgoszczy!",
        bg: fifthCard
      },
    ],
  },
  accordion: {
    elements: [
      {
        id: 1,
        question: "Jak długo trwa stworzenie strony internetowej w Bydgoszczy?",
        answer: "Czas realizacji zależy od skomplikowania projektu oraz Twoich indywidualnych wymagań. Standardowo proces ten trwa od kilku tygodni do kilku miesięcy. Po wstępnej analizie potrzeb możemy przedstawić dokładniejszy harmonogram."
      },
      {
        id: 2,
        question: "Ile kosztuje strona internetowa w Bydgoszczy?",
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
      <CityComponent city="w Bydgoszczy" />
      <WhyCity data={cityData.firstSection} />
      <SliderSection data={cityData.technologies} />
      <ProcessCity data={cityData.process} />
      <OfferCity data={cityData.offer} />
      <CityPortfolio city="w Bydgoszczy" />
      <CityFaq data={cityData.accordion} />
      <section className='w-[1240px] 2xl:w-[960px] lg:w-[90%] mx-auto'>
        <Cooperate />

      </section>
    </>
  )
}

export default page
'use client'

import React, { useState } from 'react'
import Heading from '@components/Heading'
import ButtonPrice from '@components/offer/ButtonPrice';
import Cards from '@components/offer/Cards'
import DetailsOffer from '@components/offer/DetailsOffer';
import InfoAboutOffer from '@components/offer/InfoAboutOffer';

import lionCub from '@public/assets/images/offer/lionCub.webp'
import lion from '@public/assets/images/offer/lion.webp'

const shops = () => {
  const [isNetto, setIsNetto] = useState(true);

  const tooglePrice = () => setIsNetto(!isNetto);

  const cardsSwitcher = [
    {
      title: 'Pakiet "Lwiątko"',
      desc: 'Ten pakiet jest doskonałym rozwiązaniem dla małych sklepów i przedsiębiorstw, które potrzebują funkcjonalnych, ale łatwych w zarządzaniu witryn e-commerce. Obejmuje:',
      priceNetto: '4500 zł',
      priceBrutto: '5535 zł',
      points: [
        'Szablon',
        'Podstawowe SEO',
        'Do 30 produktów',
        'Integracja z systemem płatności, wysyłek',
      ],
      linkText: 'Lwiątko',
      link: '#lionCub',
    },
    {
      title: 'Pakiet "Lew"',
      desc: 'Ten pakiet zapewnia bardziej zaawansowane rozwiązania, które są idealne dla średniej wielkości sklepów internetowych pragnących zwiększyć swoją widoczność w sieci.',
      priceNetto: '7500 zł',
      priceBrutto: '9225 zł',
      points: [
        'zawartość pakietu "Lwiątko"',
        'Podstawowe SEO',
        'Bez limitu produktów',
        'Szkolenie z obsługi',
        'Prosty projekt graficzny',
      ],
      linkText: 'Lew',
      link: '#lion',
    },
  ]

  const offer = [
    {
      id: 'lionCub',
      img: lionCub,
      title: 'Pakiet "Lwiątko"',
      desc: 'Ten pakiet jest doskonałym rozwiązaniem dla małych sklepów i przedsiębiorstw, które potrzebują funkcjonalnych, ale łatwych w zarządzaniu witryn e-commerce.',
      offer: [
        {
          name: 'Sklep internetowy',
          list: [
            {
              sectionType: 'Zakres:',
              description: 'Sklep internetowy, obejmujący wprowadzenie do 30 produktów oraz braku limitu kategorii',
            },
            {
              sectionType: 'Projekt Graficzny:',
              description: 'Szablonowy wyglad projektu',
            },
            {
              sectionType: 'Responsywność:',
              description: 'Sklep zoptymalizowany pod kątem wszystkich rodzajów urządzeń, w tym smartfonów, tabletów i komputerów.',
            }
          ],
        },
        {
          name: 'Zarządzanie treścią',
          list: [
            {
              sectionType: 'Wordpress (woocoomerce) lub Prestashop:',
              description: 'Implementacja intuicyjnego systemu zarządzania treścią, który umożliwia zarządzanie treścią bez potrzeby znajomości kodu.',
            },
            {
              sectionType: 'Szkolenie:',
              description: 'Trwające do 1 godziny, obejmujące dodawanie treści, edytowanie sklepu i zarządzanie mediami.',
            }
          ]
        },
        {
          name: 'Optymalizacja',
          list: [
            {
              sectionType: 'SEO:',
              description: 'Wstępna optymalizacja SEO, w tym meta tytuły, opisy, nagłówki H1-H6, tagi alt dla obrazów oraz mapa witryny XML.',
            },
            {
              sectionType: 'Szybkość sklepu:',
              description: 'Podstawowa optymalizacja szybkości ładowania sklepu, w tym kompresja obrazów, minimalizacja plików CSS i JS.',
            }
          ]
        },
        {
          name: 'Wsparcie techniczne przez 1 rok',
          list: [
            {
              sectionType: 'Administracja strony:',
              description: 'Regularne aktualizowanie wtyczek, co miesięczny backup sklepu oraz naprawa ewentualnych błędów.',
            },
            {
              sectionType: 'Aktualizacje:',
              description: 'Dodawanie nowych treści (do 2 godzin miesięcznie), takich jak aktualizacje tekstów i zdjęć.',
            },
          ]
        },
        {
          name: 'Dodatkowe usługi',
          list: [
            {
              sectionType: 'Integracja:',
              description: 'System płatności oraz wysyłek.',
            },
            {
              sectionType: 'Certyfikat SSL:',
              description: 'Integracja certyfikatu SSL. Koszt zakupu po stronie klienta.',
            }
          ]
        },
        {
          name: 'Dodatkowe koszta',
          list: [
            {
              sectionType: 'Media:',
              description: 'Koszt dodatkowy za tworzenie mediów, jeśli klient nie dostarcza materiałów.'
            }
          ]
        },
      ],
      priceNetto: '4500 zł',
      priceBrutto: '5535 zł',
    },
    {
      id: 'lion',
      img: lion,
      title: 'Pakiet "Lew"',
      desc: 'Ten pakiet zapewnia bardziej zaawansowane rozwiązania, które są idealne dla średniej wielkości sklepów internetowych pragnących zwiększyć swoją widoczność w sieci.',
      descBold: 'W skład tego pakietu wchodzi również zawartość pakietu “Lwiątko”.',
      offer: [
        {
          name: 'Sklep internetowy',
          list: [
            {
              sectionType: 'Zakres:',
              description: 'Sklep internetowy, obejmujący wprowadzenie nielimitowanej liczby produktów oraz braku limitu kategorii',
            },
            {
              sectionType: 'Projekt Graficzny:',
              description: 'Prosty projekt graficzny z podstawowymi elementami wizualnymi.',
            },
            {
              sectionType: 'Responsywność:',
              description: 'Pełna responsywność, z dodatkowym testowaniem i optymalizacją pod kątem różnych urządzeń i przeglądarek.',
            }
          ],
        },
        {
          name: 'Zarządzanie treścią',
          list: [
            {
              sectionType: 'Dodatkowe funkcjonalności:',
              description: 'Uzupełnić',
            },
            {
              sectionType: 'Szkolenie:',
              description: 'Trwające do 3 godzin, obejmujące dodawanie treści, edytowanie strony i zarządzanie mediami.',
            }
          ]
        },
        {
          name: 'Wsparcie techniczne przez 1 rok',
          list: [
            {
              sectionType: 'Administracja strony:',
              description: 'Regularne aktualizowanie wtyczek, co miesięczny backup strony oraz naprawa ewentualnych błędów.',
            },
            {
              sectionType: 'Aktualizacje:',
              description: 'Dodawanie nowych treści (do 5 godzin miesięcznie), takich jak aktualizacje tekstów i zdjęć.'
            },
          ]
        },
        {
          name: 'Dodatkowe usługi',
          list: [
            {
              sectionType: 'Integracja:',
              description: 'Google Search Console oraz Google Analytics',
            }
          ]
        },
        {
          name: 'Dodatkowe koszta',
          list: [
            {
              sectionType: 'Media:',
              description: 'Koszty związane z tworzeniem treści, takich jak artykuły blogowe, opisy produktów. Cena ustalana indywidualnie w zależności od ilości i złożoności treści.'
            }
          ]
        },
      ],
      priceNetto: '7500 zł',
      priceBrutto: '9225 zł',
    },
  ]
  return (
    <>
      <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px]'>
        <article className='flex flex-col w-[1240px] mt-[100px]'>
          <Heading title="Sklepy" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
          <div className='mt-[50px]'>
            <p className='text-[18px] font-light'>Nasza oferta obejmuje różnorodne pakiety usług tworzenia sklepów internetowych, które zostały zaprojektowane z myślą o indywidualnych potrzebach klientów oraz specyfice ich branży. Oferujemy rozwiązania, które umożliwiają skuteczne prowadzenie sprzedaży online, niezależnie od wielkości Twojego biznesu. Dzięki naszym usługom, Twoja firma zyska profesjonalnie zaprojektowany sklep, który będzie intuicyjny w obsłudze zarówno dla Ciebie, jak i Twoich klientów.</p>
            <ButtonPrice isNetto={isNetto} tooglePrice={tooglePrice} />
            <Cards isNetto={isNetto} offer={cardsSwitcher} />
            <InfoAboutOffer />
          </div>
        </article>
        <article className='flex w-[1400px]'>
          <DetailsOffer offer={offer} isNetto={isNetto}/>
        </article>
      </section>
    </>
  )
}

export default shops
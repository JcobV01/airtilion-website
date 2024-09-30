'use client'

import Heading from '@components/Heading'
import ButtonPrice from '@components/offer/ButtonPrice'
import Cards from '@components/offer/Cards'
import DetailsOffer from '@components/offer/DetailsOffer'
import InfoAboutOffer from '@components/offer/InfoAboutOffer'
import React, { useRef, useState } from 'react'

import lionCub from '@public/assets/images/offer/lionCub.webp'
import lion from '@public/assets/images/offer/lion.webp'
import leader from '@public/assets/images/offer/leaderOfThePack.webp'
import DialogOffer from '@components/offer/DialogOffer'

const websites = () => {
  const [isNetto, setIsNetto] = useState(true);
  const [dialogTitle, setDialogTitle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const tooglePrice = () => setIsNetto(!isNetto);
  const dialogRef = useRef();

  const handleOpenDialog = (title) => {
    setIsOpen(true);
    setDialogTitle(title);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }

  const cardsSwitcher = [
    {
      title: 'Pakiet "Lwiątko"',
      desc: 'Ten pakiet jest idealny dla małych firm i osób, które potrzebują prostych, ale profesjonalnych stron internetowych. Obejmuje:',
      priceNetto: '1600 zł',
      priceBrutto: '1968 zł',
      points: [
        'Strona onepage lub do 6 podstron',
        'Implementacja mediów dostarczonych przez klienta',
        'Podstawowe SEO',
        'W przypadku CMS, krótkie szkolenie z obsługi',
      ],
      linkText: 'Lwiątko',
      link: '#lionCub',
    },
    {
      title: 'Pakiet "Lew"',
      desc: 'Oferuje bardziej rozbudowaną stronę, idealną dla firm średniej wielkości, które chcą zwiększyć swoją widoczność online.',
      priceNetto: '3000 zł',
      priceBrutto: '3690 zł',
      points: [
        'Zawartość pakietu "Lwiątko"',
        'Do 12 podstron',
        'Podstawowe SEO',
        'Integracja z Google Analytics / Google Search Console',
        'Integracja z social mediami',
      ],
      linkText: 'Lew',
      link: '#lion',
    },
    {
      title: 'Pakiet "Przywódca Stada"',
      desc: 'Pakiet "Przywódca stada" to nasze najbardziej zaawansowane rozwiązanie, stworzone z myślą o firmach, które potrzebują indywidualnie dopasowanej strony internetowej o najwyższej jakości.',
      priceNetto: 'od 5000 zł',
      priceBrutto: 'od 6150 zł',
      points: [
        'Zawartość pakietu "Lwiątko" oraz "Lew"',
        'Nielimitowana ilość podstron',
        'Zaawansowane SEO',
        'Integracja z, np. płatnościami online',
        'Indywidualne wtyczki',
      ],
      linkText: 'Przywódca Stada',
      link: '#leader',
    },
  ]

  const offer = [
    {
      id: 'lionCub',
      img: lionCub,
      title: 'Pakiet "Lwiątko"',
      desc: 'Ten pakiet jest idealny dla małych firm i osób, które potrzebują prostych, ale profesjonalnych stron internetowych.',
      offer: [
        {
          name: 'Strona internetowa',
          list: [
            {
              sectionType: 'Zakres:',
              description: 'Strona jednostronicowa (onepage) lub do 6 podstron, obejmująca takie sekcje jak, np.: “O nas”, “Usługi”, “Kontakt”, “Opinie” i “Blog”.',
            },
            {
              sectionType: 'Projekt Graficzny:',
              description: 'Indywidualny projekt graficzny zgodny z identyfikacją wizualną klienta, uwzględniający kolorystykę, typografię i układ graficzny.',
            },
            {
              sectionType: 'Responsywność:',
              description: 'Strona zoptymalizowana pod kątem wszystkich rodzajów urządzeń, w tym smartfonów, tabletów i komputerów.',
            }
          ],
        },
        {
          name: 'Zarządzanie treścią',
          list: [
            {
              sectionType: 'Wordpress:',
              description: 'Możliwość implementacja intuicyjnego systemu zarządzania treścią, który umożliwia zarządzanie treścią bez potrzeby znajomości kodu.',
            },
            {
              sectionType: 'React lub inne:',
              description: 'W przypadku stron budowanych na technologiach takich jak React. Istnieje możliwość stworzenia indywidualnego systemu zarządzania treścią po wcześniejszym uzgodnieniu - za dodatkową opłatą.',
            },
            {
              sectionType: 'Szkolenie:',
              description: 'Tylko w przypadku implementacji systemu CMS, trwające do 1 godziny, obejmujące dodawanie treści, edytowanie strony i zarządzanie mediami.',
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
              sectionType: 'Szybkość strony:',
              description: 'Podstawowa optymalizacja szybkości ładowania strony, w tym kompresja obrazów, minimalizacja plików CSS i JS.',
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
              description: 'Dodawanie nowych treści (do 2 godzin miesięcznie), takich jak aktualizacje tekstów i zdjęć.',
            },
          ]
        },
        {
          name: 'Dodatkowe usługi',
          list: [
            {
              sectionType: 'Bezpieczeństwo:',
              description: 'Podstawowa konfiguracja zabezpieczeń.',
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
              description: 'Koszt dodatkowy za tworzenie mediów, jeśli klient nie dostarcza materiałów (około 100 zł za pakiet podstawowy mediów).'
            }
          ]
        },
      ],
      priceNetto: '1600 zł',
      priceBrutto: '1968 zł',
    },
    {
      id: 'lion',
      img: lion,
      title: 'Pakiet "Lew"',
      desc: 'Rozszerzony pakiet idealny dla firm potrzebujących większej liczby podstron, zaawansowanych funkcji oraz lepszej integracji z narzędziami marketingowymi.',
      descBold: 'W skład tego pakietu wchodzi również zawartość pakietu “Lwiątko”.',
      offer: [
        {
          name: 'Strona internetowa',
          list: [
            {
              sectionType: 'Zakres:',
              description: 'Strona do 12 podstron. W ramach tego pakietu możliwe jest stworzenie bardziej złożonych sekcji, takich jak "Sklep", "FAQ", "Opinie klientów".',
            },
            {
              sectionType: 'Projekt Graficzny:',
              description: 'Indywidualny projekt graficzny z zaawansowanymi elementami wizualnymi, takimi jak infografiki, ikony i interaktywne elementy, dopasowanymi do potrzeb klienta.',
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
              description: 'Takie jak niestandardowe formularze, portale, rozbudowane moduły zarządzania treścią, itp.',
            },
            {
              sectionType: 'Szkolenie:',
              description: 'Tylko w przypadku implementacji systemu CMS, trwające do 2 godzin, obejmujące dodawanie treści, edytowanie strony i zarządzanie mediami.',
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
              sectionType: 'Integracja z Social Mediami takimi jak:',
              description: 'Facebook, Instagram itp.',
            },
            {
              sectionType: 'Analytics:',
              description: 'Integracja z Google Analytics i Google Search Console.',
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
      priceNetto: '3000 zł',
      priceBrutto: '3690 zł',
    },
    {
      id: 'leader',
      img: leader,
      title: 'Pakiet "Przywódca Stada"',
      desc: 'Pakiet "Przywódca stada" to nasze najbardziej zaawansowane rozwiązanie, stworzone z myślą o firmach, które potrzebują indywidualnie dopasowanej strony internetowej o najwyższej jakości.',
      descBold: 'Obejmuje wszystkie elementy pakietów "Lwiątko" i "Lew".',
      offer: [
        {
          name: 'Strona internetowa',
          list: [
            {
              sectionType: 'Zakres:',
              description: 'Nielimitowana liczba podstron. Idealny do budowy złożonych serwisów, takich jak, platformy e-learningowe czy zaawansowane portale z rozbudowaną funkcjonalnością.',
            },
            {
              sectionType: 'Projekt Graficzny:',
              description: 'Indywidualny projekt graficzny z pełną personalizacją, obejmujący interaktywne elementy, animacje oraz unikalne efekty wizualne.',
            },
          ],
        },
        {
          name: 'Zarządzanie treścią',
          list: [
            {
              sectionType: 'Szkolenie:',
              description: 'Tylko w przypadku implementacji systemu CMS, trwające do 4 godzin, obejmujące dodawanie treści, edytowanie strony i zarządzanie mediami.',
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
              description: 'Dodawanie nowych treści (do 10 godzin miesięcznie), takich jak aktualizacje tekstów i zdjęć.'
            },
          ]
        },
        {
          name: 'Dodatkowe koszta',
          list: [
            {
              sectionType: 'Indywidualne rozwiązania:',
              description: 'Tworzenie i wdrożenie niestandardowych modułów.'
            },
            {
              sectionType: 'Systemy zarządzania:',
              description: 'Integracja z zaawansowanymi systemami zarządzania treścią oraz automatyzacji procesów.'
            },
            {
              sectionType: 'Zaawansowane funkcjonalności:',
              description: 'Koszty zależne od wymagań dotyczących dodatkowych funkcji i integracji, takich jak niestandardowe rozwiązania technologiczne.'
            }
          ]
        },
      ],
      priceNetto: 'od 5000 zł',
      priceBrutto: 'od 6150 zł',
    },
  ]

  return (
    <>
      <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px] xl:gap-[100px] fold:w-[100%] z-10'>
        <article className='flex flex-col w-[1240px] mt-[150px] xl:w-[90%]'>
          <Heading title="Strony Internetowe" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
          <div className='mt-[50px]'>
            <p className='text-[18px] font-light'>Nasza oferta obejmuje trzy zróżnicowane pakiety usług tworzenia stron internetowych, które zostały starannie zaprojektowane, aby sprostać różnorodnym potrzebom oraz budżetom naszych klientów. Każdy z pakietów oferuje unikalne rozwiązania, dostosowane zarówno do wymagań małych firm, jak i większych przedsiębiorstw, dzięki czemu możemy zapewnić kompleksową obsługę na każdym etapie rozwoju Twojej marki online.</p>
            <ButtonPrice isNetto={isNetto} tooglePrice={tooglePrice} />
            <Cards offer={cardsSwitcher} isNetto={isNetto} handleOpenDialog={handleOpenDialog} />
            <InfoAboutOffer />
          </div>
        </article>
        <article className='flex w-[1400px] 2xl:w-[95%]'>
          <DetailsOffer offer={offer} isNetto={isNetto} handleOpenDialog={handleOpenDialog} />

          <DialogOffer dialogRef={dialogRef} handleCloseDialog={handleCloseDialog} title={dialogTitle} isOpen={isOpen} />
        </article>
      </section>


      <section>
        {/* Oferta websites - 1 linia */}

        <div className='absolute top-[1050px] xl:top-[800px] fold:hidden lg:top-[1200px] left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1864 1849" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Oferta websites - 2 linia */}

        <div className='absolute top-[2250px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none" className='w-full'>
            <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Oferta websites - 3 linia */}

        <div className='absolute top-[3250px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1533" viewBox="0 0 1864 1133" fill="none" className='w-full'>
            <path d="M2647.39 1089.59C2406.7 1157.58 2042.76 1145.41 1774.92 1024.24C1565.68 929.589 1342.08 787.24 1032.99 734.185C792.739 692.946 461.368 498.878 336.2 198.315C175.45 -187.693 40.9091 121.159 -133.685 85.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1169.59C2406.7 1237.58 2042.76 1225.41 1774.92 1104.24C1565.68 1009.59 1342.08 867.24 1032.99 814.185C792.739 772.946 461.368 578.878 336.2 278.315C175.45 -107.693 40.9091 201.159 -133.685 165.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1249.59C2406.7 1317.58 2042.76 1305.41 1774.92 1184.24C1565.68 1089.59 1342.08 947.24 1032.99 894.185C792.739 852.946 461.368 658.878 336.2 358.315C175.45 -27.693 40.9091 281.159 -133.685 245.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1349.59C2406.7 1417.58 2042.76 1405.41 1774.92 1284.24C1565.68 1189.59 1342.08 1047.24 1032.99 994.185C792.739 952.946 461.368 758.878 336.2 458.315C175.45 72.307 40.9091 381.159 -133.685 345.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>
      </section>

    </>
  )
}

export default websites
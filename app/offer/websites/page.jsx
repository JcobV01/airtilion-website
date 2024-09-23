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
      <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px] xl:gap-[100px] fold:w-[100%]'>
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
    </>
  )
}

export default websites
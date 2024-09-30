'use client'

import Heading from '@components/Heading'
import CardsWithoutPrice from '@components/offer/CardsWithoutPrice'
import DialogOffer from '@components/offer/DialogOffer'
import React, { useRef, useState } from 'react'

const services = () => {
  const [dialogTitle, setDialogTitle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      title: 'Optymalizacja strony',
      desc: 'Chcesz, aby Twoja strona internetowa działała szybciej i lepiej? Nasze usługi optymalizacji strony są stworzone właśnie dla Ciebie!',
      price: '50 zł netto za godz.',
      points: [
        'Optymalizacja SEO',
        'Poprawa wydajności strony',
        'Naprawa błędów',
        'Aktualizacja wtyczek / CMS-a',
      ],
    },
    {
      title: 'Opieka nad Stroną',
      desc: 'Chcesz mieć pewność, że Twoja strona działa sprawnie i jest zawsze aktualna? Nasza kompleksowa opieka nad stroną internetową zapewni Ci spokój i bezpieczeństwo!',
      price: 'Cena usługi ustalana jest indywidualnie w zależności od zakresu potrzeb. Skontaktuj się z nami, aby uzyskać szczegółową wycenę.',
      points: [
        'Dodawanie treści',
        'Wsparcie techniczne',
        'Regularne aktualizacje',
        'Tworzenie kopii zapasowej',
      ],
    },
    {
      title: 'Wizualizacje',
      desc: 'Oferujemy wizualizację strony internetowej / sklepu / aplikacji mobilnej, która pozwoli Ci zobaczyć, jak Twoja witryna będzie wyglądać.',
      price: 'Cena usługi ustalana jest indywidualnie w zależności od zakresu potrzeb. Skontaktuj się z nami, aby uzyskać szczegółową wycenę.',
      points: [
        'Kilka wersji projektu',
        'Wersje projektu na urządzeniach mobilynch',
        'Możliwość poprawek',
        'Opis funkcjonalności',
      ],
    },
  ]

  return (
    <>
      <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px] xl:gap-[100px] fold:w-[100%] z-10'>
        <article className='flex flex-col w-[1240px] mt-[100px] xl:w-[90%]'>
          <Heading title="Pozostałe usługi" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
          <div className='mt-[50px]'>
            <p className='text-[18px] font-light'>Zainteresowany optymalizacją lub kompleksową opieką nad swoją stroną internetową? Skorzystaj z naszej oferty, aby zapewnić sobie pełną funkcjonalność i wydajność witryny. Wybierz odpowiedni pakiet, a my zajmiemy się resztą!</p>
            <CardsWithoutPrice offer={cardsSwitcher} handleOpenDialog={handleOpenDialog} />
            <DialogOffer dialogRef={dialogRef} handleCloseDialog={handleCloseDialog} title={dialogTitle} isOpen={isOpen} />
          </div>
        </article>
      </section>

      <section>
        {/* Oferta services - 1 linia */}

        <div className='absolute top-[800px] xl:top-[1200px] lg:top-[1800px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none" className='w-full'>
            <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

      </section>
    </>
  )
}

export default services
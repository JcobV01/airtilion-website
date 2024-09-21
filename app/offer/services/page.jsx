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
      <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px]'>
        <article className='flex flex-col w-[1240px] mt-[100px]'>
          <Heading title="Pozostałe usługi" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
          <div className='mt-[50px]'>
            <p className='text-[18px] font-light'>Zainteresowany optymalizacją lub kompleksową opieką nad swoją stroną internetową? Skorzystaj z naszej oferty, aby zapewnić sobie pełną funkcjonalność i wydajność witryny. Wybierz odpowiedni pakiet, a my zajmiemy się resztą!</p>
            <CardsWithoutPrice offer={cardsSwitcher} handleOpenDialog={handleOpenDialog} />
            <DialogOffer dialogRef={dialogRef} handleCloseDialog={handleCloseDialog} title={dialogTitle} isOpen={isOpen} />
          </div>
        </article>
      </section>
    </>
  )
}

export default services
"use client"

import EncourageCard from './components/EncourageCard';
import useIntersectionObserver from '@hooks/useObserver';

const data = [
    {
        image: "mdi:phone",
        title: "Skontaktuj się z nami",
        desc: "Wybierz pakiet który Cię najbardziej interesuje. Jeśli nie wiesz, który będzie dla Ciebie idealny <span>nie przejmuj się, pomożemy"
    },

    {
        image: "fa:gears",
        title: "Uzgodnij szczegóły",
        desc: "Owocna współpraca w naszej firmie zawsze zaczyna się od dokładnej analizy. Podczas rozmowy z nami ustalimy wszystkie szczegóły, tak aby strona była idealna"
    },

    {
        image: "jam:screen-f",
        title: "Zaakceptuj projekt",
        desc: "Przed rozpoczęciem pracy w kodzie zawsze tworzymy wizualizację strony. Na tym etapie klient widzi jak będzie wyglądał jego projekt. Jest to też czas na poprawki i dostosowania"
    },

    {
        image: "fluent:lightbulb-checkmark-20-filled",
        title: "Ciesz się nową stroną",
        desc: "Po akceptacji projektu zabieramy się do pracy nad kodem. Po wszystkim klient dostaje gotowy produkt, my ogarniamy wszystko.  Na tym etapie możliwe są do wprowadzenia darmowe poprawki na życzenie klienta"
    },
]

const Encourage = () => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
      });
  return (
    <section ref={ref} className={`w-dvh flex justify-center relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <article className='flex flex-col items-center px-[70px] pb-[70px] pt-[30px] gap-[50px] w-[1240px] 2xl:w-[80%] radial-gradient relative xl:px-[50px] xl:pb-[50px] fold:w-[90%]'>
            <p className='text-[15px] text-center font-extralight lg:text-[13px]'>Od posiadania swojej własnej, nowoczesnej strony dzielą Cię już tylko 4 kroki: </p>
            <div className='flex gap-[50px] items-start lg:flex-wrap'>
                {data.map((card, index) => (
                    <EncourageCard image={card.image} title={card.title} desc={card.desc} key={index}/>
                ))}
            </div>
        </article>
    </section>
  )
}

export default Encourage

import phone from '@public/assets/icons/home/phone.png';
import gears from '@public/assets/icons/home/gears.png';
import screen from '@public/assets/icons/home/screen.png';
import bulb from '@public/assets/icons/home/bulb.png';
import EncourageCard from './components/EncourageCard';

const data = [
    {
        image: phone,
        title: "Skontaktuj się z nami",
        desc: "Wybierz pakiet który Cię najbardziej interesuje. Jeśli nie wiesz, który będzie dla Ciebie idealny <span>nie przejmuj się, pomożemy"
    },

    {
        image: gears,
        title: "Uzgodnij szczegóły",
        desc: "Owocna współpraca w naszej firmie zawsze zaczyna się od dokładnej analizy. Podczas rozmowy z nami ustalimy wszystkie szczegóły, tak aby strona była idealna"
    },

    {
        image: screen,
        title: "Zaakceptuj projekt",
        desc: "Przed rozpoczęciem pracy w kodzie zawsze tworzymy wizualizację strony. Na tym etapie klient widzi jak będzie wyglądał jego projekt. Jest to też czas na poprawki i dostosowania"
    },

    {
        image: bulb,
        title: "Ciesz się nową stroną",
        desc: "Po akceptacji projektu zabieramy się do pracy nad kodem. Po wszystkim klient dostaje gotowy produkt, my ogarniamy wszystko.  Na tym etapie możliwe są do wprowadzenia darmowe poprawki na życzenie klienta"
    },
]

const Encourage = () => {
  return (
    <section className='w-dvh flex justify-center relative z-10'>
        <article className='flex flex-col items-center px-[70px] pb-[70px] pt-[30px] gap-[50px] radial-gradient relative'>
            <p className='text-[15px] font-extralight'>Od posiadania swojej własnej, nowoczesnej strony dzielą Cię już tylko 4 kroki: </p>
            <div className='flex gap-[50px] w-[1100px] items-start'>
                {data.map((card, index) => (
                    <EncourageCard image={card.image} title={card.title} desc={card.desc} key={index}/>
                ))}
            </div>
        </article>
    </section>
  )
}

export default Encourage
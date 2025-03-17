import React from 'react'
import Subtitle from './Subtitle'

import ButtonArea from './ButtonArea'

const CityPortfolio = ({city}) => {
  return (
    <section className='relative z-10'>
        <article className='w-[1240px] mx-auto xl:w-[1000px] lg:w-[90%]'>
            <Subtitle subtitle="PORTFOLIO" />
            <h3 className='mt-[16px] text-[30px] font-semibold lg:text-[25px]'>Chcesz poznać nasze realizacje?</h3>
            <p className='mt-[8px] font-light text-[16px] sm:text-[14px]'>Zobacz wybrane realizacje i przekonaj się, jak możemy pomóc rozwinąć Twoją działalność online.</p>
            <p className='font-light text-[16px] lg:mt-[8px] sm:text-[14px]'><span className='font-bold'>Masz pomysł na stronę internetową {city}?</span> Skontaktuj się z nami i stwórzmy razem coś wyjątkowego!</p>
            
            <div className='mt-[32px]'>
                <ButtonArea text="Przejdź do portfolio" width={270} />
            </div>

        </article>
    </section>
  )
}

export default CityPortfolio
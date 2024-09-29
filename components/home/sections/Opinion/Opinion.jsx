import Heading from '@components/Heading'
import React from 'react'
import Slider from './components/Slider'

const Opinion = () => {
  return (
    <section className='w-[1400px] 2xl:w-[80%] m-auto flex flex-col gap-[50px] relative z-10'>
        <Heading title="Opinie" subtitle="POZNAJ OPINIE NASZYCH KLIENTÓW" />
        <p className='text-[15px] lg:text-[13px]'>Decyzja o wyborze odpowiedniej usługi lub produktu nie jest łatwa. Zanim podejmiesz decyzję, warto dowiedzieć się, co mówią o nas Ci, którzy już skorzystali z naszych usług. Ich rekomendacje to najlepszy dowód na jakość i profesjonalizm, które oferujemy.</p>
        <article>
            <Slider />
        </article>
    </section>
  )
}

export default Opinion
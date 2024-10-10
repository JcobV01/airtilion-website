"use client"

import Heading from '@components/Heading'
import React from 'react'
import Slider from './components/Slider'
import useIntersectionObserver from '@hooks/useObserver';

const Opinion = () => {
  const [ ref, isVisible ] = useIntersectionObserver();

  return (
    <section ref={ref} className={`w-[1400px] xxl:w-[1500px] 2xl:w-[80%] m-auto flex flex-col gap-[50px] relative z-10 transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`}>
        <Heading title="Opinie" subtitle="POZNAJ OPINIE NASZYCH KLIENTÓW" />
        <p className='text-[15px] xxl:text-[20px] lg:text-[13px]'>Decyzja o wyborze odpowiedniej usługi lub produktu nie jest łatwa. Zanim podejmiesz decyzję, warto dowiedzieć się, co mówią o nas Ci, którzy już skorzystali z naszych usług. Ich rekomendacje to najlepszy dowód na jakość i profesjonalizm, które oferujemy.</p>
        {/* <article> */}
            <Slider />
        {/* </article> */}
    </section>
  )
}

export default Opinion
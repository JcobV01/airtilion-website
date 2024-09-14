import Heading from '@components/Heading'
import ButtonPrice from '@components/offer/ButtonPrice'
import Cards from '@components/offer/Cards'
import React from 'react'

const websites = () => {
  return (
    <>
      <section className='relative w-[1240px] m-auto flex gap-[150px] mb-[20px]'>
        <article className='flex flex-col mt-[100px]'>
          <Heading title="Strony Internetowe" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
          <div className='mt-[50px]'>
            <p className='text-[18px] font-light'>Nasza oferta obejmuje trzy zróżnicowane pakiety usług tworzenia stron internetowych, które zostały starannie zaprojektowane, aby sprostać różnorodnym potrzebom oraz budżetom naszych klientów. Każdy z pakietów oferuje unikalne rozwiązania, dostosowane zarówno do wymagań małych firm, jak i większych przedsiębiorstw, dzięki czemu możemy zapewnić kompleksową obsługę na każdym etapie rozwoju Twojej marki online.</p>
            <ButtonPrice />
            <Cards />
            <p className='text-[13px] text-[#ECD8AD] text-center'>*Ceny pakietów nie uwzględniają zakupu domeny oraz hostingu</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default websites
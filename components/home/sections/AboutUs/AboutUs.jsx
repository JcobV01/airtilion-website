import Heading from '@components/Heading'
import LightButton from '@components/LightButton'
import Image from 'next/image'
import React from 'react'

import mainImage from '@public/assets/images/aboutUsMain.webp'
import Mission from './sections/Mission'
import Work from './sections/Work'
import People from './sections/People'
import Cooperate from './sections/Cooperate'

const AboutUs = () => {
  return (
    <section className='relative w-[1240px] 2xl:w-[80%] m-auto flex flex-col gap-[150px] z-10'>
      <article className='flex gap-[50px] z-10 xl:gap-[30px] lg:gap-[50px] lg:flex-col'>
        <Image src={mainImage} width={420} height={290} className='rounded-[10px] xl:w-[400px] xl:h-[400px] lg:w-full lg:h-[300px] object-cover' />
        <div className='flex flex-col gap-[50px]'>
          <Heading title="O nas" subtitle="poznaj naszą firmę" />
          <p className='text-[16px] font-light xl:text-[15px] lg:text-[13px]'>Jesteśmy zespołem pasjonatów technologii, tworzącym strony i aplikacje internetowe od A do Z, które są dostosowane do Twoich potrzeb. Od wielu lat jesteśmy zafascynowani tą branżą, zauważyliśmy przez ten czas, że coraz więcej firm świadczących podobne usługi staje się coraz bardziej leniwych i skupia się tylko na zyskach, zapominając o jakości i kliencie. Airtilion powstał żeby to zmienić. </p>
          <LightButton text="Napisz do nas" paddingBlock="11px" paddingInline="30px" rounded="5px" isInCardsOffer={false} />
        </div>
      </article>

      <Mission />
      <Work />
      <People />
      <Cooperate />

      
    </section>
  )
}

export default AboutUs
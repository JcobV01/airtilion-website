import Heading from '@components/Heading'
import LighButton from '@components/LighButton'
import Image from 'next/image'
import React from 'react'

import mainImage from '@public/assets/images/aboutUsMain.webp'
import Mission from './sections/Mission'
import Work from './sections/Work'
import People from './sections/People'
import Cooperate from './sections/Cooperate'

const AboutUs = () => {
  return (
    <section className='relative w-[1240px] m-auto flex flex-col gap-[150px] z-10'>
        <article className='flex gap-[50px]'>
            <Image src={mainImage} width={420} height={290} className='rounded-[10px]'/>
            <div className='flex flex-col gap-[50px]'>
                <Heading title="O nas" subtitle="poznaj naszą firmę"/>
                <p className='text-[16px] font-light'>Jesteśmy zespołem pasjonatów technologii, tworzącym strony i aplikacje internetowe od A do Z, które są dostosowane do Twoich potrzeb. Od wielu lat jesteśmy zafascynowani tą branżą, zauważyliśmy przez ten czas, że coraz więcej firm świadczących podobne usługi staje się coraz bardziej leniwych i skupia się tylko na zyskach, zapominając o jakości i kliencie. Airtilion powstał żeby to zmienić. </p>
                <LighButton text="Napisz do nas"/>
            </div>
        </article>

        <Mission/>
        <Work/>
        <People/>
        <Cooperate/>
    </section>
  )
}

export default AboutUs
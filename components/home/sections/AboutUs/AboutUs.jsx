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
      {/* <Cooperate /> */}

      <div className='absolute top-0 left-[50%] translate-x-[-50%] z-[1]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1864 1849" fill="none">
          <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
          <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
          <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
          <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
        </svg>




      </div>
    </section>
  )
}

export default AboutUs
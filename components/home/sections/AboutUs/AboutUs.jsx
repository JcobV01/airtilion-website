"use client"

import Image from 'next/image'
import React from 'react'
import mainImage from '@public/assets/images/aboutUsMain.webp'
import useIntersectionObserver from '@hooks/useObserver'
import dynamic from 'next/dynamic'

const Heading = dynamic(() => import('@components/Heading'), { ssr: true, loading: () => <div className="loader"></div> });
const LightButton = dynamic(() => import('@components/LightButton'), { ssr: true, loading: () => <div className="loader"></div> });
const Mission = dynamic(() => import('./sections/Mission'), { ssr: true, loading: () => <div className="loader"></div> });
const Work = dynamic(() => import('./sections/Work'), { ssr: true, loading: () => <div className="loader"></div> });
const People = dynamic(() => import('./sections/People'), { ssr: true, loading: () => <div className="loader"></div> });
const Cooperate = dynamic(() => import('./sections/Cooperate'), { ssr: true, loading: () => <div className="loader"></div> });


const AboutUs = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section id="o-nas" className='relative w-[1240px] 2xl:w-[80%] m-auto flex flex-col gap-[150px] z-10 observer-navbar xxl:w-[1500px]'>

      <article ref={ref} className={`relative flex gap-[50px] z-10 xl:gap-[30px] lg:gap-[50px] lg:flex-col about-section transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'
        }`}>
        <Image src={mainImage} width={420} height={420} alt="Obrazek wyróżniający sekcję O nas" className='w-[420px] h-[420px] rounded-[10px] xl:w-[400px] xl:h-[400px] lg:w-full lg:h-[300px] object-cover' />
        <div className='flex flex-col gap-[50px]'>
          <Heading title="O nas" subtitle="poznaj naszą firmę" id="about-title" />
          <p className='text-[16px] font-light xxl:text-[20px] xl:text-[15px] lg:text-[13px]'>Jesteśmy zespołem pasjonatów technologii, tworzącym strony i aplikacje internetowe od A do Z, które są dostosowane do Twoich potrzeb. Od lat z pasją działamy w branży IT, obserwując, jak rozwija się rynek usług technologicznych. Zauważyliśmy, że w dzisiejszych czasach szczególną wartość zyskuje podejście, które łączy wysoką jakość z dbałością o klienta. Właśnie dlatego powstał Airtilion – firma, która ma na celu dostarczanie solidnych rozwiązań technologicznych. Choć wywodzimy się z Tarnowa, nasze usługi świadczymy na terenie całej Polski, oferując indywidualne podejście i pełne zaangażowanie w każdy projekt. </p>
          <LightButton text="Napisz do nas" paddingBlock="11px" paddingInline="30px" rounded="5px" isInCardsOffer={false} link="/#kontakt" id="#kontakt" />
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
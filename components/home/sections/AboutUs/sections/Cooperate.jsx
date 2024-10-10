"use client"

import useIntersectionObserver from '@hooks/useObserver';
import coopBg from '@public/assets/images/cooperate-bg.webp'
import Link from 'next/link';


const Cooperate = () => {
  const [ ref, isVisible ] = useIntersectionObserver();

  return (
    <article ref={ref} className={`w-full h-[450px] lg:h-[350px] sm:h-auto sm:py-[50px] flex flex-col items-center relative px-[170px] xl:px-[100px] lg:px-[50px] sm:px-[30px] gap-[40px] xl:gap-[30px] justify-center bg-center transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'} xxl:bg-cover xxl:bg-no-repeat`} style={{backgroundImage: `url(${coopBg.src})`}}>
        <div className='z-10'>
            <p className='z-10 text-[#B8B8B8] lg:text-[13px] font-light text-center'>WSPÓŁPRACUJ Z NAMI</p>
            <h5 className='text-[40px] xl:text-[30px] lg:text-[25px] font-semibold z-10 text-center'>Zawsze jesteśmy gotowi stworzyć <br /> dla Ciebie najlepszy produkt</h5>
        </div>
        <p className='z-10 text-[15px] xxl:text-[20px] lg:text-[13px] font-extralight text-center'>Jeśli szukasz partnera, który pomoże Ci w stworzeniu wyjątkowej strony, aplikacji internetowej, aplikacji mobilnej lub innego projektu, skontaktuj się z nami. Jesteśmy gotowi, aby wspólnie z Tobą zrealizować nawet najbardziej ambitne pomysły.</p>
        <Link href="/home#contact" className='z-10 duration-700 hover:scale-90'>
          <button className='text-[15px] xxl:text-[20px] lg:text-[13px] sm:text-[11px] z-10 tracking-[1.5px] bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] px-[30px] py-[15px] rounded-[5px]'>Napisz do nas</button>
        </Link>
        <div className='absolute w-full h-full bg-[#00000099] top-0 left-0'></div>
    </article>
  )
}

export default Cooperate
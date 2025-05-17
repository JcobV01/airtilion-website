"use client";
import useIntersectionObserver from '@hooks/useObserver';
import Image from 'next/image';
import { unstable_noStore as noStore } from 'next/cache';

const Header = ({ title, subtitle, img, positionBottom = true, position = 'bottom'}) => {
  const [ref] = useIntersectionObserver({
    threshold: 0,
    triggerOnce: true
  });

  noStore();

  return (
    <header
      ref={ref}
      className={`w-full h-dvh relative flex justify-center items-center z-10 transition-opacity duration-1000`}
    >
      <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#040404] to-[#ffffff00] z-10'></div>
      <Image
        src={img.src}
        alt="Tło nagłówka"
        fill
        sizes="(max-width: 1024px) 100vw, 1920px"
        className={`absolute object-cover ${positionBottom ? 'object-bottom' : ''}`}
        priority
        quality={100}
        style={{
          objectPosition: positionBottom ? 'center bottom' : position == 'center' ? 'center center' : 'center calc(100%)',
          filter: "blur(0.3px) brightness(0.7)"
        }}
      />

      <article className='z-20 flex flex-col items-center justify-center sm:gap-[20px] relative header-border h-[230px] 2xl:h-[180px] md:h-[120px] sm:h-auto px-[120px] 2xl:px-[80px] md:px-[40px] lg:mx-[30px]'>
        <p className='text-[#E2B350] text-[15px] 2xl:text-[13px] lg:text-[10px] font-light lg:text-center'>
          TWÓJ SUKCES ZACZYNA SIĘ TUTAJ
        </p>
        <h1 className='text-[45px] font-semibold 2xl:text-[35px] lg:text-[30px] md:text-[25px] lg:text-center'>
          {title}
        </h1>
        <h2 className='text-[#E2B350] text-[20px] 2xl:text-[18px] lg:text-[13px] md:text-[11px] lg:text-center'>
          {subtitle}
        </h2>
      </article>
    </header>
  );
};

export default Header;
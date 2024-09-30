import React from 'react'
import useIntersectionObserver from '@hooks/useObserver';

const InfoAboutOffer = () => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
      });
    return (
        <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className='text-[13px] text-[#ECD8AD] text-center xl:mt-[10px] sm:mt-[20px]'>*Ceny pakietów nie uwzględniają zakupu domeny oraz hostingu</p>
            <p className='text-[18px] text-center font-light mt-[40px] xl:w-[90%] xl:mx-auto sm:text-[16px] fold:text-[14px]'>Nie znalazłeś oferty idealnie dopasowanej do Twoich potrzeb? Nie martw się! Kontynuując, masz możliwość dostosowania usługi do własnych wymagań w zakładce “Darmowa wycena”. Wybierz to, co najlepiej odpowiada Twoim oczekiwaniom i stwórz usługę, która będzie spełniała wszystkie Twoje potrzeby.</p>
            <div className='flex justify-center mt-[40px]'>
                <hr className='w-[900px] bg-[rgba(226,179,80,0.50)] h-[1px] border-none xl:w-[80%]'></hr>
            </div>
        </div>
    )
}

export default InfoAboutOffer
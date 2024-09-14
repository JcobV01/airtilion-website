import Heading from '@components/Heading'
import Image from 'next/image'
import React from 'react'

import bgTlo from '@public/assets/images/portfolio/organy.webp'
import bgBienko from '@public/assets/images/portfolio/bienko.webp'

import arrow from '@public/assets/icons/home/portfolio-arrow.png'
import Link from 'next/link'

const Portofolio = () => {
    return (
        <section className='z-10 w-[1240px] m-auto flex flex-col gap-[50px]'>
            <Heading title="Portfolio" subtitle="ZOBACZ NASZE REALIZACJE" />

            <p className='text-[15px]'>Zapraszamy do zapoznania się z naszymi najnowszymi realizacjami! Poniżej znajdziesz trzy najnowsze projekty, które pokazują naszą pasję do tworzenia nowoczesnych i funkcjonalnych stron oraz aplikacji internetowych. Każda realizacja posiada swoją dedykowaną podstronę z pełnym opisem i szczegółami projektu, abyś mógł dokładnie zobaczyć, jak podchodzimy do każdego zadania. Jeśli chcesz zobaczyć więcej naszych prac i dowiedzieć się, jak możemy pomóc Tobie w rozwoju Twojego biznesu, zapraszamy do odwiedzenia pełnego portfolio na dedykowanej podstronie.</p>

            <section className='pt-[50px]'>
                <article className='relative h-[550px] w-[1100px] m-auto hover:w-[1200px] transition-all duration-1000 cursor-pointer portfolio-item'>
                    <div className='w-[960px] h-[550px] relative px-[50px]'>
                        <span className='h-[2px] w-[50%] bg-[#E2B35080] z-10 block absolute top-[30px] left-[50%] translate-x-[-50%]'></span>

                        <div className='w-[300px] h-full flex flex-col gap-[30px] justify-center'>
                            <h5 className='text-[25px] relative z-10 kaushan'>Klaudiusz Bieńko</h5>
                            <p className='text-[15px] text-[#AFAFAF] relative z-10'>Nasza firma miała przyjemność stworzyć stronę internetową dla Klaudiusza Bieńko.  Strona została zaprojektowana tak, aby była intuicyjna i dostępna dla wszystkich użytkowników. Zastosowaliśmy responsywny design, który zapewnia komfort przeglądania zarówno na komputerach stacjonarnych, jak i urządzeniach mobilnych. Nasz zespół zadbał również o to, aby strona była zoptymalizowana, co ułatwia dotarcie do niej większej liczby zainteresowanych działalnością Klaudiusza.</p>
                        </div>

                        <Image src={bgTlo} width={960} height={550} alt="Tlo" className='w-full h-full absolute top-0 left-0 z-0' />
                        <div className='absolute w-full h-full top-0 left-0 z-1 bg-[#000000e0]'></div>
                        <span className='h-[2px] w-[50%] bg-[#E2B35080] z-10 block absolute bottom-[30px] left-[50%] translate-x-[-50%]'></span>

                        <Link href="#">
                            <div className='absolute bottom-[20px] right-[40px] flex gap-[15px]'>
                                <p className='text-[15px]'>Zobacz szczegóły</p>
                                <Image src={arrow} width={20} height={20} alt='Inkona strzałki' />
                            </div>
                        </Link>
                    </div>

                    <Image src={bgBienko} width={830} height={430} alt="Strona" className='absolute right-0 top-[50%] translate-y-[-50%] saturate-0' />
                </article>
            </section>

            <div className='flex flex-col gap-[30px] items-center mt-[50px]'>
                <h5 className='text-[20px] tracking-[3px] text-[#E2B350] text-center'>To tylko początek! Zobacz nasze pełne portfolio!</h5>
                <p className='text-[15px] tracking-[1.5px] text-center'>Prezentujemy tu jedynie nasze najnowsze projekty, aby dać Ci przedsmak naszych umiejętności i kreatywności. Każdy projekt to unikalna historia, dopasowana do indywidualnych potrzeb klientów. Chcesz zobaczyć więcej? </p>

                <div className='flex gap-[40px]'>
                    <p className='text-[15px] tracking-[1.5px]'>Przejdź do pełnego portfolio</p>
                    <Image src={arrow} width={20} height={20} alt='Inkona strzałki' />
                </div>

            </div>

        </section>
    )
}

export default Portofolio
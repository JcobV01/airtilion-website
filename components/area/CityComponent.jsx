import React from 'react'
import map from '@public/assets/images/area-map.webp'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const CityComponent = ({ city }) => {

    return (
        <section className='flex justify-center px-[130px] gap-[100px] min-h-dvh items-center 2xl:gap-[50px] 2xl:px-[100px] xl:flex-col xl:gap-[32px] sm:mt-[-128px] sm:gap-0 sm:px-[40px] z-10'>

            <article className={`flex flex-col gap-[32px] mt-[130px] flex-1 justify-center xl:items-center right-left-animation z-10`}>
                <h1 className='text-[48px] max-w-[550px] 2xl:text-[40px] xl:max-w-full lg:text-[30px] font-semibold xl:text-center'>Strony internetowe {city}</h1>
                <p className='text-[#E2B350] text-[17px] lg:text-[15px] font-light'>Tworzymy nowoczesne i eleganckie strony internetowe dopasowane do potrzeb klientów z regionu, łącząc funkcjonalność z estetyką. Oferujemy projektowanie i tworzenie stron internetowych od zera, korzystając z intuicyjnego systemu CMS. </p>
                <p className='text-[#E2B350] text-[17px] lg:text-[15px] font-light'>Każda strona www {city} jest w pełni responsywna, szybka i bezpieczna. Obsługujemy klientów z regionu oraz z całej Polski – nie mamy ograniczeń geograficznych. Skontaktuj się z nami, a omówimy szczegóły współpracy, opowiemy o procesie tworzenia strony i przedstawimy darmową wycenę!</p>
                <div className='flex gap-[64px] sm:flex-col sm:gap-[16px] sm:items-center'>
                    <Link href="/">
                        <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-700 flex gap-[10px] items-center w-max hover:scale-90 nav-button xl:text-[15px]'>
                            Poznaj szczegóły
                            <Icon icon="hugeicons:arrow-right-double" width="16" height="16" />
                        </button>
                    </Link>
                    <Link href="/oferta/strony-internetowe">
                        <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-700 flex gap-[10px] items-center w-max hover:scale-90 nav-button xl:text-[15px]'>
                            Sprawdź naszą ofertę
                            <Icon icon="hugeicons:arrow-right-double" width="16" height="16" />
                        </button>
                    </Link>
                </div>
            </article>

            <article className='flex-1 xl:pb-[50px] mt-[130px] left-right-animation z-10 sm:mt-[96px]'>
                <Image src={map} width="751" className='aspect-[1028/960] xl:m-auto testowe' alt={`Zdjęcie mapy z oznaczonymi obszarami gdzie tworzymy strony internetowe ${city}`} loading='eager' />
            </article>

        </section>
    )
}

export default CityComponent
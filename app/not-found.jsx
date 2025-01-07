import React from 'react'
import errorImage from '@public/assets/images/404.webp'
import Link from 'next/link'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <main className='h-dvh bg-no-repeat bg-cover md:bg-center absolute top-0 left-0 w-full flex justify-end items-center' >
      <Image src={errorImage} width={1920} height={1080} alt="Obrazek tła strony 404" className='h-dvh w-full absolute top-0 left-0 object-cover' />
      <section className='flex justify-end items-center px-[110px] lg:px-[50px] z-10'>
        <div className='w-[950px] flex flex-col items-end lg:w-[100%] sm:items-center fold:mt-0'>
          <h1 className='text-[150px] text-[#E2B350] font-bold my-0 xl:text-[100px] sm:text-[70px]'>404</h1>
          <h2 className='text-[70px] text-[#C79E47] font-bold my-0 mt-[-20px] xl:text-[50px] sm:text-center sm:text-[30px]'>Ups, coś poszło nie tak 🦁</h2>
          <p className='w-[880px] text-[24px] font-light xl:text-[20px] lg:w-[90%] sm:w-full sm:text-[16px]'>Wygląda na to, że ta strona zaginęła w dżungli internetu. Ale bez obaw, jesteśmy tu, by pomóc Ci znaleźć właściwą ścieżkę.</p>
          <ul className='w-[880px] pl-[40px] mt-[15px] space-y-[15px] list-disc text-[24px] font-light xl:text-[20px] lg:w-[90%] sm:w-full sm:text-[16px]'>
            <li>Powrót do <Link href="/" className='text-[#E2B350] inline-flex duration-700 hover:translate-y-[-5px] hover:scale-90'>Strony Głównej</Link></li>
            <li><Link href="/#contact" className='text-[#E2B350] inline-flex duration-700 hover:translate-y-[-5px] hover:scale-90'>Skontaktuj się z nami</Link>, jesli potrzebujesz wsparcia</li>
          </ul>
          <p className='w-full text-center text-[24px] text-[#AEAEAE] font-light mt-[20px] xl:text-[20px] sm:text-[16px]'>Nie poddawaj się, każdemu zdarza się czasem zgubić!</p>
        </div>
      </section>
    </main>
  )
}

export default Custom404
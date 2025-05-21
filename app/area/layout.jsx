import Footer from '@components/Footer'
import React from 'react'
import errorImage from '@public/assets/images/area/area-bg.webp'
import Image from '@node_modules/next/image'

export const metadata = {
  title: "Airtilion - Strony internetowe i aplikacje bez ograniczeń w całej Polsce",
  description: "Airtilion oferuje usługi webowe w całej Polsce. Tworzymy strony internetowe, sklepy online oraz aplikacje mobilne, dostosowane do Twoich potrzeb biznesowych.",
  alternates: {
    canonical: 'https://airtilion.com/area',
  },
}

const layout = ({children}) => {
  return (
    <>
        <main className='xl:h-auto w-full flex flex-col lg:overflow-x-hidden justify-end items-center gap-[128px] sm:gap-[64px] xl:overflow-y-scroll xl:pt-[150px] sm:pt-[200px]' >
            <Image src={errorImage} width={1920} height={1080} quality={75} alt="Obrazek tła" className='h-dvh w-full fixed top-0 left-0 object-cover object-left-top brightness-[0.5] blur-[5px]' loading='eager'/>
            {children}
        </main>

        <Footer/>
    </>
  )
}

export default layout
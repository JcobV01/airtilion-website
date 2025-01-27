import Footer from '@components/Footer'
import React from 'react'
import errorImage from '@public/assets/images/404.webp'
import Image from '@node_modules/next/image'

export const metadata = {
  title: "Airtilion - Działamy bez ograniczeń w całej Polsce",
  description: "Airtilion oferuje usługi webowe w całej Polsce. Tworzymy strony internetowe, sklepy online oraz aplikacje mobilne, dostosowane do Twoich potrzeb biznesowych.",
  alternates: {
    canonical: 'https://airtilion.com/area',
  },
}

const layout = ({children}) => {
  return (
    <>
        <main className='h-dvh xl:h-auto mt-[-131px] w-full flex justify-end items-center xl:overflow-y-scroll xl:pt-[150px] sm:pt-[200px]' >
            <Image src={errorImage} width={1920} height={1080} alt="Obrazek tła" className='h-dvh w-full fixed top-0 left-0 object-cover' />
            {children}
        </main>

        <Footer/>
    </>
  )
}

export default layout
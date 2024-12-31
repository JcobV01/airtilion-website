import Footer from '@components/Footer'
import Header from '@components/Header'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'
import React from 'react'

export const metadata = {
  title: "Airtilion - Portfolio - Zobacz nasze realizacje"
}

const layout = ({ children }) => {
  return (
    <>
      <Header title="Zobacz nasze dotychczasowe osiągnięcia" subtitle="Przekształcamy wizję w rzeczywistość - twoja historia sukcesu może być następna!" img={HeaderBg} />
      <main className='flex flex-col relative mt-[-100px] items-center background'>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default layout
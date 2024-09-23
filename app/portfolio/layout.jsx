import Footer from '@components/Footer'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header title="Zobacz nasze dotychczasowe osiągnięcia" subtitle="Przekształcamy wizję w rzeczywistość - twoja historia sukcesu może być następna!" img={HeaderBg} />
      <main className='flex flex-col relative top-[-250px] items-center background'>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default layout
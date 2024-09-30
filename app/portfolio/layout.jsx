import Footer from '@components/Footer'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'
import React, { Suspense } from 'react'
import Loading from './loading'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header title="Zobacz nasze dotychczasowe osiągnięcia" subtitle="Przekształcamy wizję w rzeczywistość - twoja historia sukcesu może być następna!" img={HeaderBg} />
      <main className='flex flex-col relative mt-[-100px] items-center background'>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default layout
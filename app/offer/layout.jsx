import Footer from '@components/Footer'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import NavbarOffer from '@components/offer/NavbarOffer'
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header title="Odkryj nowe horyzonty z Naszą wyjątkową ofertą" subtitle="Przekraczaj granice możliwości - Twoja przygoda z Nami zaczyna się tutaj" />
      <main className='flex flex-col relative top-[-250px] items-center'>
        <NavbarOffer />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default layout
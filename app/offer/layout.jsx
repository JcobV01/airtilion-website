import Footer from '@components/Footer'
import Header from '@components/Header'
import NavbarOffer from '@components/offer/NavbarOffer'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'
import React from 'react'

export const metadata = {
  title: "Airtilion - Oferta - Odkryj nowe horyzonty",
  description: "Sprawdź naszą ofertę usług webowych, w tym projektowanie stron internetowych, sklepów online i aplikacji mobilnych. Tworzymy rozwiązania dopasowane do Twoich potrzeb.",
  alternates: {
    canonical: 'https://airtilion.com/offer',
  },
}

const layout = ({ children }) => {
  return (
    <>
      <Header title="Odkryj nowe horyzonty z Naszą wyjątkową ofertą" subtitle="Przekraczaj granice możliwości - Twoja przygoda z Nami zaczyna się tutaj" img={HeaderBg} />
      <main className='flex flex-col relative mt-[-250px] items-center background'>
        <NavbarOffer />
        {children}
      <Footer />
      </main>
    </>
  )
}

export default layout
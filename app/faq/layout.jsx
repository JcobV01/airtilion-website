import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'

const layout = ({ children }) => {
    return (
        <>
            <Header title="Odkryj nowe horyzonty z Naszą wyjątkową ofertą" subtitle="Przekraczaj granice możliwości - Twoja przygoda z Nami zaczyna się tutaj" img={HeaderBg} />
            <main className='flex flex-col relative mt-[-250px] items-center background'>
                {children}
                <Footer />
            </main>
        </>
    )
}

export default layout
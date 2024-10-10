import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'

const layout = ({ children }) => {
    return (
        <>
            <Header title="FAQ - Twoje pytania, nasze odpowiedzi" subtitle="Zanurz się w najczęściej zadawane pytania i odkryj przydatne informacje o naszych usługach." img={HeaderBg} />
            <main className='flex flex-col relative mt-[-250px] items-center background'>
                {children}
                <Footer />
            </main>
        </>
    )
}

export default layout
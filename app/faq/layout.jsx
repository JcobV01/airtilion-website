import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import HeaderBg from '@public/assets/images/headers/faq.webp'

export const metadata = {
    title: "Airtilion - FAQ - Znajdź odpiowiedź na swoje pytania",
    description: "Masz pytania? Sprawdź nasze FAQ! Znajdziesz tutaj odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i procesów współpracy.",
    alternates: {
        canonical: 'https://airtilion.com/faq',
    },
}

const layout = ({ children }) => {
    return (
        <>
            <Header title="FAQ - Twoje pytania, nasze odpowiedzi" subtitle="Zanurz się w najczęściej zadawane pytania i odkryj przydatne informacje o naszych usługach." img={HeaderBg} />
            <main className='flex flex-col relative mt-[-120px] items-center background'>
                {children}
                <Footer />
            </main>
        </>
    )
}

export default layout
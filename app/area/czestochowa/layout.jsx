import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Częstochowa - Airtilion",
    description: "Nowoczesne strony internetowe w Częstochowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Częstochowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/czestochowa',
    },
}

const jsonLd = getCityJsonLd("Częstochowa", "czestochowa")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
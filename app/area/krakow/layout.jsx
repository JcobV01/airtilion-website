import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Kraków - Airtilion",
    description: "Nowoczesne strony internetowe w Krakowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Krakowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/krakow',
    },
}

const jsonLd = getCityJsonLd("Kraków", "krakow")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Tarnów - Airtilion",
    description: "Nowoczesne strony internetowe w Tarnowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Tarnowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/tarnow',
    },
}

const jsonLd = getCityJsonLd("Tarnów", "tarnow")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
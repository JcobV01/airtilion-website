import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Warszawa - Airtilion",
    description: "Nowoczesne strony internetowe w Warszawie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Warszawie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/warszawa',
    },
}

const jsonLd = getCityJsonLd("Warszawa", "warszawa")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
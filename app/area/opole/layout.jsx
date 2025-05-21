import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Opole - Airtilion",
    description: "Nowoczesne strony internetowe w Opolu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Opolu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/opole',
    },
}

const jsonLd = getCityJsonLd("Opole", "opole")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
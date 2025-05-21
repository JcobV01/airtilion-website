import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Kielce - Airtilion",
    description: "Nowoczesne strony internetowe w Kielcach – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Kielcach i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/kielce',
    },
}

const jsonLd = getCityJsonLd("Kielce", "kielce")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
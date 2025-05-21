import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Poznań - Airtilion",
    description: "Nowoczesne strony internetowe w Poznaniu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Poznaniu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/poznan',
    },
}

const jsonLd = getCityJsonLd("Poznań", "poznan")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
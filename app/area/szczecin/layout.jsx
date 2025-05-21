import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Szczecin - Airtilion",
    description: "Nowoczesne strony internetowe w Szczecinie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Szczecinie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/szczecin',
    },
}

const jsonLd = getCityJsonLd("Szczecin", "szczecin")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
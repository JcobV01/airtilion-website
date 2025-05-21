import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Toruń - Airtilion",
    description: "Nowoczesne strony internetowe w Toruniu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Toruniu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/torun',
    },
}

const jsonLd = getCityJsonLd("Toruń", "torun")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
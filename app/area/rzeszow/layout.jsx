import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Rzeszów - Airtilion",
    description: "Nowoczesne strony internetowe w Rzeszowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Rzeszowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/rzeszow',
    },
}

const jsonLd = getCityJsonLd("Rzeszów", "rzeszow")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Olsztyn - Airtilion",
    description: "Nowoczesne strony internetowe w Olsztynie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Olsztynie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/olsztyn',
    },
}

const jsonLd = getCityJsonLd("Olsztyn", "olsztyn")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
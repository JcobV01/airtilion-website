import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Gdańsk - Airtilion",
    description: "Nowoczesne strony internetowe w Gdańsku – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Gdańsku i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/gdansk',
    },
}

const jsonLd = getCityJsonLd("Gdańsk", "gdansk")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
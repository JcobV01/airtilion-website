import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Wrocław - Airtilion",
    description: "Nowoczesne strony internetowe we Wrocławiu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy we Wrocławiu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/wroclaw',
    },
}

const jsonLd = getCityJsonLd("Wrocław", "wroclaw")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
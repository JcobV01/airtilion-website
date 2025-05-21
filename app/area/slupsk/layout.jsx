import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Słupsk - Airtilion",
    description: "Nowoczesne strony internetowe w Słupsku – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Słupsku i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/slupsk',
    },
}

const jsonLd = getCityJsonLd("Słupsk", "slupsk")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
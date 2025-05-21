import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Łódź - Airtilion",
    description: "Nowoczesne strony internetowe w Łodzi – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Łodzi i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/lodz',
    },
}

const jsonLd = getCityJsonLd("Łódź", "lodz")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
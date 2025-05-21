import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Białystok - Airtilion",
    description: "Nowoczesne strony internetowe w Białymstoku – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Białymstoku i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/bialystok',
    },
}

const jsonLd = getCityJsonLd("Białystok", "bialystok")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
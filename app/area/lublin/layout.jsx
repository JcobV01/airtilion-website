import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Lublin - Airtilion",
    description: "Nowoczesne strony internetowe w Lublinie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Lublinie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/lublin',
    },
}

const jsonLd = getCityJsonLd("Lublin", "lublin")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
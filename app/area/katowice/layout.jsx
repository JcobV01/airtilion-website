import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Katowice - Airtilion",
    description: "Nowoczesne strony internetowe w Katowicach – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Katowicach i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/katowice',
    },
}

const jsonLd = getCityJsonLd("Katowice", "katowice")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
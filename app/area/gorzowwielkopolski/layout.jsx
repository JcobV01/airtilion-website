import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
    title: "Projektowanie i tworzenie stron internetowych Gorzów Wielkopolski - Airtilion",
    description: "Nowoczesne strony internetowe w Gorzowie Wielkopolskim – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Gorzowie Wielkopolskim i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/gorzowwielkopolski',
    },
}

const jsonLd = getCityJsonLd("Gorzów Wielkopolski", "gorzowwielkopolski")

const layout = ({ children }) => {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    )
}

export default layout
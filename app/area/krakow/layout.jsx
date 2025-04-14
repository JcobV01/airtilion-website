import React from 'react'

export const metadata = {
    title: "Strony internetowe Kraków - Airtilion",
    description: "Nowoczesne strony internetowe w Krakowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Krakowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/krakow',
    },
}

const layout = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default layout
import React from 'react'

export const metadata = {
    title: "Strony internetowe Tarnów - Airtilion",
    description: "Nowoczesne strony internetowe w Tarnowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Tarnowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/tarnow',
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
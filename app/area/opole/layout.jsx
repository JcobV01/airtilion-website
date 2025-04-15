import React from 'react'

export const metadata = {
    title: "Strony internetowe Opole - Airtilion",
    description: "Nowoczesne strony internetowe w Opolu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Opolu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/opole',
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
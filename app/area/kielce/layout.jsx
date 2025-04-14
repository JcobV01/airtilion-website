import React from 'react'

export const metadata = {
    title: "Strony internetowe Kielce - Airtilion",
    description: "Nowoczesne strony internetowe w Kielcach – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Kielcach i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/kielce',
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
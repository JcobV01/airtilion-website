import React from 'react'

export const metadata = {
    title: "Strony internetowe Warszawa - Airtilion",
    description: "Nowoczesne strony internetowe w Warszawie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Warszawie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/warszawa',
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
import React from 'react'

export const metadata = {
    title: "Strony internetowe Gdańsk - Airtilion",
    description: "Nowoczesne strony internetowe w Gdańsku – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Gdańsku i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/gdansk',
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
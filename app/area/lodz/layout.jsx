import React from 'react'

export const metadata = {
    title: "Strony internetowe Łódź - Airtilion",
    description: "Nowoczesne strony internetowe w Łodzi – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Łodzi i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/lodz',
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
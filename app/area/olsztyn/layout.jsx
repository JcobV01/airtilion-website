import React from 'react'

export const metadata = {
    title: "Strony internetowe Olsztyn - Airtilion",
    description: "Nowoczesne strony internetowe w Olsztynie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Olsztynie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/olsztyn',
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
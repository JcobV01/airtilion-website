import React from 'react'

export const metadata = {
    title: "Strony internetowe Szczecin - Airtilion",
    description: "Nowoczesne strony internetowe w Szczecinie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Szczecinie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/szczecin',
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
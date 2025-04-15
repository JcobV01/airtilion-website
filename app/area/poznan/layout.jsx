import React from 'react'

export const metadata = {
    title: "Strony internetowe Poznań - Airtilion",
    description: "Nowoczesne strony internetowe w Poznaniu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Poznaniu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/poznan',
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
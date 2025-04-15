import React from 'react'

export const metadata = {
    title: "Strony internetowe Częstochowa - Airtilion",
    description: "Nowoczesne strony internetowe w Częstochowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Częstochowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/czestochowa',
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
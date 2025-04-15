import React from 'react'

export const metadata = {
    title: "Strony internetowe Toruń - Airtilion",
    description: "Nowoczesne strony internetowe w Toruniu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Toruniu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/torun',
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
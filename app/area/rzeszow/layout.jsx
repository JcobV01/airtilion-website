import React from 'react'

export const metadata = {
    title: "Strony internetowe Rzeszów - Airtilion",
    description: "Nowoczesne strony internetowe w Rzeszowie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Rzeszowie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/rzeszow',
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
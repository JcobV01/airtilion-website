import React from 'react'

export const metadata = {
    title: "Strony internetowe Gorzów Wielkopolski - Airtilion",
    description: "Nowoczesne strony internetowe w Gorzowie Wielkopolskim – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Gorzowie Wielkopolskim i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/gorzowwielkopolski',
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
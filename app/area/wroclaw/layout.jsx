import React from 'react'

export const metadata = {
    title: "Strony internetowe Wrocław - Airtilion",
    description: "Nowoczesne strony internetowe we Wrocławiu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy we Wrocławiu i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/wroclaw',
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
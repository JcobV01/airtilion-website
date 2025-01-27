import React from 'react'

export const metadata = {
    title: "Airtilion - Strony internetowe i aplikacje Wrocław",
    description: "Nowoczesne strony internetowe, sklepy online, projekty graficzne i aplikacje mobilne. Działamy we Wrocławiu i okolicach - sprawdź naszą ofertę!",
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
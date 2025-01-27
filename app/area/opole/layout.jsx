import React from 'react'

export const metadata = {
    title: "Airtilion - Strony internetowe i aplikacje Opole",
    description: "Nowoczesne strony internetowe, sklepy online, projekty graficzne i aplikacje mobilne. Działamy w Opolu i okolicach - sprawdź naszą ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/opole',
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
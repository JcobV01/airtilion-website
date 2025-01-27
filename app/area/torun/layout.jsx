import React from 'react'

export const metadata = {
    title: "Airtilion - Strony internetowe i aplikacje Toruń",
    description: "Nowoczesne strony internetowe, sklepy online, projekty graficzne i aplikacje mobilne. Działamy w Toruniu i okolicach - sprawdź naszą ofertę!",
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
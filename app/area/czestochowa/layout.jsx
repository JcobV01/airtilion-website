import React from 'react'

export const metadata = {
    title: "Airtilion - Strony internetowe i aplikacje Częstochowa",
    description: "Nowoczesne strony internetowe, sklepy online, projekty graficzne i aplikacje mobilne. Działamy w Częstochowie i okolicach - sprawdź naszą ofertę!",
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
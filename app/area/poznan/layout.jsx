import React from 'react'

export const metadata = {
    title: "Airtilion - Strony internetowe i aplikacje Poznań",
    description: "Nowoczesne strony internetowe, sklepy online, projekty graficzne i aplikacje mobilne. Działamy w Poznaniu i okolicach - sprawdź naszą ofertę!",
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
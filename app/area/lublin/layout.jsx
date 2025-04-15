import React from 'react'

export const metadata = {
    title: "Strony internetowe Lublin - Airtilion",
    description: "Nowoczesne strony internetowe w Lublinie – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Lublinie i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/lublin',
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
import React from 'react'

export const metadata = {
    title: "Strony internetowe Katowice - Airtilion",
    description: "Nowoczesne strony internetowe w Katowicach – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Katowicach i okolicach – sprawdź ofertę!",
    alternates: {
        canonical: 'https://airtilion.com/area/katowice',
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
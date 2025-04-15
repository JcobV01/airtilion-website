import React from 'react'

export const metadata = {
  title: "Strony internetowe Bydgoszcz - Airtilion",
  description: "Nowoczesne strony internetowe w Bydgoszczy – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Bydgoszczy i okolicach – sprawdź ofertę!",
  alternates: {
    canonical: 'https://airtilion.com/area/bydgoszcz',
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
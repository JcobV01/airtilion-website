import React from 'react'
import Script from 'next/script'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
  title: "Projektowanie i tworzenie stron internetowych Bydgoszcz - Airtilion",
  description: "Nowoczesne strony internetowe w Bydgoszczy – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Bydgoszczy i okolicach – sprawdź ofertę!",
  alternates: {
    canonical: 'https://airtilion.com/area/bydgoszcz',
  },
}

const jsonLd = getCityJsonLd("Bydgoszcz", "bydgoszcz")

const layout = ({ children }) => {
  return (
    <>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

export default layout
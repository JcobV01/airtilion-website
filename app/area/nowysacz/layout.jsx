import Script from 'next/script'
import React from 'react'
import getCityJsonLd from '@utils/getCityJsonLd'

export const metadata = {
  title: "Projektowanie i tworzenie stron internetowych Nowy Sącz – Airtilion",
  description: "Nowoczesne strony internetowe w Nowym Sączu – projektujemy strony, sklepy online, grafiki oraz aplikacje mobilne. Działamy w Nowym Sączu i okolicach – sprawdź ofertę!",
  alternates: {
    canonical: 'https://airtilion.com/area/nowysacz',
  },
}

const jsonLd = getCityJsonLd("Nowy Sącz", "nowysacz")

const layout = ({ children }) => {
  return (
    <>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

export default layout
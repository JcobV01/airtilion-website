import Link from 'next/link'
import React from 'react'

const NavbarOffer = () => {

  const offerMenu = [
    {
      name: "Strony",
      link: "/shop",
    },
    {
      name: "Sklepy",
      link: "/shop",
    },
    {
      name: "Aplikacje mobilne",
      link: "/apps",
    },
    {
      name: "Darmowa wycena",
      link: "/pricing",
    },
    {
      name: "Pozostałe usługi",
      link: "/services",
    }
  ]

  return (
    <nav>
      <div>
        <div className=''>
          <Link href="/offer/shop">XD</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarOffer
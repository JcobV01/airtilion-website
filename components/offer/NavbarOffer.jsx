'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import websitesCard from '@public/assets/images/offer/navbar/websitesCard.webp'
import shopsCard from '@public/assets/images/offer/navbar/shopsCard.webp'
import appsCard from '@public/assets/images/offer/navbar/appsCard.webp'
import pricingCard from '@public/assets/images/offer/navbar/pricingCard.webp'
import servicesCard from '@public/assets/images/offer/navbar/servicesCard.webp'

const NavbarOffer = () => {
  const pathname = usePathname();

  const offerMenu = [
    {
      name: "Strony",
      link: "/websites",
      img: websitesCard,
    },
    {
      name: "Sklepy",
      link: "/shops",
      img: shopsCard,
    },
    {
      name: "Aplikacje mobilne",
      link: "/apps",
      img: appsCard,
    },
    {
      name: "Darmowa wycena",
      link: "/pricing",
      img: pricingCard,
    },
    {
      name: "Pozostałe usługi",
      link: "/services",
      img: servicesCard,
    }
  ]

  return (
    <nav className='flex justify-center gap-[30px]'>
      {
        offerMenu.map((item, index) => {
          const isActive = pathname.startsWith(`/offer${item.link}`);
          return (
            <Link href={`/offer${item.link}`} key={index}>
              <div className={`h-[375px] w-[180px] bg-center flex justify-center items-center ${isActive ? '' : 'grayscale'}`} style={{ backgroundImage: `url(${item.img.src})` }}>
                <p className='text-[25px] font-light tracking-[2.5px] text-center'>
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })
      }
    </nav>
  )
}

export default NavbarOffer
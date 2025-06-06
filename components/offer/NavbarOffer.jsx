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
      link: "/strony-internetowe",
      img: websitesCard,
    },
    {
      name: "Sklepy",
      link: "/sklepy-internetowe",
      img: shopsCard,
    },
    {
      name: "Aplikacje mobilne",
      link: "/aplikacje-mobilne",
      img: appsCard,
    },
    {
      name: "Darmowa wycena",
      link: "/darmowa-wycena",
      img: pricingCard,
    },
    {
      name: "Pozostałe usługi",
      link: "/uslugi",
      img: servicesCard,
    }
  ]

  const handleMenuClick = (e) => {
    const menuItems = document.querySelectorAll('.menu-button')
    menuItems.forEach((item) => item.classList.remove('menu-active'))
    menuItems[2].classList.add('menu-active')
  }


  return (
    <nav className='flex justify-center gap-[30px] lg:gap-[16px] z-10 lg:flex-wrap'>
      {
        offerMenu.map((item, index) => {
          const isActive = pathname.startsWith(`/oferta${item.link}`);
          return (
            <Link href={`/oferta${item.link}`} key={index} onClick={(e) => handleMenuClick(e)}>
              <div className={`h-[375px] w-[180px] bg-center flex justify-center items-center duration-500 hover:grayscale-0 ${isActive ? '' : 'grayscale'}`} style={{ backgroundImage: `url(${item.img.src})` }}>
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
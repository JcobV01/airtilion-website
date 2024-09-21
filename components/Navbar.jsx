"use client"

import React, { useEffect, useState } from 'react'


import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const menu = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "O nas",
        link: "/home#about"
    },
    {
        name: "Współpraca",
        link: "/home#cooperation"
    },
    {
        name: "Oferta",
        link: "/home#offer"
    },
    {
        name: "Portfolio",
        link: "/home#portfolio"
    },
    // {
    //     name: "Nasze projekty",
    //     link: "home/projects"
    // },
    {
        name: "Kontakt",
        link: "/home#contact"
    },
]

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 130) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <nav className='flex justify-between px-[100px] py-[40px] items-center sticky top-0 w-full z-20 duration-500' style={{backgroundColor: scrolled && '#00000080', backdropFilter: scrolled && 'blur(5px)'}}>
        <Image src={logo} width={260} height="auto" alt="logo spółki Airtilion"/>
        <div className='flex gap-[40px] items-center'>
            {
                menu.map((item, index) => (
                    <Link href={item.link} key={index}>
                        {item.name}
                    </Link>
                ))
            }

            <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-300 flex gap-[10px] items-center'>
                <Icon icon="solar:letter-bold" width="25" height="25"/>
                Zapytaj o wycenę
            </button>
        </div>
    </nav>
  )
}

export default Navbar
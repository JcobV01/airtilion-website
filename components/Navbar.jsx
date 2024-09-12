"use client"

import React, { useEffect, useState } from 'react'


import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'

const menu = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "O nas",
        link: "#about"
    },
    {
        name: "Współpraca",
        link: "#cooperation"
    },
    {
        name: "Oferta",
        link: "#offer"
    },
    {
        name: "Portfolio",
        link: "#portfolio"
    },
    {
        name: "Nasze projekty",
        link: "home/projects"
    },
    {
        name: "Kontakt",
        link: "#contact"
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
    <nav className='flex justify-between px-[100px] py-[40px] items-center sticky top-0 w-full z-100'>
        <Image src={logo} width={260} height="auto" alt="logo spółki Airtilion"/>
        <div className='flex gap-[40px]'>
            {
                menu.map((item, index) => (
                    <Link href={item.link} key={index}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    </nav>
  )
}

export default Navbar
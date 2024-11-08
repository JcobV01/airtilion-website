"use client"

import React, { useEffect, useState } from 'react'


import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'

const menu = [
    {
        name: "O nas",
        link: "/#about",
        id: "#about"
    },
    {
        name: "Współpraca",
        link: "/#cooperation",
        id: "#cooperation"
    },
    {
        name: "Oferta",
        link: "/#offer",
        id: "#offer"
    },
    {
        name: "Portfolio",
        link: "/#portfolio",
        id: "#portfolio"
    },
    // {
    //     name: "Nasze projekty",
    //     link: "home/projects",
    //        id: ''
    // },
    {
        name: "FAQ",
        link: "/faq",
        id: ""
    },
    {
        name: "Kontakt",
        link: "/#contact",
        id: "#contact"
    },
]

const Navbar = () => {

    const path = usePathname()

    const [scrolled, setScrolled] = useState(false);
    const [visibility, setVisibility] = useState('hidden')

    const changeVisibility = () => {
        if (visibility == 'hidden') {
            setVisibility('flex');
        }
        else {
            setVisibility('hidden')
        }
    }

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

    const handleMenuClick = (e) => {
        const menuItems = document.querySelectorAll('.menu-button')
        menuItems.forEach((item) => item.classList.remove('menu-active'))
        e.currentTarget.classList.add('menu-active')
    }

    const handleMenu = (e, id) => {
        if(id.length > 0){
            e.preventDefault()
            const target = id.length > 0 ? document.querySelector(id) : null;
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    const clearMenu = () => {
        const menuItems = document.querySelectorAll('.menu-button')
        menuItems.forEach((item) => item.classList.remove('menu-active'))
    }

    return (
        <>
            <nav className='flex fold:flex-col fold:gap-[20px] justify-between px-[100px] xl:px-[50px] sm:px-[25px] py-[40px] items-center sticky top-0 w-full z-40 duration-500' style={{ backgroundColor: scrolled && '#00000080', backdropFilter: (scrolled && visibility != 'flex') && 'blur(5px)' }}>
                <Link href="/" onClick={clearMenu}>
                    <Image src={logo} width={260} height="auto" alt="logo spółki Airtilion" priority loading='eager' className='xl:w-[200px]' />
                </Link>
                <div className='flex gap-[40px] xl:gap-[30px] items-center lg:hidden'>

                    {
                        menu.map((item, index) => (
                            <Link href={item.link} key={index} onClick={(e) => { path == '/' && handleMenu(e, item.id) }}>
                                <button className='relative overflow-hidden duration-500 py-[5px] menu-button hover:text-[#E2B350] xxl:text-[20px] xl:text-[15px]' onClick={(e) => handleMenuClick(e)}>
                                    {item.name}
                                </button>
                            </Link>
                        ))
                    }

                    <Link href="/offer/pricing">
                        <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-500 flex gap-[10px] items-center hover:text-[#d9d9d9] hover:bg-gradient-to-r hover:text-[15px] hover:py-[12px] hover:tracking-[1.5px] nav-button xxl:text-[20px] xl:text-[15px]'>
                            <Icon icon="solar:letter-bold" width="25" height="25" />
                            <Icon icon="solar:letter-opened-bold" width="25" height="25" className='hidden' />
                            Zapytaj o wycenę
                        </button>
                    </Link>
                </div>

                <div id="nav-icon1" className={`z-40 w-[60px] sm:w-[45px] h-[45px] sm:h-[30px] relative hidden lg:block ${visibility == 'flex' && 'lg:fixed lg:right-[50px] fold:right-0 fold:left-[50%] fold:!translate-x-[-50%] open'}`} onClick={changeVisibility}>
                    <span className='top-0 block absolute h-[5px] sm:h-[3px] w-full bg-[#E2B350] opacity-[1] left-0 rounded-[1px]'></span>
                    <span className='top-[18px] block absolute h-[5px] sm:h-[3px] w-[90%] bg-[#E2B350] opacity-[1] left-0 rounded-[1px]'></span>
                    <span className='top-[36px] block absolute h-[5px] sm:h-[3px] w-full bg-[#E2B350] opacity-[1] left-0 rounded-[1px]'></span>
                </div>

                <div className={`fixed ${visibility} bg-[#000000b5] w-dvw h-dvh top-0 left-0 p-[50px] z-30 flex flex-col gap-[30px] justify-center fold:items-center backdrop-blur-[5px]`}>
                    {
                        menu.map((item, index) => (
                            <Link href={item.link} key={index} onClick={(e) => handleMenu(e, item.id)}>
                                <button className='relative overflow-hidden duration-500 py-[5px] menu-button hover:text-[#E2B350] xl:text-[15px]' onClick={(e) => { handleMenuClick(e); changeVisibility() }}>
                                    {item.name}
                                </button>
                            </Link>
                        ))
                    }

                    <Link href="/offer/pricing">
                        <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-500 flex gap-[10px] items-center w-max hover:text-[#d9d9d9] hover:bg-gradient-to-r hover:text-[15px] hover:py-[12px] hover:tracking-[1.5px] nav-button xl:text-[15px]'>
                            <Icon icon="solar:letter-bold" width="25" height="25" />
                            <Icon icon="solar:letter-opened-bold" width="25" height="25" className='hidden' />
                            Zapytaj o wycenę
                        </button>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar
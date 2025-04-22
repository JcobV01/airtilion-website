"use client"

import React, { useEffect, useState } from 'react'


import logo from '@public/assets/images/logo-500x.webp'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'

const menu = [
    {
        name: "O nas",
        link: "/#about-us",
        id: "#about-us"
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
        link: "/portfolio",
        id: ""
    },
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
    const router = useRouter();
    const pathname = usePathname()

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
        e.currentTarget.children[0].classList.add('menu-active')
    }

    const scrollToSection = (hash, isFromOutside) => {
        const element = document.getElementById(hash);
        if (element) {
            const offset = 128;
            const visibilityTax = element.classList.contains('about-hidden') || isFromOutside ? 100 : 0;
            const y = element.getBoundingClientRect().y + window.pageYOffset - offset - visibilityTax;
            console.log(element.getBoundingClientRect().y)
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };

    const handleLinkClick = (e, link) => {
        const isHomePage = pathname === '/';
        handleMenuClick(e)
        if (link.startsWith('/#')) {
            e.preventDefault();
            const hash = link.split('#')[1];
            if (isHomePage) {
                scrollToSection(hash);
                window.history.pushState(null, '', `#${hash}`);
            } else {
                router.push(`/#${hash}`);
            }
        }
        else{
            window.scrollTo({top: 0, behavior: 'auto'})
        }
    };

    const clearMenu = () => {
        const menuItems = document.querySelectorAll('.menu-button')
        menuItems.forEach((item) => item.classList.remove('menu-active'))
    }

    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const hash = window.location.hash.slice(1);
            setTimeout(() => scrollToSection(hash, true), 100);
        }
    }, [pathname]);

    return (
        <>
            <nav className='flex fold:flex-col fold:gap-[20px] justify-between px-[100px] 2xl:px-[80px] xl:px-[30px] sm:px-[25px] py-[40px] items-center fixed top-0 w-full z-40 duration-500' style={{ backgroundColor: scrolled && '#00000080', backdropFilter: (scrolled && visibility != 'flex') && 'blur(5px)' }}>
                <Link href="/" onClick={clearMenu}>
                    <Image src={logo} width={260} height="auto" alt="logo spółki Airtilion" priority loading='eager' className='xl:w-[200px]' />
                </Link>
                <div className='flex gap-[40px] xl:gap-[30px] items-center lg:hidden'>

                    {
                        menu.map((item, index) => (
                            <Link href={item.link} key={index} onClick={(e) => handleLinkClick(e, item.link)}>
                                <button className='relative overflow-hidden duration-500 py-[5px] menu-button hover:text-[#E2B350] xxl:text-[20px] xl:text-[15px]'>
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
                            <Link href={item.link} key={index} onClick={(e) => {handleLinkClick(e, item.link); changeVisibility()}}>
                                <button className='relative overflow-hidden duration-500 py-[5px] menu-button hover:text-[#E2B350] xl:text-[15px]'>
                                    {item.name}
                                </button>
                            </Link>
                        ))
                    }

                    <Link href="/offer/pricing">
                        <button onClick={changeVisibility} className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-500 flex gap-[10px] items-center w-max hover:text-[#d9d9d9] hover:bg-gradient-to-r hover:text-[15px] hover:py-[12px] hover:tracking-[1.5px] nav-button xl:text-[15px]'>
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
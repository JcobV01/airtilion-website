'use client'

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'
import React from 'react'

const NavbarFooter = () => {
    const router = useRouter();
    const pathname = usePathname()


    const menuFooter = [
        {
            name: "O nas",
            link: "/#about-us"
        },
        {
            name: "Współpraca",
            link: "/#cooperation"
        },
        {
            name: "Oferta",
            link: "/#offer"
        },
        {
            name: "Portfolio",
            link: "/portfolio"
        },
        {
            name: "FAQ",
            link: "/faq"
        },
        {
            name: "Kontakt",
            link: "/#contact"
        },
        {
            name: "Obszar działania",
            link: "/area"
        },
    ]

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


    return (
        <nav className='flex justify-between px-[100px] py-[40px] items-center sticky top-0 w-full z-100'>
            <div className='flex gap-[40px] text-[18px] font-light xxl:text-[20px] lg:flex-wrap lg:justify-center lg:gap-[30px] sm:flex-col sm:items-center sm:text-center'>
                {
                    menuFooter.map((item, index) => (
                        <Link href={item.link} key={index} className='duration-700 hover:scale-90 hover:text-[#E2B350]' onClick={(e) => handleLinkClick(e, item.link)}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default NavbarFooter
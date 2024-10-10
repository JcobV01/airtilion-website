import Link from 'next/link'
import React from 'react'

const NavbarFooter = () => {
    const menuFooter = [
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
    return (
        <nav className='flex justify-between px-[100px] py-[40px] items-center sticky top-0 w-full z-100'>
            <div className='flex gap-[40px] text-[18px] font-light xxl:text-[20px] lg:flex-wrap lg:justify-center lg:gap-[30px] sm:flex-col sm:items-center sm:text-center'>
                {
                    menuFooter.map((item, index) => (
                        <Link href={item.link} key={index} className='duration-700 hover:scale-90 hover:text-[#E2B350]'>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default NavbarFooter
import React from 'react'
import Image from 'next/image'

import FooterSmoke from '@public/assets/images/footerSmoke.webp'
import AirtilionLogo from '@public/assets/images/airtilion-logo-dark.png'
import facebook from '@public/assets/icons/facebook.svg'
import linkedin from '@public/assets/icons/linkedin.svg'
import Link from 'next/link'
import NavbarFooter from './NavbarFooter'

const Footer = () => {
    return (
        <footer className='z-10 w-full'>
            <article className='flex justify-center bg-cover' style={{ backgroundImage: `url(${FooterSmoke.src})` }}>
                <div className='flex flex-col mt-[100px] items-center'>
                    <div className='w-[255px] mt-[100px]'>
                        <Image src={AirtilionLogo} alt='Logo Airtilionu' />
                    </div>
                    <div className='flex'>
                        <hr className='mt-[25px] w-[200px] h-[2.5px] bg-[D9D9D9] flex justify-center' />
                    </div>
                    <p className='text-center mt-[25px] text-[20px] font-light'>Znajdziesz nas tutaj</p>
                    <div className='flex gap-[25px] mt-[40px]'>
                        <Link href="/">
                            <Image src={facebook} width="auto" height="auto" alt="Ikona Facebooka" />
                        </Link>
                        <Link href="/">
                            <Image src={linkedin} width="auto" height="auto" alt="Ikona LinkedIn" />
                        </Link>
                    </div>
                    <div className='mt-[30px]'>
                        <NavbarFooter />
                    </div>
                    <p className='text-center text-[15px] text-[#EEE] font-light tracking-[1.5px] mt-[30px] mb-[15px]'>© 2024 Airtilion sp. z o.o.</p>
                </div>
            </article>
        </footer>
    )
}

export default Footer
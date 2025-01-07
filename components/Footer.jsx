import React from 'react'
import Image from 'next/image'

import FooterSmoke from '@public/assets/images/footerSmoke.webp'
import AirtilionLogo from '@public/assets/images/logo-500x.webp'
import Link from 'next/link'
import NavbarFooter from './NavbarFooter'
import { Icon } from '@iconify/react'

const Footer = () => {
    return (
        <footer className='relative z-10 w-full'>
            <article className='flex justify-center bg-cover lg:bg-center' style={{ backgroundImage: `url(${FooterSmoke.src})` }}>
                <div className='flex flex-col mt-[100px] items-center'>
                    <Link href="/">
                        <div className='w-[255px] mt-[100px]'>
                            <Image src={AirtilionLogo} alt='Logo Airtilionu' />
                        </div>
                    </Link>
                    <div className='flex'>
                        <hr className='mt-[25px] w-[200px] h-[2.5px] bg-[D9D9D9] flex justify-center' />
                    </div>
                    <p className='text-center mt-[25px] text-[20px] font-light xxl:text-[22px]'>Znajdziesz nas tutaj</p>
                    <div className='flex sm:flex-wrap sm:items-center sm:justify-center gap-[25px] mt-[35px]'>
                        <Link href="https://www.facebook.com/profile.php?id=61571219580688" aria-label="Znajdź nas na Facebooku" target="_blank" rel="noopener noreferrer" className='justify-center duration-700 hover:scale-75 sm:basis-[33%] sm:flex sm:items-center sm:justify-center'>
                            <Icon icon="bi:facebook" width="35px" height="35px" alt="Ikona Facebooka" className='text-[#E2B350]' />
                        </Link>
                        <Link href="https://www.instagram.com/airtilion/?utm_source=ig_web_button_share_sheet" aria-label="Znajdź nas na Instagramie" target="_blank" rel="noopener noreferrer" className='duration-700 hover:scale-75 sm:basis-[33%] sm:flex sm:items-center sm:justify-center'>
                            <Icon icon="ri:instagram-line" width="35px" height="35px" alt="Ikona Instagrama" className='text-[#E2B350]' />
                        </Link>
                        <Link href="https://www.linkedin.com/company/airtilion/" aria-label="Znajdź nas na Linkedin" target="_blank" rel="noopener noreferrer" className='duration-700 hover:scale-75 sm:basis-[33%] sm:flex sm:items-center sm:justify-center'>
                            <Icon icon="bi:linkedin" width="35px" height="35px" alt="Ikona LinkedIn" className='text-[#E2B350]' />
                        </Link>
                        <Link href="https://x.com/airtilion" aria-label="Znajdź nas na X" target="_blank" rel="noopener noreferrer" className='duration-700 hover:scale-75 sm:basis-[33%] sm:flex sm:items-center sm:justify-center'>
                            <Icon icon="pajamas:twitter" width="35px" height="35px" alt="Ikona X" className='text-[#E2B350]' />
                        </Link>
                        <Link href="https://www.threads.net/@airtilion/replies" aria-label="Znajdź nas na Threads" target="_blank" rel="noopener noreferrer" className='duration-700 hover:scale-75 sm:basis-[33%] sm:flex sm:items-center sm:justify-center'>
                            <Icon icon="hugeicons:threads" width="35px" height="35px" alt="Ikona Threads" className='text-[#E2B350]' />
                        </Link>
                        <Link href="https://pin.it/6HuC1cc8y" aria-label="Znajdź nas na Pinterest" target="_blank" rel="noopener noreferrer" className='duration-700 hover:scale-75 sm:basis-[33%] sm:flex sm:items-center sm:justify-center'>
                            <Icon icon="mdi:pinterest" width="35px" height="35px" alt="Ikona Pinterest" className='text-[#E2B350]' />
                        </Link>
                    </div>
                    <div className='mt-[35px]'>
                        <NavbarFooter />
                    </div>
                    <div className='mt-[35px] w-full px-[50px] flex justify-between xl:flex-col-reverse xl:justify-center'>
                        <p className='text-center text-[15px] text-[#EEE] font-light tracking-[1.5px] xl:mt-[20px]'>© 2024 Airtilion sp. z o.o.</p>
                        <div className='text-[14px] flex gap-[20px] font-light xl:justify-center xl:flex-wrap xl:gap-[10px] xl:text-center'>
                            <Link href="/assets/files/polityka_prywatnosci_Airtilion.pdf" aria-label="Przejdź do Polityki prywatności" target="_blank" rel="noopener noreferrer">
                                <span className='text-[#EEE] hover:text-[#E2B350] duration-500'>Polityka prywatności</span>
                            </Link>
                            <Link href="/" aria-label="Przejdź do Polityki Ochrony Danych Osobowych" target="_blank" rel="noopener noreferrer">
                                <span className='text-[#EEE] hover:text-[#E2B350] duration-500'>Polityka Ochrony Danych Osobowych</span>
                            </Link>
                            <Link href="/" aria-label="Przejdź do Regulaminu świadczenia usług drogą elektroniczną" target="_blank" rel="noopener noreferrer">
                                <span className='text-[#EEE] hover:text-[#E2B350] duration-500'>Regulamin świadczenia usług drogą elektroniczną</span>
                            </Link>
                        </div>
                    </div>
                    <p className='mt-[35px] mb-[15px] px-[50px] text-[10px] text-[#969696] sm:text-center'>Airtilion Sp. z o.o. ul. Słoneczna 32/9, 33-100 Tarnów, wpisana do rejestru przedsiębiorców Krajowego rejestru Sądowego przez Sąd Rejonowy dla Krakowa-Śródmieścia w Krakowie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod nr KRS 0001143482, kapitał zakładowy w kwocie 5 000,00 zł w całości opłacony, NIP: 8733299720</p>
                </div>
            </article>
        </footer>
    )
}

export default Footer
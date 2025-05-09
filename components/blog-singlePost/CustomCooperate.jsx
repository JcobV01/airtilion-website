'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import useIntersectionObserver from '@hooks/useObserver';

import { Icon } from '@iconify/react/dist/iconify';
import CustomContactForm from './CustomContactForm';
import coopBg from '@public/assets/images/cooperate-bg.webp'

const CustomCooperate = () => {
    const [ref, isVisible] = useIntersectionObserver();
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isContactOpen ? 'hidden' : ''
        const nav = document.querySelector('nav')
        const footer = document.querySelector('footer')
        if (isContactOpen) {
            nav.classList.add('hidden')
            footer.classList.add('hidden')
        } else {
            nav.classList.remove('hidden')
            footer.classList.remove('hidden')
        }
    }, [isContactOpen])

    return (
        <>
            <article ref={ref} className={`w-full h-[450px] lg:h-[350px] sm:h-auto sm:py-[50px] flex flex-col items-center relative px-[170px] overflow-hidden xl:px-[100px] lg:px-[50px] sm:px-[30px] gap-[40px] xl:gap-[30px] justify-center bg-center transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`}>
                <Image src={coopBg} alt="Obrazek przedstawiający tło z lwem" width="1240" height="450" quality={100} className="aspect-[1366/768] absolute w-full lg:h-full object-cover xxl:bg-cover xxl:bg-no-repeat" />
                <div className='z-10'>
                    <p className='z-10 text-[#B8B8B8] lg:text-[13px] font-light text-center'>WSPÓŁPRACUJ Z NAMI</p>
                    <h5 className='text-[40px] xl:text-[30px] lg:text-[25px] font-semibold z-10 text-center'>Zawsze jesteśmy gotowi stworzyć <br /> dla Ciebie najlepszy produkt</h5>
                </div>
                <p className='z-10 text-[15px] xxl:text-[20px] lg:text-[13px] font-extralight text-center'>Jeśli szukasz partnera, który pomoże Ci w stworzeniu wyjątkowej strony, aplikacji internetowej, aplikacji mobilnej lub innego projektu, skontaktuj się z nami. Jesteśmy gotowi, aby wspólnie z Tobą zrealizować nawet najbardziej ambitne pomysły.</p>

                <button onClick={() => setIsContactOpen(true)} className='text-[15px] xxl:text-[20px] lg:text-[13px] sm:text-[11px] z-10 tracking-[1.5px] bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] px-[30px] py-[15px] rounded-[5px]'>Napisz do nas</button>

                <div className='absolute w-full h-full bg-[#00000099] top-0 left-0'></div>
            </article>

            {isContactOpen && (
                <>
                    <div className="fixed inset-0 bg-[#00000099] backdrop-blur-sm z-[49]" />
                    <div className="contact-panel px-[128px] py-[64px] bg-[#0a0a0a]">
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setIsContactOpen(false)} className='flex gap-[8px] px-[12px] py-[6px] rounded-[5px] items-center duration-500 hover:bg-[#262626]'>
                                <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                <span className='font-light text-[16px]'>Zamknij</span>
                            </button>
                        </div>

                        <div className='flex items-center gap-[64px] mt-[64px] px-[128px]'>
                            <div className='flex-1'>
                                <span className='text-[15px] font-light text-[#E2B350]'>Twój projekt. Nasza pasja. Wspólny sukces.</span>
                                <h2 className='mt-[8px] text-[30px] font-bold'>Chcesz dowiedzieć się więcej o naszych usługach lub potrzebujesz porady? Skontaktuj się z nami!</h2>

                                <p className='mt-[32px] text-[20px] font-medium text-[#E2B350]'>Dane kontaktowe</p>
                                <div className='mt-[16px] flex gap-[15px] items-center'>
                                    <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350]' />
                                    <p className='text-[16px]'>720 177 174</p>
                                </div>

                                <div className='mt-[8px] flex gap-[15px] items-center'>
                                    <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350]' />
                                    <p className='text-[16px] font-light'>511 019 652</p>
                                </div>

                                <div className='mt-[8px] flex gap-[15px] items-center'>
                                    <Icon icon="solar:letter-bold" width="30" height="30" alt="Ikona listu" className='text-[#E2B350]' />
                                    <p className='text-[16px] font-light'>contact@airtilion.com</p>
                                </div>

                                <div className='mt-[8px] flex gap-[15px]'>
                                    <div>
                                        <Icon icon="mdi:company" width="30" height="30" alt="Ikona budynku firmy" className='text-[#E2B350]' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-light'>Airtilion Sp. z o.o.</p>
                                        <p className='text-[16px] font-light'>NIP: 8733299720</p>
                                        <p className='text-[16px] font-light'>REGON: 540390460</p>
                                        <p className='text-[16px] font-light'>KRS: 0001143482</p>
                                    </div>
                                </div>

                            </div>
                            <CustomContactForm />
                        </div>


                    </div>
                </>

            )}
        </>
    )
}

export default CustomCooperate
'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify';
import CustomContactForm from '@components/blog-singlePost/CustomContactForm';

const CustomContact = ({ text, width }) => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isContactOpen ? 'hidden' : ''
        const nav = document.querySelector('nav')
        const footer = document.querySelector('footer')
        const offerCity = document.querySelector('.offerCity')
        if (isContactOpen) {
            nav.classList.add('nav-hidden')
            footer.classList.add('footer-hidden')
            offerCity.classList.add('section-hidden')
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setIsVisible(false);
                nav.classList.remove('nav-hidden')
                footer.classList.remove('footer-hidden')
                offerCity.classList.remove('section-hidden')
            }, 600)

            return () => clearTimeout(timeout);
        }
    }, [isContactOpen])

    return (
        <>
            <button onClick={() => setIsContactOpen(true)} className={`bg-[linear-gradient(to_right,rgba(206,167,91,0.5)_0%,rgba(122,107,78,0.5)_100%)] w-[${width}px] h-[50px] flex items-center justify-between px-[16px] z-10 w-full rounded-[5px] text-[16px] font-light cursor-pointer duration-700 hover:scale-90`}>
                {text}
                <Icon icon="icon-park-outline:double-right" alt="Ikona strzałek w prawo" width="25" height="25" className='text-white' />
            </button>

            {isVisible && (
                <>
                    <div className="fixed inset-0 bg-[#00000099] backdrop-blur-sm z-[49]" />
                    <div className={`contact-panel px-[128px] py-[64px] bg-[#0a0a0a] ${isContactOpen ? 'slide-up' : 'slide-down'} 2xl:px-[64px] xl:px-[32px] lg:py-[32px] fold:px-[16px]`}>
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setIsContactOpen(false)} className='flex gap-[8px] px-[12px] py-[6px] rounded-[5px] items-center duration-500 hover:bg-[#262626]'>
                                <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                <span className='font-light text-[16px]'>Zamknij</span>
                            </button>
                        </div>

                        <div className='flex items-center gap-[64px] mt-[64px] px-[128px] 2xl:px-[0px] lg:flex-col lg:gap-[16px] lg:mt-[16px]'>
                            <div className='flex-1 lg:w-[600px] sm:w-[100%]'>
                                <span className='text-[15px] font-light text-[#E2B350]'>Twój projekt. Nasza pasja. Wspólny sukces.</span>
                                <h2 className='mt-[8px] text-[30px] font-bold lg:text-[25px] fold:text-[22px]'>Chcesz dowiedzieć się więcej o naszych usługach lub potrzebujesz porady? Skontaktuj się z nami!</h2>

                                <p className='mt-[32px] text-[20px] font-medium text-[#E2B350] lg:text-[18px] sm:text-[16px]'>Dane kontaktowe</p>

                                <div className='mt-[16px] flex flex-col space-y-[8px] lg:space-y-[16px]'>
                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        <p className='text-[16px] font-light sm:text-[15px]'>720 177 174</p>
                                    </div>

                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        <p className='text-[16px] font-light sm:text-[15px]'>511 019 652</p>
                                    </div>

                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="solar:letter-bold" width="30" height="30" alt="Ikona listu" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        <p className='text-[16px] font-light sm:text-[15px]'>contact@airtilion.com</p>
                                    </div>

                                    <div className='flex gap-[15px]'>
                                        <div>
                                            <Icon icon="mdi:company" width="30" height="30" alt="Ikona budynku firmy" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        </div>
                                        <div className='text-[16px] font-light sm:text-[15px]'>
                                            <p>Airtilion Sp. z o.o.</p>
                                            <p>NIP: 8733299720</p>
                                            <p>REGON: 540390460</p>
                                            <p>KRS: 0001143482</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <CustomContactForm isContactOpen={isContactOpen} />
                        </div>


                    </div>
                </>
            )}
        </>
    )
}

export default CustomContact
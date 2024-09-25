'use client'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import bg from '@public/assets/images/contact-lion.webp'
import Heading from '@components/Heading'
import FormButton from '@components/FormButton'

import icon from '@public/assets/icons/contact/clock.png'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import useIntersectionObserver from '@hooks/useObserver';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const [ ref, isVisible ] = useIntersectionObserver();

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!name || !email || !number || !text) {
            setError('Wypełnij wszystkie pola!');
            return;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setError('Podaj poprawny adres email!');
            setIsSubmitting(false);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact/', {
                method: 'POST',
                body: JSON.stringify({
                    Name: name,
                    Email: email,
                    Number: number,
                    Text: text,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                toast.success('Wysłano wiadomość!');
                setName('');
                setEmail('');
                setNumber('');
                setText('');
            }
        } catch (error) {
            setError('Wystąpił nieoczekiwany błąd.');
        } finally {
            setIsSubmitting(false);
        }
    }
    

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1024px)'); // 1024px to standardowy breakpoint dla "lg" w Tailwind
        setIsLargeScreen(mediaQuery.matches); // Ustaw stan przy ładowaniu

        const handleResize = (e) => setIsLargeScreen(e.matches);
        mediaQuery.addEventListener('change', handleResize); // Nasłuchuj zmian w rozmiarze

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return (
        <section id="contact" ref={ref} className={`relative z-10 w-full flex justify-center xl:w-[90%] m-auto bg-cover bg-no-repeat bg-center transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`} style={{backgroundImage: isLargeScreen && `url(${bg.src})`}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="1402"
                height="800"
                viewBox="0 0 1402 800"
                fill="none"
                className='z-10 lg:hidden'
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M99.9996 0C72.3853 0 49.9996 22.3858 49.9996 50V71.5462C52.4307 76.5504 57.5623 80 63.4996 80H91.9996C97.5224 80 102 84.4771 102 90V94C102 99.5228 97.5224 104 91.9996 104H70.9996C61.4266 104 53.25 109.978 49.9996 118.405V310.402H19.4146C8.69223 310.402 0 319.095 0 329.817C0 340.539 8.69224 349.232 19.4146 349.232H49.9996V366.746C40.4101 367.978 33 376.173 33 386.098C33 396.022 40.4101 404.217 49.9996 405.449V581.804C51.2178 591.716 59.6661 599.39 69.9069 599.39H82.4878C93.2641 599.39 102 608.126 102 618.902C102 629.679 93.2641 638.415 82.4878 638.415H69.9069C59.6661 638.415 51.2178 646.089 49.9996 656.001V750C49.9996 777.614 72.3854 800 99.9996 800H1300C1317.04 800 1332.08 791.48 1341.11 778.468C1336.97 775.189 1331.74 773.232 1326.05 773.232H1283.42C1272.69 773.232 1264 764.539 1264 753.817C1264 743.095 1272.69 734.402 1283.42 734.402H1325.32C1337.76 734.402 1348.08 725.313 1350 713.412V641.899H1370.34C1387.82 641.899 1402 627.724 1402 610.238C1402 592.752 1387.82 578.577 1370.34 578.577H1350V446.61H1341.51C1330.74 446.61 1322 437.874 1322 427.098C1322 416.321 1330.74 407.585 1341.51 407.585H1350V153.232H1272.41C1261.69 153.232 1253 144.539 1253 133.817C1253 123.095 1261.69 114.402 1272.41 114.402H1381.1C1385.19 114.402 1389.06 113.416 1392.48 111.667C1398.18 108.261 1402 102.028 1402 94.9024C1402 84.1261 1393.26 75.3902 1382.49 75.3902H1369.91C1359.67 75.3902 1351.22 67.7154 1350 57.8036V50C1350 22.3858 1327.61 0 1300 0H99.9996Z"
                    fill="url(#pattern0)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M99.9996 0C72.3853 0 49.9996 22.3858 49.9996 50V71.5462C52.4307 76.5504 57.5623 80 63.4996 80H91.9996C97.5224 80 102 84.4771 102 90V94C102 99.5228 97.5224 104 91.9996 104H70.9996C61.4266 104 53.25 109.978 49.9996 118.405V310.402H19.4146C8.69223 310.402 0 319.095 0 329.817C0 340.539 8.69224 349.232 19.4146 349.232H49.9996V366.746C40.4101 367.978 33 376.173 33 386.098C33 396.022 40.4101 404.217 49.9996 405.449V581.804C51.2178 591.716 59.6661 599.39 69.9069 599.39H82.4878C93.2641 599.39 102 608.126 102 618.902C102 629.679 93.2641 638.415 82.4878 638.415H69.9069C59.6661 638.415 51.2178 646.089 49.9996 656.001V750C49.9996 777.614 72.3854 800 99.9996 800H1300C1317.04 800 1332.08 791.48 1341.11 778.468C1336.97 775.189 1331.74 773.232 1326.05 773.232H1283.42C1272.69 773.232 1264 764.539 1264 753.817C1264 743.095 1272.69 734.402 1283.42 734.402H1325.32C1337.76 734.402 1348.08 725.313 1350 713.412V641.899H1370.34C1387.82 641.899 1402 627.724 1402 610.238C1402 592.752 1387.82 578.577 1370.34 578.577H1350V446.61H1341.51C1330.74 446.61 1322 437.874 1322 427.098C1322 416.321 1330.74 407.585 1341.51 407.585H1350V153.232H1272.41C1261.69 153.232 1253 144.539 1253 133.817C1253 123.095 1261.69 114.402 1272.41 114.402H1381.1C1385.19 114.402 1389.06 113.416 1392.48 111.667C1398.18 108.261 1402 102.028 1402 94.9024C1402 84.1261 1393.26 75.3902 1382.49 75.3902H1369.91C1359.67 75.3902 1351.22 67.7154 1350 57.8036V50C1350 22.3858 1327.61 0 1300 0H99.9996Z"
                    fill="url(#paint0_radial)"
                    fillOpacity="0.7"
                />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="translate(0, -0.08) scale(0.000713012 0.00128)" />
                    </pattern>
                    <radialGradient
                        id="paint0_radial"
                        cx="50%"
                        cy="50%"
                        r="50%"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(701 400) rotate(90) scale(467.671 360.823)"
                    >
                        <stop offset="10%" stopColor="rgba(0, 0, 0, 0.65)" />
                        <stop offset="100%" stopColor="rgba(0, 0, 0, 1)" />
                    </radialGradient>
                    <image id="image0" width="1402" height="900" xlinkHref={bg.src} />
                </defs>
            </svg>

            <div className='absolute lg:relative w-[1100px] 2xl:w-[80%] aspect-[1400/800] m-auto h-full top-0 left-[50%] lg:left-auto translate-x-[-50%] lg:translate-x-0 flex lg:flex-col gap-[170px] lg:gap-[50px] py-[50px] z-10'>
                <div className='flex-1 flex flex-col gap-[50px] xl:gap-[20px] xl:justify-center'>
                    <Heading title="Kontakt" subtitle="ROZPOCZNIJMY WSPÓŁPRACĘ" />
                    <div>
                        <p className='text-[18px] xl:text-[15px] mb-[5px]'>Chcesz dowiedzieć się więcej o naszych usługach lub potrzebujesz porady? Skontaktuj się z nami!</p>
                        {error && <span className='text-red-700 font-light tracking-[2px] xl:text-[15px]'>{error}</span>}
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] xl:gap-[15px]'>
                        <input name="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] xl:text-[13px]' placeholder='IMIĘ I NAZWISKO' />
                        <input name="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] xl:text-[13px]' placeholder='ADRES EMAIL' />
                        <input name="Number" value={number} onChange={(e) => setNumber(e.target.value)} type="text" className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] xl:text-[13px]' placeholder='NUMER TELEFONU' />
                        <textarea name="Text" value={text} onChange={(e) => setText(e.target.value)} className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] resize-none h-[200px] xl:h-[100px] xl:text-[13px]' placeholder='TREŚĆ'></textarea>
                        <div className='flex justify-end sm:justify-center'>
                            <FormButton text="WYŚLIJ" submitting={isSubmitting} />
                        </div>
                    </form>
                </div>

                <div className='flex-1 flex flex-col justify-center lg:items-center gap-[20px] z-10'>
                    <p className='text-[25px] xl:text-[20px] font-medium text-[#E2B350]'>Dane kontaktowe</p>
                    <div className='flex gap-[15px] items-center'>
                        <Icon icon="mdi:phone" width="40" height="40" className='text-[#E2B350] xl:w-[30px] xl:h-[30px] lg:w-[25px] lg:h-[25px]' />
                        <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px] font-light'>720 177 174</p>
                    </div>

                    <div className='flex gap-[15px] items-center'>
                        <Icon icon="mdi:phone" width="40" height="40" className='text-[#E2B350] xl:w-[30px] xl:h-[30px] lg:h-[25px]' />
                        <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px] font-light'>511 019 652</p>
                    </div>

                    <div className='flex gap-[15px] items-center'>
                        <Icon icon="solar:letter-bold" width="40" height="40" className='text-[#E2B350] xl:w-[30px] xl:h-[30px] lg:h-[25px]' />
                        <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px] font-light'>contact@airtilion.pl</p>
                    </div>

                    <div className='flex gap-[15px]'>
                        <div>
                            <Icon icon="mdi:company" width="40" height="40" className='text-[#E2B350] xl:w-[30px] xl:h-[30px] lg:h-[25px]' />
                        </div>
                        <div>
                            <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px] font-light'>Airtilion Sp. z o.o.</p>
                            <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px] font-light'>NIP: PL1823478234</p>
                            <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px]font-light'>REGON: 2384723</p>
                            <p className='text-[20px] xl:text-[18px] lg:text-[15px] sm:text-[13px] font-light'>KRS: 0000283921</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute top-0 left-0 w-full h-full bg-[#000000bf] hidden lg:block'></div>
        </section>
    )
}

export default Contact
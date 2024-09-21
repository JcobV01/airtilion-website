import React from 'react'

import bg from '@public/assets/images/contact-lion.webp'
import Heading from '@components/Heading'
import FormButton from '@components/FormButton'

import icon from '@public/assets/icons/contact/clock.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <section id="contact" className='relative z-10 w-full flex justify-center'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="1402"
                    height="800"
                    viewBox="0 0 1402 800"
                    fill="none"
                    className='z-10'
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

            <div className='absolute w-[1100px] h-full top-0 left-[50%] translate-x-[-50%] flex gap-[170px] py-[50px] z-10'>
                <div className='flex-1 flex flex-col gap-[50px]'>
                    <Heading title="Kontakt" subtitle="ROZPOCZNIJMY WSPÓŁPRACĘ"/>
                    <p className='text-[18px]'>Chcesz dowiedzieć się więcej o naszych usługach lub potrzebujesz porady? Skontaktuj się z nami!</p>
                    <form className='flex flex-col gap-[20px]'>
                        <input type="text" className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px]' placeholder='IMIĘ I NAZWISKO'/>
                        <input type="text" className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px]' placeholder='ADRES EMAIL'/>
                        <textarea className='bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] resize-none h-[200px]' placeholder='TREŚĆ'></textarea>
                        <div className='flex justify-end'>

                        <FormButton text="WYŚLIJ" submitting={false}/>
                        </div>
                    </form>
                </div>

                <div className='flex-1 flex flex-col justify-center gap-[20px] z-10'>
                    <p className='text-[25px] font-medium text-[#E2B350]'>Dane kontaktowe</p>
                    <div className='flex gap-[15px]'>
                        <Image src={icon} width={40} height={40} alt='ikona'/>
                        <p className='text-[20px] font-light'>720 177 174</p>
                    </div>

                    <div className='flex gap-[15px]'>
                        <Image src={icon} width={40} height={40} alt='ikona'/>
                        <p className='text-[20px] font-light'>511 019 652</p>
                    </div>

                    <div className='flex gap-[15px]'>
                        <Image src={icon} width={40} height={40} alt='ikona'/>
                        <p className='text-[20px] font-light'>contact@airtilion.pl</p>
                    </div>

                    <div className='flex gap-[15px]'>
                        <div>
                            <Image src={icon} width={40} height={40} alt='ikona'/>
                        </div>
                        <div>
                            <p className='text-[20px] font-light'>Airtilion Sp. z o.o.</p>
                            <p className='text-[20px] font-light'>NIP: PL1823478234</p>
                            <p className='text-[20px] font-light'>REGON: 2384723</p>
                            <p className='text-[20px] font-light'>KRS: 0000283921</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute top-[300px] left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none">
                    <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                </svg>


            </div>
        </section>
    )
}

export default Contact
import React from 'react'
import map from '@public/assets/images/area-map.webp'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const CityComponent = ({ header, city }) => {
    return (
        <section className='flex justify-center px-[130px] gap-[100px] min-h-dvh items-center 2xl:gap-[50px] 2xl:px-[100px] xl:flex-col xl:gap-[32px] sm:mt-[-128px] sm:gap-0 sm:px-[40px] z-10'>

            <article className={`flex flex-col gap-[32px] mt-[130px] flex-1 justify-center xl:items-center right-left-animation z-10`}>
                <h1 className={`${header?.h1?.length > 40 ? 'text-[30px] sm:text-[25px]' : 'max-w-[550px] text-[48px] 2xl:text-[40px] xl:max-w-full lg:text-[30px]'} font-semibold xl:text-center`} dangerouslySetInnerHTML={{__html: header.h1}} />
                <p className='text-[#E2B350] text-[17px] lg:text-[15px] font-light'>{header.paragraph1}</p>
                <p className='text-[#E2B350] text-[17px] lg:text-[15px] font-light'>{header.paragraph2}</p>
                <div className='flex gap-[64px] sm:flex-col sm:gap-[16px] sm:items-center'>
                    
                    <Link href="/">
                        <button className='relative overflow-hidden py-[12px] px-[30px] rounded-[7px] duration-700 w-max group xl:text-[15px] sm:w-[250px]'>
                            <span className='z-0 absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] transition-all duration-700 group-hover:w-0' />
                            <span className='z-10 relative flex items-center gap-[10px] group-hover:scale-90 transition-transform duration-700 sm:justify-between'>
                                Poznaj szczegóły
                                <Icon icon="hugeicons:arrow-right-double" width="16" height="16" />
                            </span>
                            <span className='z-20 absolute left-0 top-0 h-full w-0 box-border border-2 border-[#CEA75B80] transition-all duration-700 group-hover:w-full rounded-[7px]' />
                        </button>
                    </Link>

                    <Link href="/oferta/strony-internetowe">
                        <button className='relative overflow-hidden py-[12px] px-[30px] rounded-[7px] duration-700 w-max group xl:text-[15px] sm:w-[250px]'>
                            <span className='z-0 absolute left-0 top-0 h-full w-full box-border border-2 border-[#CEA75B80] transition-all duration-700 group-hover:w-0 group-hover:border-0 rounded-[7px]' />
                            <span className='z-20 relative flex items-center gap-[10px] group-hover:scale-90 transition-transform duration-700 sm:justify-between'>
                                Sprawdź naszą ofertę
                                <Icon icon="hugeicons:arrow-right-double" width="16" height="16" />
                            </span>
                            <span className='z-10 absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] transition-all duration-700 group-hover:w-full rounded-[7px]' />
                        </button>
                    </Link>

                </div>
            </article>

            <article className='flex-1 xl:pb-[50px] mt-[130px] left-right-animation z-10 sm:mt-[96px]'>
                <Image src={map} width="751" className='aspect-[1028/960] xl:m-auto testowe' alt={`Tworzymy strony i sklepy internetowe w ${city}`} loading='eager' />
            </article>

        </section>
    )
}

export default CityComponent
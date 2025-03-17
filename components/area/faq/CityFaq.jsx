import React from 'react'
import Subtitle from '../Subtitle'
import CityAccordion from './CityAccordion'
import Link from '@node_modules/next/link'
import { Icon } from '@node_modules/@iconify/react/dist/iconify'

const CityFaq = ({ data }) => {
    return (
        <section className="relative z-10">
            <article className='w-[1240px] mx-auto flex items-end gap-[64px] xl:w-[1000px] lg:w-[90%] lg:flex-col lg:items-center lg:justify-center'>

                <div className='flex flex-col w-[451px] lg:w-full'>
                    <Subtitle subtitle="CZĘSTO ZADAWANE PYTANIA" />
                    <h3 className='mt-[64px] text-[30px] font-semibold lg:text-[25px] lg:mt-[16px]'>Masz jakieś pytania odnośnie strony internetowej?</h3>
                    <p className='mt-[16px] text-[20px] lg:text-[18px]'>Obok znajdziesz odpowiedzi</p>

                    <Link href="/faq" aria-label='Przejdź do pełnego FAQ' className='mt-[48px] inline-flex items-center gap-[12px] max-w-max duration-700 hover:scale-90'>
                        <span className='text-[#E2B350] text-[16px] tracking-[2.5px] sm:text-[14px]'>Przejdź do pełnego FAQ</span>
                        <Icon icon="ep:right" width="20" height="20" alt="Ikona strzałki w prawo" className="text-[#E2B350]" />
                    </Link>
                </div>

                <div className='w-[725px] lg:w-full'>
                    <CityAccordion data={data} />
                </div>

            </article>
        </section>
    )
}

export default CityFaq
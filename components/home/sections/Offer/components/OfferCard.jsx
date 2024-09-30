import { Icon } from '@iconify/react'
import Link from 'next/link'

const OfferCard = ({ title, technologies, composition, index, isVisible, link }) => {
    return (
        <article className={`w-[400px] h-[400px] sm:w-[280px] sm:h-auto sm:pb-[50px] flex flex-col gap-[20px] p-[20px] px-[30px] relative backdrop-blur-[5px] border-[2.5px] border-[#1A1A1A] rounded-[10px] z-10 transition-all duration-1000 ease-in-out opacity-0 translate-y-[50px] delay-${index * 200}ms ${isVisible ? 'tile-visible' : 'tile-hidden'}`} style={{ transitionDelay: `${index * 200}ms` }}>
            <h5 className='text-[20px] lg:text-[18px] tracking-[2px] z-10'>{title}</h5>
            <p className='text-[15px] lg:text-[13px] font-light text-[#AEAEAE] z-10'>{technologies.subtitle}</p>
            <div className='z-10'>
                {
                    technologies.list.map((item, index) => (
                        <div className='flex gap-[20px] items-center' key={index * 501}>
                            <Icon icon='lets-icons:check-fill' width={20} height={20} alt='Ikona listy' className='text-[#E2B350]' />
                            <p className='text-[15px] lg:text-[13px] font-light'>{item}</p>
                        </div>
                    ))
                }
            </div>

            <p className='text-[15px] lg:text-[13px] font-light text-[#AEAEAE] z-10'>{composition.subtitle}</p>
            <div className='z-10'>
                {
                    composition.list.map((item, index) => (
                        <div className='flex gap-[20px] items-center' key={index * 1000}>
                            <Icon icon='lets-icons:check-fill' width={20} height={20} alt='Ikona listy' className='text-[#E2B350]' />
                            <p className='text-[15px] lg:text-[13px] font-light'>{item}</p>
                        </div>
                    ))
                }
            </div>

            <Link href={link}>
                <div className='absolute bottom-[20px] right-[20px] flex gap-[4px] z-1 transition duration-[700ms] hover:tracking-[2px]'>
                    <p className='text-[15px] lg:text-[13px] font-light'>Poznaj szczegóły oferty</p>
                    <div className='flex items-center'>
                        <Icon icon='ep:d-arrow-right' width={20} height={20} alt='Ikona strzałek w prawo' className='text-[#E2B350]' />
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default OfferCard
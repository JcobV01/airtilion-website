"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import { Kaushan_Script } from 'next/font/google';

const kaushan = Kaushan_Script({
    subsets: ['latin'],
    weight: ['400'],
  })

const PortfolioItem = ({ title, desc, bg, image, id, client }) => {
    const router = useRouter()

    const detailsHande = (e) => {
        router.push(`/portfolio/${e.currentTarget.id}`)
    }

    return (
        <section id={id} className='pt-[50px] z-10 sm:mb-[50px] fold:mb-0' onClick={(e) => detailsHande(e)}>
            <article className='relative h-[550px] w-[1100px] xxl:h-[650px] m-auto hover:w-[1200px] 2xl:w-[1000px] xl:w-[800px] xl:h-[400px] lg:w-[80%] lg:h-[450px] sm:h-[300px] md:w-[90%] 2xl:hover:w-[1100px] xl:hover:w-[900px] lg:hover:w-[80%] md:hover:w-[90%] lg:hover:h-[500px] sm:hover:h-[350px] transition-all duration-1000 cursor-pointer portfolio-item'>
                <div className='w-[960px] h-[550px] xxl:h-[650px] xl:w-[700px] xl:h-[400px] sm:h-[300px] lg:w-[100%] relative px-[50px] xl:px-0'>
                    <span className='h-[2px] w-[50%] xl:w-[30%] bg-[#E2B35080] z-10 block absolute top-[30px] left-[50%] xl:left-[20%] translate-x-[-50%] lg:hidden'></span>

                    <div className='w-[400px] h-full lg:w-full lg:h-auto flex flex-col gap-[30px] justify-center bg-[#00000082] relative z-20 px-[50px] lg:py-[20px] sm:px-[20px]'>
                        <h4 className={`${kaushan.className} text-[25px] xl:text-[20px] relative z-10 sm:text-center`}>{title}</h4>
                        <p className='text-[15px] xxl:text-[18px] xl:text-[13px] lg:[11px] text-[#AFAFAF] relative z-10 md:line-clamp-3 sm:text-center'>{desc}</p>
                    </div>

                    <Image 
                        src={`https://api.airtilion.com/uploads/projects/${client}/${bg.file}`} 
                        placeholder='blur'
                        blurDataURL={`data:image/webp;base64,${bg.base64}`}
                        width={960} 
                        height={550} 
                        alt="Tlo" 
                        className='object-cover w-full h-full absolute top-0 left-0 z-0' 
                    />
                    <div className='absolute w-full h-full top-0 left-0 z-1 bg-[#000000e0]'></div>
                    <span className='h-[2px] w-[50%] xl:w-[30%] bg-[#E2B35080] z-10 block absolute bottom-[30px] left-[50%] xl:left-[20%] translate-x-[-50%] lg:hidden'></span>

                    <Link href="#">
                        <div className='absolute bottom-[20px] lg:bottom-auto lg:top-[30px] sm:top-[-40px] lg:z-20 right-[40px] sm:right-0 flex gap-[15px]'>
                            <p className='text-[15px] xl:text-[13px]'>Zobacz szczegóły</p>
                            <Icon icon="solar:arrow-right-broken" width={20} height={20} alt='Ikona strzałki' className='text-[#E2B350]' />
                        </div>
                    </Link>
                </div>

                <Image 
                    src={`https://api.airtilion.com/uploads/projects/${client}/${image.file}`} 
                    placeholder='blur'
                    blurDataURL={`data:image/webp;base64,${image.base64}`}
                    width={830} 
                    height={430} 
                    alt="Strona" 
                    className='absolute right-0 top-[50%] sm:top-[55%] md:top-[50%] lg:translate-y-0 translate-y-[-50%] lg:left-[50%] lg:right-auto lg:translate-x-[-50%] saturate-0 xl:w-[80%] sm:w-[95%]' 
                />
            </article>
        </section>
    )
}

export default PortfolioItem
import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import Image from '@node_modules/next/image'
import Link from '@node_modules/next/link'
import map from '@public/assets/images/area-map.webp'
import React from 'react'

const page = () => {
  return (
    <section className='flex justify-center px-[130px] gap-[100px] mt-[100px] 2xl:gap-[50px] 2xl:px-[100px] xl:flex-col xl:gap-[100px] sm:px-[40px]'>
            <article className='flex flex-col gap-[32px] flex-1 justify-center xl:items-center'>
                <h1 className='text-[48px] 2xl:text-[40px] lg:text-[30px] font-medium xl:text-center'>Strony i aplikacje internetowe w całej Polsce</h1>
                <h2 className='text-[#E2B350] text-[20px] 2xl:text-[18px] lg:text-[15px] font-light xl:text-center'>Tworzymy nowoczesne i eleganckie strony internetowe dopasowane do potrzeb klientów na terenie całej Polski. Działamy przede wszystkim online, dlatego nie mamy ograniczeń. Skontaktuj się z nami, a wszystko wyjaśnimy.</h2>
                <div className=' text-[13px] flex flex-wrap gap-[2px]'>
                    <p className='mr-1'>Obszar działania:</p>
                    <Link href="/area/bialystok" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Białystok,</Link>
                    <Link href="/area/bydgoszcz" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Bydgoszcz,</Link>
                    <Link href="/area/czestochowa" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Częstochowa,</Link>
                    <Link href="/area/gdansk" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Gdańsk,</Link>
                    <Link href="/area/gorzowwielkopolski" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Gorzów Wielkopolski,</Link>
                    <Link href="/area/katowice" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Katowice,</Link>
                    <Link href="/area/kielce" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Kielce,</Link>
                    <Link href="/area/krakow" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Kraków,</Link>
                    <Link href="/area/lodz" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Łódź,</Link>
                    <Link href="/area/lublin" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Lublin,</Link>
                    <Link href="/area/nowysacz" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Nowy Sącz,</Link>
                    <Link href="/area/olsztyn" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Olsztyn,</Link>
                    <Link href="/area/opole" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Opole,</Link>
                    <Link href="/area/poznan" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Poznań,</Link>
                    <Link href="/area/rzeszow" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Rzeszów,</Link>
                    <Link href="/area/slupsk" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Słupsk,</Link>
                    <Link href="/area/szczecin" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Szczecin,</Link>
                    <Link href="/area/tarnow" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Tarnów,</Link>
                    <Link href="/area/torun" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Toruń,</Link>
                    <Link href="/area/warszawa" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Warszawa,</Link>
                    <Link href="/area/wroclaw" className='text-[#777777] duration-500 hover:text-[#E2B350]'>Wrocław</Link>
                </div>
                <Link href="/">
                    <button className='bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] py-[10px] px-[30px] rounded-[7px] duration-500 flex gap-[10px] items-center w-max hover:text-[#d9d9d9] hover:bg-gradient-to-r hover:text-[15px] hover:py-[12px] hover:tracking-[1.5px] nav-button xl:text-[15px]'>
                        Dowiedz się więcej
                        <Icon icon="hugeicons:arrow-right-double" width="16" height="16" />
                    </button>
                </Link>
            </article>
            <article className='flex-1 xl:pb-[50px]'>
                <Image src={map} width="751" className='aspect-[1028/960] xl:m-auto' alt="Zdjęcie mapy z obszarami działania"/>
            </article>
        </section>
  )
}

export default page
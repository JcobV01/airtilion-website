"use client"

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import bgImage from '@public/assets/images/main-photo.webp'
import logo from '@public/assets/images/airtilion-logo-dark.png'
import Image from 'next/image'
import { Jura } from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
    weight: ['300'],
})

const MainDialog = ({setDialogV}) => {
    const [isLoading, setIsLoading] = useState(true);
    const dialogRef = useRef()

    useEffect(() => {
        // Symulacja ładowania strony
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dialogRef.current.close()
            setDialogV(false)
        }, 1500);

        return () => clearTimeout(timeout);
    },[])

    return (
        <dialog ref={dialogRef} className="fixed w-full h-full top-0 left-0 z-30" open>
            <section style={{ backgroundImage: `url(${bgImage.src})` }} className='w-full h-full bg-cover 2xl:bg-center'>
                <div className='w-full h-full bg-[#0b0b0bef] flex items-center flex-col justify-center py-[50px]'>

                    {isLoading ? (
                        <div className='w-[600px] rounded-full border-[#B4A179] border-r-[2px] border-l-[2px] flex justify-center items-center spin aspect-square sm:w-[90%] sm:px-[20px] fold:border-none'>
                        </div>
                    ) : (

                        <div className='w-[600px] rounded-full border-[#B4A179] border-r-[2px] border-l-[2px] flex justify-center items-center aspect-square sm:w-[90%] sm:px-[20px] fold:border-none'>
                            <Image src={logo} width={400} height="auto" alt="Logo firmy" loading="eager" priority className='sm:w-[300px] animationOpacity' />
                        </div>
                    )}
                    

                </div>
            </section>
        </dialog>
    )
}

export default MainDialog
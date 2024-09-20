'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import CancelButton from '@components/CancelButton';
import FormButton from '@components/FormButton';
import logo from '@public/assets/icons/offer/logo.svg'

const DialogOffer = ({ dialogRef, handleCloseDialog, title }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    console.log(title)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !number) {
            setError('Wypełnij wszystkie pola!');
            return;
        }

        setIsSubmitting(true);
        console.log(name, email, number);
        router.push('/offer');
    }

    return (
        <dialog ref={dialogRef} className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center w-[1000px] bg-[#000000b3] rounded-[5px] backdrop-blur-[5px]'>
            <div className='flex flex-col justify-center items-center py-[20px] px-[20px]'>
                <div className='w-[100px] mt-[20px]'>
                    <Image src={logo} width="auto" height="auto" alt="Logo firmy" className='brightness-[70%]' />
                </div>
                <h2 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] mt-[20px]'>Zamów {title}</h2>
                {error && <span className='text-red-700 font-light tracking-[2px] my-[5px]'>{error}</span>}
                <form onSubmit={handleSubmit} className='flex flex-col items-center px-[100px] mt-[20px] w-[75%] sm:px-0'>

                    <p className='text-[16px] text-center tracking-[1px]'>Aby złożyć zamówienie na <span className='text-[#E2B350]'>{title}</span>, prosimy o podanie kilku informacji kontaktowych. Skontaktujemy się z Tobą w ciągu 2 dni roboczych, aby omówić szczegóły.</p>
                    <input type="text" placeholder="Imię i Nazwisko" value={name} onChange={(e) => setName(e.target.value)} className='w-full px-[10px] mt-[25px] bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none font-light' />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-[10px] mt-[15px] bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none font-light' />
                    <input type="text" placeholder="Numer telefonu" value={number} onChange={(e) => setNumber(e.target.value)} className='w-full px-[10px] mt-[15px] bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none font-light' />

                    <div className='w-full flex justify-between my-[40px]'>
                        <CancelButton text="Anuluj" handleClose={handleCloseDialog} />
                        <FormButton text="Wyślij" />
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default DialogOffer
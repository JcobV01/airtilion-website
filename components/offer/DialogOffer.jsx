'use client'

import React, { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast } from 'react-toastify';

import CancelButton from '@components/CancelButton';
import FormButton from '@components/FormButton';
import logo from '@public/assets/icons/logo.svg'
import Link from '@node_modules/next/link';

const DialogOffer = ({ dialogRef, handleCloseDialog, title, isOpen }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const [checkboxValue, setCheckboxValue] = useState({
        privacy_policy: false,
        personal_data_processing: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            setName('');
            setEmail('');
            setNumber('');
            setError('');
            setCheckboxValue({
                privacy_policy: false,
                personal_data_processing: false
            });
            setIsSubmitting(false);
        }
    }, [isOpen]);

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckboxValue((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!name || !email || !number) {
            setError('Wypełnij wszystkie pola!');
            setIsSubmitting(false);
            return;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setError('Podaj poprawny adres email!');
            setIsSubmitting(false);
            return;
        }

        if (!checkboxValue.privacy_policy || !checkboxValue.personal_data_processing) {
            setError('Musisz zaakceptować politykę prywatności i zgodę na przetwarzanie danych.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/offer/order', {
                method: 'POST',
                body: JSON.stringify({
                    Name: name,
                    Email: email,
                    Number: number,
                    Package: title,
                    Type: pathname,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                toast.success('Przesłano formularz!');
                router.push('/offer');
            }
        } catch (error) {
            setError('Wystąpił nieoczekiwany błąd.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <dialog ref={dialogRef} className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center w-[1000px] bg-[#000000b3] rounded-[5px] backdrop-blur-[5px] xl:w-[90%]'>
            <div className='flex flex-col justify-center items-center py-[20px] px-[20px] fold:px-[5px]'>
                <div className='w-[100px] mt-[20px] xxl:w-[150px]'>
                    <Image src={logo} width="auto" height="auto" alt="Logo firmy" className='brightness-[70%]' />
                </div>
                <h2 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] mt-[20px] xxl:text-[35px] md:text-center'>Zamów {title}</h2>
                {error && <span className='text-red-700 font-light tracking-[2px] my-[5px] xxl:text-[20px]'>{error}</span>}
                <form onSubmit={handleSubmit} className='flex flex-col items-center px-[100px] mt-[20px] w-[75%] xxl:w-[90%] md:px-[50px] sm:px-0 sm:w-[90%] orderForm'>

                    <p className='text-[16px] text-center tracking-[1px] xxl:text-[20px]'>Aby złożyć zapytanie o <span className='text-[#E2B350]'>{title}</span>, prosimy o podanie kilku informacji kontaktowych. Skontaktujemy się z Tobą w ciągu 2 dni roboczych, aby omówić szczegóły.</p>
                    <input type="text" name="Name" placeholder="Imię i Nazwisko" value={name} onChange={(e) => setName(e.target.value)} className='xxl:text-[20px] w-full px-[10px] mt-[25px] bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none font-light' />
                    <input type="email" name="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='xxl:text-[20px] w-full px-[10px] mt-[15px] bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none font-light' />
                    <input type="text" name="Number" placeholder="Numer telefonu" value={number} onChange={(e) => setNumber(e.target.value)} className='xxl:text-[20px] w-full px-[10px] mt-[15px] bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none font-light' />
                    <input type="text" name="Package" value={title} readOnly className='hidden' />

                    <div className='w-full flex items-center gap-[5px] mt-[15px] xl:flex-col'>
                        <input type="checkbox" id="privacy_policy" checked={checkboxValue.privacy_policy} onChange={handleCheckboxChange} className='hidden peer' />
                        <label htmlFor="privacy_policy" className='flex items-center cursor-pointer'>
                            <span className='quadBefore flex items-center tracking-[1px]'>Akceptuję</span>
                        </label>
                        <Link href="/assets/files/Polityka_prywatnosci_Airtilion.pdf" aria-label="Przejdź do Polityki prywatności" target="_blank" rel="noopener noreferrer" className='text-[#E2B350]'>politykę prywatności</Link>
                    </div>
                    <div className='w-full flex items-center gap-[5px] mt-[5px] xl:flex-col'>
                        <input type="checkbox" id="personal_data_processing" checked={checkboxValue.personal_data_processing} onChange={handleCheckboxChange} className='hidden peer' />
                        <label htmlFor="personal_data_processing" className='flex items-center cursor-pointer'>
                            <span className='quadBefore flex items-center tracking-[1px]'>Wyrażam zgodę na</span>
                        </label>
                        <Link href="/" aria-label="Przejdź do Polityki prywatności" target="_blank" rel="noopener noreferrer" className='text-[#E2B350]'>przetwarzanie danych osobowych</Link>
                    </div>

                    <div className='w-full flex justify-between my-[40px] md:flex-col-reverse md:gap-[20px]'>
                        <CancelButton text="Anuluj" handleClose={handleCloseDialog} />
                        <FormButton text="Wyślij" submitting={isSubmitting} />
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default DialogOffer
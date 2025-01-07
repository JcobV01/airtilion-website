'use client'

import React, { useState } from 'react'
import Heading from '@components/Heading'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react';

import imageBackground from '@public/assets/images/offer/formPricing.webp'
import Form from '@components/offer/Form'
import FormButton from '@components/FormButton'
import Link from 'next/link';

const pricing = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({});
  const [isOtherChecked, setIsOtherChecked] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'Privacy_policy' || name === 'Processing_of_personal_data') {
      setPost(prevPost => ({
        ...prevPost,
        [name]: checked // Ustawia na true/false
      }));
      return;
    }
    if (type === 'checkbox') {
      setPost(prevPost => {
        const currentValues = Array.isArray(prevPost[name]) ? prevPost[name] : [];
        if (checked) {
          if (!currentValues.includes(value)) {
            return {
              ...prevPost,
              [name]: [...currentValues, value] // Dodaj wartość do tablicy
            };
          }
        } else {
          return {
            ...prevPost,
            [name]: currentValues.filter(v => v !== value) // Filtruj tablicę
          };
        }
        return prevPost;
      });
      setIsOtherChecked(value !== 'Inne:');
      return;
    };

    if (type === 'radio') {
      setPost(prevPost => ({
        ...prevPost,
        [name]: value
      }));
      setIsOtherChecked(value !== 'Inne:');
    }

    if (type === 'text' && ['Type', 'Number_of_subpages', 'Functionality', 'CMS', 'Optimization_and_additional_services', 'Integrations'].includes(name) && name !== 'Name' && name !== 'Email' && name !== 'Number' && name !== 'Company' && name !== 'Industry') {
      if (!isOtherChecked) {
        setPost(prevPost => {
          const newValue = `Inne: ${value}`;
          const currentValues = Array.isArray(prevPost[name]) ? prevPost[name] : [];

          const updatedValues = currentValues.filter(v => !v.startsWith('Inne:'));
          return {
            ...prevPost,
            [name]: [...updatedValues, newValue] // Dodaj nową wartość do odpowiedniego pola
          };
        });
      }
      return;
    } else {
      setPost(prevPost => ({
        ...prevPost,
        [name]: value
      }));
    };
  };

  const createPricing = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const now = new Date();
      const polishTimeZone = new Date(now.getTime() + 60 * 60 * 1000);

      const postData = {
        ...post,
        Date: polishTimeZone
      };

      const response = await fetch('/api/offer/new', {
        method: 'POST',
        body: JSON.stringify({
          post: postData
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Przesłano formularz!');
        router.push('/offer');
      } else {
        handleErrorResponse();
      }


    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  const handleErrorResponse = () => {
    if (!post.Type) {
      setError("Rodzaj strony jest wymagany!");
    } else if (!post.Number_of_subpages) {
      setError("Liczba podstron jest wymagana!");
    } else if (!post.Functionality || post.Functionality.length === 0) {
      setError("Funkcjonalności są wymagane!");
    } else if (post.Functionality.some(func => func.length < 9)) {
      setError("Minimalna ilość znaków w funkcjonalnościach to 4!");
    } else if (!post.Budget) {
      setError("Budżet jest wymagany!");
    } else if (!post.Deadline) {
      setError("Termin jest wymagany!");
    } else if (!post.Name) {
      setError("Imię i Nazwisko jest wymagane!");
    } else if (!post.Email) {
      setError("Email jest wymagany!");
    } else if (!post.Number) {
      setError("Numer jest wymagany!");
    } else if (post.Privacy_policy !== true) {
      setError("Zgoda na politykę prywatności jest wymagana.");
    } else if (post.Processing_of_personal_data !== true) {
      setError("Zgoda na przetwarzanie danych osobowych jest wymagana.");
    } else {
      setError("Coś poszło nie tak...");
    }
    router.push('#form');
  };


  return (
    <>
      <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px] offerForm xl:gap-[100px] fold:w-[100%] z-10'>
        <article className='flex flex-col w-[1240px] mt-[100px] xxl:w-[1500px] xl:w-[90%]'>
          <Heading title="Darmowa wycena" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
          <p className='mt-[50px] text-[18px] font-light xxl:text-[25px] sm:text-[14px]'>Masz pomysł na stronę internetową, ale nie wiesz, ile będzie kosztować? Skorzystaj z naszego intuicyjnego formularza wyceny! Wybierz funkcje, które Cię interesują, a my przygotujemy spersonalizowaną ofertę dopasowaną do Twoich potrzeb.</p>
          <div className='mt-[50px] flex flex-col'>
            <h5 className='text-[22px] xxl:text-[30px] sm:text-[18px]'>Informacje ogólne</h5>
            <p className='mt-[15px] text-[18px] font-extralight xxl:text-[24px] sm:text-[16px]'>Każda strona internetowa lub sklep internetowy obejmuje:</p>
            <ul className='flex flex-col pl-[10px] text-[16px] font-extralight mt-[10px] space-y-[10px] tracking-[1.1px] xxl:text-[20px] sm:text-[14px]'>
              <li className='flex items-center gap-[10px]'>
                <div className='w-[12px] h-[12px]'>
                  <Icon icon="material-symbols:circle" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                </div>
                <p><span className='font-normal'>Responsywność:&nbsp;</span>Strona lub sklep będą optymalizowane dla wszystkich rodzajów urządzeń, w tym smartfonów, tabletów i komputerów.</p>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='w-[12px] h-[12px]'>
                  <Icon icon="material-symbols:circle" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                </div>
                <p><span className='font-normal'>Certyfikat SSL:&nbsp;</span>Integracja certyfikatu SSL. Koszt zakupu po stronie klienta.</p>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='w-[12px] h-[12px]'>
                  <Icon icon="material-symbols:circle" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                </div>
                <p><span className='font-normal'>Hosting i domena:&nbsp;</span>Koszt zakupu po stronie klienta.</p>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='w-[12px] h-[12px]'>
                  <Icon icon="material-symbols:circle" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                </div>
                <p className='font-normal'>Wsparcie techniczne przez 1 rok w tym:</p>
              </li>
              <li>

                <ul className='pl-[20px]  space-y-[5px]'>
                  <li className='flex items-center gap-[5px]'>
                    <div className='w-[12px] h-[12px]'>
                      <Icon icon="material-symbols:circle-outline" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                    </div>
                    <p>Regularne aktualizacje wtyczek: Zapewnienie najnowszych wersji wtyczek i motywów dla bezpieczeństwa i funkcjonalności.</p>
                  </li>
                  <li className='flex items-center gap-[5px]'>
                    <div className='w-[12px] h-[12px]'>
                      <Icon icon="material-symbols:circle-outline" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                    </div>
                    <p>Co miesięczny backup strony.</p>
                  </li>
                  <li className='flex items-center gap-[5px]'>
                    <div className='w-[12px] h-[12px]'>
                      <Icon icon="material-symbols:circle-outline" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                    </div>
                    <p>Naprawa ewentualnych błędów.</p>
                  </li>
                  <li className='flex items-center gap-[5px]'>
                    <div className='w-[12px] h-[12px]'>
                      <Icon icon="material-symbols:circle-outline" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
                    </div>
                    <p>Dodawanie nowych treści (do 2 godzin miesięcznie).</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form id="form" onSubmit={createPricing} className={`mt-[100px] flex flex-col text-[18px] font-extralight space-y-[50px] bg-[rgba(27,27,27,0.20)] rounded-[10px] backdrop-blur-[5px] py-[40px] px-[50px] xxl:text-[22px] sm:px-[10px] sm:mt-[50px]`}>
            {error && <span className='text-red-700 font-light tracking-[2px] mb-[5px]'>{error}</span>}
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>1. Rodzaj strony internetowej</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px] lg:flex-col-reverse lg:gap-[15px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Type" text="Wizytówka" idHandle="R1" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Type" text="Blog" idHandle="R2" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Type" text="Sklep internetowy" inputType="radio" idHandle="R3" handleInputChange={handleInputChange} />
                  <Form nameForm="Type" text="Portfolio" idHandle="R4" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Type" text="Inne:" idHandle="R5" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

                </div>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Type" text="Portal informacyjny" idHandle="R6" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Type" text="Strona firmowa" idHandle="R7" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Type" text="Strona wydarzenia" idHandle="R8" inputType="radio" handleInputChange={handleInputChange} />

                </div>
              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>2. Liczba podstron</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Number_of_subpages" text="1-6" idHandle="L1" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Number_of_subpages" text="6-12" idHandle="L2" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Number_of_subpages" text="Inne:" idHandle="L3" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

                </div>

              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>3. Funkcjonalności</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px] lg:flex-col-reverse lg:gap-[15px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Functionality" text="System zarządzania treścią (CMS)" style="quadBefore" idHandle="F1" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Formularz kontaktowy" idHandle="F2" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Blog / artykuły" idHandle="F3" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Galeria zdjęć" idHandle="F4" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Sklep internetowy" idHandle="F5" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Płatności online (PayPal, Przelewy24)" style="quadBefore" idHandle="F6" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Integracja z social mediami" idHandle="F7" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Inne:" idHandle="F8" style="quadBefore" showTextInput={true} inputType="checkbox" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

                </div>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Functionality" text="Integracja z mapami Google" idHandle="F9" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Autentyfikacja" idHandle="F10" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Komentarze / recenzje użytkowników" style="quadBefore" idHandle="F11" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Newsletter / subskrybcje" idHandle="F12" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Wielojęzyczność" idHandle="F13" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Functionality" text="Forum dyskusyjne" idHandle="F14" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />

                </div>
              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>3a. Jeśli w poprzednim punkcie wybrałeś/aś system zarządzania treścią, zaznacz interesującą Cię opcje.</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="CMS" text="Wordpress" idHandle="C1" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="CMS" text="Indywidualny CMS oparty o, np. Next.js" idHandle="C2" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="CMS" text="Inne:" idHandle="C3" showTextInput={true} inputType="radio" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

                </div>

              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>4. Optymalizacja i dodatkowe usługi</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Optimization_and_additional_services" text="Optymalizacja SEO" idHandle="O1" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Optimization_and_additional_services" text="Optymalizacja szybkości ładowania strony" style="quadBefore" idHandle="O2" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Optimization_and_additional_services" text="Copywriting (tworzenie treści)" idHandle="O3" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Optimization_and_additional_services" text="Media (zdjęcia, ikony, ilustracje)" idHandle="O4" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Optimization_and_additional_services" text="Inne:" idHandle="O5" style="quadBefore" showTextInput={true} inputType="checkbox" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

                </div>

              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>5. Integracje</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Integrations" text="Google Analytics" idHandle="I1" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Integrations" text="Google Search Console" idHandle="I2" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Integrations" text="Facebook Pixel" idHandle="I3" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Integrations" text="System mailingowy" idHandle="I4" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                  <Form nameForm="Integrations" text="Inne:" idHandle="I5" style="quadBefore" showTextInput={true} inputType="checkbox" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

                </div>

              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>6. Budżet</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Budget" text="<2000 zł" idHandle="B1" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Budget" text="2000-5000 zł" idHandle="B2" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Budget" text="5000-10 000 zł" idHandle="B3" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Budget" text=">10 000zł" idHandle="B4" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Budget" text="Nie wiem, potrzebuję porady" idHandle="B5" inputType="radio" handleInputChange={handleInputChange} />

                </div>

              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>7. Termin realizacji</h5>
              <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px]'>

                  <Form nameForm="Deadline" text="Do 2 tygodni" idHandle="T1" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Deadline" text="2-4 tygodni" idHandle="T2" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Deadline" text="1-2 miesięcy" idHandle="T3" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Deadline" text="Powyżej 2 miesięcy" idHandle="T4" inputType="radio" handleInputChange={handleInputChange} />
                  <Form nameForm="Deadline" text="Nie mam konkretnego terminu" idHandle="T5" inputType="radio" handleInputChange={handleInputChange} />

                </div>

              </div>
            </div>
            <div>
              <h5 className='text-[20px] font-normal xxl:text-[24px] sm:text-[18px]'>8. Dodatkowe usługi</h5>
              <div className='mt-[20px] px-[25px] flex gap-[200px]'>
                <div className='flex flex-col gap-[15px] w-full'>

                  <textarea rows="10" type="text" name="Additional_services" placeholder='Jeśli w formularzu nie znalazłeś/aś dodatkowych usług, które Cię interesują, wpisze je tutaj.' className='py-[10px] px-[15px] outline-none bg-[#0c0c0c80] border-[1px] border-[#a5a5a5] resize-none' onChange={handleInputChange} />

                </div>

              </div>
            </div>
            <div className='flex justify-center'>
              <hr className='w-[800px] bg-[rgba(226,179,80,0.50)] h-[1px] border-none md:w-[90%]'></hr>
            </div>

            <div style={{ backgroundImage: `url(${imageBackground.src})` }} className='h-[600px] rounded-[10px] xxl:h-[700px] xxl:bg-cover xxl:bg-no-repeat lg:w-[95%] lg:flex lg:mx-auto lg:flex-col lg:bg-center sm:h-[650px] sm:bg-cover sm:bg-no-repeat'>
              <h5 className='text-[20px] font-normal text-center pt-[50px] xxl:text-[24px] sm:text-[18px]'>Podstawowe informacje o kliencie</h5>
              <div className='mt-[20px] pl-[25px] flex justify-center gap-[200px] lg:pl-[0px]'>
                <div className='flex flex-col gap-[15px] w-[800px] xxl:text-[24px] lg:w-[90%] sm:text-[16px]'>

                  <input type="text" name="Name" placeholder="IMIĘ I NAZWISKO" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                  <input type="email" name="Email" placeholder="EMAIL" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                  <input type="text" name="Number" placeholder="NUMER TELEFONU" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                  <input type="text" name="Company" placeholder="NAZWA FIRMY (OPCJONALNIE)" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                  <input type="text" name="Industry" placeholder="BRANŻA (OPCJONALNIE)" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />

                  <div className='flex items-center gap-[10px] mt-[20px] xxl:text-[24px] sm:text-[13px] md:flex-col'>
                    <input type="checkbox" name="Privacy_policy" id="privacy" value="Polityka prywatności" onChange={handleInputChange} className='hidden peer' />
                    <label htmlFor='privacy' className='flex items-center cursor-pointer'>
                      <span className='quadBefore flex items-center'>Akceptuję</span>
                    </label>
                    <Link href="/assets/files/polityka_prywatnosci_Airtilion.pdf" aria-label="Przejdź do Polityki prywatności" target="_blank" rel="noopener noreferrer" className="text-[#E2B350] text-center">politykę prywatności</Link>
                  </div>

                  <div className='flex items-center gap-[10px] xxl:text-[24px] sm:text-[13px] md:flex-col'>
                    <input type="checkbox" name="Processing_of_personal_data" value="Zgoda na przetwarzanie danych osobowych" id="processing" onChange={handleInputChange} className='hidden peer' />
                    <label htmlFor='processing' className='flex items-center cursor-pointer'>
                      <span className='quadBefore flex items-center'>Wyrażam zgodę na</span>
                    </label>
                    <Link href="/" aria-label="Przejdź do ochrony danych osobowych" target="_blank" rel="noopener noreferrer" className="text-[#E2B350] text-center">przetwarzanie danych osobowych</Link>
                  </div>

                  <div className='flex justify-center mt-[50px]'>
                    <FormButton text="WYŚLIJ" submitting={submitting} />
                  </div>

                </div>

              </div>
            </div>
          </form>
        </article>
      </section>
      <section>
        {/* Oferta pricing - 1 linia */}

        <div className='absolute top-[1050px] xxl:hidden xl:top-[800px] lg:hidden left-[50%] translate-x-[-50%] z-[1] w-full opacity-50'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1864 1849" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Oferta pricing - 2 linia */}

        <div className='absolute top-[2250px] xxl:hidden lg:hidden left-[50%] translate-x-[-50%] z-[1] w-full opacity-50'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none" className='w-full'>
            <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Oferta pricing - 3 linia */}

        <div className='absolute top-[3250px] xxl:hidden lg:hidden left-[50%] translate-x-[-50%] z-[1] w-full opacity-50'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1533" viewBox="0 0 1864 1133" fill="none" className='w-full'>
            <path d="M2647.39 1089.59C2406.7 1157.58 2042.76 1145.41 1774.92 1024.24C1565.68 929.589 1342.08 787.24 1032.99 734.185C792.739 692.946 461.368 498.878 336.2 198.315C175.45 -187.693 40.9091 121.159 -133.685 85.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1169.59C2406.7 1237.58 2042.76 1225.41 1774.92 1104.24C1565.68 1009.59 1342.08 867.24 1032.99 814.185C792.739 772.946 461.368 578.878 336.2 278.315C175.45 -107.693 40.9091 201.159 -133.685 165.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1249.59C2406.7 1317.58 2042.76 1305.41 1774.92 1184.24C1565.68 1089.59 1342.08 947.24 1032.99 894.185C792.739 852.946 461.368 658.878 336.2 358.315C175.45 -27.693 40.9091 281.159 -133.685 245.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1349.59C2406.7 1417.58 2042.76 1405.41 1774.92 1284.24C1565.68 1189.59 1342.08 1047.24 1032.99 994.185C792.739 952.946 461.368 758.878 336.2 458.315C175.45 72.307 40.9091 381.159 -133.685 345.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* linie mobilne */}

        <div className='absolute hidden lg:block lg:top-[700px] md:top-[900px] left-[50%] translate-x-[-50%] z-[1] w-full opacity-50 md:opacity-70'>
          <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1849" viewBox="0 0 900 700" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>


        <div className='absolute hidden lg:block lg:top-[2200px] md:top-[2400px] sm:top-[2200px] left-[50%] translate-x-[-50%] z-[1] w-full opacity-50 md:opacity-70'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 900 700" fill="none" className='w-full'>
            <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        <div className='absolute hidden lg:block lg:top-[3000px] md:top-[3000px] sm:top-[3000px] left-[50%] translate-x-[-50%] z-[1] w-full opacity-50 md:opacity-70'>
          <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1849" viewBox="0 0 900 700" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        <div className='absolute hidden lg:block lg:top-[4000px] md:top-[4000px] left-[50%] translate-x-[-50%] z-[1] w-full opacity-50 md:opacity-70'>
          <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1849" viewBox="0 0 900 700" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>
      </section>
    </>
  )
}

export default pricing
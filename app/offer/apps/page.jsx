'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

import imageBackground from '@public/assets/images/offer/formPricing.webp'

import Heading from '@components/Heading'
import FormButton from '@components/FormButton'
import Form from '@components/offer/Form'

const apps = () => {
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

    if (type === 'text' && ['Website_type', 'App_type', 'Number_of_subpages', 'Website_functionality', 'App_functionality', 'CMS', 'Optimization_and_additional_services', 'Integrations'].includes(name) && name !== 'Name' && name !== 'Email' && name !== 'Number' && name !== 'Company' && name !== 'Industry') {
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

  console.log(post);

  const createPricing = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/offer/apps', {
        method: 'POST',
        body: JSON.stringify({
          post: post,
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
    } else if (!post.Website_functionality || post.Website_functionality.length === 0) {
      setError("Funkcjonalności są wymagane!");
    } else if (post.Website_functionality.some(func => func.length < 9)) {
      setError("Minimalna ilość znaków w funkcjonalnościach to 4!");
    } else if (!post.App_functionality || post.Website_functionality.length === 0) {
      setError("Funkcjonalności są wymagane!");
    } else if (post.App_functionality.some(func => func.length < 9)) {
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
    <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px] offerForm xl:gap-[100px] fold:w-[100%]'>
      <article className='flex flex-col w-[1240px] mt-[100px] xl:w-[90%]'>
        <Heading title="Aplikacje mobilne" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
        <p className='mt-[50px] text-[18px] font-light sm:text-[14px]'>Zainteresowany stworzeniem aplikacji mobilnej i strony internetowej? Skorzystaj z naszego intuicyjnego formularza, aby uzyskać darmową wycenę! Wybierz opcje, które najlepiej odpowiadają Twoim potrzebom, a my przygotujemy spersonalizowaną ofertę. Wypełnij formularz, aby pomóc nam lepiej zrozumieć Twoje wymagania:</p>
        <div className='mt-[50px] flex flex-col'>
          <h5 className='text-[22px] sm:text-[18px]'>Informacje ogólne</h5>
          <p className='mt-[15px] text-[18px] font-extralight sm:text-[16px]'>W pakiecie każda strona internetowa obejmuje:</p>
          <ul className='flex flex-col pl-[10px] text-[16px] font-extralight mt-[10px] space-y-[10px] tracking-[1.1px] sm:text-[14px]'>
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
              <p><span className='font-normal'>Certyfikat SSL:&nbsp;</span>Integracja certyfikatu SSL. Koszt zakupu po stronie klienta</p>
            </li>
            <li className='flex items-center gap-[10px]'>
              <div className='w-[12px] h-[12px]'>
                <Icon icon="material-symbols:circle" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
              </div>
              <p><span className='font-normal'>Hosting i domena:&nbsp;</span>Koszt zakupu po stronie klienta</p>
            </li>
            <li className='flex items-center gap-[10px]'>
              <div className='w-[12px] h-[12px]'>
                <Icon icon="material-symbols:circle" width='12' height='12' alt="Ikona kropki" className='text-[#E2B350]' />
              </div>
              <p className='font-normal'>Wsparcie techniczne strony oraz aplikacji przez 1 rok w tym:</p>
            </li>
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
          </ul>
        </div>
        <form id="form" onSubmit={createPricing} className='mt-[100px] flex flex-col text-[18px] font-extralight space-y-[50px] sm:mt-[50px]'>
          {error && <span className='text-red-700 font-light tracking-[2px] mb-[5px]'>{error}</span>}
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>1. Rodzaj strony internetowej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px] lg:flex-col-reverse lg:gap-[15px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Website_type" text="Wizytówka" idHandle="R1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Website_type" text="Blog" idHandle="R2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Website_type" text="Sklep internetowy" inputType="radio" idHandle="R3" handleInputChange={handleInputChange} />
                <Form nameForm="Website_type" text="Portfolio" idHandle="R4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Website_type" text="Inne:" idHandle="R5" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Website_type" text="Portal informacyjny" idHandle="R6" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Website_type" text="Strona firmowa" idHandle="R7" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Website_type" text="Strona wydarzenia" idHandle="R8" inputType="radio" handleInputChange={handleInputChange} />

              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>2. Rodzaj aplikacji mobilnej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="App_type" text="Aplikacja informacyjna" idHandle="RA1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="App_type" text="Aplikacja społecznościowa" idHandle="RA2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="App_type" text="Aplikacja do zarządzania zadaniami" inputType="radio" idHandle="RA3" handleInputChange={handleInputChange} />
                <Form nameForm="App_type" text="Aplikacja rozrywkowa" idHandle="RA4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="App_type" text="Inne:" idHandle="RA5" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>3. Liczba podstron strony internetowej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Number_of_subpages" text="1-6" idHandle="L1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Number_of_subpages" text="6-12" idHandle="L2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Number_of_subpages" text="Inne:" idHandle="L3" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>4. Funkcjonalności strony internetowej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px] xl:flex-col-reverse xl:gap-[15px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Website_functionality" text="System zarządzania treścią (CMS)" style="quadBefore" idHandle="F1" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Formularz kontaktowy" idHandle="F2" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Blog / artykuły" idHandle="F3" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Galeria zdjęć" idHandle="F4" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Sklep internetowy" idHandle="F5" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Płatności online (PayPal, Przelewy24)" style="quadBefore" idHandle="F6" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Integracja z social mediami" idHandle="F7" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Inne:" idHandle="F8" style="quadBefore" showTextInput={true} inputType="checkbox" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Website_functionality" text="Integracja z mapami Google" idHandle="F9" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Autentyfikacja" idHandle="F10" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Komentarze / recenzje użytkowników" style="quadBefore" idHandle="F11" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Newsletter / subskrybcje" idHandle="F12" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Wielojęzyczność" idHandle="F13" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="Website_functionality" text="Forum dyskusyjne" idHandle="F14" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />

              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>4a. Jeśli w poprzednim punkcie wybrałeś/aś system zarządzania treścią, zaznacz interesującą Cię opcje.</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="CMS" text="Wordpress" idHandle="C1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="CMS" text="Indywidualny CMS oparty o, np. Next.js" idHandle="C2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="CMS" text="Inne:" idHandle="C3" showTextInput={true} inputType="radio" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>

            </div>
          </div>

          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>5. Funkcjonalności aplikacji mobilnej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="App_functionality" text="Autentyfikacja" idHandle="FA1" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Powiadomienia push" style="quadBefore" idHandle="FA2" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Integracja z systemami płatności" idHandle="FA3" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Integracja z mediami społecznościowymi" idHandle="FA4" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Sklep internetowy" style="quadBefore" idHandle="FA5" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Możliwość pracy offline" idHandle="FA6" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Synchronizacja z chmurą" idHandle="FA7" style="quadBefore" inputType="checkbox" handleInputChange={handleInputChange} />
                <Form nameForm="App_functionality" text="Inne:" idHandle="FA8" style="quadBefore" showTextInput={true} inputType="checkbox" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>

            </div>
          </div>

          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>6. Optymalizacja i dodatkowe usługi</h5>
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
            <h5 className='text-[20px] font-normal sm:text-[18px]'>7. Integracje</h5>
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
            <h5 className='text-[20px] font-normal sm:text-[18px]'>8. Budżet</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Budget" text="<6000 zł" idHandle="B1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text="6000-10 000 zł" idHandle="B2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text="10 000-20 000 zł" idHandle="B3" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text=">20 000zł" idHandle="B4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text="Nie wiem, potrzebuję porady" idHandle="B5" inputType="radio" handleInputChange={handleInputChange} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>9. Termin realizacji</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Deadline" text="Do 1 miesiąca" idHandle="T1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="1-2 miesięcy" idHandle="T2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="2-4 miesięcy" idHandle="T3" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="Powyżej 4 miesięcy" idHandle="T4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="Nie mam konkretnego terminu" idHandle="T5" inputType="radio" handleInputChange={handleInputChange} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal sm:text-[18px]'>10. Dodatkowe usługi</h5>
            <div className='mt-[20px] px-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px] w-full'>

                <textarea rows="10" type="text" name="Additional_services" placeholder='Jeśli w formularzu nie znalazłeś/aś dodatkowych usług, które Cię interesują, wpisze je tutaj.' className='py-[10px] px-[15px] outline-none bg-[#0c0c0c80] border-[1px] border-[#a5a5a5] resize-none' onChange={handleInputChange} />

              </div>

            </div>
          </div>
          <div className='flex justify-center'>
            <hr className='w-[800px] bg-[rgba(226,179,80,0.50)] h-[1px] border-none md:w-[90%]'></hr>
          </div>

          <div style={{ backgroundImage: `url(${imageBackground.src})` }} className='h-[600px] rounded-[10px] lg:w-[95%] lg:flex lg:mx-auto lg:flex-col lg:bg-center sm:h-[650px] sm:bg-cover sm:bg-no-repeat'>
            <h5 className='text-[20px] font-normal text-center pt-[50px] sm:text-[18px]'>Podstawowe informacje o kliencie</h5>
            <div className='mt-[20px] pl-[25px] flex justify-center gap-[200px] lg:pl-[0px]'>
              <div className='flex flex-col gap-[15px] w-[800px] lg:w-[90%] sm:text-[16px]'>

                <input type="text" name="Name" placeholder="IMIĘ I NAZWISKO" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="email" name="Email" placeholder="EMAIL" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="text" name="Number" placeholder="NUMER TELEFONU" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="text" name="Company" placeholder="NAZWA FIRMY (OPCJONALNIE)" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="text" name="Industry" placeholder="BRANŻA (OPCJONALNIE)" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />

                <div className='flex items-center gap-[10px] mt-[20px] sm:text-[13px]'>
                  <input type="checkbox" name="Privacy_policy" id="privacy" value="Polityka prywatności" onChange={handleInputChange} className='hidden peer' />
                  <label htmlFor='privacy' className='flex items-center cursor-pointer'>
                    <span className='quadBefore flex items-center'>Polityka prywatności</span>
                  </label>
                </div>

                <div className='flex items-center gap-[10px] sm:text-[13px]'>
                  <input type="checkbox" name="Processing_of_personal_data" value="Zgoda na przetwarzanie danych osobowych" id="processing" onChange={handleInputChange} className='hidden peer' />
                  <label htmlFor='processing' className='flex items-center cursor-pointer'>
                    <span className='quadBefore flex items-center'>Zgoda na przetwarzanie danych osobowych</span>
                  </label>
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
  )
}

export default apps
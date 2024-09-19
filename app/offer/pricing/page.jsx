'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Heading from '@components/Heading'

import circle from '@public/assets/icons/offer/circle.svg'
import circleOutline from '@public/assets/icons/offer/circleOutline.svg'
import imageBackground from '@public/assets/images/offer/formPricing.webp'
import Form from '@components/offer/Form'
import FormButton from '@components/FormButton'
import { useRouter } from 'next/navigation'

const pricing = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({});
  const [isOtherChecked, setIsOtherChecked] = useState(true);
  const [error, setError] = useState('');

  const [textInputValue, setTextInputValue] = useState(''); //do usuniecia

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

    if (value === 'Inne:') {
      setIsOtherChecked(false);
    } else {
      setIsOtherChecked(true)
    }

    if (type === 'checkbox') {
      setPost(prevPost => {
        const currentValues = prevPost[name] || [];
        if (checked) {
          return {
            ...prevPost,
            [name]: [...currentValues, value]
          };
        } else {
          return {
            ...prevPost,
            [name]: currentValues.filter(v => v !== value)
          };
        }
      });
    } else if (type === 'text') {
      setTextInputValue(value);
      setPost(prevPost => ({
        ...prevPost,
        [name]: value // Zaktualizuj odpowiednie pole w stanie post
      }));
    }
    else {
      setPost({
        ...post,
        [name]: value
      });
    }
  };

  console.log(post);

  const createPricing = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/offer/new', {
        method: 'POST',
        body: JSON.stringify({
          post: post,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
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
    } else if (!post.Functionality) {
      setError("Funkcjonalności są wymagane!");
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
    <section className='relative m-auto flex flex-col items-center gap-[150px] mb-[20px] offerForm'>
      <article className='flex flex-col w-[1240px] mt-[100px]'>
        <Heading title="Darmowa wycena" subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM" />
        <p className='mt-[50px] text-[18px] font-light'>Masz pomysł na stronę internetową, ale nie wiesz, ile będzie kosztować? Skorzystaj z naszego intuicyjnego formularza wyceny! Wybierz funkcje, które Cię interesują, a my przygotujemy spersonalizowaną ofertę dopasowaną do Twoich potrzeb.</p>
        <div className='mt-[50px] flex flex-col'>
          <h5 className='text-[22px]'>Informacje ogólne</h5>
          <p className='mt-[15px] text-[18px] font-extralight'>Każda strona internetowa lub sklep internetowy obejmuje:</p>
          <ul className='flex flex-col pl-[10px] text-[16px] font-extralight mt-[10px] space-y-[10px] tracking-[1.1px]'>
            <li className='flex gap-[10px]'>
              <Image src={circle} width='10' height='10' alt="Ikona kropki" />
              <p><span className='font-normal'>Responsywność:&nbsp;</span>Strona lub sklep będą optymalizowane dla wszystkich rodzajów urządzeń, w tym smartfonów, tabletów i komputerów.</p>
            </li>
            <li className='flex gap-[10px]'>
              <Image src={circle} width='10' height='10' alt="Ikona kropki" />
              <p><span className='font-normal'>Certyfikat SSL:&nbsp;</span>Integracja certyfikatu SSL. Koszt zakupu po stronie klienta</p>
            </li>
            <li className='flex gap-[10px]'>
              <Image src={circle} width='10' height='10' alt="Ikona kropki" />
              <p><span className='font-normal'>Hosting i domena:&nbsp;</span>Koszt zakupu po stronie klienta</p>
            </li>
            <li className='flex gap-[10px]'>
              <Image src={circle} width='10' height='10' alt="Ikona kropki" />
              <p className='font-normal'>Wsparcie techniczne przez 1 rok w tym:</p>
            </li>
            <ul className='pl-[20px]  space-y-[5px]'>
              <li className='flex gap-[5px]'>
                <Image src={circleOutline} width='10' height='10' alt="Ikona kropki" />
                <p>Regularne aktualizacje wtyczek: Zapewnienie najnowszych wersji wtyczek i motywów dla bezpieczeństwa i funkcjonalności.</p>
              </li>
              <li className='flex gap-[5px]'>
                <Image src={circleOutline} width='10' height='10' alt="Ikona kropki" />
                <p>Co miesięczny backup strony.</p>
              </li>
              <li className='flex gap-[5px]'>
                <Image src={circleOutline} width='10' height='10' alt="Ikona kropki" />
                <p>Naprawa ewentualnych błędów.</p>
              </li>
              <li className='flex gap-[5px]'>
                <Image src={circleOutline} width='10' height='10' alt="Ikona kropki" />
                <p>Dodawanie nowych treści (do 2 godzin miesięcznie).</p>
              </li>
            </ul>
          </ul>
        </div>
        <form id="form" onSubmit={createPricing} className='mt-[100px] flex flex-col text-[18px] font-extralight space-y-[50px]'>
          {error && <span className='text-red-700 font-light tracking-[2px] mb-[5px]'>{error}</span>}
          <div>
            <h5 className='text-[20px] font-normal'>1. Rodzaj strony internetowej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Type" text="Wizytówka" idHandle="R1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Type" text="Blog" idHandle="R2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Type" text="Sklep internetowy" inputType="radio" idHandle="R3" handleInputChange={handleInputChange} />
                <Form nameForm="Type" text="Portfolio" idHandle="R4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Type" text="Inne:" idHandle="R5" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} textInputValue={textInputValue} />

              </div>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Type" text="Portal informacyjny" idHandle="R6" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Type" text="Strona firmowa" idHandle="R7" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Type" text="Strona wydarzenia" idHandle="R8" inputType="radio" handleInputChange={handleInputChange} />

              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>2. Liczba podstron</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Number_of_subpages" text="1-6" idHandle="L1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Number_of_subpages" text="6-12" idHandle="L2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Number_of_subpages" text="Inne:" idHandle="L3" inputType="radio" showTextInput={true} handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>3. Funkcjonalności</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
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
            <h5 className='text-[20px] font-normal'>3a. Jeśli w poprzednim punkcie wybrałeś/aś system zarządzania treścią, zaznacz interesującą Cię opcje.</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="CMS" text="Wordpress" idHandle="C1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="CMS" text="Indywidualny CMS oparty o, np. Next.js" idHandle="C2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="CMS" text="Inne:" idHandle="C3" showTextInput={true} inputType="radio" handleInputChange={handleInputChange} isOtherChecked={isOtherChecked} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>4. Optymalizacja i dodatkowe usługi</h5>
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
            <h5 className='text-[20px] font-normal'>5. Integracje</h5>
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
            <h5 className='text-[20px] font-normal'>6. Budżet</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Budget" text="<2000 zł" idHandle="B1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text="2000-5000 zł" idHandle="B2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text="5000-10 000 zł" idHandle="B3" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text=">10000zł" idHandle="B4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Budget" text="Nie wiem, potrzebuję porady" idHandle="B5" inputType="radio" handleInputChange={handleInputChange} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>7. Termin realizacji</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="Deadline" text="Do 2 tygodni" idHandle="T1" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="2-4 tygodni" idHandle="T2" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="1-2 miesiący" idHandle="T3" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="Powyżej 2 miesięcy" idHandle="T4" inputType="radio" handleInputChange={handleInputChange} />
                <Form nameForm="Deadline" text="Nie mam konkretnego terminu" idHandle="T5" inputType="radio" handleInputChange={handleInputChange} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>8. Dodatkowe usługi</h5>
            <div className='mt-[20px] px-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px] w-full'>

                <textarea rows="10" type="text" name="Additional_services" placeholder='Jeśli w formularzu nie znalazłeś/aś dodatkowych usług, które Cię interesują, wpisze je tutaj.' className='py-[10px] px-[15px] outline-none bg-[#0c0c0c80] border-[1px] border-[#a5a5a5] resize-none' onChange={handleInputChange} />

              </div>

            </div>
          </div>
          <div className='flex justify-center'>
            <hr className='w-[800px] bg-[rgba(226,179,80,0.50)] h-[1px] border-none'></hr>
          </div>

          <div style={{ backgroundImage: `url(${imageBackground.src})` }} className='h-[600px]'>
            <h5 className='text-[20px] font-normal text-center pt-[50px]'>Podstawowe informacje o kliencie</h5>
            <div className='mt-[20px] pl-[25px] flex justify-center gap-[200px]'>
              <div className='flex flex-col gap-[15px] w-[800px]'>

                <input type="text" name="Name" placeholder="IMIĘ I NAZWISKO" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="email" name="Email" placeholder="EMAIL" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="text" name="Number" placeholder="NUMER TELEFONU" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="text" name="Company" placeholder="NAZWA FIRMY (OPCJONALNIE)" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />
                <input type="text" name="Industry" placeholder="BRANŻA (OPCJONALNIE)" onChange={handleInputChange} className='bg-inherit border-b-[1px] border-[#FFF] py-[5px] tracking-[1px] outline-none' />

                <div className='flex items-center gap-[10px] mt-[20px]'>
                  <input type="checkbox" name="Privacy_policy" id="privacy" value="Polityka prywatności" onChange={handleInputChange} className='hidden peer' />
                  <label htmlFor='privacy' className='flex items-center cursor-pointer'>
                    <span className='quadBefore flex items-center'>Polityka prywatności</span>
                  </label>
                </div>

                <div className='flex items-center gap-[10px]'>
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

export default pricing
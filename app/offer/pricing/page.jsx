import React from 'react'
import Image from 'next/image'
import Heading from '@components/Heading'

import circle from '@public/assets/icons/offer/circle.svg'
import circleOutline from '@public/assets/icons/offer/circleOutline.svg'
import Form from '@components/offer/Form'


const pricing = () => {
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
              <p><span className='font-normal'>Responsywność:&nbsp;</span>Strona będzie optymalizowana dla wszystkich rodzajów urządzeń, w tym smartfonów, tabletów i komputerów.</p>
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
        <form className='mt-[100px] flex flex-col text-[18px] font-extralight space-y-[50px]'>
          <div>
            <h5 className='text-[20px] font-normal'>1. Rodzaj strony internetowej</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="type" text="Wizytówka" idHandle="R1" />
                <Form nameForm="type" text="Blog" idHandle="R2" />
                <Form nameForm="type" text="Sklep internetowy" idHandle="R3" />
                <Form nameForm="type" text="Portfolio" idHandle="R4" />
                <Form nameForm="type" text="Inne:" idHandle="R5" showTextInput={true} />

              </div>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="type" text="Portal informacyjny" idHandle="R6" />
                <Form nameForm="type" text="Strona firmowa" idHandle="R7" />
                <Form nameForm="type" text="Strona wydarzenia" idHandle="R8" />

              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>2. Liczba podstron</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="number" text="1-6" idHandle="L1" />
                <Form nameForm="number" text="6-12" idHandle="L2" />
                <Form nameForm="number" text="Inne:" idHandle="L3" showTextInput={true} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>3. Funkcjonalności</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="functionality" text="System zarządzania treścią (CMS)" idHandle="F1" />
                <Form nameForm="functionality" text="Formularz kontaktowy" idHandle="F2" />
                <Form nameForm="functionality" text="Blog / artykuły" idHandle="F3" />
                <Form nameForm="functionality" text="Galeria zdjęć" idHandle="F4" />
                <Form nameForm="functionality" text="Sklep internetowy" idHandle="F5" />
                <Form nameForm="functionality" text="Płatności online (PayPal, Przelewy24)" idHandle="F6" />
                <Form nameForm="functionality" text="Integracja z social mediami" idHandle="F7" />
                <Form nameForm="functionality" text="Inne:" idHandle="F8" showTextInput={true} />

              </div>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="functionality" text="Integracja z mapami Google" idHandle="F9" />
                <Form nameForm="functionality" text="Autentyfikacja" idHandle="F10" />
                <Form nameForm="functionality" text="Komentarze / recenzje użytkowników" idHandle="F11" />
                <Form nameForm="functionality" text="Newsletter / subskrybcje" idHandle="F12" />
                <Form nameForm="functionality" text="Wielojęzyczność" idHandle="F13" />
                <Form nameForm="functionality" text="Forum dyskusyjne" idHandle="F14" />

              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>3a. Jeśli w poprzednim punkcie wybrałeś/aś system zarządzania treścią, zaznacz interesujące Cię opcje.</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="cms" text="Wordpress" idHandle="C1" />
                <Form nameForm="cms" text="Indywidualny CMS oparty o, np. Next.js" idHandle="C2" />
                <Form nameForm="cms" text="Inne:" idHandle="C3" showTextInput={true} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>4. Optymalizacja i dodatkowe usługi</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="optymalization" text="Optymalizacja SEO" idHandle="O1" />
                <Form nameForm="optymalization" text="Optymalizacja szybkości ładowania strony" idHandle="O2" />
                <Form nameForm="optymalization" text="Copywriting (tworzenie treści)" idHandle="O3" />
                <Form nameForm="optymalization" text="Media (zdjęcia, ikony, ilustracje)" idHandle="O4" />
                <Form nameForm="optymalization" text="Inne:" idHandle="O5" showTextInput={true} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>5. Integracje</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="integrations" text="Google Analytics" idHandle="I1" />
                <Form nameForm="integrations" text="Google Search Console" idHandle="I2" />
                <Form nameForm="integrations" text="Facebook Pixel" idHandle="I3" />
                <Form nameForm="integrations" text="System mailingowy" idHandle="I4" />
                <Form nameForm="integrations" text="Inne:" idHandle="I5" showTextInput={true} />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>6. Budżet</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="budget" text="<2000 zł" idHandle="B1" />
                <Form nameForm="budget" text="2000-5000 zł" idHandle="B2" />
                <Form nameForm="budget" text="5000-10 000 zł" idHandle="B3" />
                <Form nameForm="budget" text=">10000zł" idHandle="B4" />
                <Form nameForm="budget" text="Nie wiem, potrzebuję porady" idHandle="B5" />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>7. Termin realizacji</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <Form nameForm="deadline" text="Do 2 tygodni" idHandle="T1" />
                <Form nameForm="deadline" text="2-4 tygodni" idHandle="T2" />
                <Form nameForm="deadline" text="1-2 miesiący" idHandle="T3" />
                <Form nameForm="deadline" text="Powyżej 2 miesięcy" idHandle="T4" />
                <Form nameForm="deadline" text="Nie mam konkretnego terminu" idHandle="T5" />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>8. Dodatkowe usługi</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <input type="text" name="additional" />

              </div>

            </div>
          </div>
          <div>
            <h5 className='text-[20px] font-normal'>9. Podstawowe informacje o kliencie</h5>
            <div className='mt-[20px] pl-[25px] flex gap-[200px]'>
              <div className='flex flex-col gap-[15px]'>

                <input type="text" name="firstname" placeholder="Imię i nazwisko" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="text" name="number" placeholder="Numer telefonu" required/>
                <input type="text" name="companyName" placeholder="Nazwa firmy (opcjonalnie)" />
                <input type="text" name="industry" placeholder="Branża (opcjonalnie)" />

              </div>

            </div>
          </div>
        </form>
      </article>
    </section>
  )
}

export default pricing
import Image from 'next/image'
import React from 'react'

import facebookIcon from '@public/assets/icons/home/facebook.png'
import linkedIcon from '@public/assets/icons/home/linkedin.png'
import Link from 'next/link'

const People = () => {
  return (
    <article>
        <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[20px] text-center'>KIM JESTEŚMY?</h5>
        <p className='text-[16px] font-light mb-[40px] text-center'>Poznając zespół Airtilionu nie rozmawiasz już z anonimowymi ludźmi z odległych krain, dzięki czemu współpraca z nami będzie bardziej efektywna i skuteczna. Poniżej dostępne są dane kontaktowe do każdego z nas oraz krótki opis, zapraszamy do współpracy</p>

        <section className='flex flex-col items-center mt-[100px] gap-[70px]'>
            <div className='flex gap-[60px] w-[940px] relative p-[25px]'>
                <div className='w-[340px] h-[470px] relative border-white border-[2px]'>
                    <Image width="auto" height="auto" alt="Zdjęcie jednego z założycieli Airtilionu"/>
                    <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                        <Link href="" target='_blank'></Link>
                        <Image src={facebookIcon} width={40} height={40} alt="Ikona facebooka"/>
                        <Image src={linkedIcon} width={40} height={40} alt="Ikona linkedin"/>
                    </div>
                </div>

                <div className='flex-1 flex flex-col gap-[20px]'>
                    <h6 className='text-[25px] text-[#E2B350] tracking-[9px]'>Jakub Wadycki</h6>
                    <div>
                        <p className='text-[16px] text-[#AEAEAE] tracking-[2px]'>Tel. 720 177 174</p>
                        <p className='text-[16px] text-[#AEAEAE] tracking-[2px]'>Email: jakubwadycki@airtilion.com</p>
                    </div>

                    <p className='text-[16px] font-light'>Programista full stack z pasją do technologii. Moim głównym językiem programowania jest JavaScript, w którym czuję się jak ryba w wodzie. Poza codzienną pracą uwielbiam zgłębiać tajniki druku 3D i prostą elektronikę – to dla mnie świetny sposób na kreatywne wyrażanie siebie i eksperymentowanie z nowymi pomysłami. <br /><br /> Moim głównym celem jest przekształcenie branży stron internetowych poprzez innowacyjne podejście i nowoczesne rozwiązania. Zawsze dążę do tworzenia efektywnych i eleganckich rozwiązań, które spełniają najwyższe standardy. Zapraszam do współpracy i wspólnego tworzenia rzeczy, które naprawdę mają znaczenie!</p>
                </div>

                <span className='h-[1px] w-[20px] bg-[#E2B350] absolute top-0 right-0'></span>
                <span className='w-[1px] h-[20px] bg-[#E2B350] absolute top-0 right-0'></span>
            </div>

            <div className='flex flex-row-reverse gap-[60px] w-[940px] relative p-[25px]'>
                <div className='w-[340px] h-[470px] relative border-white border-[2px]'>
                    <Image width="auto" height="auto" alt="Zdjęcie jednego z założycieli Airtilionu"/>
                    <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                        <Link href="" target='_blank'></Link>
                        <Image src={facebookIcon} width={40} height={40} alt="Ikona facebooka"/>
                        <Image src={linkedIcon} width={40} height={40} alt="Ikona linkedin"/>
                    </div>
                </div>

                <div className='flex-1 flex flex-col gap-[20px]'>
                    <h6 className='text-[25px] text-[#E2B350] tracking-[9px]'>Artur Plebańczyk</h6>
                    <div>
                        <p className='text-[16px] text-[#AEAEAE] tracking-[2px]'>Tel. 511 019 652</p>
                        <p className='text-[16px] text-[#AEAEAE] tracking-[2px]'>Email: arturplebanczyk@airtilion.com</p>
                    </div>

                    <p className='text-[16px] font-light'>Z wykształcenia jestem technikiem elektronikiem, ale to właśnie pasja do technologii i informatyki popchnęła mnie w stronę programowania. Od czterech lat zajmuję się tworzeniem rozwiązań webowych, łącząc wiedzę techniczną z zamiłowaniem do innowacji. Poza pracą interesuję się piłką nożną, motoryzacją i śledzę nowinki technologiczne, co pozwala mi stale się rozwijać i wprowadzać świeże pomysły do każdego projektu.</p>
                </div>

                <span className='h-[1px] w-[20px] bg-[#E2B350] absolute bottom-0 left-0'></span>
                <span className='w-[1px] h-[20px] bg-[#E2B350] absolute bottom-0 left-0'></span>
            </div>

            
        </section>
    </article>
  )
}

export default People
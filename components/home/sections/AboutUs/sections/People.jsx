"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import lionPlaceholder from '@public/assets/images/contact-lion.webp'
import useIntersectionObserver from '@hooks/useObserver'

const People = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <article ref={ref} className={`relative transition-all duration-1000 overflow-x-hidden ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`}>
            <h5 className='text-[20px] xxl:text-[24px] xl:text-[18px] lg:text-[15px] tracking-[3px] text-[#E2B350] mb-[20px] text-center'>KIM JESTEŚMY?</h5>
            <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] font-light mb-[40px] text-center'>Poznając zespół Airtilionu nie rozmawiasz już z anonimowymi ludźmi z odległych krain, dzięki czemu współpraca z nami będzie bardziej efektywna i skuteczna. Poniżej dostępne są dane kontaktowe do każdego z nas oraz krótki opis, zapraszamy do współpracy</p>

            <section className={`flex flex-col items-center mt-[100px] gap-[70px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
                <div className='flex gap-[60px] w-[940px] xl:w-[100%] relative p-[25px] lg:flex-col lg:items-center'>
                    <div className='w-[340px] h-[470px] relative xxl:w-[auto] xxl:h-[auto] md:w-[260px] md:h-[380px]'>
                        <Image width={340} height={470} src={lionPlaceholder.src} alt="Zdjęcie jednego z założycieli Airtilionu" className='object-cover h-full' />
                        <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                            <Link href="#" target='_blank' aria-label="Odwiedź mój profil Facebook" className='duration-700 hover:scale-75'>
                                <Icon icon="bi:facebook" width={30} height={30} alt="Ikona facebooka" className='text-[#E2B350] md:w-[30px] md:h-[30px]' />
                            </Link>
                            <Link href="#" target='_blank' aria-label="Odwiedź mój profil Linkedin" className='duration-700 hover:scale-75'>
                                <Icon icon="bi:linkedin" width={30} height={30} alt="Ikona linkedin" className='text-[#E2B350] md:w-[30px] md:h-[30px]' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col gap-[20px] lg:items-center'>
                        <h5 className='text-[25px] xl:text-[23px] lg:text-[20px] sm:text-[17px] text-[#E2B350] tracking-[9px]'>Jakub Wadycki</h5>
                        <div>
                            <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] text-[#AEAEAE] tracking-[2px]'>Tel. 720 177 174</p>
                            <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] text-[#AEAEAE] tracking-[2px]'>Email: jakubwadycki@airtilion.com</p>
                        </div>

                        <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] font-light lg:text-center'>Programista full stack z pasją do technologii. Moim głównym językiem programowania jest JavaScript, w którym czuję się jak ryba w wodzie. Poza codzienną pracą uwielbiam zgłębiać tajniki druku 3D i prostą elektronikę – to dla mnie świetny sposób na kreatywne wyrażanie siebie i eksperymentowanie z nowymi pomysłami. <br /><br /> Moim głównym celem jest przekształcenie branży stron internetowych poprzez innowacyjne podejście i nowoczesne rozwiązania. Zawsze dążę do tworzenia efektywnych i eleganckich rozwiązań, które spełniają najwyższe standardy. Zapraszam do współpracy i wspólnego tworzenia rzeczy, które naprawdę mają znaczenie!</p>
                    </div>

                    <span className='h-[1px] w-[20px] bg-[#E2B350] absolute top-0 right-0 fold:hidden'></span>
                    <span className='w-[1px] h-[20px] bg-[#E2B350] absolute top-0 right-0 fold:hidden'></span>
                </div>

                <div className={`flex flex-row-reverse gap-[60px] w-[940px] xl:w-[100%] relative p-[25px] lg:flex-col lg:items-center transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                    <div className='w-[340px] h-[470px] relative xxl:w-[auto] xxl:h-[auto] md:w-[260px] md:h-[380px]'>
                        <Image width={340} height={470} src={lionPlaceholder.src} alt="Zdjęcie jednego z założycieli Airtilionu" className='object-cover h-full'/>
                        <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                            <Link href="#" target='_blank' aria-label="Odwiedź mój profil facebook" className='duration-700 hover:scale-75'>
                                <Icon icon="bi:facebook" width={30} height={30} alt="Ikona facebooka" className='text-[#E2B350] md:w-[30px] md:h-[30px]' />
                            </Link>
                            <Link href="#" target='_blank' aria-label="Odwiedź mój profil Linkedin" className='duration-700 hover:scale-75'>
                                <Icon icon="bi:linkedin" width={30} height={30} alt="Ikona linkedin" className='text-[#E2B350] md:w-[30px] md:h-[30px]' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col gap-[20px] lg:items-center'>
                        <h5 className='text-[25px] xl:text-[23px] lg:text-[20px] sm:text-[17px] text-[#E2B350] tracking-[9px]'>Artur Plebańczyk</h5>
                        <div>
                            <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] text-[#AEAEAE] tracking-[2px]'>Tel. 511 019 652</p>
                            <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] text-[#AEAEAE] tracking-[2px]'>Email: arturplebanczyk@airtilion.com</p>
                        </div>

                        <p className='text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] font-light lg:text-center'>To właśnie pasja do technologii i informatyki skierowała mnie na ścieżkę programowania. Od czterech lat rozwijam swoje umiejętności jako full stack developer. W mojej pracy szczególnie cenię sobie połączenie technologii z kreatywnymi pomysłami, co pozwala mi dostarczać nowoczesne i funkcjonalne rozwiązania.<br /><br />Moją misją jest rozwijanie branży stron i sklepów internetowych poprzez wdrażanie zaawansowanych technologii, które nie tylko odpowiadają na potrzeby klientów, ale także wprowadzają nowe standardy. Stawiam na świeże, dynamiczne podejście, które łączy innowacyjność z dbałością o klienta.</p>
                    </div>

                    <span className='h-[1px] w-[20px] bg-[#E2B350] absolute bottom-0 left-0 fold:hidden'></span>
                    <span className='w-[1px] h-[20px] bg-[#E2B350] absolute bottom-0 left-0 fold:hidden'></span>
                </div>


            </section>
        </article>
    )
}

export default People
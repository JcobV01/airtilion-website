"use client"

import React from 'react'
import useIntersectionObserver from '@hooks/useObserver'
import dynamic from 'next/dynamic';

const Heading = dynamic(() => import('@components/Heading'), { ssr: true, loading: () => <div className="loader"></div> });
const OfferCard = dynamic(() => import('./components/OfferCard'), { ssr: true, loading: () => <div className="loader"></div> });

const offer = [
    {
        title: "Strony internetowe",
        data: {
            technologies: {
                subtitle: "Tworzone w oparciu o: ",
                list: ["Next.js", "React", "Wordpress"],
            },
            composition: {
                subtitle: "W skład oferty wchodzą m. in.:",
                list: ["Indywidualny projekt graficzny", "SEO", "Bezpłatne wsparcie strony przez rok", "I wiele więcej..."]
            }
        },
        link: "/offer/websites"
    },

    {
        title: "Sklepy",
        data: {
            technologies: {
                subtitle: "Tworzone w oparciu o: ",
                list: ["Next.js", "Prestashop", "Woocommerce"],
            },
            composition: {
                subtitle: "W skład oferty wchodzą m. in.:",
                list: ["Wprowadzenie produktów", "SEO", "Integracja płatności i wysyłek", "I wiele więcej..."]
            }
        },
        link: "/offer/shops"
    },

    {
        title: "Aplikacje mobilne",
        data: {
            technologies: {
                subtitle: "Tworzone w oparciu o: ",
                list: ["React Native"],
            },
            composition: {
                subtitle: "W skład oferty wchodzą m. in.:",
                list: ["Stworzenie strony oraz aplikacjie", "Indywidualny projekt graficzny", "Kompatybilność z Androidem i IOS", "I wiele więcej..."]
            }
        },
        link: "/offer/apps"
    },

    {
        title: "Darmowa wycena",
        data: {
            technologies: {
                subtitle: "Nie znalazłeś idealnej oferty stworzonej właśnie dla Ciebie? Nie przejmuj się! Przechodząc dalej możesz spersonalizować własną usługę. ",
                list: ["Kontakt do 3 dni roboczych", "Możliwość dowolnej personalizacji projektów"],
            },
            composition: {
                subtitle: "",
                list: []
            }
        },
        link: "/offer/pricing"
    },

    {
        title: "Pozostałe usługi",
        data: {
            technologies: {
                subtitle: "Oferujemy kompleksowe usługi w zakresie:",
                list: ["Optymalizacja", "Opieka nad stroną, sklepem", "Naprawa błędów", "Indywidualna współpraca", "I wiele więcej..."],
            },
            composition: {
                subtitle: "",
                list: []
            }
        },
        link: "/offer/services"
    }
]

const Offer = () => {
    const [ ref, isVisible ] = useIntersectionObserver({
        threshold: 0.1
      });
    
    return (
        <section ref={ref} id="offer" className={`w-[1400px] xxl:w-[1700px] 2xl:w-[80%] z-10 m-auto flex flex-col gap-[40px] relative transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'} observer-navbar`}>
            <Heading title="Oferta" id="offer-title" subtitle="TWOJE POTRZEBY, NASZA OFERTA" />
            <p className='text-[15px] xxl:text-[20px] lg:text-[13px]'>W dobie cyfrowego świata, obecność Twojej firmy w internecie jest kluczowa dla osiągnięcia sukcesu. Nasza oferta obejmuje usługi tworzenia stron oraz sklepów internetowych, aplikacji mobilnych oraz wiele innych rozwiązań, które zapewnią Twojej marce profesjonalny wizerunek w sieci.</p>

            <section className='flex flex-wrap justify-center gap-[70px] gap-y-[40px] mt-[40px]'>
                {offer.map((card, index) => (
                    <OfferCard title={card.title} technologies={card.data.technologies} composition={card.data.composition} key={index} index={index} isVisible={isVisible} link={card.link}/>
                ))}
            </section>
        </section>
    )
}

export default Offer
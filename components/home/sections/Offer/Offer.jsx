"use client"

import Heading from '@components/Heading'
import React from 'react'
import OfferCard from './components/OfferCard'
import useIntersectionObserver from '@hooks/useObserver'

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
        }
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
        }
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
        }
    },

    {
        title: "Darmowa wycena",
        data: {
            technologies: {
                subtitle: "TNie znalazłeś idealnej oferty stworzonej właśnie dla Ciebie? Nie przejmuj się! Przechodząc dalej możesz spersonalizować własną usługę. ",
                list: ["Kontakt do 3 dni roboczych", "Możliwość dowolnej personalizacji projektów"],
            },
            composition: {
                subtitle: "",
                list: []
            }
        }
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
        }
    }
]

const Offer = () => {
    const [ ref, isVisible ] = useIntersectionObserver();
    
    return (
        <section ref={ref} id="offer" className={`w-[1400px] 2xl:w-[80%] z-10 m-auto flex flex-col gap-[40px] relative transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'}`}>
            <Heading title="Oferta" subtitle="TWOJE POTRZEBY, NASZA OFERTA" />
            <p className='text-[15px] lg:text-[13px]'>W dobie cyfrowego świata, obecność Twojej firmy w internecie jest kluczowa dla osiągnięcia sukcesu. Nasza oferta obejmuje usługi tworzenia stron oraz sklepów internetowych, aplikacji mobilnych oraz wiele innych rozwiązań, które zapewnią Twojej marce profesjonalny wizerunek w sieci.</p>

            <section className='flex flex-wrap justify-center gap-[70px] gap-y-[40px] mt-[40px]'>
                {offer.map((card, index) => (
                    <OfferCard title={card.title} technologies={card.data.technologies} composition={card.data.composition} key={index} index={index} isVisible={isVisible}/>
                ))}
            </section>
        </section>
    )
}

export default Offer
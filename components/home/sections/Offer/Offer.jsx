import Heading from '@components/Heading'
import React from 'react'
import OfferCard from './components/OfferCard'

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
  return (
    <section className='w-[1400px] z-10 m-auto flex flex-col gap-[40px]'>
        <Heading title="Oferta" subtitle="TWOJE POTRZEBY, NASZA OFERTA"/>
        <p className='text-[15px]'>W dobie cyfrowego świata, obecność Twojej firmy w internecie jest kluczowa dla osiągnięcia sukcesu. Nasza oferta obejmuje usługi tworzenia stron oraz sklepów internetowych, aplikacji mobilnych oraz wiele innych rozwiązań, które zapewnią Twojej marce profesjonalny wizerunek w sieci.</p>

        <section className='flex flex-wrap justify-center gap-[70px] gap-y-[40px] mt-[40px]'>
            {offer.map((card) => (
                <OfferCard title={card.title} technologies={card.data.technologies} composition={card.data.composition}/>
            ))}
        </section>
    </section>
  )
}

export default Offer
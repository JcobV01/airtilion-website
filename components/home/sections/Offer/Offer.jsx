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
        <section className='w-[1400px] z-10 m-auto flex flex-col gap-[40px] relative'>
            <Heading title="Oferta" subtitle="TWOJE POTRZEBY, NASZA OFERTA" />
            <p className='text-[15px]'>W dobie cyfrowego świata, obecność Twojej firmy w internecie jest kluczowa dla osiągnięcia sukcesu. Nasza oferta obejmuje usługi tworzenia stron oraz sklepów internetowych, aplikacji mobilnych oraz wiele innych rozwiązań, które zapewnią Twojej marce profesjonalny wizerunek w sieci.</p>

            <section className='flex flex-wrap justify-center gap-[70px] gap-y-[40px] mt-[40px]'>
                {offer.map((card) => (
                    <OfferCard title={card.title} technologies={card.data.technologies} composition={card.data.composition} />
                ))}
            </section>

            <div className='absolute top-[100px] left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="885" viewBox="0 0 1864 685" fill="none">
                    <path d="M2225.63 129.498C2018.15 21.7267 1687.02 -34.1963 1426.36 29.1186C1222.74 78.5794 998.911 169.79 711.229 162.071C487.625 156.071 158.468 275.518 -0.22103 532.213C-204.023 861.883 -279.058 549.482 -442.456 550.655" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2225.63 209.498C2018.15 101.7267 1687.02 45.8037 1426.36 109.1186C1222.74 158.579 998.911 249.79 711.229 242.071C487.625 236.071 158.468 355.518 -0.22103 612.213C-204.023 941.883 -279.058 629.482 -442.456 630.655" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2225.63 289.498C2018.15 181.7267 1687.02 125.8037 1426.36 189.1186C1222.74 238.579 998.911 329.79 711.229 322.071C487.625 316.071 158.468 435.518 -0.22103 692.213C-204.023 1021.88 -279.058 709.482 -442.456 710.655" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2225.63 369.498C2018.15 261.7267 1687.02 205.8037 1426.36 269.1186C1222.74 318.579 998.911 409.79 711.229 402.071C487.625 396.071 158.468 515.518 -0.22103 772.213C-204.023 1101.88 -279.058 789.482 -442.456 790.655" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                </svg>



            </div>
        </section>
    )
}

export default Offer
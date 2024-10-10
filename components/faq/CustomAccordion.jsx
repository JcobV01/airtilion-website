'use client'

import React, { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import Icon from '@components/faq/Icon'

const CustomAccordion = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const faq = [
        {
            id: 1,
            question: "Czym zajmuje się Airtilion?",
            answer: "Airtilion to firma specjalizująca się w tworzeniu nowoczesnych stron internetowych, sklepów online oraz aplikacji mobilnych. Oferujemy kompleksowe usługi od projektowania po wdrożenie, dostosowując każde rozwiązanie do indywidualnych potrzeb naszych klientów."
        },
        {
            id: 2,
            question: "Jakich technologii używacie do tworzenia stron internetowych?",
            answer: "Korzystamy z bazowych technologii, takich jak HTML, CSS i WordPress, które stanowią solidną podstawę dla każdego projektu. Jednak naszym głównym celem jest oferowanie nowoczesnych i zaawansowanych rozwiązań. Dlatego stawiamy na technologie takie jak React, Next.js czy Tailwind CSS, które pozwalają nam tworzyć dynamiczne, responsywne i wydajne aplikacje oraz strony internetowe.</br></br>Te technologie umożliwiają nam szybkie działanie, lepsze optymalizacje pod kątem SEO, a także maksymalne dopasowanie do potrzeb użytkowników. Dzięki temu dostarczamy rozwiązania, które nie tylko przyciągają uwagę estetyką, ale również gwarantują intuicyjną obsługę i najwyższą wydajność w codziennym użytkowaniu."
        },
        {
            id: 3,
            question: "Czy oferujecie wsparcie po zakończeniu projektu?",
            answer: "Tak, oferujemy wsparcie techniczne obejmujące opiekę nad stronami internetowymi, sklepami online oraz aplikacjami mobilnymi przez okres jednego roku od momentu wdrożenia projektu. W ramach tego wsparcia zapewniamy pomoc w bieżącej obsłudze technicznej, regularne aktualizacje oraz wdrażanie nowych treści - w zależności od wybranego pakietu, gwarantujemy minimum do 2 godzin wsparcia w miesiącu. Dodatkowo, pomagamy w rozwiązywaniu wszelkich problemów, które mogą wystąpić podczas codziennego użytkowania, aby zapewnić nieprzerwaną i wydajną pracę.",
        },
        {
            id: 4,
            question: "Jak długo trwa realizacja projektu?",
            answer: "Czas realizacji projektu zależy od jego skomplikowania oraz indywidualnych wymagań klienta. Najprostsze strony internetowe jesteśmy w stanie zrealizować w ciągu około tygodnia. Wraz ze wzrostem złożoności projektu, takim jak rozbudowane sklepy internetowe czy aplikacje mobilne, czas ten odpowiednio się wydłuża i może wynosić nawet kilka tygodni."
        },
        {
            id: 5,
            question: "Czy mogę wprowadzać zmiany w projekcie w trakcie jego realizacji?",
            answer: "Tak, zachęcamy do wprowadzania zmian i uwag na każdym etapie projektu, aby jak najlepiej dostosować go do Twoich potrzeb i oczekiwań. Naszym celem jest, aby końcowy efekt w pełni odpowiadał Twojej wizji i spełniał wszystkie wymagania."
        },
        {
            id: 6,
            question: "Jak wygląda proces współpracy z Airtilion?",
            answer: "Proces współpracy rozpoczyna się od konsultacji, podczas których dokładnie poznajemy potrzeby i oczekiwania klienta. Na podstawie uzyskanych informacji przechodzimy do fazy projektowania, gdzie tworzymy koncepcję odpowiadającą Twoim wymaganiom. Po akceptacji projektu przystępujemy do realizacji, dbając o każdy detal. Po zakończeniu prac, w przypadku wdrożenia systemu CMS, oferujemy szkolenie w obsłudze, abyś mógł swobodnie zarządzać swoją stroną lub aplikacją. Dodatkowo zapewniamy wsparcie techniczne, aby pomóc w utrzymaniu i aktualizacji projektu."
        },
        {
            id: 7,
            question: "Jakie są koszty hostingu i domeny?",
            answer: "Cena hostingu oraz domeny nie jest wliczona w żaden pakiet, ale chętnie pomożemy w ich doborze. Koszty te mogą się różnić w zależności od wybranego dostawcy oraz specyfiki projektu."
        },
        {
            id: 8,
            question: "Czy oferujecie strony internetowe dopasowane do urządzeń mobilnych?",
            answer: "Tak, wszystkie nasze strony internetowe są projektowane z myślą o responsywności, co oznacza, że będą dobrze wyglądały i działały na różnych urządzeniach, w tym telefonach komórkowych i tabletach.",
        }
    ]

    return (
        <div className="space-y-5 mt-[20px]">
            {
                faq.map((details, index) => (
                    <Accordion open={open === details.id} icon={<Icon id={details.id} open={open} key={index} />}>
                        <AccordionHeader onClick={() => handleOpen(details.id)} className="text-[18px] tracking-[1.1px] font-light border-solid border-b-2 border-[#e2b45080] pb-[15px]">{details.question}</AccordionHeader>
                        <AccordionBody className="text-[16px] font-extralight mt-[15px]" dangerouslySetInnerHTML={{ __html: details.answer }}></AccordionBody>
                    </Accordion>
                ))
            }
        </div>
    );
}

export default CustomAccordion
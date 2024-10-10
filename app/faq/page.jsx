import CustomAccordion from '@components/faq/CustomAccordion'
import Heading from '@components/Heading'
import React from 'react'

const faq = () => {
    return (
        <section className="relative m-auto flex flex-col items-center gap-[150px] mb-[20px] xl:gap-[100px] fold:w-[100%] z-10">
            <article className="flex flex-col w-[1240px] gap-[25px] mt-[150px] xl:w-[90%] xxl:w-[1500px]">
                <Heading title="FAQ" subtitle="POZNAJ ODPOWIEDZI NA NAJPOPULARNIEJSZE PYTANIA" />
                <p className="text-[16px] font-light">Zebraliśmy najczęściej zadawane pytania, aby ułatwić Ci szybkie znalezienie odpowiedzi na kluczowe kwestie dotyczące naszych usług. Znajdziesz tu informacje o naszej ofercie, procesach współpracy i możliwościach kontaktu z nami. Jeśli nie znajdziesz tutaj odpowiedzi, której szukasz, zapraszamy do kontaktu – chętnie rozwiejemy wszelkie wątpliwości.</p>
                <CustomAccordion />
            </article>
        </section>
    )
}

export default faq
import Heading from '@components/Heading'
import React from 'react'

const faq = () => {
    return (
        <section className="relative m-auto flex flex-col items-center gap-[150px] mb-[20px] xl:gap-[100px] fold:w-[100%] z-10">
            <article className="flex flex-col w-[1240px] mt-[150px] xl:w-[90%] xxl:w-[1500px]">
                <Heading title="FAQ" subtitle="POZNAJ ODPOWIEDZI NA NAJPOPULARNIEJSZE PYTANIA" />
            </article>
        </section>
    )
}

export default faq
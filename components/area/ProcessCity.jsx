import React from 'react'
import ButtonArea from './ButtonArea'

const ProcessCity = ({ data }) => {
    return (
        <section className="z-10 relative bg-[#00000082] w-full">
            <article className="w-[1240px] mx-auto xl:w-[1000px] lg:w-[90%]">
                <div className='w-[500px]'>
                    <h3 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px]'>{data.title}</h3>
                    <p className='mt-[16px] font-extralight text-[18px]'><span className='font-medium'>{data.desc}</span> to dla nas nie tylko projektowanie, ale także budowanie silnej obecności online dla lokalnych firm. Każdy etap realizacji jest dokładnie przemyślany, aby dostarczyć rozwiązanie, które spełni oczekiwania zarówno klientów, jak i użytkowników.</p>
                    <p className='mt-[48px] text-[16px] font-extralight'>{data.question}</p>
                    
                    <div className='max-w-max mt-[16px]'>
                        <ButtonArea text="Skontaktuj się z nami" link="/#contact" width={230} margin={0} />
                    </div>
                </div>
                <div>

                </div>
            </article>
        </section>
    )
}

export default ProcessCity
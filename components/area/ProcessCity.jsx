import React from 'react'
import ButtonArea from './ButtonArea'
import { Icon } from '@node_modules/@iconify/react/dist/iconify'

const ProcessCity = ({ data }) => {
    return (
        <section className="z-10 relative bg-[#00000082] w-full">
            <article className="w-[1240px] mx-auto py-[64px] flex justify-center gap-[128px] xl:w-[1000px] xl:gap-[64px] lg:w-[90%] lg:flex-col lg:items-center sm:gap-[32px]">
                <div className='w-[500px] xl:w-[400px] lg:w-full'>
                    <h3 className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] sm:text-[20px]'>{data.title}</h3>
                    <p className='mt-[16px] font-extralight text-[18px] sm:text-[16px]'><span className='font-medium'>{data.desc}</span> to dla nas nie tylko projektowanie, ale także budowanie silnej obecności online dla lokalnych firm. Każdy etap realizacji jest dokładnie przemyślany, aby dostarczyć rozwiązanie, które spełni oczekiwania zarówno klientów, jak i użytkowników.</p>
                    <p className='mt-[48px] text-[16px] font-extralight sm:text-[14px]'>{data.question}</p>
                    
                    <div className='mt-[16px] w-[240px]'>
                        <ButtonArea text="Skontaktuj się z nami" link="/#contact" width={240} margin={0} />
                    </div>
                    
                </div>
                <div className='mt-[32px] w-[600px] flex gap-x-[100px] gap-y-[40px] flex-wrap xl:gap-x-[40px] lg:justify-center lg:gap-x-[100px] sm:w-full sm:flex-col sm:items-center'>
                    {data?.elements.map((element, index) => (
                        <div key={index} className='w-[250px] xl:w-[225px] lg:w-[250px]'>
                            <Icon icon={element.icon} alt="Ikona przedstawiająca proces tworzenia stron internetowych" width="40" height="40" className='text-[#E2B350]' />
                            <h4 className='mt-[32px] font-medium text-[18px] sm:text-[16px]'>{element.title}</h4>
                            <p className='mt-[8px] text-[16px] font-extralight sm:text-[14px]'>{element.desc}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default ProcessCity
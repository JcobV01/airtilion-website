import Image from '@node_modules/next/image'
import React from 'react'
import ButtonArea from './ButtonArea'

const OfferCity = ({ data }) => {
    return (
        <section className="z-10 relative">
            <article className='mx-auto w-[1240px] xl:w-[1000px] lg:w-[95%] sm:w-[90%]'>
                <h3 className='text-[25px] text-[#E2B350] tracking-[2.5px] font-medium'>NASZA OFERTA</h3>
                <p className='mt-[16px] text-[18px] font-light lg:text-[16px]'>{data.desc}</p>

                <div className='mt-[64px] flex gap-[30px] flex-wrap lg:justify-center'>
                    {data?.elements.map((element, index) => (
                        <div key={index} className={`flex rounded-[15px] relative backdrop-blur-35 shadow-[0_4px_15px_0_rgba(0,_0,_0,_0.25)] lg:flex-col sm:py-[16px]
                        ${index === 0 ? 'w-[300px] h-[300px]' : ''}
                        ${index === 1 ? 'w-[910px] h-[300px] xl:w-[670px] lg:w-[605px] sm:w-full' : ''}
                        ${index === 2 || index === 3 ? 'w-[605px] h-[250px] xl:w-[485px] lg:w-[605px] sm:w-full' : ''}
                        ${index === 4 ? 'w-full h-[150px] justify-between items-center lg:w-[605px] lg:h-[250px] lg:justify-center sm:w-full sm:h-full' : ''}`}>

                            <div className={`w-full h-full relative z-10 px-[32px] flex flex-col justify-center sm:px-[16px]
                                ${index === 4 ? 'w-[675px] lg:w-full max-h-max sm:w-full' : ''} ${index === 3 ? 'mx-auto flex items-center' : ''} 
                                ${index === 1 || index === 2 ? 'sm:justify-start sm:items-center' : ''}`}
                            >
                                {index < 3 && (
                                    <div className='flex justify-center'>
                                        <Image src={element.illustration} alt="Ilustracja promująca usługę" className={`object-cover 
                                            ${index === 0 ? 'mb-[32px]' : ''} 
                                            ${index === 1 ? 'absolute right-[128px] xl:right-[64px] sm:right-[50%] sm:-translate-x-[-50%] sm:top-[110%] sm:-translate-y-[110%]' : ''}
                                            ${index === 2 ? 'absolute top-[50%] -translate-y-[50%] right-[48px] sm:right-[50%] sm:-translate-x-[-50%] sm:top-[110%] sm:-translate-y-[110%]' : ''}`}
                                        />
                                    </div>
                                )}

                                <h4 className={`font-semibold sm:text-center
                                    ${index === 1 || index === 3 ? 'text-[30px] sm:text-[20px]' : 'text-[20px]'}`}>
                                    {element.title}
                                </h4>

                                <p className={`text-[16px] font-extralight sm:text-[14px] sm:text-center
                                    ${index === 1 ? 'w-[375px] xl:w-[250px] sm:w-full' : ''}
                                    ${index === 2 ? 'w-[340px] xl:w-[240px] sm:w-full' : ''}
                                    ${index === 3 ? 'text-center w-[350px] mx-auto sm:w-full' : ''} 
                                    ${index === 1 || index === 3 ? 'mt-[16px]' : 'mt-[8px]'}`}>
                                    {element.desc}
                                </p>

                            </div>

                            {index === 4 && (
                                <div className='z-10 relative pr-[32px] lg:mt-[16px] sm:w-[95%] sm:pr-0'>
                                    <ButtonArea text="Przejdź do darmowej wyceny" link="/offer/pricing" margin={0} width={300} />
                                </div>
                            )}

                            <Image src={element.bg} alt="Tło kafelka" className='object-cover w-full h-full rounded-[15px] absolute top-0 left-0' />
                        </div>
                    ))}
                </div>

            </article>
        </section>
    )
}

export default OfferCity
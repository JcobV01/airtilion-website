import Image from '@node_modules/next/image'
import React from 'react'
import ButtonArea from './ButtonArea'

const OfferCity = ({ data }) => {
    return (
        <section className="z-10 relative">
            <article className='w-[1240px] xl:w-[1000px] lg:w-[90%]'>
                <h3 className='text-[25px] text-[#E2B350] tracking-[2.5px] font-medium'>NASZA OFERTA</h3>
                <p className='mt-[16px] text-[18px] font-light lg:text-[16px]'>{data.desc}</p>

                <div className='mt-[64px] flex gap-[30px] flex-wrap'>
                    {data?.elements.map((element, index) => (
                        <div key={index} className={`flex rounded-[15px] relative backdrop-blur-35 shadow-[0_4px_15px_0_rgba(0,_0,_0,_0.25)]
                        ${index === 0 ? 'w-[300px] h-[300px]' : ''}
                        ${index === 1 ? 'w-[910px] h-[300px]' : ''}
                        ${index === 2 || index === 3 ? 'w-[605px] h-[250px]' : ''}
                        ${index === 4 ? 'w-full h-[150px] justify-between items-center' : ''}`}>

                            <div className={`w-full h-full relative z-10 px-[32px] flex flex-col justify-center 
                                ${index === 4 ? 'w-[675px]' : ''} ${index === 3 ? 'mx-auto flex items-center' : ''}`}
                            >
                                {index < 3 && (
                                    <div className='flex justify-center'>
                                        <Image src={element.illustration} alt="Ilustracja promująca usługę" className={`object-cover 
                                            ${index === 0 ? 'mb-[32px]' : ''} 
                                            ${index === 1 ? 'absolute right-[128px]' : ''}
                                            ${index === 2 ? 'absolute top-[50%] -translate-y-[50%] right-[48px]' : ''}`}
                                        />
                                    </div>
                                )}

                                <h4 className={`font-semibold 
                                    ${index === 1 || index === 3 ? 'text-[30px]' : 'text-[20px]'}`}>
                                    {element.title}
                                </h4>

                                <p className={`text-[16px] font-extralight 
                                    ${index === 1 ? 'w-[375px]' : ''}
                                    ${index === 2 ? 'w-[340px]' : ''}
                                    ${index === 3 ? 'text-center w-[350px] mx-auto' : ''} 
                                    ${index === 1 || index === 3 ? 'mt-[16px]' : 'mt-[8px]'}`}>
                                    {element.desc}
                                </p>

                            </div>

                            {index === 4 && (
                                <div className='z-10 relative'>
                                    <ButtonArea text="Przejdź do darmowej wyceny" link="/offer/pricing" margin={0} width={300} />
                                </div>
                            )}

                            <Image src={element.bg} alt="Tło kafelka" className='object-cover absolute top-0 left-0' />
                        </div>
                    ))}
                </div>

            </article>
        </section>
    )
}

export default OfferCity
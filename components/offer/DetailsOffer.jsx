import React from 'react'
import gradient from '@public/assets/images/offer/detailsGradient.webp'
import circle from '@public/assets/icons/offer/circle.svg'
import Image from 'next/image'
import ButtonBuy from './ButtonBuy'

const DetailsOffer = ({ offer, isNetto }) => {
    return (
        <div className='flex flex-col gap-[150px]'>
            {
                offer.map((details, index) => {
                    const price = isNetto ? details.priceNetto : details.priceBrutto;
                    return (
                        <div id={details.id} key={index} className='relative w-full h-[900px]' style={{ backgroundImage: `url(${details.img.src})` }}>
                            <div className='absolute inset-0 h' style={{ backgroundImage: `url(${gradient.src})` }}></div>
                            <div className='absolute inset-0 bg-black opacity-80'></div>
                            <div className='relative z-10 h-full'>
                                <div className='flex justify-center'>
                                    <span className='absolute w-[1350px] h-[2px] bg-[rgba(255,255,255,0.60)] top-[25px]'></span>
                                    <span className={`absolute w-[2px] h-[850px] bg-[rgba(255,255,255,0.60)] ${index === 1 ? 'right-[25px]' : 'left-[25px]'} top-[25px]`}></span>
                                    <span className={`absolute w-[450px] h-[2px] bg-[rgba(255,255,255,0.60)] ${index === 1 ? 'left-[25px]' : 'right-[25px]'} bottom-[25px]`}></span>
                                    <span className={`absolute w-[2px] h-[200px] bg-[rgba(255,255,255,0.60)] ${index === 1 ? 'left-[25px]' : 'right-[25px]'} bottom-[25px]`}></span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='px-[75px] py-[50px] text-[16px]'>
                                        <h5 className={`text-[25px] text-[#E2B350] font-medium tracking-[2.5px] ${index === 1 ? 'text-right' : 'text-left'}`}>{details.title}</h5>
                                        <p className='text-[18px] font-light tracking-[1.8px]'>{details.desc}<span className='font-semibold'>&nbsp;{details.descBold}</span></p>
                                        <p className='text-[20px] font-medium mt-[25px]'>Kupując ten pakiet otrzymujesz:</p>
                                        {
                                            details.offer.map((detailsItem) => {
                                                return (
                                                    <>
                                                        <p key={detailsItem.name} className='mt-[10px] text-[18px] font-light'>{detailsItem.name}</p>
                                                        <ul>
                                                            {
                                                                detailsItem.list.map((listItem) => {
                                                                    return (
                                                                        <li key={listItem.sectionType} className='flex gap-[10px] pl-[10px] mt-[5px]'>
                                                                            <Image src={circle} width='10' height='10' alt="Ikona kropki" />
                                                                            <p className='font-extralight'><span className='font-medium'>{listItem.sectionType}&nbsp;</span>{listItem.description}</p>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className={`text-[25px] font-semibold tracking-[2.5px] absolute bottom-[25px] ${index === 1 ? 'right-[50px]' : 'left-[50px]'}`}>{price}&nbsp;<span className='text-[16px] tracking-[1.5px] font-medium'>{isNetto ? 'netto' : 'brutto'}</span></p>
                                    </div>
                                    <div className={`absolute bottom-[35px] ${index === 1 ? 'left-[225px]' : 'right-[225px]'}`}>
                                        <ButtonBuy />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DetailsOffer
import React from 'react'
import { Icon } from '@iconify/react'
import gradient from '@public/assets/images/offer/detailsGradient.webp'
import ButtonBuy from './ButtonBuy'

const DetailsOffer = ({ offer, isNetto, handleOpenDialog }) => {
    return (
        <div className='flex flex-col gap-[150px] xl:gap-[75px]'>
            {
                offer.map((details, index) => {
                    const price = isNetto ? details.priceNetto : details.priceBrutto;
                    return (
                        <div id={details.id} key={index} className='relative w-full h-[900px] 2xl:bg-cover 2xl:bg-no-repeat 2xl:h-auto 2xl:bg-center' style={{ backgroundImage: `url(${details.img.src})` }}>
                            <div className='absolute inset-0 2xl:bg-cover 2xl:bg-no-repeat' style={{ backgroundImage: `url(${gradient.src})` }}></div>
                            <div className='absolute inset-0 bg-black opacity-80'></div>
                            <div className='relative z-10 h-full'>
                                <div className='flex justify-center'>
                                    <span className='absolute w-auto h-[2px] bg-[rgba(255,255,255,0.60)] top-[25px] inset-x-[25px] 2xl:inset-x-[29px] sm:inset-x-[17px] sm:top-[15px]'></span>
                                    <span className={`absolute w-[2px] h-[auto] inset-y-[27px] bg-[rgba(255,255,255,0.60)] ${index === 1 ? 'right-[25px] 2xl:right-[29px] sm:right-[15px]' : 'left-[25px] 2xl:left-[29px] sm:left-[15px] sm:inset-y-[15px]'}`}></span>
                                    <span className={`absolute w-[448px] h-[2px] bg-[rgba(255,255,255,0.60)] ${index === 1 ? 'left-[27px]' : 'right-[27px]'} bottom-[25px] 2xl:bottom-[27px] sm:w-auto sm:inset-x-[17px] sm:bottom-[15px]`}></span>
                                    <span className={`absolute w-[2px] h-[200px] bg-[rgba(255,255,255,0.60)] ${index === 1 ? 'left-[25px] sm:left-[15px]' : 'right-[25px] sm:right-[15px]'} bottom-[25px] 2xl:bottom-[27px] sm:h-auto sm:inset-y-[15px]`}></span>
                                </div>
                                <div className='flex flex-col 2xl:pb-[60px] md:pb-[120px]'>
                                    <div className='px-[75px] py-[50px] text-[16px] lg:px-[50px] lg:py-[40px] fold:px-[25px]'>
                                        <h5 className={`text-[25px] text-[#E2B350] font-medium tracking-[2.5px] ${index === 1 ? 'text-right' : 'text-left'} xl:text-[22px] sm:text-center`}>{details.title}</h5>
                                        <p className='text-[18px] font-light tracking-[1.8px] 2xl:text-[16px] xl:text-[15px]'>{details.desc}<span className='font-semibold'>&nbsp;{details.descBold}</span></p>
                                        <p className='text-[20px] font-medium mt-[25px] 2xl:mt-[10px] xl:text-[17px]'>Kupując ten pakiet otrzymujesz:</p>
                                        {
                                            details.offer.map((detailsItem) => {
                                                return (
                                                    <>
                                                        <p key={detailsItem.name} className='mt-[10px] text-[18px] font-light xl:text-[16px]'>{detailsItem.name}</p>
                                                        <ul>
                                                            {
                                                                detailsItem.list.map((listItem) => {
                                                                    return (
                                                                        <li key={listItem.sectionType} className='flex items-center gap-[10px] pl-[10px] mt-[5px] 2xl:text-[14px] xl:mt-[3px]'>
                                                                            <div className='w-[10px] h-[10px]'>
                                                                                <Icon icon="material-symbols:circle" width='10' height='10' alt="Ikona kropki" className='text-[#E2B350]' />
                                                                            </div>
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
                                        <p className={`text-[25px] font-semibold tracking-[2.5px] absolute bottom-[25px] ${index === 1 ? 'right-[50px]' : 'left-[50px]'} md:bottom-[110px] md:inset-x-0 md:text-center`}>{price}&nbsp;<span className='text-[16px] tracking-[1.5px] font-medium'>{isNetto ? 'netto' : 'brutto'}</span></p>
                                    </div>
                                    <div className={`absolute bottom-[35px] ${index === 1 ? 'left-[225px]' : 'right-[225px]'} md:inset-x-0 md:flex md:justify-center md:bottom-[40px]`}>
                                        <ButtonBuy handleOpenDialog={() => handleOpenDialog(details.title)} />
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
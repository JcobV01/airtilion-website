import Image from 'next/image'

import checkIcon from '@public/assets/icons/home/check.svg'
import dArrowIcon from '@public/assets/icons/doubleArrow.png'

const OfferCard = ({ title, technologies, composition }) => {
    return (
        <article className='w-[400px] h-[400px] flex flex-col gap-[20px] p-[20px] px-[30px] relative backdrop-blur-[5px] border-[2.5px] border-[#1A1A1A] rounded-[10px] z-10'>
            <h6 className='text-[20px] tracking-[2px] z-10'>{title}</h6>
            <p className='text-[15px] font-light text-[#AEAEAE] z-10'>{technologies.subtitle}</p>
            <div className='z-10'>
                {
                    technologies.list.map((item) => (
                        <div className='flex gap-[20px]'>
                            <Image src={checkIcon} width={15} height={15} alt='ikona listy'/>
                            <p className='text-[15px] font-light'>{item}</p>
                        </div>
                    ))
                }
            </div>

            <p className='text-[15px] font-light text-[#AEAEAE] z-10'>{composition.subtitle}</p>
            <div className='z-10'>
                {
                    composition.list.map((item) => (
                        <div className='flex gap-[20px]'>
                            <Image src={checkIcon} width={15} height={15} alt='ikona listy'/>
                            <p className='text-[15px] font-light'>{item}</p>
                        </div>
                    ))
                }
            </div>

            <div className='absolute bottom-[20px] right-[20px] flex gap-[4px] z-1'>
                <p className='text-[15px] font-light'>Poznaj szczegóły oferty</p>
                <div className='flex items-center'>
                    <Image src={dArrowIcon} width={15} height={15} alt='ikona strzałki'/>
                </div>
            </div>
        </article>
    )
}

export default OfferCard
import Image from 'next/image'

import { technologies } from '@data/portfolio'

const Technology = ({name}) => {
  return (
    <div className='flex flex-col gap-[20px] items-center w-[130px]'>
        <Image src={technologies[name]} width={90} height={90} alt='ikona technologii' className='opacity-70'/>
        <p className='text-[20px] tracking-[3px] text-center'>{name}</p>
    </div>
  )
}

export default Technology
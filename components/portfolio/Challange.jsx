import Image from 'next/image'
import React from 'react'

import bg from '@public/assets/images/portfolioChallangesGradient.png'

import documentIcon from '@public/assets/icons/portfolio/challanges/document.png'
import languagesIcon from '@public/assets/icons/portfolio/challanges/languages.png'
import chartIcon from '@public/assets/icons/portfolio/challanges/chartUp.png'
import rodoIcon from '@public/assets/icons/portfolio/challanges/rodo.png'
import mapIcon from '@public/assets/icons/portfolio/challanges/map.png'

const challanges = {
    "Document": documentIcon,
    "Languages": languagesIcon,
    "Chart": chartIcon,
    "Rodo": rodoIcon,
    "Map": mapIcon,
}

const Challange = ({icon, title, description}) => {
  return (
    <div className='relative w-[400px] h-[200px] flex flex-col justify-center items-center gap-[15px] bg-[#1B1B1B99] px-[40px] rounded-[5px] decoration-lines z-10'>
        <Image src={challanges[icon]} width={50} height={50} alt='ikona wyzwania' className='absolute top-[-30px] left-[50%] translate-x-[-50%]'/>
        <h6 className='text-[15px] font-semibold text-center'>{title}</h6>
        <p className='text-[12px] text-center'>{description}</p>
        <Image src={bg} width={400} height={200} alt='tło kafelka' className='absolute left-0 top-0 brightness-50'/>
    </div>
  )
}

export default Challange
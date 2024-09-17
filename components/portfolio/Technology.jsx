import React from 'react'

import figmaIcon from '@public/assets/icons/portfolio/figma.png'
import htmlIcon from '@public/assets/icons/portfolio/html.png'
import wordpressIcon from '@public/assets/icons/portfolio/wordpress.png'
import googleIcon from '@public/assets/icons/portfolio/google.png'
import cssIcon from '@public/assets/icons/portfolio/css.png'
import jsIcon from '@public/assets/icons/portfolio/javascript.png'
import Image from 'next/image'

const technologies = {
    "Figma": figmaIcon,
    "HTML": htmlIcon,
    "Wordpress": wordpressIcon,
    "Google SC": googleIcon,
    "CSS": cssIcon,
    "JavaScript": jsIcon,
}

const Technology = ({name}) => {
  return (
    <div className='flex flex-col gap-[20px] items-center w-[130px]'>
        <Image src={technologies[name]} width={90} height={90} alt='ikona technologii' className='opacity-70'/>
        <p className='text-[20px] tracking-[3px] text-center'>{name}</p>
    </div>
  )
}

export default Technology
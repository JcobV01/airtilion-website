import Image from 'next/image'
import React from 'react'

import upArrowsIcon from '@public/assets/icons/portfolio/achivements/up.png'
import chatIcon from '@public/assets/icons/portfolio/achivements/chat.png'
import cursorIcon from '@public/assets/icons/portfolio/achivements/cursor.png'
import walkingIcon from '@public/assets/icons/portfolio/achivements/walking.png'

const pairs = {
    "ThreeArrowUp" : upArrowsIcon,
    "Chat" : chatIcon,
    "Cursor" : cursorIcon,
    "PersonWalking" : walkingIcon,
}

const Achivement = ({icon, title, description}) => {
  return (
    <div className='flex flex-1 gap-[20px]'>
        <div className='w-[50px]'>
            <Image src={pairs[icon]} width={50} height={50} alt={`ikona ${title}`}/>
        </div>
        <div className='flex-1'>
            <h6 className='text-[20px] font-bold w-[100px] mb-[20px]'>{title}</h6>
            <p className='text-[13px] font-light'>{description}</p>
        </div>
    </div>
  )
}

export default Achivement
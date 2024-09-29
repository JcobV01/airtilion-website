import Link from 'next/link'
import React from 'react'

const LightButton = ({text, paddingBlock, paddingInline, isInCardsOffer, rounded, handleClick, link}) => {
  return (
    <Link href={link}>
      <button onClick={handleClick} className={`text-[16px] xl:text-[15px] lg:text-[13px] text-[#3C3C3C] tracking-[1.4px] px-[${paddingInline}] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] rounded-[${rounded}] ${isInCardsOffer ? 'w-full' : 'w-max'}`} style={{paddingBlock: paddingBlock}}>
          {text}
      </button>
    </Link>
  )
}

export default LightButton
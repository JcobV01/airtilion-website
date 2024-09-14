import React from 'react'

const LightButton = ({text, paddingBlock, paddingInline, isInCardsOffer, rounded}) => {
  return (
    <button className={`text-[16px] text-[#3C3C3C] tracking-[1.4px] px-[${paddingInline}] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] rounded-[${rounded}] ${isInCardsOffer ? 'w-full' : 'w-max'}`} style={{paddingBlock: paddingBlock}}>
        {text}
    </button>
  )
}

export default LightButton
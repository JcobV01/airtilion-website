import Link from 'next/link'
import React from 'react'

const LightButton = ({ text, paddingBlock, paddingInline, isInCardsOffer, rounded, handleClick, link, id }) => {

  const handleMenu = (e, id) => {
    if (id.length > 0) {
      e.preventDefault()
      const target = id.length > 0 ? document.querySelector(id) : null;
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  return (
    <>
      {link ? (
        <Link href={link} onClick={(e) => handleMenu(e, id)}>
          <button onClick={handleClick} className={`text-[16px] xxl:text-[20px] duration-700 hover:scale-90 xl:text-[15px] lg:text-[13px] text-[#3C3C3C] tracking-[1.4px] px-[${paddingInline}] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] rounded-[${rounded}] ${isInCardsOffer ? 'w-full' : 'w-max'}`} style={{ paddingBlock: paddingBlock }}>
            {text}
          </button>
        </Link>

      ) : (
        <button onClick={handleClick} className={`text-[16px] xxl:text-[20px] xl:text-[15px] lg:text-[13px] text-[#3C3C3C] tracking-[1.4px] px-[${paddingInline}] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] rounded-[${rounded}] ${isInCardsOffer ? 'w-full' : 'w-max'}`} style={{ paddingBlock: paddingBlock }}>
          {text}
        </button>
      )}
    </>
  )
}

export default LightButton
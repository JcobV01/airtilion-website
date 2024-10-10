import React from 'react'

const ButtonBuy = ({handleOpenDialog}) => {
  return (
    <button onClick={handleOpenDialog} className='text-[16px] xxl:text-[20px] font-light tracking-[1.5px] px-[50px] py-[15px] bg-gradient-to-r from-[rgba(206,167,91,0.50)] to-[rgba(122,107,78,0.50)] shadow-[3px_3px_10px_0px_rgba(245,203,134,0.25)] rounded-[10px]'>Złóż zamówienie</button>
  )
}

export default ButtonBuy
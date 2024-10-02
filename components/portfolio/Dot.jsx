import Link from 'next/link'
import React from 'react'

const Dot = ({ dots, updateDots, index, link, text }) => {

  const scrollHandle = (e) => {
    e.preventDefault()
    const target = document.querySelector(link);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }  

  return (
    <Link href={link} onClick={(e) => scrollHandle(e, link)}>
      <div className={`dot-container relative w-[10px] h-[10px] hover:flex cursor-pointer rounded-full bg-[#2d2d2d] flex items-center transition-all duration-500 ${dots[index] == 1 && 'h-[20px] bg-[#E2B350]'}`} onClick={() => updateDots(index)}>
        <span className='portfolio-dots duration-500 transition-all'>{text}</span>
      </div>
    </Link>
  )
}

export default Dot


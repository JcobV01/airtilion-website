import Link from 'next/link'
import React from 'react'

const Dot = ({dots, updateDots, index, link}) => {
    
  return (
    <Link href={link}>
        <div className={`w-[10px] h-[10px] cursor-pointer rounded-full bg-[#2d2d2d] transition-all duration-500 ${dots[index] == 1 && 'h-[20px] bg-[#E2B350]'}`} onClick={() => updateDots(index)}></div>
    </Link>
  )
}

export default Dot
import React from 'react'

const CancelButton = ({text, handleClose}) => {
  return (
    <button onClick={handleClose} className='text-[15px] z-10 tracking-[1.5px] bg-gradient-to-r from-[hsl(0,31%,16%)] to-[rgba(248,64,51,0.5)] shadow-[3px_3px_10px_0px_rgba(248,64,51,0.25)] px-[40px] py-[12.5px] rounded-[10px]'>{text}</button>
  )
}

export default CancelButton
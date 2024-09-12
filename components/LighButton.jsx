import React from 'react'

const LighButton = ({text}) => {
  return (
    <button className='text-[16px] text-[#3C3C3C] tracking-[1.4px] py-[11px] px-[30px] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] rounded-[5px] w-max'>
        {text}
    </button>
  )
}

export default LighButton
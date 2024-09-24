import React from 'react'

const FormButton = ({text, submitting}) => {
  return (
    <button type="submit" disabled={submitting} className='text-[15px] xl:text-[13px] z-10 tracking-[1.5px] bg-gradient-to-r from-[rgba(206,167,91,0.50)] to-[rgba(122,107,78,0.50)] shadow-[3px_3px_10px_0px_rgba(245,203,134,0.25)] px-[40px] py-[12.5px] rounded-[10px]'>{submitting ? 'Przesyłanie...' : `${text}`}</button>
  )
}

export default FormButton
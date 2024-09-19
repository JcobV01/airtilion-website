import React from 'react'

const Form = ({ nameForm, text, idHandle, inputType, showTextInput = false, handleInputChange, isOtherChecked, style = 'circleBefore', textInputValue }) => {
   
    return (
        <div className='flex gap-[10px]'>
            <input type={inputType} name={nameForm} value={text} id={idHandle} className='hidden peer' onChange={handleInputChange} />
            <label htmlFor={idHandle} className='cursor-pointer'>
                <span className={`${style} flex items-center`}>{text}</span>
            </label>

            {showTextInput && <input type="text" name='test' value={textInputValue} onChange={handleInputChange} disabled={isOtherChecked} className='w-[400px] bg-inherit border-b-[1px] border-[#FFF] tracking-[1px] outline-none' />}
        </div>
    )
}

export default Form
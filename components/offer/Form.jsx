import React from 'react'

const Form = ({ nameForm, text, idHandle, showTextInput=false }) => {
    return (
        <div className='flex gap-[10px]'>
            <input type="radio" name={nameForm} value={text} id={idHandle} className='hidden peer' required />
            <label htmlFor={idHandle} className='cursor-pointer'>
                <span className='circleBefore flex items-center'>{text}</span>
            </label>

            {showTextInput && <input type="text" name={nameForm} required />}
        </div>
    )
}

export default Form
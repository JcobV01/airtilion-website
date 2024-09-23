import React from 'react'

const ButtonPrice = ({isNetto, tooglePrice}) => {

    return (
        <div className='flex items-center justify-center gap-[25px] text-[17px] tracking-[1.5px] font-light mt-[60px] xl:mb-[40px]'>
            <span>Netto</span>
            <div>
                <input type="checkbox" id="toggle" className='sr-only' checked={!isNetto} onChange={tooglePrice} />
                <label htmlFor="toggle" className='block w-16 h-8 rounded-[30px] cursor-pointer relative' style={{
                    background: 'radial-gradient(46.61% 50% at 50% 50%, rgba(63, 63, 63, 0.80) 0%, rgba(45, 44, 44, 0.80) 100%)',
                    boxShadow: '5px 5px 4px 0px rgba(0, 0, 0, 0.25)',
                }}>
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${!isNetto ? 'translate-x-8' : ''}`} style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, #C2AC7E 0%, #988969 100%)',
                        filter: 'drop-shadow(-2.5px 0px 10px rgba(226, 179, 80, 0.25))',
                    }}></span>
                </label>
            </div>
            <span>Brutto</span>
        </div>
    )
}

export default ButtonPrice
import React from 'react'
import Link from '@node_modules/next/link'
import { Icon } from '@node_modules/@iconify/react/dist/iconify'

const ButtonArea = ({ text, width, link, margin }) => {
    return (
        <Link href={`${link}`} aria-label="Kliknij aby przejść do portfolio" className={`mt-[${margin}px] flex w-[${width}px] h-[50px] duration-700 hover:scale-90`}>
            <button className={`bg-[linear-gradient(to_right,rgba(206,167,91,0.5)_0%,rgba(122,107,78,0.5)_100%)] flex items-center justify-between px-[16px] w-full rounded-[5px] text-[16px] font-light`}>
                {text}
                <Icon icon="icon-park-outline:double-right" alt="Ikona strzałek w prawo" width="25" height="25" className='text-white' />
            </button>
        </Link>
    )
}

export default ButtonArea
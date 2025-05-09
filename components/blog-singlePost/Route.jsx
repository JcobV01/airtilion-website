import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import Link from 'next/link'
import React from 'react'

const Route = ({title}) => {
  return (
    <div className='relative z-10 w-[1240px] mx-auto mt-[92px] flex items-center text-[16px] font-light'>
        <Link href='/' aria-label="Kliknij aby przejść na stronę główną">
          <Icon icon="ph:house-bold" width="16" height="16" className='text-white duration-700 hover:text-[#E2B350]' />
        </Link>

        <Icon icon="mingcute:right-line" width="16" height="16" className='text-white' />

        <Link href='/blog' aria-label="Kliknij aby przejść na stronę z blogiem">
            <span className='duration-700 hover:text-[#E2B350]'>Blog</span>
        </Link>

        <Icon icon="mingcute:right-line" width="16" height="16" className='text-white' />

        <span className='text-[#E2B350]' dangerouslySetInnerHTML={{__html: title}} />
    </div>
  )
}

export default Route
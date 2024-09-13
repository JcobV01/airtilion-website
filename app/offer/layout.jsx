import Header from '@components/Header'
import NavbarOffer from '@components/offer/NavbarOffer'
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex flex-col relative top-[-250px] items-center'>
        <NavbarOffer />
        {children}
      </main>
    </>
  )
}

export default layout
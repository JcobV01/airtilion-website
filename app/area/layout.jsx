import Footer from '@components/Footer'
import React from 'react'
import errorImage from '@public/assets/images/404.webp'

const layout = ({children}) => {
  return (
    <>
        <main className='h-dvh xl:h-auto bg-no-repeat bg-cover md:bg-center mt-[-131px] w-full flex justify-end items-center bg-fixed xl:overflow-y-scroll xl:pt-[150px] sm:pt-[200px]' style={{ backgroundImage: `url(${errorImage.src})` }}>
            {children}
        </main>

        <Footer/>
    </>
  )
}

export default layout
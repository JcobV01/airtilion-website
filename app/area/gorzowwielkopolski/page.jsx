import React from 'react'
import errorImage from '@public/assets/images/404.webp'
import CityComponent from '@components/area/CityComponent'


const page = () => {
  return (
    <main className='h-dvh bg-no-repeat bg-cover md:bg-center absolute top-0 left-0 w-full flex justify-end items-center bg-fixed xl:overflow-y-scroll xl:pt-[400px] sm:pt-[200px]' style={{ backgroundImage: `url(${errorImage.src})` }}>
      <CityComponent city="w Gorzowie Wielkopolskim"/>
    </main>
  )
}

export default page
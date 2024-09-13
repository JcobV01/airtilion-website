import Footer from '@components/Footer'
import Header from '@components/Header'
import AboutUs from '@components/home/sections/AboutUs/AboutUs'
import Cooperation from '@components/home/sections/Cooperation/Cooperation'
import Encourage from '@components/home/sections/Encourage/Encourage'
import React from 'react'

const home = () => {
  return (
    <>
      <Header/>
      <Encourage/>
      <AboutUs/>
      <Cooperation/>
      <Footer />
    </>
  )
}

export default home
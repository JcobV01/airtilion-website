import Header from '@components/Header'
import AboutUs from '@components/home/sections/AboutUs/AboutUs'
import Encourage from '@components/home/sections/Encourage/Encourage'
import React from 'react'

const home = () => {
  return (
    <>
      <Header/>
      <Encourage/>
      <AboutUs/>
    </>
  )
}

export default home
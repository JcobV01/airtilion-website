import Footer from '@components/Footer'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import HeaderBg from '@public/assets/images/headerOfferPortfolio.webp'
import React, { Suspense } from 'react'
import DesktopPortfolioDetailsLines from '@components/lines/DesktopPortfolioDetailsLines'
import MobilePortfolioDetailsLines from '@components/lines/MobilePortfolioDetailsLines'

const layout = ({ children }) => {
  return (
    <>
      
        {children}

        <DesktopPortfolioDetailsLines/>
        <MobilePortfolioDetailsLines/>
    </>
  )
}

export default layout
import React from 'react'
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
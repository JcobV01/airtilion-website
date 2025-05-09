import Footer from '@components/Footer'
import { CategoryProvider } from '@context/PostCategoryContext'
import React from 'react'

const layout = ({ children }) => {
    return (
        <CategoryProvider>
            {children}
            <Footer bg={true}/>
        </CategoryProvider>
    )
}

export default layout
import { CategoryProvider } from '@context/PostCategoryContext'
import React from 'react'

const layout = ({ children }) => {
    return (
        <CategoryProvider>
            {children}
        </CategoryProvider>
    )
}

export default layout
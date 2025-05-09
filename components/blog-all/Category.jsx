'use client'

import { useCategory } from '@context/PostCategoryContext'
import React from 'react'



const Category = ({name}) => {
  const {category, setCategory} = useCategory()

  const changeCategory = () => {
    setCategory({name})
  }

  return (
    <div className='bg-[#EFD8A7] relative z-10 w-fit px-[16px] py-[2px] rounded-[5px]' onClick={() => changeCategory()}>
        <p className='text-[#242424] text-[14px]'>{name}</p>
    </div>
  )
}

export default Category
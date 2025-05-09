import React from 'react'

const Content = ({content}) => {
  return (
    <section className='mt-[96px] w-[1240px] mx-auto blog-content' dangerouslySetInnerHTML={{__html: content}}>
        
    </section>
  )
}

export default Content
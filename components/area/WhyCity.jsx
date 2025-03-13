import React from 'react'
import Image from '@node_modules/next/image'
import Heading from '@components/Heading'
import WhyCityTile from './WhyCityTile'

const WhyCity = ({data}) => {
  return (
    <section className='w-full flex flex-col gap-[64px]'>
        <article className='w-[1220px] mx-auto flex flex-col gap-[32px]'>
          <Heading title={data.title} subtitle="NOWOCZESNOŚĆ I JAKOŚĆ W JEDNYM MIEJSCU"/>
          <p>{data.content}</p>
        </article>
        
        <article className='z-20 bg-[#00000082] py-[64px]'>
          <div className='grid gap-[16px] w-[1220px] mx-auto grid-cols-4 grid-rows-2'>
            <div className='w-[600px] h-[600px] z-20 relative p-[64px] flex items-end col-span-2 row-span-2'>
              <Image src={data.tiles.image} width={600} height={600} quality={100} className='absolute top-0 left-0 w-full h-full' alt="Zdjęcie miasta"/>
              <p className='relative z-20 text-[25px] font-extralight'>{data.tiles.title}</p>
            </div>

            {data?.tiles?.elements.map((tile) => (
                <WhyCityTile tile={tile}/>
            ))}
          </div>
        </article>

      </section>
  )
}

export default WhyCity
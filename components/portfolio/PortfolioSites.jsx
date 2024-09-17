"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const PortfolioSites = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/portfolio/get', { method: "POST" });
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log(data);
        
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [])

  return (
    <article className='flex flex-wrap gap-[25px] justify-center gap-y-[50px]'>
      {items?.map((item) => (
        <div className="w-[250px] h-[500px] relative flex flex-col items-center justify-center portfolio-item-hovered duration-500 p-[20px] cursor-pointer">
          <div className="absolute top-0 left-0 w-full h-full transparent-y bg-cover bg-center saturate-0 brightness-50 z-10  duration-500" style={{backgroundImage: `url(${item.Background})`}}></div>
          <Image src={item.Logo} width={0} height={0} sizes="100vw" alt={`logo ${item.Name}`} className="w-auto h-[50px] z-20 absolute top-[50px] duration-500"/>
          <p className="z-20 text-[17px] duration-500 absolute bottom-[50%] translate-y-[50%]">{item.Name}</p>
        </div>
      ))}
    </article>
  )
}

export default PortfolioSites
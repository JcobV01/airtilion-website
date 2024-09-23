import { technologies } from '@data/portfolio'
import { Icon } from '@iconify/react'

const Technology = ({ name }) => {

  return (
    <div className='flex flex-col gap-[20px] items-center w-[130px] duration-700 text-[#b6b6b6] hover:translate-y-[-10px]  hover:text-[#E2B350]'>
      <Icon icon={technologies[name]} width="90px" height="90px" alt="Ikona technologii" />
      <p className='text-[20px] tracking-[3px] text-center'>{name}</p>
    </div>
  )
}

export default Technology
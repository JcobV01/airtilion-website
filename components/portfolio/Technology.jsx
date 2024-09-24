import { technologies } from '@data/portfolio'
import { Icon } from '@iconify/react'

const Technology = ({ name }) => {

  return (
    <div className='flex flex-col gap-[20px] items-center w-[130px] duration-700 text-[#b6b6b6] hover:translate-y-[-10px]  hover:text-[#E2B350] xl:hover:translate-y-0 xl:hover:text-[#b6b6b6] sm:gap-[10px]'>
      <Icon icon={technologies[name]} width="90px" height="90px" alt="Ikona technologii" className='sm:w-[50px] sm:h-[50px]'/>
      <p className='text-[20px] tracking-[3px] text-center sm:text-[16px]'>{name}</p>
    </div>
  )
}

export default Technology
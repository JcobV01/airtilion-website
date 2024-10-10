import { Icon } from '@iconify/react'

const CoopCard = ({ title, desc, index, icon, isVisible }) => {    
    return (
        <div key={index} className={`relative w-[1200px] xxl:w-full 2xl:w-full flex gap-[60px] md:gap-[30px] items-center py-[40px] px-[60px] sm:px-[30px] ${index % 2 == 1 && 'bg-[#1B1B1B66]'} transition-all duration-1000 ease-in-out opacity-0 translate-y-[50px] delay-${index * 200}ms ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`} style={{ transitionDelay: `${index * 400}ms` }}>
            <span className='absolute left-[30px] sm:left-[10px] top-[50%] translate-y-[-50%] text-[#1c1c1c] text-[150px] font-bold z-[1]'>{index}</span>
            <div className='z-10 flex flex-col gap-[10px] flex-1'>
                <h5 className='text-[25px] lg:text-[20px] md:text-[18px] font-extralight tracking-[5px]'>{title}</h5>
                <div className='w-full h-[1px] bg-[#E2B35099]'></div>
                <p className='text-[14px] xxl:text-[18px] md:text-[12px] font-extralight tracking-[1.4px]'>{desc}</p>
            </div>
            <Icon icon={icon} width="60" height="60" alt={`Ikona karty ${title}`} className='z-10 lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] text-[#E2B350] fill-[#E2B350]'/>
        </div>
    )
}

export default CoopCard
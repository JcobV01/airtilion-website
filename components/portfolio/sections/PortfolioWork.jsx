import { Icon } from '@iconify/react'


const PortfolioWork = ({ steps }) => {
    return (
        <article id="work" className='w-[1240px] bg-[#1B1B1B4D] rounded-[10px] backdrop-blur-[2px] shadow-[0px_4px_4px_0px_#00000025] py-[50px] px-[100px] xl:w-[90%] md:px-[50px] sm:px-[25px] fold:px-[10px]'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[30px] fold:text-center'>ZAKRES PRAC</h5>
            <div className='flex flex-col gap-[15px]'>
                {steps.map((step, index) => (
                    <div className='flex gap-[30px] items-center fold:gap-[15px] fold:text-[14px]' key={index}>
                        <div>
                            <Icon icon="lets-icons:check-fill" width="20" height="20" alt='Ikona listy' className='text-[#E2B350]' />
                        </div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default PortfolioWork
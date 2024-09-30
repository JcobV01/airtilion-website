import Realization from '../Realization'
import RealizationRowTwo from '../RealizationRowTwo'

const PortfolioSteps = ({ steps }) => {

    return (
        <article id="steps" className="w-[1240px] xl:w-[90%]">
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] sm:text-center'>JAK PRZEBIEGŁA REALIZACJA?</h5>
            <div className='flex justify-start gap-[30px] w-[1170px] m-auto relative xl:w-[960px] lg:w-[90%] lg:justify-center lg:items-center lg:flex-wrap lg:gap-[50px] sm:flex-col'>
                {steps.slice(0, 4).map((step, index) => (
                    <Realization arrow={index === 3 ? 'line' : index === steps.length - 1 ? 'line' : index > 3 ? 'left' : 'right'} title={step.title} desc={step.description} accent={index === 0 ? 'przygotowanie' : index === 1 ? 'start' : index === steps.length - 1 ? 'koniec' : ''} key={index} />
                ))}
                <div className='absolute right-0 top-[14px] w-[100px] h-[212px] rounded-tr-[30px] rounded-br-[30px] border-r-[2px] border-r-[#959595] border-t-[2px] border-t-[#959595] border-b-[2px] border-b-[#959595] xl:right-[80px] lg:hidden'></div>
            </div>
            <div className='flex flex-row-reverse gap-[30px] mt-[60px] w-[1170px] m-auto relative xl:w-[960px] xl:pr-[70px] lg:w-[90%] lg:justify-center lg:items-center lg:flex-wrap lg:gap-[50px] lg:pr-[0px] sm:flex-col'>
                {steps.slice(4).map((step, index) => {
                    const isLast = index === steps.slice(4).length - 1
                    return (
                        <RealizationRowTwo arrow={index === 0 ? 'line' : index === steps.length - 1 ? 'line' : index > 3 ? 'left' : 'right'} title={step.title} desc={step.description} accent={isLast ? 'koniec' : ''} key={index} />
                    )
                })}
            </div>
        </article>
    )
}

export default PortfolioSteps
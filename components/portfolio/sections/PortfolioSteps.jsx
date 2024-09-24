import Realization from '../Realization'

const PortfolioSteps = ({ steps }) => {
    const modifiedSteps = [...steps];

    // Sprawdzenie, czy indeksy 4 i 6 istnieją, i zamiana miejscami
    if (modifiedSteps.length > 6) {
        const temp = modifiedSteps[4];
        modifiedSteps[4] = modifiedSteps[6];
        modifiedSteps[6] = temp;
    }

    return (
        <article className="w-[1240px] xl:w-[90%]">
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px]'>JAK PRZEBIEGŁA REALIZACJA?</h5>
            <div className='flex flex-wrap gap-[30px] gap-y-[60px] justify-end w-[1170px] m-auto relative xl:w-[90%]'>
                {modifiedSteps.map((step, index) => {
                    console.log(index)
                    console.log(step)
                    console.log(step.title)
                    return (

                        <Realization arrow={index === 3 ? 'line' : index === steps.length - 1 ? 'line' : index > 3 ? 'left' : 'right'} title={step.title} desc={step.description} accent={index === 0 ? 'przygotowanie' : index === 1 ? 'start' : index === steps.length - 1 ? 'koniec' : ''} key={index} />
                    )
                })}
                <div className='absolute right-0 top-[14px] w-[100px] h-[212px] rounded-tr-[30px] rounded-br-[30px] border-r-[2px] border-r-[#959595] border-t-[2px] border-t-[#959595] border-b-[2px] border-b-[#959595]'></div>
            </div>
        </article>
    )
}

export default PortfolioSteps
import Challange from '../Challange'

const PortfolioChallanges = ({challange}) => {
    return (
        <article id="challanges" className='w-[1240px] xl:w-[90%]'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>WYZWANIA</h5>
            <div className='flex flex-wrap gap-[20px] gap-y-[75px] m-auto xl:justify-center'>
                {challange.map((challange, index) => (
                    <Challange icon={challange.icon} title={challange.title} description={challange.description} key={index} />
                ))}
            </div>
        </article>
    )
}

export default PortfolioChallanges
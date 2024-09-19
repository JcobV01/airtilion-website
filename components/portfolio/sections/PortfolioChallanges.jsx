import Challange from '../Challange'

const PortfolioChallanges = ({challange}) => {
    return (
        <article className='w-[1240px]'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>WYZWANIA</h5>
            <div className='flex flex-wrap gap-[20px] gap-y-[75px] m-auto'>
                {challange.map((challange, index) => (
                    <Challange icon={challange.icon} title={challange.title} description={challange.description} key={index} />
                ))}
            </div>
        </article>
    )
}

export default PortfolioChallanges
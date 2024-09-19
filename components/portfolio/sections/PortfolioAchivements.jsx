import Achivement from '../Achivement'

const PortfolioAchivements = ({achivement}) => {
    return (
        <article className='w-[1400px]'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px]'>CO UDAŁO SIĘ OSIĄGNĄĆ?</h5>

            <div className='bg-[#1B1B1B4D] rounded-[10px] shadow-[0px_4px_4px_0px_#00000025] backdrop-blur-[5px] flex justify-between p-[40px] gap-[30px]'>
                {achivement.map((achi, index) => (
                    <Achivement icon={achi.icon} title={achi.title} description={achi.description} key={index} />
                ))}
            </div>
        </article>
    )
}

export default PortfolioAchivements
import Technology from "../Technology"

const PortfolioTechnologies = ({technologies}) => {
    return (
        <article className='w-[1240px] '>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>WYKORZYSTANE TECHNOLOGIE</h5>
            <div className='flex gap-[60px] justify-center'>
                {technologies?.map((item, index) => (
                    <Technology name={item} key={index} />
                ))}
            </div>
        </article>
    )
}

export default PortfolioTechnologies
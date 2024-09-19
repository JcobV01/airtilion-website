import Image from 'next/image'

const PortfolioClient = ({client}) => {
    return (
        <article className='w-full'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center'>KILKA SŁÓW O KLIENCIE</h5>

            <div className='w-full py-[140px] flex items-center gap-[120px] justify-center relative'>
                <div className='absolute top-0 left-0 w-full h-full transparent-x z-10 brightness-[0.2]' style={{ backgroundImage: `url(${client.background})` }}></div>
                <Image src={client.logo} alt='Logo klienta' width={0} height={0} sizes="100vw" className='w-auto h-[100px] relative z-20' />
                <div className='z-20 relative w-[40%]'>
                    <h6 className='text-[25px] font-semibold mb-[20px]'>{client.name}</h6>
                    <p className='text-[17px]'>{client.description}</p>
                </div>
            </div>

        </article>
    )
}

export default PortfolioClient
import Image from 'next/image'

const PortfolioClient = ({client}) => {
    return (
        <article id="client" className='w-full observer'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[60px] text-center xxl:text-[24px] sm:w-[90%]'>KILKA SŁÓW O KLIENCIE</h5>

            <div className='w-full py-[140px] flex items-center gap-[120px] justify-center relative lg:flex-col fold:gap-[50px]'>
                <Image 
                    src={`https://api.airtilion.com/uploads/clients/${client?._id}/${client?.Background.file}`}
                    placeholder='blur'
                    blurDataURL={`data:image/webp;base64,${client?.Background.base64}`}
                    width={1920}
                    height={1080}
                    quality={100}
                    className='absolute top-0 left-0 w-full h-full transparent-x z-10 brightness-[0.2] object-cover object-top'
                    alt="Tło klienta"
                    />
                <Image 
                    src={`https://api.airtilion.com/uploads/clients/${client?._id}/${client?.Logo.file}`} 
                    alt='Logo klienta' 
                    width={0} 
                    height={0} 
                    sizes="100vw" 
                    className='w-auto h-[100px] relative z-20 sm:w-[90%] sm:h-[auto]' />
                <div className='z-20 relative w-[40%] md:w-[75%]'>
                    <h6 className='text-[25px] font-semibold mb-[20px] xxl:text-[27px]'>{client?.Name}</h6>
                    <p className='text-[17px] xxl:text-[19px]'>{client?.Description}</p>
                </div>
            </div>

        </article>
    )
}

export default PortfolioClient
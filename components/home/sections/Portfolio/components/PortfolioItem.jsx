import Image from 'next/image'
import Link from 'next/link'
import arrow from '@public/assets/icons/home/portfolio-arrow.png'
import dynamic from 'next/dynamic'


const PortfolioItem = ({title, desc, bg, image}) => {

    return (
        <section className='pt-[50px] z-10'>
            <article className='relative h-[550px] w-[1100px] m-auto hover:w-[1200px] 2xl:w-[1000px] xl:w-[600px] 2xl:hover:w-[1100px] xl:hover:w-[900px] transition-all duration-1000 cursor-pointer portfolio-item'>
                <div className='w-[960px] h-[550px] xl:w-[700px] relative px-[50px]'>
                    <span className='h-[2px] w-[50%] bg-[#E2B35080] z-10 block absolute top-[30px] left-[50%] translate-x-[-50%]'></span>

                    <div className='w-[400px] h-full flex flex-col gap-[30px] justify-center bg-[#00000082] relative z-20 px-[50px]'>
                        <h5 className='text-[25px] relative z-10 kaushan'>{title}</h5>
                        <p className='text-[15px] text-[#AFAFAF] relative z-10'>{desc}</p>
                    </div>

                    <Image src={bg} width={960} height={550} alt="Tlo" className='w-full h-full absolute top-0 left-0 z-0' />
                    <div className='absolute w-full h-full top-0 left-0 z-1 bg-[#000000e0]'></div>
                    <span className='h-[2px] w-[50%] bg-[#E2B35080] z-10 block absolute bottom-[30px] left-[50%] translate-x-[-50%]'></span>

                    <Link href="#">
                        <div className='absolute bottom-[20px] right-[40px] flex gap-[15px]'>
                            <p className='text-[15px]'>Zobacz szczegóły</p>
                            <Image src={arrow} width={20} height={20} alt='Inkona strzałki' />
                        </div>
                    </Link>
                </div>

                <Image src={image} width={830} height={430} alt="Strona" className='absolute right-0 top-[50%] translate-y-[-50%] saturate-0' />
            </article>
        </section>
    )
}

export default PortfolioItem
import Image from 'next/image'


import strongman from '@public/assets/icons/home/strongman.png'
import order from '@public/assets/icons/home/order.png'
import business from '@public/assets/icons/home/business-group.png'
import climbing from '@public/assets/icons/home/climbing.png'
import increasing from '@public/assets/icons/home/increasing.png'

import lion1 from '@public/assets/images/mission/mission-1.webp'
import lion2 from '@public/assets/images/mission/mission-2.webp'
import lion3 from '@public/assets/images/mission/mission-3.webp'
import lion4 from '@public/assets/images/mission/mission-4.webp'
import lion5 from '@public/assets/images/mission/mission-5.webp'


const data = [
    {
        title: 'Indywidualizm',
        desc: 'Każdy klient to oddzielna przygoda, staramy się zadowolić każdego, kto nam zaufał. Robimy wszystko, żeby sprostać nawet najbardziej wymagającym',
        icon: strongman,
        bg: lion1,
    },
    {
        title: 'Nieszablonowość',
        desc: 'Większość firm przestała dbać o klienta, kopiując ciągle te same schematy i szablony. U nas tego nie doświadczysz, każda strona jest projektowana osobno, po ustaleniu szczegółów z klientem',
        icon: order,
        bg: lion2,
    },
    {
        title: 'Współpraca',
        desc: 'W naszej firmie klient nie jest kolejnym przystankiem do celu, u nas każdy jest tym najważniejszym, dlatego na każdym etapie prac, klient ma możliwość wprowadzenia zmian lub poprawek, za które nie musi nic dopłacać',
        icon: business,
        bg: lion3,
    },
    {
        title: 'Postęp',
        desc: 'Nasza firma nie zatrzymuje się i ciągle podąża za najnowszymi trendami technologicznymi. U nas jakość jest jednym z priorytetów, dlatego ciągle się rozwijamy',
        icon: climbing,
        bg: lion4,
    },
    {
        title: 'Nowoczesność',
        desc: 'Większość firm deklaruje używanie nowoczesnych technologii, pisząc o HTML, CSS czy Wordpress, które są bazą. U nas jest inaczej. Oczywiście, używamy wcześniej wspomnianych technologii, ale tworząc w tych faktycznie najnowszych',
        icon: increasing,
        bg: lion5,
    },

]

const Mission = () => {
    return (
        <article className='relative'>
            <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[20px]'>NASZA MISJA</h5>
            <p className='text-[16px] font-light'>Naszą misją jest przede wszystkim indywidualizm. Chcemy, aby każdy klient poczuł się wyjątkowo, dzięki możliwości dostosowania dosłownie wszystkiego. Tworzymy strony nie tylko piękne, ale i funkcjonalne, które pomagają naszym klientom rozwijać ich biznesy. Wierzymy w ciężką pracę, transparentność i dbałość o każdy detal.</p>

            <div className='flex flex-wrap justify-center gap-[15px] mt-[80px]'>
                {
                    data.map((item, index) => (
                        <div className='relative w-[370px] h-[370px] rounded-[10px] bg-gradient-to-t from-[#0C0C0C] to-[#10101000] flex justify-center items-center' key={index}>
                            <div className='absolute w-[320px] h-[320px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-no-repeat' style={{ backgroundImage: `url(${item.bg.src})` }}></div>
                            <div className=' relative z-20 bg-[#161616CC] w-[280px] h-[280px] rounded-[5px] p-[15px] flex flex-col justify-center items-start rect-cut'>
                                <h6 className='text-[20px] font-medium text-center absolute top-[30px] left-[50%] translate-x-[-50%]'>{item.title}</h6>
                                <p className='text-[13px] font-light text-center'>{item.desc}</p>
                            </div>

                            <Image src={item.icon} width={40} height={40} alt={`Ikona ${item.title}`} className='absolute bottom-[10px] right-[10px]' />
                        </div>
                    ))
                }
            </div>

            <hr className='w-[60%] m-auto mt-[80px] border-[#E2B35080]' />

            <div className='absolute top-[100px] left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none">
                    <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                </svg>


            </div>
        </article>
    )
}

export default Mission
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
            <h5 className='text-[20px] xl:text-[18px] lg:text-[15px] tracking-[3px] text-[#E2B350] mb-[20px]'>NASZA MISJA</h5>
            <p className='text-[16px] xl:text-[15px] lg:text-[13px] font-light'>Naszą misją jest przede wszystkim indywidualizm. Chcemy, aby każdy klient poczuł się wyjątkowo, dzięki możliwości dostosowania dosłownie wszystkiego. Tworzymy strony nie tylko piękne, ale i funkcjonalne, które pomagają naszym klientom rozwijać ich biznesy. Wierzymy w ciężką pracę, transparentność i dbałość o każdy detal.</p>

            <div className='flex flex-wrap justify-center gap-[15px] mt-[80px]'>
                {
                    data.map((item, index) => (
                        <div className='relative w-[370px] h-[370px] lg:w-[300px] lg:h-[300px] rounded-[10px] bg-gradient-to-t from-[#0C0C0C] to-[#10101000] flex justify-center items-center' key={index}>
                            <div className='absolute w-[320px] h-[320px] lg:scale-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-no-repeat' style={{ backgroundImage: `url(${item.bg.src})` }}></div>
                            <div className=' relative z-20 bg-[#161616CC] w-[280px] h-[280px] lg:w-[210px] lg:h-[210px] rounded-[5px] p-[15px] lg:p-[7px] flex flex-col justify-center items-start rect-cut'>
                                <h6 className='text-[20px] xl:text-[18px] lg:text-[15px] font-medium text-center absolute top-[30px] lg:top-[15px] left-[50%] translate-x-[-50%]'>{item.title}</h6>
                                <p className='text-[13px] lg:text-[11px] font-light text-center lg:mt-[15px]'>{item.desc}</p>
                            </div>

                            <Image src={item.icon} width={40} height={40} alt={`Ikona ${item.title}`} className='absolute bottom-[10px] right-[10px] lg:w-[30px] lg:h-[30px]' />
                        </div>
                    ))
                }
            </div>

            <hr className='w-[60%] m-auto mt-[80px] border-[#E2B35080]' />
        </article>
    )
}

export default Mission
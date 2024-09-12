import Image from 'next/image'


import strongman from '@public/assets/icons/home/strongman.png'
import order from '@public/assets/icons/home/order.png'
import business from '@public/assets/icons/home/business-group.png'
import climbing from '@public/assets/icons/home/climbing.png'
import increasing from '@public/assets/icons/home/increasing.png'

import lion1 from '@public/assets/images/mission/mission-1.webp'


const data = [
    {
        title: 'Indywidualizm',
        desc: 'Każdy klient to oddzielna przygoda, staramy się zadowolić każdego, kto nam zaufał',
        icon: strongman
    },
    {
        title: 'Nieszablonowość',
        desc: 'Większość firm przestała dbać o klienta, kopiując ciągle te same schematy i szablony. U nas tego nie doświadczysz, każda strona jest projektowana osobno, po ustaleniu szczegółów z klientem',
        icon: order
    },
    {
        title: 'Współpraca',
        desc: 'W naszej firmie klient nie jest tylko kolejnym przystankiem do celu, u nas każdy jest tym najważniejszym, dlatego na każdym etapie prac, klient ma możliwość wprowadzenia zmian lub poprawek, za które nie musi nic dopłacać',
        icon: business
    },
    {
        title: 'Postęp',
        desc: 'Nasza firma nie zatrzymuje się i ciągle podąża za najnowszymi trendami technologicznymi. U nas jakość jest jednym z priorytetów, dlatego ciągle się rozwijamy',
        icon: climbing
    },
    {
        title: 'Nowoczesność',
        desc: 'Większość firm deklaruje używanie nowoczesnych technologii, pisząc o HTML, CSS	czy Wordpress, które są bazą. U nas jest inaczej. Oczywiście, używamy wcześniej 	wspomnianych technologii, ale tworząc w tych faktycznie najnowszych',
        icon: increasing
    },
    
]

const Mission = () => {
  return (
    <article>
        <h5>NASZA MISJA</h5>
        <p>Naszą misją jest przede wszystkim indywidualizm. Chcemy, aby każdy klient poczuł się wyjątkowo, dzięki możliwości dostosowania dosłownie wszystkiego. Tworzymy strony nie tylko piękne, ale i funkcjonalne, które pomagają naszym klientom rozwijać ich biznesy. Wierzymy w ciężką pracę, transparentność i dbałość o każdy detal.</p>

        {
            data.map((item, index) => (
                <div className='relative w-[370px] h-[370px] rounded-[10px] bg-[#0C0C0C] flex justify-center items-center'>
                    <div className='absolute w-[320px] h-[320px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' style={{backgroundImage: `url(${lion1.src})`}}></div>
                    <div className=' relative z-20 bg-[#161616CC] w-[280px] h-[280px]'>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                    </div>

                    <Image src={item.icon} width={40} height={40} alt={`Ikona ${item.title}`} className='absolute bottom-[10px] right-[10px]'/>
                </div>
            ))
        }
    </article>
  )
}

export default Mission
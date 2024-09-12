import coopBg from '@public/assets/images/cooperate-bg.webp'


const Cooperate = () => {
  return (
    <article className='w-full h-[450px] flex flex-col items-center relative px-[170px] gap-[40px] justify-center bg-center' style={{backgroundImage: `url(${coopBg.src})`}}>
        <div className='z-10'>
            <p className='z-10 text-[#B8B8B8] font-light text-center'>WSPÓŁPRACUJ Z NAMI</p>
            <h5 className='text-[40px] font-semibold z-10 text-center'>Zawsze jesteśmy gotowi stworzyć <br /> dla Ciebie najlepszy produkt</h5>
        </div>
        <p className='z-10 text-[15px] font-extralight text-center'>Jeśli szukasz partnera, który pomoże Ci w stworzeniu wyjątkowej strony, aplikacji internetowej, aplikacji mobilnej lub innego projektu, skontaktuj się z nami. Jesteśmy gotowi, aby wspólnie z Tobą zrealizować nawet najbardziej ambitne pomysły.</p>
        <button className='text-[15px] z-10 tracking-[1.5px] bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] px-[30px] py-[15px] rounded-[5px]'>Napisz do nas</button>
        <div className='absolute w-full h-full bg-[#00000099] top-0 left-0'></div>
    </article>
  )
}

export default Cooperate
import React from 'react'

const Work = () => {
    return (
        <article className='flex gap-[120px] items-center'>
            <div className='flex-1'>
                <h5 className='text-[20px] tracking-[3px] text-[#E2B350] mb-[20px]'>CZYM DOKŁADNIE SIĘ ZAJMUJEMY?</h5>
                <p className='text-[16px] font-light mb-[40px]'>Naszym podstawowym zajęciem jest tworzenie stron oraz aplikacji internetowych, będących jednymi z najnowocześniejszych i odzianych w detale. Dodatkowo w naszej ofercie znajdziesz możliwość zamówienia strony wraz z prostą aplikacją mobilną, która jest tworzona na tych samych zasadach.</p>
                <p className='text-[16px] font-light'>Czy to wszystko? Otóż nie, oprócz tego pracujemy nad własnymi projektami, które można znaleźć w osobnej zakładce. Jesteśmy w stanie zaangażować się również w różnie inne customowe projekty.</p>
            </div>
            <div className='flex-1'>
                <div className='w-[600px] h-[600px] rounded-full border-[#272727] border-[1px] relative'>
                    <div className='absolute left-[50%] translate-x-[-50%] w-[300px] h-[300px] rounded-full bg-gradient-to-t from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] flex flex-col justify-center items-center gap-[10px]'>
                        <h6 className='text-[20px] font-extralight text-center'>Strony i aplikacje internetowe</h6>
                        <p className='text-[15px] font-light text-[#BCBCBC]'>Wszystkie rodzaje</p>
                    </div>
                    <div className='absolute left-[20px] top-[50%] translate-y-[-30%] w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] flex flex-col justify-center items-center gap-[10px]'>
                        <h6 className='text-[20px] font-extralight text-center'>Aplikacje mobilne</h6>
                        <p className='text-[15px] font-light text-[#BCBCBC]'>W pakiecie ze stroną</p>
                    </div>
                    <div className='absolute right-[20px] top-[50%] translate-y-[-30%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] flex flex-col justify-center items-center gap-[10px]'>
                        <h6 className='text-[20px] font-extralight text-center'>Własne projekty</h6>
                        <p className='text-[15px] font-light text-[#BCBCBC]'>Coś więcej niż strony</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Work
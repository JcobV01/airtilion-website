import React from 'react'

const Work = () => {
    return (
        <article className='flex gap-[120px] xl:gap-[70px] items-center relative lg:flex-col'>
            <div className='flex-1'>
                <h5 className='text-[20px] xl:text-[18px] lg:text-[15px] tracking-[3px] text-[#E2B350] mb-[20px]'>CZYM DOKŁADNIE SIĘ ZAJMUJEMY?</h5>
                <p className='text-[16px] xl:text-[15px] lg:text-[13px] font-light mb-[40px]'>Naszym podstawowym zajęciem jest tworzenie stron oraz aplikacji internetowych, będących jednymi z najnowocześniejszych i odzianych w detale. Dodatkowo w naszej ofercie znajdziesz możliwość zamówienia strony wraz z prostą aplikacją mobilną, która jest tworzona na tych samych zasadach.</p>
                <p className='text-[16px] xl:text-[15px] lg:text-[13px] font-light'>Czy to wszystko? Otóż nie, oprócz tego pracujemy nad własnymi projektami, które można znaleźć w osobnej zakładce. Jesteśmy w stanie zaangażować się również w różnie inne customowe projekty.</p>
            </div>
            <div className='flex-1 sm:w-full'>
                <div className='w-[600px] h-[600px] xl:w-[500px] xl:h-[500px] sm:w-[100%] sm:h-auto aspect-square rounded-full border-[#272727] border-[1px] relative'>
                    <div className='absolute left-[50%] translate-x-[-50%] w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] sm:w-[50%] sm:h-[50%] rounded-full bg-gradient-to-t from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] sm:px-[30px] flex flex-col justify-center items-center gap-[10px] sm:gap-[5px]'>
                        <h6 className='text-[20px] xl:text-[15px]  sm:text-[12px] font-extralight text-center'>Strony i aplikacje <br /> internetowe</h6>
                        <p className='text-[15px] xl:text-[13px]  sm:text-[10px] font-light text-[#BCBCBC] text-center'>Wszystkie rodzaje</p>
                    </div>
                    <div className='absolute left-[20px] top-[50%] translate-y-[-30%] w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] sm:w-[50%] sm:h-[50%] rounded-full bg-gradient-to-bl from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] sm:px-[30px] flex flex-col justify-center items-center gap-[10px] sm:gap-[5px]'>
                        <h6 className='text-[20px] xl:text-[15px]  sm:text-[12px] font-extralight text-center'>Aplikacje mobilne</h6>
                        <p className='text-[15px] xl:text-[13px]  sm:text-[10px] font-light text-[#BCBCBC] text-center'>W pakiecie ze stroną</p>
                    </div>
                    <div className='absolute right-[20px] top-[50%] translate-y-[-30%] w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] sm:w-[50%] sm:h-[50%] rounded-full bg-gradient-to-br from-[#E2B3504D] to-[#E2B35000] to-70% p-[10px] sm:px-[30px] flex flex-col justify-center items-center gap-[10px] sm:gap-[5px]'>
                        <h6 className='text-[20px] xl:text-[15px]  sm:text-[12px] font-extralight text-center'>Własne projekty</h6>
                        <p className='text-[15px] xl:text-[13px]  sm:text-[10px] font-light text-[#BCBCBC] text-center'>Coś więcej niż strony</p>
                    </div>
                </div>
            </div>

            <div className='absolute top-0 left-[50%] translate-x-[-50%] z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1533" viewBox="0 0 1864 1133" fill="none">
                    <path d="M2647.39 1089.59C2406.7 1157.58 2042.76 1145.41 1774.92 1024.24C1565.68 929.589 1342.08 787.24 1032.99 734.185C792.739 692.946 461.368 498.878 336.2 198.315C175.45 -187.693 40.9091 121.159 -133.685 85.247" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2647.39 1169.59C2406.7 1237.58 2042.76 1225.41 1774.92 1104.24C1565.68 1009.59 1342.08 867.24 1032.99 814.185C792.739 772.946 461.368 578.878 336.2 278.315C175.45 -107.693 40.9091 201.159 -133.685 165.247" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2647.39 1249.59C2406.7 1317.58 2042.76 1305.41 1774.92 1184.24C1565.68 1089.59 1342.08 947.24 1032.99 894.185C792.739 852.946 461.368 658.878 336.2 358.315C175.45 -27.693 40.9091 281.159 -133.685 245.247" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                    <path d="M2647.39 1349.59C2406.7 1417.58 2042.76 1405.41 1774.92 1284.24C1565.68 1189.59 1342.08 1047.24 1032.99 994.185C792.739 952.946 461.368 758.878 336.2 458.315C175.45 72.307 40.9091 381.159 -133.685 345.247" stroke="#E2B350" stroke-opacity="0.1" stroke-width="3" />
                </svg>

            </div>
        </article>
    )
}

export default Work
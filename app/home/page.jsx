import Footer from '@components/Footer'
import Header from '@components/Header'
import AboutUs from '@components/home/sections/AboutUs/AboutUs'
import Contact from '@components/home/sections/Contact/Contact'
import Cooperation from '@components/home/sections/Cooperation/Cooperation'
import Encourage from '@components/home/sections/Encourage/Encourage'
import Offer from '@components/home/sections/Offer/Offer'
import Opinion from '@components/home/sections/Opinion/Opinion'
import Portofolio from '@components/home/sections/Portfolio/Portofolio'
import HeaderBg from '@public/assets/images/mainHeader.webp'
import React from 'react'

const home = () => {
  return (
    <>
      <Header title="Budujemy przyszłość Twojej Marki w Internecie" subtitle="Nowoczesne strony i aplikacje internetowe dopasowane do Twoich potrzeb." img={HeaderBg} />
      <main className='flex flex-col relative mt-[-250px] gap-[200px] md:gap-[100px]'>
        <Encourage />
        <AboutUs />
        <Cooperation />
        <Offer />
        <Portofolio />
        <Opinion />
        <Contact />

        <Footer />
        <div className='absolute top-0 left-0 w-full h-full background'></div>

        {/* Sekcja o nas */}

        <div className='absolute top-[550px] 2xl:top-[400px] xl:top-[300px] lg:top-[700px] md:top-[550px] sm:top-[800px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1864 1849" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja o nas - nasza misja */}

        <div className='absolute top-[1300px] xl:top-[1400px] lg:top-[1600px] sm:top-[2000px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none" className='w-full'>
            <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja o nas - czym dokładnie się zajmujemy */}

        <div className='absolute top-[2300px] 2xl:top-[2600px] xl:top-[2400px] md:top-[3000px] sm:top-[3500px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1533" viewBox="0 0 1864 1133" fill="none" className='w-full'>
            <path d="M2647.39 1089.59C2406.7 1157.58 2042.76 1145.41 1774.92 1024.24C1565.68 929.589 1342.08 787.24 1032.99 734.185C792.739 692.946 461.368 498.878 336.2 198.315C175.45 -187.693 40.9091 121.159 -133.685 85.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1169.59C2406.7 1237.58 2042.76 1225.41 1774.92 1104.24C1565.68 1009.59 1342.08 867.24 1032.99 814.185C792.739 772.946 461.368 578.878 336.2 278.315C175.45 -107.693 40.9091 201.159 -133.685 165.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1249.59C2406.7 1317.58 2042.76 1305.41 1774.92 1184.24C1565.68 1089.59 1342.08 947.24 1032.99 894.185C792.739 852.946 461.368 658.878 336.2 358.315C175.45 -27.693 40.9091 281.159 -133.685 245.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2647.39 1349.59C2406.7 1417.58 2042.76 1405.41 1774.92 1284.24C1565.68 1189.59 1342.08 1047.24 1032.99 994.185C792.739 952.946 461.368 758.878 336.2 458.315C175.45 72.307 40.9091 381.159 -133.685 345.247" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja o nas - założyciele */}

        <div className='absolute hidden 2xl:block 2xl:top-[4200px]  left-[50%] translate-x-[-50%] z-[1] w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1864 1849" fill="none" className='w-full'>
            <path d="M-47.8027 147.746C141.849 34.4395 438.55 -32.2625 666.596 20.7691C844.743 62.1967 1038.67 143.96 1294.34 126.192C1493.07 112.381 1779.01 218.181 1906.63 464.961C2070.54 781.897 2153.18 472.074 2298.11 467.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 227.746C141.849 114.4395 438.55 47.7375 666.596 100.769C844.743 142.197 1038.67 223.96 1294.34 206.192C1493.07 192.381 1779.01 298.181 1906.63 544.961C2070.54 861.897 2153.18 552.074 2298.11 547.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 307.746C141.849 194.4395 438.55 127.738 666.596 180.769C844.743 222.197 1038.67 303.96 1294.34 286.192C1493.07 272.381 1779.01 378.181 1906.63 624.961C2070.54 941.897 2153.18 632.074 2298.11 627.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-47.8027 407.746C141.849 294.4395 438.55 227.738 666.596 280.769C844.743 322.197 1038.67 403.96 1294.34 386.192C1493.07 372.381 1779.01 478.181 1906.63 724.961C2070.54 1041.9 2153.18 732.074 2298.11 727.446" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja Współpraca */}

        <div className='absolute top-[5500px] 2xl:top-[5700px] lg:top-[6400px] md:top-[6800px] sm:top-[7500px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1849" viewBox="0 0 1920 1849" fill="none" className='w-full'>
            <path d="M2217.32 1007.42C2094.37 808.553 1838.69 590.847 1582.41 511.641C1382.21 449.766 1143.27 413.391 900.183 259.34C711.245 139.602 367.382 73.4967 99.5697 212.605C-244.377 391.26 -148.722 84.5441 -289.636 1.81794" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2265.47 1107.86C2142.52 908.989 1886.84 691.282 1630.56 612.076C1430.36 550.202 1191.41 513.827 948.333 359.776C759.395 240.038 415.531 173.932 147.719 313.041C-196.228 491.696 -100.572 184.9797 -241.486 102.25349" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2248.1 1207.34C2125.16 1008.469 1869.47 790.763 1613.2 711.557C1412.99 649.682 1174.05 613.307 930.968 459.256C742.029 339.518 398.166 273.4128 130.354 412.521C-213.593 591.176 -117.938 184.4602 -258.852 101.73395" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2233.34 1287.05C2110.4 1088.178 1854.71 870.472 1598.44 791.266C1398.23 729.391 1159.29 693.016 916.208 538.965C727.27 419.227 383.406 353.1217 115.594 492.23C-228.353 670.885 -132.697 364.1691 -273.611 281.44294" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja Oferta */}

        <div className='absolute top-[7200px] 2xl:top-[7400px] lg:top-[8000px] md:top-[8500px] sm:top-[9500px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="885" viewBox="0 0 1864 685" fill="none" className='w-full'>
            <path d="M2225.63 129.498C2018.15 21.7267 1687.02 -34.1963 1426.36 29.1186C1222.74 78.5794 998.911 169.79 711.229 162.071C487.625 156.071 158.468 275.518 -0.22103 532.213C-204.023 861.883 -279.058 549.482 -442.456 550.655" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2225.63 209.498C2018.15 101.7267 1687.02 45.8037 1426.36 109.1186C1222.74 158.579 998.911 249.79 711.229 242.071C487.625 236.071 158.468 355.518 -0.22103 612.213C-204.023 941.883 -279.058 629.482 -442.456 630.655" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2225.63 289.498C2018.15 181.7267 1687.02 125.8037 1426.36 189.1186C1222.74 238.579 998.911 329.79 711.229 322.071C487.625 316.071 158.468 435.518 -0.22103 692.213C-204.023 1021.88 -279.058 709.482 -442.456 710.655" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2225.63 369.498C2018.15 261.7267 1687.02 205.8037 1426.36 269.1186C1222.74 318.579 998.911 409.79 711.229 402.071C487.625 396.071 158.468 515.518 -0.22103 772.213C-204.023 1101.88 -279.058 789.482 -442.456 790.655" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja portfolio */}

        <div className='absolute top-[8000px] 2xl:top-[8700px] xl:top-[9000px] lg:top-[10500px] md:top-[11200px] sm:top-[11300px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1150" viewBox="0 0 1864 650" fill="none" className='w-full'>
            <path d="M2399.94 139.833C2194.53 28.1574 1864.52 -34.0171 1602.71 24.3574C1398.19 69.9589 1172.68 156.921 885.195 143.763C661.744 133.536 330.387 246.737 166.872 500.386C-43.1268 826.143 -112.241 512.379 -275.632 510.461" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2399.94 219.833C2194.53 108.157 1864.52 45.9829 1602.71 104.357C1398.19 149.959 1172.68 236.921 885.195 223.763C661.744 213.536 330.387 326.737 166.872 580.386C-43.1268 906.143 -112.241 592.379 -275.632 590.461" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2399.94 299.833C2194.53 188.157 1864.52 125.983 1602.71 184.357C1398.19 229.959 1172.68 316.921 885.195 303.763C661.744 293.536 330.387 406.737 166.872 660.386C-43.1268 986.143 -112.241 672.379 -275.632 670.461" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2399.94 379.833C2194.53 268.157 1864.52 205.983 1602.71 264.357C1398.19 309.959 1172.68 396.921 885.195 383.763C661.744 373.536 330.387 486.737 166.872 740.386C-43.1268 1066.14 -112.241 752.379 -275.632 750.461" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        <div className='absolute top-[9700px] 2xl:top-[10300px] lg:top-[11900px] md:top-[12200px] sm:top-[12500px] left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1196" viewBox="0 0 1864 1196" fill="none" className='w-full'>
            <path d="M2226.65 1194.39C2119.13 986.777 1880.69 750.316 1631.15 651.913C1436.21 575.041 1200.71 520.66 970.009 348.627C790.69 214.912 452.826 122.933 175.24 241.341C-181.259 393.412 -62.63 94.8287 -196.868 1.65952" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2226.65 1294.39C2119.13 1086.78 1880.69 850.316 1631.15 751.913C1436.21 675.041 1200.71 620.66 970.009 448.627C790.69 314.912 452.826 222.933 175.24 341.341C-181.259 493.412 -62.63 194.829 -196.868 101.66" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2226.65 1394.39C2119.13 1186.78 1880.69 950.316 1631.15 851.913C1436.21 775.041 1200.71 720.66 970.009 548.627C790.69 414.912 452.826 322.933 175.24 441.341C-181.259 593.412 -62.63 294.829 -196.868 201.66" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M2226.65 1494.39C2119.13 1286.78 1880.69 1050.32 1631.15 951.913C1436.21 875.041 1200.71 820.66 970.009 648.627C790.69 514.912 452.826 422.933 175.24 541.341C-181.259 693.412 -62.63 394.829 -196.868 301.66" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

        {/* Sekcja kontakt */}

        <div className='absolute top-[10900px] 2xl:top-[11500px] lg:top-[13200px] sm:top-[13500px] fold:hidden left-[50%] translate-x-[-50%] z-[1] w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1924" height="868" viewBox="0 0 1864 568" fill="none" className='w-full'>
            <path d="M-111.344 566.97C24.1409 392.47 276.293 222.47 508.015 188.97C689.033 162.8 899.415 168.47 1131.14 58.9701C1311.25 -26.1402 1616.09 -31.5299 1824.69 151.97C2092.6 387.637 2056.95 68.9701 2190.28 11.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 646.97C24.1409 472.47 276.293 302.47 508.015 268.97C689.033 242.8 899.415 248.47 1131.14 138.97C1311.25 53.8599 1616.09 48.4701 1824.69 231.97C2092.6 467.637 2056.95 148.97 2190.28 91.9701" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 726.97C24.1409 552.47 276.293 382.47 508.015 348.97C689.033 322.8 899.415 328.47 1131.14 218.97C1311.25 133.86 1616.09 128.47 1824.69 311.97C2092.6 547.637 2056.95 228.97 2190.28 171.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
            <path d="M-111.344 826.97C24.1409 652.47 276.293 482.47 508.015 448.97C689.033 422.8 899.415 428.47 1131.14 318.97C1311.25 233.86 1616.09 228.47 1824.69 411.97C2092.6 647.637 2056.95 328.97 2190.28 271.97" stroke="#E2B350" strokeOpacity="0.1" strokeWidth="3" />
          </svg>
        </div>

      </main>
    </>
  )
}

export default home
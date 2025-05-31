import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'

import getCityJsonLd from '@utils/getCityJsonLd'
import { citiesData, citiesList } from '@data/cities'
import areaImage from '@public/assets/images/area/area-bg.webp'

import CityComponent from '@components/area/CityComponent'
import WhyCity from '@components/area/WhyCity'
import SliderSection from '@components/area/Slider'
import ProcessCity from '@components/area/ProcessCity'
import OfferCity from '@components/area/OfferCity'
import CityPortfolio from '@components/area/CityPortfolio'
import CityFaq from '@components/area/faq/CityFaq'
import CustomCooperate from '@components/blog-singlePost/CustomCooperate'
import Footer from '@components/Footer'

export async function generateStaticParams() {
    return citiesList.map((city) => ({
        slug: `strony-internetowe-${city}`,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    const city = slug.replace(/^strony-internetowe-/, '');

    if (!citiesData[city]) {
        return {
            title: 'Nie znaleziono strony',
            description: 'Ta strona nie istnieje.',
        };
    }

    const data = citiesData[city];

    return {
        title: `${data.metaTitle} - Airtilion`,
        description: data.metaDescription,
        alternates: {
            canonical: `https://airtilion.com/strony-internetowe-${city}`
        }
    }
}

const page = ({ params }) => {
    const { slug } = params;

    const city = slug.replace(/^strony-internetowe-/, '');

    if (!citiesData[city]) {
        notFound();
    }

    const data = citiesData[city];

    const cityName = data.city;
    const jsonLd = getCityJsonLd(cityName, slug)

    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className='xl:h-auto w-full flex flex-col justify-end items-center gap-[128px] sm:gap-[64px] xl:pt-[150px] sm:pt-[200px]' >
                <Image src={areaImage} width={1920} height={1080} quality={75} alt="Obrazek tła" className='h-dvh w-full fixed top-0 left-0 object-cover object-left-top brightness-[0.5] blur-[5px]' loading='eager' />
                <CityComponent city={data.city} />
                <WhyCity cityName={data.city} inCity={data.inCity} fromCity={data.fromCity} cityImg={data.cityImg} />
                <SliderSection inCity={data.inCity} />
                <ProcessCity inCity={data.inCity} />
                <OfferCity fromCity={data.fromCity} inCity={data.inCity} />
                <CityPortfolio city={data.inCity} />
                <CityFaq data={data.accordion} city={data.city} />
                <section className='w-[1240px] 2xl:w-[960px] lg:w-[90%] mx-auto'>
                    <CustomCooperate />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default page
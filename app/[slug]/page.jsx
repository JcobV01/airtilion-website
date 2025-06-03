import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'

import getCityJsonLd from '@utils/getCityJsonLd'
import { citiesList } from '@data/citiesList'
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
    const citySlug = slug.replace(/^strony-internetowe-/, '');

    try {
        const module = await import(`@data/cities/${citySlug}.js`);
        const data = module[citySlug];

        if (!data) {
            return {
                title: 'Nie znaleziono strony',
                description: 'Ta strona nie istnieje.',
            };
        }

        return {
            title: `${data.metaTitle} - Airtilion`,
            description: data.metaDescription,
            alternates: {
                canonical: `https://airtilion.com/strony-internetowe-${citySlug}`
            }
        }
    } catch (error) {
        return {
            title: 'Nie znaleziono strony',
            description: 'Ta strona nie istnieje.',
        };
    }
}

const page = async ({ params }) => {
    const { slug } = params;
    const citySlug = slug.replace(/^strony-internetowe-/, '');

    if (!citiesList.includes(citySlug)) {
        notFound();
    }

    let data;
    try {
        const module = await import(`@data/cities/${citySlug}.js`);
        data = module[citySlug];
    } catch (error) {
        notFound();
    }

    const jsonLd = getCityJsonLd(data.city, slug)

    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className='xl:h-auto w-full flex flex-col justify-end items-center gap-[128px] sm:gap-[64px] xl:pt-[150px] sm:pt-[200px]' >
                <Image src={areaImage} width={1920} height={1080} quality={75} alt="Obrazek tła" className='h-dvh w-full fixed top-0 left-0 object-cover object-left-top brightness-[0.5] blur-[5px]' loading='eager' />
                <CityComponent header={data.header} city={data.city} />
                <WhyCity whyCity={data.whyCity} cityImg={data.img} city={data.city} />
                <SliderSection technology={data.technology} />
                <ProcessCity processCity={data.processCity} />
                <OfferCity offerCity={data.offerCity} city={data.city} />
                <CityPortfolio portfolio={data.portfolio} />
                <CityFaq faq={data.faq} />
                <section className='w-[1240px] 2xl:w-[960px] lg:w-[90%] mx-auto'>
                    <CustomCooperate />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default page
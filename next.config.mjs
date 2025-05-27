/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compress: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.airtilion.com',
            }
        ],
        domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
    },
    async redirects() {
        return [
            {
                source: '/offer',
                destination: '/oferta',
                permanent: true,
            },
            {
                source: '/offer/apps',
                destination: '/oferta/aplikacje-mobilne',
                permanent: true,
            },
            {
                source: '/offer/pricing',
                destination: '/oferta/darmowa-wycena',
                permanent: true,
            },
            {
                source: '/offer/services',
                destination: '/oferta/uslugi',
                permanent: true,
            },
            {
                source: '/offer/shops',
                destination: '/oferta/sklepy-internetowe',
                permanent: true,
            },
            {
                source: '/offer/websites',
                destination: '/oferta/strony-internetowe',
                permanent: true,
            },
            {
                source: '/area',
                destination: '/',
                permanent: true,
            },
            {
                source: '/area/:city',
                destination: '/strony-internetowe-:city',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: "/polityka-prywatnosci",
                destination: "/assets/files/polityka_prywatnosci_Airtilion.pdf"
            }
        ]
    }
};
export default nextConfig;
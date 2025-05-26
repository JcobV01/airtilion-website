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
                source: '/apps',
                destination: '/aplikacje-mobilne',
                permanent: true,
            },
            {
                source: '/pricing',
                destination: '/darmowa-wycena',
                permanent: true,
            },
            {
                source: '/services',
                destination: '/uslugi',
                permanent: true,
            },
            {
                source: '/shops',
                destination: '/sklepy-internetowe',
                permanent: true,
            },
            {
                source: '/websites',
                destination: '/strony-internetowe',
                permanent: true,
            },
        ]
    }
};
export default nextConfig;
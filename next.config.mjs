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
            domains: ['images.unsplash.com'],
    },
};
export default nextConfig;
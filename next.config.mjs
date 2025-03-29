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
    },
};
export default nextConfig;
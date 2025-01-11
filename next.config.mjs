/** @type {import('next').NextConfig} */
const nextConfig = {
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
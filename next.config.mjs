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
};
export default nextConfig;
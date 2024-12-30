/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    async headers() {
        return [
            {
                source: "/(.*)", // Dotyczy wszystkich ścieżek
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: `
                            default-src 'self';
                            script-src 'self' 'unsafe-eval';
                            style-src 'self';
                            font-src 'self' fonts.gstatic.com;
                            img-src 'self' data:;
                            connect-src 'self';
                            object-src 'none';
                            base-uri 'self';
                        `.replace(/\s{2,}/g, " ").trim()
                    }
                ]
            }
        ];
    }
};

export default nextConfig;

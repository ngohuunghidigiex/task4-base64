/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        return config;
    },
};

export default nextConfig;

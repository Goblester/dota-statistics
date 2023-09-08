/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'api.opendota.com',
            port: '',
            pathname: '/**',

        }]
    }
}

module.exports = nextConfig

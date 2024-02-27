/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nearxschool.s3.us-east-2.amazonaws.com',
            port: '',
            pathname: '/lp/**',
          },
        ],
      },
}

module.exports = nextConfig


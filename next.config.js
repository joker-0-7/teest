/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export'
}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "flagcdn.com",
          port: '',
          pathname: '/**',
        },
      ],
    },
  }

module.exports = nextConfig


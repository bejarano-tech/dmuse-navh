/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scarlet-brilliant-roundworm-590.mypinata.cloud'
      },
    ]
  }
}

module.exports = nextConfig

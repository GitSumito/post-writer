import { createContentlayerPlugin } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withContentlayer = createContentlayerPlugin({})

export default withContentlayer(nextConfig)

// next.config.js
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true, css: true }

export default withContentlayer(nextConfig);

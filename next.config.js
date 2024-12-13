const { createContentlayerPlugin } = require('next-contentlayer')

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
})

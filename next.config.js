
const path = require('path')

module.exports = {
  basePath: '/in',
  future: {
    webpack5: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': {page: '/In'},
      '/index': { page: '/In' },
      '/contact': { page: '/Contact' },
      '/about': { page: '/About' }
    }
  },
}
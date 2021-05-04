
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
      '/Index': { page: '/In' },
      '/Contact': { page: '/Contact' },
      '/About': { page: '/About' }
    }
  },
}
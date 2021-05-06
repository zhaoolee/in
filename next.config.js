
const path = require('path')

module.exports = {
  basePath: '/in',
  future: {
    webpack5: true,
  },
  images: {
    loader: 'imgix',
    path: 'https://v2fy.com/',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': {page: '/In'},
      '/index': { page: '/In' },
      '/index.html': { page: '/In' },

      '/contact': { page: '/Contact' },
      '/contact.html': { page: '/Contact' },
      
      '/about': { page: '/About' },
      '/about.html': { page: '/About' }
    }
  },
}
// 这个文件需要在node.js中运行，需要遵循commonjs规范，无法使用import

// const dim = require('../utils/dim')
module.exports = {
  env: process.env.NODE_ENV,
  vendors: ['react', 'react-dom', 'moment', 'lodash', 'axios', '@cspire/cbd-reset/dist/reset.less'],
  responsive: {
    unitToConvert: 'px',
    viewportWidth: 750,
    unitPrecision: 5,
    propList: ['*'],
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1,
    mediaQuery: false,
    replace: true,
    exclude: [],
    landscape: false,
    landscapeUnit: 'vw',
    landscapeWidth: 750
  },
  proxy: {
    '/api': {
      // mock
      target: 'https://szjsc.puercitybrain.com.cn',
      // pathRewrite: { '^/api': '' },
      changeOrigin: true,
    }
  }
}

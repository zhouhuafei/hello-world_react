// https://github.com/dilanx/craco
const sassResourcesLoader = require('craco-sass-resources-loader')
const svgSpriteLoader = require('craco-plugin-svg-sprite')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            // px2vw
            ['postcss-px-to-viewport-8-plugin', { viewportWidth: 375 }]
          ]
        }
      }
    }
  },
  plugins: [
    // svg-sprite-loader会把被引入的svg文件，塞到一个个symbol标签中，合成一个大的svg标签，并插入到body标签中。
    // 封装SvgIcon组件时，在svg标签的子元素use标签上，给xlinkHref属性附加symbol标签的id，即可正常显示出对应的svg图标。
    {
      plugin: svgSpriteLoader,
      options: {
        include: resolve('./src/icons'),
        compress: true,
        svgoConfig: {},
        spriteLoaderConfig: {},
        svgPrefixName: 'icon'
      }
    },
    // 共享scss变量
    {
      plugin: sassResourcesLoader,
      options: { resources: ['index'].map(v => `./src/scss/config/${v}.scss`) }
    }
  ]
}

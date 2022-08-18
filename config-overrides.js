// https://github.com/timarney/react-app-rewired
// https://github.com/arackaf/customize-cra

const {
  addWebpackAlias,
  addWebpackModuleRule,
  addPostcssPlugins,
  adjustStyleLoaders,
  override
} = require('customize-cra')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: function (config, env) {

    override(
      // alias
      addWebpackAlias({ '@': resolve('./src') }),
      // svg-sprite-loader会把被引入的svg文件，塞到一个个symbol标签中，合成一个大的svg标签，并插入到body标签中。
      // 封装SvgIcon组件时，在svg标签的子元素use标签上，给xlinkHref属性附加symbol标签的id，即可正常显示出对应的svg图标。
      addWebpackModuleRule({
        test: /\.svg$/,
        include: [resolve('./src/icons')],
        use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }]
      }),
      // px2vw
      addPostcssPlugins([require('postcss-px-to-viewport')({ viewportWidth: 375 })]), // ...TODO 无效
      // 共享scss变量
      adjustStyleLoaders(rule => {
        if (rule.test.toString().includes('scss')) {
          rule.use.push({
            loader: require.resolve('sass-resources-loader'),
            options: { resources: ['index'].map(v => `./src/scss/config/${v}.scss`) }
          })
        }
      })
    )(config, env)

    return config
  }
}

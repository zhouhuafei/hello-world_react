// https://github.com/timarney/react-app-rewired
// https://github.com/arackaf/customize-cra

const {
  override,
  adjustStyleLoaders
} = require('customize-cra')

module.exports = {
  webpack: function (config, env) {

    override(
      // 共享scss变量
      adjustStyleLoaders(rule => {
        if (rule.test.toString().includes('scss')) {
          rule.use.push({
            loader: require.resolve('sass-resources-loader'),
            options: {
              resources: ['index'].map(v => `./src/scss/config/${v}.scss`)
            }
          })
        }
      })
    )(config, env)

    return config
  }
}

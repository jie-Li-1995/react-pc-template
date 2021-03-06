const { override, fixBabelImports, addLessLoader, addWebpackAlias, addBabelPlugins } = require('customize-cra')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  // useEslintRc('.eslintrc'),
  addBabelPlugins(
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addWebpackAlias({
    '@': resolve('src')
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#0384a8' }
  })
)

const { override, fixBabelImports, addPostcssPlugins } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
   addPostcssPlugins([require('postcss-px-to-viewport')({
    viewportWidth: 414,
    viewportUnit: 'vw',
    minPixelValue: 1,
    mediaQuery: false,
    selectorBlackList: [],
   })])
 );
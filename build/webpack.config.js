const plugins = require('./plugins')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileLoader = require('./rules/fileLoader')
const { resolve } = require('./utils')
const { FILE_EXTENSIONS, isDev } = require('./constants')
const optimization = require('./optimization')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: isDev ? '[name].js' : 'js/[name].[chunkhash].js',
        chunkFilename: isDev ? '[name].js' : 'js/[name].[id].[chunkhash].js'
    },
    resolve: {
        extensions: FILE_EXTENSIONS,
        // 优化模块搜索目录, src优先其次node_modules
        modules: [resolve('src'), resolve('node_modules')],
        alias: {
            '@components': resolve('src/components'),
            '@svg': resolve('src/assets/svg'),
            '@constants': resolve('src/constants'),
            '@services': resolve('src/services')
        }
    },
    module: {
        rules: [...jsRules, ...styleRules, ...fileLoader]
    },
    plugins: [...plugins],
    optimization,
    devtool: isDev ? 'eval-source-map' : undefined
    // 也可以采用externals减少common包大小, 不过在本项目中未采用
    // externals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     axios: 'axios'
    // }
}

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { cacheLoader, threadLoader } = require('./loaders')
const { isDev } = require('./../constants')

const loader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader

module.exports = [
    {
        test: /\.scss$/,
        use: [
            loader,
            cacheLoader,
            threadLoader(2),
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            'sass-loader'
        ]
    },
    {
        // 用于antd按需加载
        test: /\.less$/,
        use: [
            loader,
            cacheLoader,
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    }
]

const { resolve } = require('./../utils')

module.exports = [
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        include: resolve('src')
    }
]

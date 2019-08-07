const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx']

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    FILE_EXTENSIONS,
    isDev
}

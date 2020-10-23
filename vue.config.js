module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '中華小工具'
                return args
            })
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/develop_return/' : './'
}
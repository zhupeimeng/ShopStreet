module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                "components": '@/components',
                'network': '@/network',
                'view': '@/views',
                'common': '@/common'
            }
        }
    }
}
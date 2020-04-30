module.exports =
{
    mode: "development",
    module: {
        rules: [{
            test:/\.js$/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        contentBase: 'dist',
        port: 3000
    }
}
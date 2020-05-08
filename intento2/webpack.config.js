module.exports =
{
    mode: "development",
    module: {
        rules: [{
            test:/\.jsx?$/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        contentBase: 'dist',
        port: 3000,
        overlay: true
    },
}
var webpack = require('webpack')

var config = {
    entry: './src/main.js',
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference 
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime'] //disable automatic per-file runtime injection in babel
                }
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    config.devtool = '#source-map'
}

module.exports = config
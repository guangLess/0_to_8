//webpeck.config.js

const path = require('path')

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: [/\.wexbim$/, /\.docx$/, /\.csv$/, /\.mp4$/, /\.xlsx$/, /\.doc$/, /\.avi$/, /\.webm$/, /\.mov$/, /\.mp3$/, /\.pdf$/],
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'url-loader?limit=200000',
                ],
            },
            {
                test: /\.jsx\.html$/,
                exclude: /node_modules/,
                use: [
                  'babel!react-pure-html-component',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                ],
            },
            
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.jsx.html'],
        modules: [
          path.join(__dirname, 'node_modules'),
        ],
      },
    //   plugins: [
    //     new webpack.DefinePlugin({
    //       'process.env.NODE_ENV': JSON.stringify('production'),
    //     }),
    //   ], 
}

module.exports = config
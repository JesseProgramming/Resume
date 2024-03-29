const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        //COMMENT THIS OUT ON BUILD
        //publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|jpe?g|gif|ico|pdf)$/i,
                dependency: { not: ['url'] },
                loader: 'file-loader',

              },
              {
                test: /\.html$/i,
                loader: "html-loader",
              },
              
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    /*
    devServer: {
        //....//
        static: {                               
          directory: path.join(__dirname, './'),  
          watch: true
        }
     },
     */
}
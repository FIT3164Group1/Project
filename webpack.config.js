const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
    // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    // const ESLintPlugin = require('eslint-webpack-plugin')

const webpackConfig = {
    mode: 'development',
    target: ['web'],
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Gastrointestinal Cancer Classifier',
            template: path.resolve(__dirname, './src/html/index.html'), // index file
            filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({ filename: "styles.css" }),
        // new ESLintPlugin({
        //     files: 'src/**/*.js',
        // })
    ],
    devServer: {
        watchFiles: [path.resolve(__dirname, './dist'), path.resolve(__dirname, './')],
        liveReload: true,
        open: true,
        compress: true,
        // hot: true,
        port: 8080,

    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, 'src/js'),
            },
            // CSS
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/css'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            // Images
            {
                test: /\.(png|svg|jpg|jpeg|gif|)$/i,
                type: 'asset/resource',
            }
        ],
    },

}

module.exports = webpackConfig
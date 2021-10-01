const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const ESLintPlugin = require('eslint-webpack-plugin')

const webpackConfig = {
  mode: "development",
  // target: ['web'],
  entry: {
    index: path.resolve(__dirname, "./src/pages/index/index.js"),
    about: path.resolve(__dirname, "./src/pages/index/index.js"),
    contact: path.resolve(__dirname, "./src/pages/index/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
    chunkFormat: "commonjs",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home | Gastro-intestinal Cancer Classifier ",
      template: path.resolve(__dirname, "./src/pages/index.html"), // index file
      filename: "index.html", // output file
      chunks: ["index", "vendor"],
    }),
    new HtmlWebpackPlugin({
      title: "About | Gastro-intestinal Cancer Classifier",
      template: path.resolve(__dirname, "./src/pages/index.html"), // index file
      filename: "about.html", // output file
      chunks: ["about", "vendor"],
    }),
    new HtmlWebpackPlugin({
      title: "Contact Us | Gastro-intestinal Cancer Classifier",
      template: path.resolve(__dirname, "./src/pages/index.html"), // index file
      filename: "contact.html", // output file
      chunks: ["contact", "vendor"],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    // new BundleAnalyzerPlugin(),
    // new ESLintPlugin({
    //     files: 'src/**/*.js',
    // })
  ],
  devServer: {
    watchFiles: [
      path.resolve(__dirname, "./dist"),
      path.resolve(__dirname, "./"),
    ],
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
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, "src"),
      },
      // CSS
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src/css"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif|)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /node_modules/,
  //         chunks: "all",
  //         name: "vendor",
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
};

module.exports = webpackConfig;

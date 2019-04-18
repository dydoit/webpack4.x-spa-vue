const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizationCss = require('optimize-css-assets-webpack-plugin')
const prodConfig =  {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({})
  ],
  optimization:{
    usedExports: true,
    minimizer: [new optimizationCss({})]
  }
}
module.exports = merge(prodConfig, baseConfig)

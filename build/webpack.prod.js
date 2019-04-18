const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const prodConfig =  {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../index.html')
    }),
    new CleanWebpackPlugin()
  ]
}
module.exports = merge(baseConfig, prodConfig)

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: resolve('dist'),
    filename: process.env.NODE_ENV==='production'?'[name].[contenthash].js':'[name].js'
  },
  module: {
    rules:[
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options:{
          name: '[name].[ext]',
          limit: 10240,
          outputPath:'images/'
        }  
      },
      {
        test: /\.(eot|ttf|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
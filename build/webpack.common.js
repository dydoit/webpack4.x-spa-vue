const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].js'
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
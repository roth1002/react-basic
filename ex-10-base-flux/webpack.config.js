var webpack = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',

  entry: './src/mainApp',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle-[hash].js'
  },

  module: {
    loaders: [

      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'babel-loader?stage=0', exclude: [/node_modules/, /vendor/] },
      { test: /\.js$/, loader: 'babel-loader?stage=0', exclude: [/node_modules/, /vendor/] }
    ]
  },
  resolve: {
      extensions: [ '', '.js', '.jsx', '.css' ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin()
  ]
}

var webpack = require('webpack')


module.exports = {
  devtool: 'eval-source-map',

  entry: './src/mainApp',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.[hash].js'
  },

  module: {
    loaders: [

      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'babel-loader?stage=0' },
      { test: /\.js$/, loader: 'babel-loader?stage=0' }
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
    })
  ]
}

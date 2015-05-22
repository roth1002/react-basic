var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './client/js/index.jsx',
    newpost: './client/js/newpost.jsx'
  },
  output: {
    // __dirname is the path of webpack.js
    path: __dirname + '/../build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap!postcss-loader'
        )
      }
    ]
  },
  plugins: [new ExtractTextPlugin('client.css')],
  postcss: [require('autoprefixer-core'), require('csswring')({map: true})],
  debug: true,
  devtool: 'source-map'
}

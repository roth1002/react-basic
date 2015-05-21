module.exports = {
  entry: {
    index: './client/js/index.jsx'
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
      }
    ]
  }
}

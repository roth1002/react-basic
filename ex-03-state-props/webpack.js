module.exports = {
  entry: {
    app: './app.jsx'
  },
  output: {
    // __dirname is the path of webpack.js
    path: __dirname,
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

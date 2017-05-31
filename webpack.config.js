const path = require('path')
const fs = require('fs')
const net = require('net')

module.exports = {
  entry: "./public/javascripts/src/myapp.jsx",
  output: {
    path: path.resolve(__dirname, 'public/javascripts/build'),
    filename: "myapp.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          'options': {
            presets: ['es2015', 'react']
          }
        }],
        exclude: /node_modules/
      }
    ]

  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
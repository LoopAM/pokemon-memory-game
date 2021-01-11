const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules|dist/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules|dist/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

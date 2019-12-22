const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('public', 'scripts', 'app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('public'),
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  // Most important
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
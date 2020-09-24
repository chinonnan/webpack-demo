const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'XDML - 写代码啦',
      template: 'src/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader',] // compiles Styl to CSS
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass'),
            },
          },
          // 'sass-loader',
        ],
      }
    ]
  }
};








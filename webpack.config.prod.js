const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    })
  ],
  module: {
    rules: [
      ...base.module.rules,

      {
        test: /\.css$/i,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
          },
          'css-loader',
        ],

        // //开发环境
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
};








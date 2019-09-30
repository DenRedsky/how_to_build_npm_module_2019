const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve('src', 'index.js'),
    button: path.resolve('src', 'button', 'index.jsx'),
    rocketButton: path.resolve('src', 'rocketButton', 'index.jsx')
  },
  output: {
    filename: ({ chunk }) => chunk.name === 'main' ? 'index.js' : '[name]/index.js',
    path: path.resolve('lib'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.styl', '.js']
  },
  externals: [
    'react',
    'classnames',
    'classnames/bind'
  ],
  devtool: false,
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    modules: false,
    performance: true,
    hash: false,
    version: false,
    timings: true,
    warnings: true,
    children: false
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.styl$/,
        use: [
          MiniCss.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          'stylus-loader'
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCss({ moduleFilename: ({ name }) => name === 'main' ? 'index.css' : '[name]/index.css' }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: {
        zindex: false,
        discardComments: { removeAll: true }
      }
    })
  ]
};

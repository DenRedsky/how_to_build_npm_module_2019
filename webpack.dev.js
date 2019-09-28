const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const stats = {
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
};

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('demo', 'index.jsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.styl', '.js']
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    stats,
    port: 5000
  },
  stats,
  module: {
    rules: [
      {
        test: /\.jsx/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('demo', 'index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

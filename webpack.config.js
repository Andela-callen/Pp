const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    app: './client/src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: devMode ? '[name].js' : '[name].[hash].js',
  },
  mode: 'development',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      // inject: false, // checkout inject
      hash: true,
      template: './client/src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        FACEBOOK_URL: JSON.stringify(process.env.FACEBOOK_URL),
        GOOGLE_URL: JSON.stringify(process.env.GOOGLE_URL),
        TWITTER_URL: JSON.stringify(process.env.TWITTER_URL),
        LINKEDIN_URL: JSON.stringify(process.env.LINKEDIN_URL),
        GITHUB_URL: JSON.stringify(process.env.GITHUB_URL),
        IG_URL: JSON.stringify(process.env.IG_URL),
        GMAIL_ACCT: JSON.stringify(process.env.GMAIL_ACCT),
        YAHOO_EMAIL: JSON.stringify(process.env.YAHOO_EMAIL),
        SENDGRID_API_KEY: JSON.stringify(process.env.SENDGRID_API_KEY),
        PHONE: JSON.stringify(process.env.PHONE),
        MAILTO: JSON.stringify(process.env.MAILTO),
        GITHUB_NAME: JSON.stringify(process.env.GITHUB_NAME),
        GITHUB_ACESS_TOKEN: JSON.stringify(process.env.GITHUB_ACESS_TOKEN),
      }
    }),
    new Dotenv({
      path: './.env'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // fallback: 'file-loader'
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name].[ext]'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.scss'],
  }
};

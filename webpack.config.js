const path = require('path');
const webpack = require('webpack');
const minJSON = require('jsonminify');


const plugins = {
  progress: require('webpackbar'),
  clean: require('clean-webpack-plugin'),
  extractText: require('extract-text-webpack-plugin'),
  sync: require('browser-sync-webpack-plugin'),
  html: require('html-webpack-plugin'),
  copy: require('copy-webpack-plugin'),
  sri: require('webpack-subresource-integrity'),
  miniCssExtractPlugin: require('mini-css-extract-plugin'),
  optimizeCss: require('optimize-css-assets-webpack-plugin'),
  cleanWebpackPlugin: require('clean-webpack-plugin'),
  uglifyJsPlugin: require('uglifyjs-webpack-plugin'),
  dotenv: require('dotenv-webpack')
};

module.exports = (env = {}, argv) => {
  const isProduction = argv.mode === process.env.NODE_ENV;

  const config = {
    context: path.resolve(__dirname, ''),

    entry: {
      polyfill: 'babel-polyfill',
      app: [
        './client/src/styles/style.scss',
        './client/src/index.js']
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: !isProduction ? '[name].js' : '[name].[hash].js',
      chunkFilename: !isProduction ? '[name].js' : '[name].[hash].js',
      crossOriginLoading: 'anonymous'
    },

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },

    module: {
      rules: [
        {
          test: /\.(s[ac]ss)$/,
          use: plugins.extractText.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: !isProduction
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: !isProduction,
                  plugins: (() => {
                    return isProduction ? [
                      require('autoprefixer')({
                        browsers: ['last 2 versions']
                      }),
                      require('cssnano')({
                        discardComments: {
                          removeAll: true
                        }
                      })
                    ] : [];
                  })()
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  outputStyle: 'expanded',
                  sourceMap: !isProduction
                }
              }
            ]
          })
        },
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          exclude: /fonts/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                publicPath: '..' // use relative urls
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: !isProduction,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                }
              }
            }
          ]
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          exclude: /images/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts/' // use relative urls
            }
          }]
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true,
              removeScriptTypeAttributes: true,
              removeStyleTypeAttributes: true
            }
          },
        }
      ]
    },

    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      contentBase: path.join(__dirname, 'src'),
      port: 8080,
      overlay: {
        warnings: true,
        errors: true
      },
      quiet: true,
      // open: true
    },

    plugins: (() => {
      const common = [
        new plugins.cleanWebpackPlugin('dist', {}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new plugins.miniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: !isProduction ? '[name].css' : '[name].[hash].css',
          chunkFilename: !isProduction ? '[id].css' : '[id].[hash].css',
        }),
        new plugins.extractText({
          filename: !isProduction ? '[name].css' : '[name].[hash].css'
        }),
        new plugins.html({
          hash: true,
          template: './client/src/index.html',
          filename: 'index.html',
          minify: {
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          }
        }),
        new plugins.progress({
          color: '#5C95EE'
        }),
        new plugins.dotenv({
          path: './.env'
        })
      ];

      const production = [
        new plugins.clean(['dist']),
        new plugins.copy([
          {
            from: 'data/**/*.json',
            // to: '',
            transform: (content) => {
              return minJSON(content.toString());
            }
          }
        ]),
        new plugins.sri({
          hashFuncNames: ['sha384'],
          enabled: true
        }),
        new plugins.optimizeCss(),
        new plugins.uglifyJsPlugin({
          uglifyOptions: {
            mangle: {
              keep_fnames: true,
            },
          },
        })
      ];

      const development = [
        new plugins.sync(
          {
            host: 'localhost',
            port: 9090,
            proxy: 'http://localhost:8080/'
          },
          {
            reload: false
          }
        )
      ];

      return isProduction
        ? common.concat(production)
        : common.concat(development);
    })(),

    devtool: (() => {
      return isProduction
        ? '' // 'hidden-source-map'
        : 'source-map';
    })(),

    resolve: {
      extensions: ['.jsx', '.js', '.scss'],
      modules: [path.resolve(__dirname, 'client'), 'node_modules']
    }
  };

  return config;
};

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      chunkFilename: '[id].js',
      publicPath: ''
    },
    resolve: {
      alias: {
        '@pages': path.join(__dirname, './src/pages'),
        '@components': path.join(__dirname, './src/components'),
        '@routers': path.join(__dirname, './src/routers'),
        '@redux': path.join(__dirname, './src/redux'),
        '@service': path.join(__dirname, './src/service'),
        '@session': path.join(__dirname, './src/session'),
        '@utils': path.join(__dirname, './src/utils'),
        '@wiki-contents': path.join(__dirname, './src/static/wiki-contents'),
        '@containers': path.join(__dirname, './src/containers'),
        '@assets': path.join(__dirname, './src/assets'),
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            { 
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                },
                sourceMap: true
              }
            },
            { 
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({})
                ]
              }
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
    ],
    devtool: isProduction ? 'source-map' :'eval-cheap-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    }
  }
};
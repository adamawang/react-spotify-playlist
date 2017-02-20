const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/');

const loaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'sass-loader'
  }
]

const config = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:5000',
    // 'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/client/index.jsx'),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            options: {
              plugins: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                loader: loaders,
              }),
            }
          },
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;

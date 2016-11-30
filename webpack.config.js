let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

let cssExtractor = new ExtractTextPlugin("bundle.css")
let LiveReloadPlugin = require('webpack-livereload-plugin');

const config = module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: cssExtractor.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(js|es6)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[name]-[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    cssExtractor,
    new HtmlWebpackPlugin({ template: 'src/index.pug' }),
    new LiveReloadPlugin({ appendScriptTag: true })
  ]
};

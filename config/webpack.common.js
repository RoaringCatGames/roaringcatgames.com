var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

var extractSCSS = new ExtractTextPlugin('css/[name].css', {allChunks: true});

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': ['./src/vendor.ts', './src/theme/vendor.scss' ],
    'app': [ './src/theme/main.scss', './src/main.ts' ]           
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
      },    
      {
        test: /\.scss$/,        
        loader: extractSCSS.extract(['css?sourceMap', 'postcss', 'sass'])
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url'
      }    
    ]
  },
  postcss: function () {
    return [      
      require('autoprefixer')
    ];
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    extractSCSS,

    new CopyWebpackPlugin([
      {context: "./src/assets", from: "**/*", to:"/" }
    ])
  ]
};
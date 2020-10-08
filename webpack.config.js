const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: "development",
  // mode: "production", 
  optimization: {
    minimizer: [ new OptimizeCSSAssetsPlugin({}) ],
  },
  plugins: [ new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }) ],

  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js' 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
}
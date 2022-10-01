const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
//   devtool: 'inline-source-map',
//    devServer: {
//     contentBase: './dist',
//   },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
 plugins: [new HtmlWebpackPlugin({
  title: 'quan',
  template: 'src/assets/index.html'
})],
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
},
};


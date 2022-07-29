const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, '..', 'src')
console.log(defaultInclude);
module.exports = env => {
  return merge(base(env), {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [{ loader: 'babel-loader' }],
          include: defaultInclude
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
          include: defaultInclude
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
          include: defaultInclude
        }
      ],
    },
    entry: {
      main: "./src/main.js",
      main_app: "./src/main.jsx"
    },

    plugins: [
      new HtmlWebpackPlugin(),
    ],
    
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../app")
    },

    resolve: {
      extensions: ["", ".js", ".jsx", ".es6"]
    }
  });
};

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Credit to Markus Englund for the boilerplate for this extracted component
// https://github.com/markusenglund/react-npm-component-starter

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "docs"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        include: path.resolve('src')
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[local]",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [
                  autoprefixer({ browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ]}),
                  require('postcss-import'),
                  require('postcss-mixins'),
                  require('postcss-nested'),
                ];
              }
            }
          }
        ],
      },
      {
        test: /\.jpg$|\.gif$|\.png$|\.woff$|\.woff2$|\.ttf$|\.svg$|\.eot$|\.wav$|\.mp3$|\.bin$/,
        loader: 'url-loader',
        query: {
          name: '[name].[ext]?[hash:4]',
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dev"),
    host: "0.0.0.0",
    port: 8000,
    stats: "minimal"
  }
};

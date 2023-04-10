const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "./src/client/main.js"),
  mode: isDevelopment ? "development" : "production",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "PenPal",
      template: path.resolve(__dirname, "./src/client/main.html"),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      PenPal: "penpal/client.js", // Relative to './src/client' root
      Plugins: "plugins-loader.js", // Relative to '../plugins'
    },
    roots: [path.resolve("."), path.resolve("../plugins")],
    modules: [
      path.resolve(__dirname, "./src/client"),
      path.resolve(__dirname, "../plugins"),
      path.resolve(__dirname, "./node_modules"),
    ],
  },
};

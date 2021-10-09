const path = require("path");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    static: path.resolve(__dirname, "./dist"),
    port: 9000,
    hot: true,
  },
});

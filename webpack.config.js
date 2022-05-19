const defaultConfig = require("@wordpress/scripts/config/webpack.config")
const path = require("path")

module.exports = {
  ...defaultConfig,
  entry: {
    block: "./src/block/index.js",
    script: "./src/scripts/index.js",
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].build.js",
  },
}

"use strict";

const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const babelLoader = {
  loader: "ts-loader",
  test: /.tsx?$/,
  exclude: /node_modules/,
};

module.exports = [];

const baseConfig = {
  output: {
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [babelLoader],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
};

module.exports.push(baseConfig);

if (isProduction) {
  module.exports.push(
    Object.assign({}, baseConfig, {
      output: {
        filename: "main.min.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2",
      },
      optimization: {
        minimize: true,
      },
      module: {
        rules: [babelLoader],
      },
    })
  );
}

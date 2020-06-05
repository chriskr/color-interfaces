'use strict';

const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = [];

const baseConfig = {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
};

module.exports.push(baseConfig);

if (isProduction) {
  module.exports.push(
    Object.assign({}, baseConfig, {
      optimization: {
        minimize: true,
      },
    })
  );
}

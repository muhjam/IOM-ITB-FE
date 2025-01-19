const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    devServer: {
      host: '195.110.58.17',
      port: 8000,
      allowedHosts: 'all',
    },
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],
  },
};

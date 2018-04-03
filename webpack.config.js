const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'todo-app-bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
  };
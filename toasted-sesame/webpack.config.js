const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace with your output directory
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

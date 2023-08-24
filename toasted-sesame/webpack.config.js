const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'), // Replace with your output directory
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader
        },
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Apply this rule to image files
        type: 'asset/resource', // Use asset/resource to handle images
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Apply this rule to font files
        type: 'asset/resource', // Use asset/resource to handle fonts
      },
    ],
  },
};

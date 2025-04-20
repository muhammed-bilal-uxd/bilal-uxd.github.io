const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Set your entry point
  entry: "./src/index.ts", // change to './src/index.js' if not using TypeScript

  // Define where to output the bundled files
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Automatically clean the dist folder before each build
  },

  // Resolve file extensions (e.g., for TypeScript and JS)
  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      // Rule for TypeScript files
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // Rule for CSS files
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into a separate file
          "css-loader", // Translates CSS into CommonJS
        ],
      },
    ],
  },

  plugins: [
    // Plugin to handle the HTML file
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use your HTML file as a template
    }),
    // Plugin to extract CSS into its own file
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" }, // Copies everything from 'public' to the output folder
      ],
    }),
  ],

  mode: "development", // Change to 'production' for production builds
};

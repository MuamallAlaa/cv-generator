const path = require("path");

module.exports = {
  entry: "/home.ts",
  output: {
    filename: "home.js",
    path: path.resolve(__dirname, "public/js"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

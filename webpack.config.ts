import * as path from "path"

import * as webpack from "webpack"

import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"


const config: webpack.Configuration = {
  mode: "development",
  entry: {
    "background": "./src/background/index.ts",
    "contents": "./src/contents/index.ts",
    "options": "./src/options/index.tsx",
    "popup": "./src/popup/index.tsx",
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/options/index.html",
      filename: "options.html",
      chunks: ["options"], // 他の Entry point の JS が inject されないようにする
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/popup/index.html",
      filename: "popup.html",
      chunks: ["popup"],
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
}

export default config;

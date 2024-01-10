const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE.ENV !== "prodution";

module.exports = {
  mode: isDevelopment ? "development" : "prodution",

  // Para ver erros no console de maneira mais limpa
  devtool: isDevelopment ? "eval-source-map" : "source-map",

  // entry: Dizendo qual e o arquivo inicial da aplicação
  entry: path.resolve(__dirname, "src", "index.tsx"),

  // criando a pasta e o arquivo bundle.js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    //tipos de arquivos que webpack pode ler
    extensions: [".js", ".jsx", ".ts", '.tsx'],
  },

  // usando o webpack-dev-server
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },

  plugins: [
    // Plugin para quando houver modificação no codigo, a aplicaçao nao resetar do completo 0
    isDevelopment && new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),

    // Retirando valores booleanos do plugins
  ].filter(Boolean),

  module: {
    rules: [
      {
        // verificando se e um arquivo JS
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,

        // se o arquivo for um jsx, converter em babel
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },

      {
        // Importando um arquivo css
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE.ENV !== 'prodution'; 

module.exports = {
  mode: isDevelopment ? "development" : 'prodution',

  // Para ver erros no console de maneira mais limpa
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', 

  // entry: Qual e o arquivo inicial da aplicação?
  entry: path.resolve(__dirname, "src", "index.jsx"),

  // criando a pasta e o arquivo bundle.js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    //tipos de arquivos que webpack pode ler
    extensions: [".js", ".jsx"],
  },

  // usando o webpack-dev-server
  devServer: {
    static: {
      // O diretorio do index.html
      directory: path.resolve(__dirname, 'public'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        // verificando se e um arquivo JS
        test: /\.jsx$/,
        exclude: /node_modules/,
  
        // se o arquivo for um jsx, converter em babel
        use: "babel-loader",
      },

      {
        // Importando um arquivo css
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", 'css-loader', 'sass-loader'] ,
      },
    ],
  },
};

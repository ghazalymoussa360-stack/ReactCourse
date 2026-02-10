const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./A-variable-et-composant/index.js", // Point d'entrée de l'application
  output: {
    path: path.resolve(__dirname, "dist"), // Dossier de sortie
    filename: "bundle.js", // Nom du fichier de sortie
    publicPath: '/', // Chemin public pour les assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Fichiers à traiter (.js et .jsx)
        exclude: /node_modules/, // Exclure node_modules
        use: {
          loader: "babel-loader", // Utiliser babel-loader
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Transpiler ES6+ et JSX
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Fichiers images
        type: 'asset/resource', // Webpack 5 gère les assets nativement
        generator: {
          filename: 'images/[name][ext]' // Dossier de sortie pour les images
        }
      },
      {
        test: /\.css$/i, // Pour les fichiers CSS si besoin
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Extensions de fichiers à résoudre
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './A-variable-et-composant/index.html', // Template HTML
      filename: 'index.html', // Nom du fichier de sortie
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Dossier à servir
    },
    compress: true, // Compression gzip
    port: 9000, // Port de développement
    hot: true, // Hot Module Replacement
    open: true, // Ouvrir le navigateur automatiquement
  },
};

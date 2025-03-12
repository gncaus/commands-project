module.exports = {
  module: {
    rules: [
      // Regras para TS/JSX
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Regras para SVGs
      {
        test: /\.svg$/,
        oneOf: [
          // Caso 1: SVG como URL (com ?url)
          {
            resourceQuery: /url/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "assets/",
              },
            },
          },
          // Caso 2: Padrão - SVG como componente React
          {
            use: [
              {
                loader: "@svgr/webpack",
                options: {
                  svgo: true,
                  titleProp: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};

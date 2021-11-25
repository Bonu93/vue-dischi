{
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import "@/scss/styles/variables.scss";
          `
        }
      }
    ]
  }
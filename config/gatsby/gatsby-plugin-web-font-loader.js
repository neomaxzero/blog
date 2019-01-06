module.exports = {
  resolve: 'gatsby-plugin-web-font-loader',
  options: {
    google: {
      families: ['Monserrat', 'Roboto'],
    },
    custom: {
      families: ['Inter UI'],
      urls: ['https://cdn.jsdelivr.net/npm/inter-ui@3.1.0/inter-ui.min.css'],
    },
  },
}

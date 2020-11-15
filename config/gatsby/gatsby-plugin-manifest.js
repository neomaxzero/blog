module.exports = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: 'zero-thoughts',
    short_name: 'zero thoughts',
    start_url: '/',
    background_color: '#0C0C0C',
    theme_color: '#0C0C0C',
    display: 'minimal-ui',
    icon: 'src/images/maskable_icon.png', // This path is relative to the root of the site.
    icon_options: {
      // For all the options available, please see the additional resources below.
      purpose: `any maskable`,
    },
  },
}

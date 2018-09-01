const g_plugin_manifest = require('./config/gatsby/gatsby-plugin-manifest')
const g_plugin_emotion = require('./config/gatsby/gatsby-plugin-emotion')
const g_plugin_font_loader = require('./config/gatsby/gatsby-plugin-web-font-loader')

module.exports = {
  siteMetadata: {
    title: 'z3ro thoughts',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    g_plugin_manifest,
    g_plugin_emotion,
    g_plugin_font_loader,
    'gatsby-plugin-offline',
  ],
}

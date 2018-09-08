const g_plugin_manifest = require('./config/gatsby/gatsby-plugin-manifest')
const g_plugin_font_loader = require('./config/gatsby/gatsby-plugin-web-font-loader')
const g_plugin_source_filesystem = require('./config/gatsby/gatsby-plugin-source-filesystem')

module.exports = {
  siteMetadata: {
    title: 'z3ro thoughts',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    g_plugin_manifest,
    'gatsby-plugin-emotion',
    g_plugin_font_loader,
    'gatsby-plugin-offline',
    g_plugin_source_filesystem,
    'gatsby-transformer-remark',
  ],
}

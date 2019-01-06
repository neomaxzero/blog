const g_plugin_manifest = require('./config/gatsby/gatsby-plugin-manifest')
const g_plugin_font_loader = require('./config/gatsby/gatsby-plugin-web-font-loader')
const g_plugin_source_filesystem = require('./config/gatsby/gatsby-plugin-source-filesystem')
const g_plugin_ga = require('./config/gatsby/gastby-plugin-ga')

module.exports = {
  siteMetadata: {
    author: 'Z3RO',
    title: 'blog',
    description: 'asdiuqwuheihquew',
  },
  plugins: [
    g_plugin_ga,
    g_plugin_manifest,
    g_plugin_font_loader,
    g_plugin_source_filesystem,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}

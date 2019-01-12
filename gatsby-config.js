const g_plugin_manifest = require('./config/gatsby/gatsby-plugin-manifest')
const g_plugin_font_loader = require('./config/gatsby/gatsby-plugin-web-font-loader')
const g_plugin_source_filesystem = require('./config/gatsby/gatsby-plugin-source-filesystem')
const g_plugin_ga = require('./config/gatsby/gastby-plugin-ga')
const g_plugin_prismjs = require('./config/gatsby/gatsby-plugin-prismjs')

module.exports = {
  siteMetadata: {
    author: 'Z3RO',
    title: 'blog',
  },
  plugins: [
    'gatsby-transformer-remark',
    g_plugin_ga,
    g_plugin_manifest,
    g_plugin_font_loader,
    g_plugin_source_filesystem,
    g_plugin_prismjs,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
  ],
}

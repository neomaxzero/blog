const g_plugin_manifest = require('./config/gatsby/gatsby-plugin-manifest')
const g_plugin_font_loader = require('./config/gatsby/gatsby-plugin-web-font-loader')
const g_plugin_source_filesystem = require('./config/gatsby/gatsby-plugin-source-filesystem')
const g_plugin_ga = require('./config/gatsby/gastby-plugin-ga')
const g_plugin_prismjs = require('./config/gatsby/gatsby-plugin-prismjs')
const g_plugin_sitemap = require('./config/gatsby/gatsby-plugin-sitemap')

module.exports = {
  siteMetadata: {
    siteUrl: `https://blog.m4x.io`,
    author: 'm4x',
    title: 'm4x blog, Maxi opinions, frontend and JS!',
  },
  plugins: [
    'gatsby-transformer-remark',
    g_plugin_ga,
    g_plugin_manifest,
    g_plugin_font_loader,
    ...g_plugin_source_filesystem,
    g_plugin_prismjs,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    g_plugin_sitemap,
  ],
}

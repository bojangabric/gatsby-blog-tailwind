const siteConfig = require('./config.js');

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    author: siteConfig.author
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 100,
              maxWidth: 960,
              withWebp: true,
              ignoreFileExtensions: []
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tech Partner You Can Trust | ${siteConfig.title}`,
        short_name: `Tech Partner You Can Trust | ${siteConfig.title}`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: 'static/icon.png'
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`
  ]
};

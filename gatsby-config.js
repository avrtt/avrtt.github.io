module.exports = {
  siteMetadata: {
    title: `avrtt.blog`,
    siteUrl: `https://avrtt.github.io`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `goals`,
        path: `${__dirname}/src/goals/`,
      },
      __key: "goals"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `adventures`,
        path: `${__dirname}/src/pages/posts/adventures/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `research`,
        path: `${__dirname}/src/pages/posts/research/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thoughts`,
        path: `${__dirname}/src/pages/posts/thoughts/`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 4000,
              quality: 100,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
  ],
}

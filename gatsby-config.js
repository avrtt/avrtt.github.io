module.exports = {
  siteMetadata: {
    title: `avrtt.blog`,
    description: `My personal all-in-one corner of the internet — a reinvention of old school blogging, community hub, info page, data science & AI learning platform.`,
    image: `/src/images/icon.png`,
    siteUrl: `https://avrtt.github.io`,
    siteName: `avrtt.blog — notes of a lifelong explorer`,
    author: `Vladislav Averett`,
    twitterUsername: `@vladaverett`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allMdx {
              nodes {
                frontmatter {
                  slug
                  prioritySitemap
                  changefreqSitemap
                }
              }
            }
          }
        `,
        serialize: ({ path, node }) => {
          return {
            url: `https://avrtt.github.io${path}`,
            changefreq: node?.frontmatter?.changefreqSitemap || "weekly",
            priority: parseFloat(node?.frontmatter?.prioritySitemap) || 0.4,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://avrtt.github.io',
        sitemap: 'https://avrtt.github.io/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-plugin-sass",
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
        path: `${__dirname}/src/data/goals/`,
      },
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

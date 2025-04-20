module.exports = {
  siteMetadata: {
    title: `avrtt.blog`,
    description: `My personal all-in-one corner of the internet — a reinvention of old school blogging, community hub, info page, data science & AI learning platform.`,
    image: `/src/images/icon.png`,
    siteUrl: `https://avrtt.github.io`,
    siteName: `avrtt.blog — notes of a lifelong explorer`,
    author: `Vladislav Averett`,
    twitterUsername: `@vladaverett`,
    facebookUsername: `@vladaverett`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  title: node.frontmatter.titleDetailed || node.frontmatter.title,
                  url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": node.excerpt }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { frontmatter: { index: DESC } }
                  limit: 20
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      titleDetailed
                      title
                      date
                      slug
                      index
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "avrtt.blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
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
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { nodes: allMdxNodes },
        }) => {
          return allPages.map(page => {
            const mdxNode = allMdxNodes.find(mdx =>
              mdx.frontmatter.slug === page.path.replace(/\/+$/, "")
            )
            if (mdxNode) {
              page.frontmatter = mdxNode.frontmatter
            }
            return page
          })
        },
        serialize: (page) => {
          const isAboutPage = (page.path === "/about/" || page.path === "/about")
          const changefreq = isAboutPage
            ? "yearly"
            : page.frontmatter?.changefreqSitemap || "weekly"
          const priority = isAboutPage
            ? 1.0
            : parseFloat(page.frontmatter?.prioritySitemap) || 0.4
          return {
            url: `https://avrtt.github.io${page.path}`,
            changefreq,
            priority,
            lastmod: new Date().toISOString(),
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
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/strings/**`],
      },
    },
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          api: "modern",
          silenceDeprecations: ['legacy-js-api'],
        }
      }
    },
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
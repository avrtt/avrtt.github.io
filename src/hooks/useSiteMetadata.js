import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            siteName
            author
            twitterUsername
            facebookUsername
          }
        }
      }
    `
  )
  return site.siteMetadata
}
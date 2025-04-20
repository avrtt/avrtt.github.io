/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string;
  description: string;
  image: string;
  siteUrl: string;
  siteName: string;
  author: string;
  twitterUsername: string;
  facebookUsername: string;
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(
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
/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { useStaticQuery, graphql } from 'gatsby';

const LastPostResearch = () => {
    var { allMdx } = useStaticQuery(
        graphql`
            query HomeResearchQuery {
                allMdx(
                    filter: {
                        frontmatter: {
                            slug: {regex: "/^/research//"}
                            flagHidden: { ne: true }
                        }
                    }
                    sort: {frontmatter: {index: DESC}}
                ) {
                    nodes {
                        id
                        frontmatter {
                            index
                            title
                            slug
                            banner {
                                childImageSharp {
                                    gatsbyImageData(
                                        formats: [JPG, WEBP], 
                                        placeholder: BLURRED, 
                                        quality: 100
                                    )
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    const lastPostResearch = allMdx.nodes[0]
    return lastPostResearch
}

export default LastPostResearch
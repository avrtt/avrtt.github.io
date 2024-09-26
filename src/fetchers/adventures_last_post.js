import { useStaticQuery, graphql } from 'gatsby';

const LastPostAdventures = () => {
    var { allMdx } = useStaticQuery(
        graphql`
            query HomeAdventuresQuery {
                allMdx(
                    filter: {frontmatter: {slug: {regex: "/^/adventures//"}}}
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
    const lastPostAdventures = allMdx.nodes[0]
    return lastPostAdventures
}

export default LastPostAdventures
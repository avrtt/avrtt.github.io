import { useStaticQuery, graphql } from 'gatsby';

const LastPostThoughts = () => {
    var { allMdx } = useStaticQuery(
        graphql`
            query HomeThoughtsQuery {
                allMdx(
                    filter: {
                        frontmatter: {
                            slug: {regex: "/^/thoughts//"}
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
    const lastPostThoughts = allMdx.nodes[0]
    return lastPostThoughts
}

export default LastPostThoughts
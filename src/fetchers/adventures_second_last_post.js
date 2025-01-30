import { useStaticQuery, graphql } from 'gatsby';

const SecondLastPostAdventures = () => {
    var { allMdx } = useStaticQuery(
        graphql`
            query HomeAdventuresQuery {
                allMdx(
                    filter: {
                        frontmatter: {
                            slug: {regex: "/^/adventures//"}
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

    const secondLastPostAdventures = allMdx.nodes.length === 1
        ? allMdx.nodes[0]
        : allMdx.nodes[1];
    return secondLastPostAdventures
}

export default SecondLastPostAdventures
import { useStaticQuery, graphql } from 'gatsby';

const SecondLastPostThoughts = () => {
    var { allMdx } = useStaticQuery(
        graphql`
            query HomeThoughtsQuery {
                allMdx(
                    filter: {frontmatter: {slug: {regex: "/^/thoughts//"}}}
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
    const secondLastPostThoughts = allMdx.nodes.length === 1
        ? allMdx.nodes[0]
        : allMdx.nodes[1];
    return secondLastPostThoughts
}

export default SecondLastPostThoughts
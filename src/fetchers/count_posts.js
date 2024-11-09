import { graphql, useStaticQuery } from 'gatsby';

const CountPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      adventures: allMdx(filter: {frontmatter: {slug: {regex: "/^/adventures//"}}}) {
        totalCount
      }
      research: allMdx(filter: {frontmatter: {slug: {regex: "/^/research//"}}}) {
        totalCount
      }
      thoughts: allMdx(filter: {frontmatter: {slug: {regex: "/^/thoughts//"}}}) {
        totalCount
      }
    }
  `);

  return {
    adventuresCount: data.adventures.totalCount,
    researchCount: data.research.totalCount,
    thoughtsCount: data.thoughts.totalCount,
  };
};

export default CountPosts;

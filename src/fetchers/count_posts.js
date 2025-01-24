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
      course: allMdx(filter: {frontmatter: {indexCourse: { ne: null }}}) {
        totalCount
      }
    }
  `);

  return {
    adventuresCount: data.adventures.totalCount,
    researchCount: data.research.totalCount,
    thoughtsCount: data.thoughts.totalCount,
    courseCount: data.course.totalCount,
  };
};

export default CountPosts;

/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { graphql, useStaticQuery } from 'gatsby';

const CountPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      adventures: allMdx(filter: {frontmatter: {slug: {regex: "/^/adventures//"} flagHidden: { ne: true } }}) {
        totalCount
      }
      research: allMdx(filter: {frontmatter: {slug: {regex: "/^/research//"} flagHidden: { ne: true } }}) {
        totalCount
      }
      thoughts: allMdx(filter: {frontmatter: {slug: {regex: "/^/thoughts//"} flagHidden: { ne: true } }}) {
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

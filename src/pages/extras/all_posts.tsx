/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import { Link } from "gatsby";
import Box from '@mui/material/Box';

interface PostFrontmatter {
  title: string;
  date: string;
  slug: string;
  index: number;
  id: string;
}

interface PostNode {
  id: string;
  frontmatter: {
    index: number;
    title: string;
    date: string;
    slug: string;
  }
}

interface AllPostsData {
  allMdx: {
    nodes: PostNode[];
  }
}

interface PostsProps {
  data: AllPostsData;
}

const Posts = ({ data }: PostsProps) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let posts = data.allMdx.nodes
    .map((post: PostNode) => ({ ...post.frontmatter, id: post.id }))
    .filter((post: PostFrontmatter) => post.title && post.slug)
    .sort((a: PostFrontmatter, b: PostFrontmatter) => b.index - a.index);

  return (
    <motion.div
      className='noselect'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}>

      <div style={{ display: 'flex' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
		    >
          <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
            {posts.map((post: PostFrontmatter) => (
              <li key={post.id} style={{ marginBottom: '-0.5rem', marginLeft: "0.5rem" }}>
                <div>
                  <p style={{ opacity: "0.5", marginBottom: "0.1rem", marginLeft: "1rem" }}>
                    {post.date}
                    &nbsp;
                    <span style={{ fontWeight: "bold" }}>{post.slug.slice(0, 2).toUpperCase()}</span>
                  </p> 
                  &nbsp;&nbsp;
                  <span style={{ background: "#ffffff", padding: "6px 11px 6px 11px", borderRadius: "10px", marginLeft: "-0.25rem" }}>
                    <Link to={post.slug} className="compactViewLink">
                      {post.title}
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </Box>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {flagHidden: {ne: true}}}) {
      nodes {
        id
        frontmatter {
          index
          title
          date
          slug
        }
      }
    }
  }
`;

export default Posts;

export const Head = () => (
  <SEO 
    title="Posts - avrtt.blog"
    canonicalUrl="https://avrtt.github.io/all"
  />
)

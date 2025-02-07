import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from "gatsby";
import Box from '@mui/material/Box';

const TITLE = 'Posts - avrtt.blog';

const Posts = ({ data }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let posts = data.allMdx.nodes
    .map(post => ({ ...post.frontmatter, id: post.id }))
    .filter(post => post.title && post.slug)
    .sort((a, b) => b.index - a.index);

  return (
    <motion.div
      className='noselect'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}>

      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div style={{ display: 'flex' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
		    >
          <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
            {posts.map(post => (
              <li key={post.id} style={{ marginBottom: '-12px' }}>
                <div>
                  <p style={{ opacity: "0.5", marginBottom: "-5px", marginLeft: "11px" }}>
                    {post.date}
                    &nbsp;
                    <span style={{ fontWeight: "bold" }}>{post.slug.slice(0, 2).toUpperCase()}</span>
                  </p> 
                  &nbsp;&nbsp;
                  <span style={{ background: "#ffffff", padding: "6px 11px 6px 11px", borderRadius: "10px", marginLeft: "-10px" }}>
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

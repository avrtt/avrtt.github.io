import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from "gatsby";
import Box from '@mui/material/Box';

const TITLE = 'Tags - avrtt.blog';

const Tags = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sortByFrequency, setSortByFrequency] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);

  const toggleSorting = () => {
    setSortByFrequency(!sortByFrequency);
  };

  const tagCounts = {};

  data.allMdx.nodes.forEach(post => {
    const allTags = [post.frontmatter.mainTag, ...(post.frontmatter.otherTags || [])].filter(Boolean);
    allTags.forEach(tag => {
      if (tagCounts[tag]) {
        tagCounts[tag] += 1;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  const sortedTags = Object.entries(tagCounts).sort((a, b) => {
    return sortByFrequency ? b[1] - a[1] : a[0].localeCompare(b[0]);
  });

  let posts = data.allMdx.nodes
    .map(post => ({ ...post.frontmatter, id: post.id }))
    .filter(post => post.title && post.slug)
    .sort((a, b) => b.index - a.index);

  const filteredPosts = selectedTag ? posts.filter(post => [post.mainTag, ...(post.otherTags || [])].includes(selectedTag)) : posts;

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
		  style={{ width: '55rem' }}
		  key={selectedTag}
		  initial={{ opacity: 0 }}
		  animate={{ opacity: 1 }}
		  exit={{ opacity: 0 }}
		  transition={{ duration: 0.3, ease: "easeInOut" }}
		>
		  <p style={{ marginBottom: "3rem" }}> </p>
          <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
            {filteredPosts.map(post => (
              <li key={post.id} style={{ marginBottom: '4px' }}>
                <div>
                  <span style={{ opacity: "0.5" }}>{post.date}</span> 
                  &nbsp;&nbsp;
                  <span style={{ background: "#ffffff", padding: "6px 11px 6px 11px", borderRadius: "10px" }}>
                    <Link to={post.slug} className="compactViewLink">
                      {post.title}
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </Box>
        </motion.div>
        <div style={{ width: 'fit-content', textAlign: 'center' }}>
          <div className="sortingButtonWrapper" style={{ marginBottom: "18px"}} >
            <motion.button onClick={toggleSorting} className="sortingButton noselect" whileTap={{ scale: 0.95 }}>
              <motion.div
                className="buttonTextWrapper"
                key={sortByFrequency}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {sortByFrequency ? 'Sort by name' : 'Sort by frequency'}
              </motion.div>
            </motion.button>
          </div>
          <motion.span
            key={sortByFrequency}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {sortedTags.map(([tag, count]) => (
              <motion.span
                key={tag}
                className="tagPosts"
                style={{ 
                  cursor: 'pointer', 
                  opacity: selectedTag && selectedTag !== tag ? 0.55 : 1, 
                  transition: "opacity 0.15s ease",
                  backgroundColor: data.allMdx.nodes.some(post => post.frontmatter.mainTag === tag) ? '#ffb05c' : '',
                }}
                whileHover={selectedTag ? { opacity: 1 } : { opacity: 0.7 }}
                transition={{ duration: 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                <span>{tag}</span>
                &#8198;&#8198;
                <span style={{ opacity: 0.6 }}>{count}</span>
              </motion.span>
            ))}
          </motion.span>
        </div>
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
          titleDetailed
          date
          mainTag
          otherTags
          slug
        }
      }
    }
  }
`;

export default Tags;

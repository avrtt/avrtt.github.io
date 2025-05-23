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
import PugDance from "../../stickers/pug_dance.gif"
import * as stylesTagsPage from "../../styles/tags_page.module.scss";
import * as stylesButtonsCommon from "../../styles/buttons_common.module.scss"
import * as stylesTagBadges from "../../styles/tag_badges.module.scss";

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
    return sortByFrequency ? Number(b[1]) - Number(a[1]) : a[0].localeCompare(b[0]);
  });

  let posts = data.allMdx.nodes
    .map(post => ({ ...post.frontmatter, id: post.id }))
    .filter(post => post.title && post.slug)
    .sort((a, b) => b.index - a.index);

  const filteredPosts = selectedTag ? posts.filter(post => [post.mainTag, ...(post.otherTags || [])].includes(selectedTag)) : posts;

  return (
    <>
      <div className="smallScreenNotice noselect">
				<p>This page is not supported on small screen devices (and I'm a lazy ass to fix it). Use "Posts" page instead.</p>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<img src={PugDance} style={{ width: '4rem' }} alt="dancing-pug" />
				</div>
			</div>
      <motion.div
        className='desktopOnlySupport noselect'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}>

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
            <div className={stylesTagsPage.sortingButtonWrapper} style={{ marginBottom: "18px"}} >
              <motion.button onClick={toggleSorting} className={`noselect ${stylesTagsPage.sortingButton}`} whileTap={{ scale: 0.95 }}>
                <motion.div
                  className={stylesButtonsCommon.buttonTextWrapper}
                  key={sortByFrequency ? 'frequency' : 'name'}
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
              key={sortByFrequency ? 'frequency-sort' : 'name-sort'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {sortedTags.map(([tag, count]) => (
                <motion.span
                  key={tag}
                  className={stylesTagBadges.tagPosts}
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
                  <span style={{ opacity: 0.6 }}>{String(count)}</span>
                </motion.span>
              ))}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </>
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

export const Head = () => (
  <SEO 
    title="Tags - avrtt.blog"
    description="Seach my blog posts by tag."
    keywords={["website search", "filter by tag", "search by keyword"]}
    image={""}
    canonicalUrl="https://avrtt.github.io/tags"
    
  />
)

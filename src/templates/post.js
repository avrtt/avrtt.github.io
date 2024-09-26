import React from 'react';
import { motion } from 'framer-motion';
import PostBanner from '../components/PostBanner';
import PostBottom from'../components/PostBottom'; 
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export function PostTemplate({ data: { mdx, allMdx }, children }) {

  const { frontmatter } = mdx;
  const index = frontmatter.index;
  const slug = frontmatter.slug;
  const section = slug.split('/')[1];
  const posts = allMdx.nodes.filter(post => post.frontmatter.slug.includes(`/${section}/`));
  const sortedPosts = posts.sort((a, b) => a.frontmatter.index - b.frontmatter.index);
  const currentIndex = sortedPosts.findIndex(post => post.frontmatter.index === index);
  const nextPost = sortedPosts[currentIndex + 1];
  const lastPost = sortedPosts[currentIndex - 1];
  const keyCurrent = /[^/]*$/.exec(frontmatter.slug)[0];

  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.15}}>
      
      <PostBanner
        postNumber={frontmatter.index} 
        date={frontmatter.date}
        title={frontmatter.title}
        desc={frontmatter.desc}
        banner={frontmatter.banner}
        section={section}
        postKey={keyCurrent}
      />

      <div class="postBody">			
        {children}
      </div>
      
      <PostBottom nextPost={nextPost} lastPost={lastPost} keyCurrent={keyCurrent} section={section} />

    </motion.div>
  );
}

export default PostTemplate;

export const query = graphql`
  query($id: String!, $section: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        index
        title
        desc
        date
        banner {
          childImageSharp {
            gatsbyImageData(
							formats: [JPG, WEBP], 
							placeholder: BLURRED, 
							quality: 100
						)
          }
        }
        slug
      }
    }
    allMdx(filter: {frontmatter: {slug: {regex: $section}}}) {
      nodes {
        frontmatter {
          index
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
`;



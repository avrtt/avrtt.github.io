import React from 'react';
import { ImageContext } from '../context/ImageContext';
import { MDXProvider } from '@mdx-js/react';
import Image from '../components/PostImage';
import { graphql } from 'gatsby';

export function PostTemplate({ data: { mdx, allPostImages }, children }) {

  const { frontmatter } = mdx;
  const slug = frontmatter.slug;
  const section = slug.split('/')[1];
  const trimmedSlug = frontmatter.slug.replace(/\/$/, '');
  const keyCurrent = /[^/]*$/.exec(trimmedSlug)[0];
  const basePath = `posts/${section}/content/${keyCurrent}/`;
  
  return (
    <> 
      <div class="postBody" >
        <ImageContext.Provider
          value={{
            images: allPostImages.nodes,
            basePath: basePath.replace(/\/$/, '') + '/',
          }}
        >
          <MDXProvider components={{ Image }}>
            {children}
          </MDXProvider>
        </ImageContext.Provider>
      </div>
    </>
  );
}

export default PostTemplate;

export const query = graphql`
  query($id: String!, $imagePathRegex: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
      }
    }
    allPostImages: allFile(
      filter: { 
        sourceInstanceName: { eq: "images" },
        relativePath: { regex: $imagePathRegex }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            quality: 30
          )
        }
      }
    }
  }
`;

import React from "react";
import ArrowNext from "../../images/posts/arrow_next.svg";
import ArrowLast from "../../images/posts/arrow_last.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

const PostsLastNext = ({ nextPost, lastPost, section }) => {

  const lastPreview = lastPost ? getImage(lastPost.frontmatter.banner.childImageSharp) : null;
  const nextPreview = nextPost ? getImage(nextPost.frontmatter.banner.childImageSharp) : null;
  const lastLink = lastPost ? `/${section}/${lastPost.frontmatter.slug.split('/').pop()}` : null;
  const nextLink = nextPost ? `/${section}/${nextPost.frontmatter.slug.split('/').pop()}` : null;
  const keyNext = nextPost?.frontmatter.slug.split('/')[2];
  const keyLast = lastPost?.frontmatter.slug.split('/')[2];
  
  return (
	<>
      <div className="readNextWrapper">
          {lastPost && (
            <Link to={lastLink}>
              <GatsbyImage className="lastPost" image={lastPreview} alt="post_last" />
            </Link>
          )}
          <img className="lastArrow" style={{ display: lastPost ? 'block' : 'none' }} src={ArrowLast} alt="arrow_last" />
          {nextPost && (
            <Link to={nextLink}>
              <GatsbyImage className="nextPost" image={nextPreview} alt="post_next" />
            </Link>
          )}
          <img className="nextArrow" style={{ display: nextPost ? 'block' : 'none' }} src={ArrowNext} alt="arrow_next" />
      </div>
	</>
  );
};
export default PostsLastNext;



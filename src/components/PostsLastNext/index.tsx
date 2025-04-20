/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import ArrowNext from "../../images/posts/arrow_next.svg";
import ArrowLast from "../../images/posts/arrow_last.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import * as styles from "./styles.module.scss";

const PostsLastNext: React.FC<PostsLastNextProps> = ({ nextPost, lastPost, section }) => {

  const lastPreview = lastPost ? getImage(lastPost.frontmatter.banner.childImageSharp) : null;
  const nextPreview = nextPost ? getImage(nextPost.frontmatter.banner.childImageSharp) : null;
  const lastLink = lastPost ? `/${section}/${lastPost.frontmatter.slug.split('/').pop()}` : '';
  const nextLink = nextPost ? `/${section}/${nextPost.frontmatter.slug.split('/').pop()}` : '';
  
  return (
	<>
      <div className={styles.readNextWrapper}>
          {lastPost && lastLink && lastPreview && (
            <Link to={lastLink}>
              <GatsbyImage className={styles.lastPost} image={lastPreview} alt="post_last" />
            </Link>
          )}
          <img className={styles.lastArrow} style={{ display: lastPost ? 'block' : 'none' }} src={ArrowLast} alt="arrow_last" />
          {nextPost && nextLink && nextPreview && (
            <Link to={nextLink}>
              <GatsbyImage className={styles.nextPost} image={nextPreview} alt="post_next" />
            </Link>
          )}
          <img className={styles.nextArrow} style={{ display: nextPost ? 'block' : 'none' }} src={ArrowNext} alt="arrow_next" />
      </div>
	</>
  );
};
export default PostsLastNext;



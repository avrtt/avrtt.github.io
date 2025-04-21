/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-medium-image-zoom';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import 'animate.css/animate.min.css';

interface ImageProps {
  p: string;
  alt: string;
  c?: string;
  w?: string;
  offset?: number;
}

const Image: React.FC<ImageProps> = ({
  p,
  alt,
  c = "",
  w = "100%",
  offset = 300,
}) => {
  if (!alt) {
    alert(`An image with missing alt prop was detected! Please provide an informative description. Path: ${p}`);
  }

  const data: {
    allFile: {
      nodes: Array<{
        relativePath: string;
        childImageSharp?: { gatsbyImageData: IGatsbyImageData };
      }>;
    };
  } = useStaticQuery(graphql`
    query AllProjectImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(png|jpe?g)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              quality: 80
            )
          }
        }
      }
    }
  `);

  const node = data.allFile.nodes.find((n) => n.relativePath === p);

  if (!node || !node.childImageSharp) {
    console.warn(`⚠️ Image not found for path "${p}". Did you add it under src/images/${p}?`);
    return null;
  }

  const imageData = getImage(node.childImageSharp.gatsbyImageData)!;

  return (
    <center>
      <AnimationOnScroll
        offset={offset}
        duration={1.2}
        animateIn="animate__fadeIn"
        animateOnce
      >
        <Zoom>
          <GatsbyImage
            image={imageData}
            alt={alt}
            style={{ width: w }}
          />
        </Zoom>
        {c && <p className={styles.caption}>{c}</p>}
        <br/>
      </AnimationOnScroll>
    </center>
  );
};

export default Image;


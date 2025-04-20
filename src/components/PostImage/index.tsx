/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useContext } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { ImageContext } from '../../context/ImageContext';
import Zoom from 'react-medium-image-zoom';
import * as styles from './styles.module.scss'; 
import 'react-medium-image-zoom/dist/styles.css'
import 'animate.css/animate.min.css';

interface ImageNode {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: any;
  };
}

const imageStyle = {
  paddingBottom: "0px",
  marginTop: "8px",
  borderRadius: "2vh",
}

const notFoundStyle = {
  color: '#8e8e8e',
  fontSize: '20px',
  lineHeight: '8px',
  padding: '20px 32px',
  backgroundColor: '#e6e3e3',
  borderRadius: '2vh',
  margin: '40px 0px'
}

const Image: React.FC<PostImageProps> = ({ path, alt, caption="", zoom=false, offset=300 }) => {
  // use any type for the context to avoid TypeScript errors
  const context: any = useContext(ImageContext);
  const { images, basePath } = context;

  if (!alt) alert(`An image with missing alt prop was detected! Please provide an informative description required for SEO. Path: ${path}`)

  let imageNode: any = null;
  let imageData = null;
  
  if (path && images && images.length > 0) {
    // since using any, TS won't complain about the property access
    imageNode = images.find((node: any) => node.relativePath === `${basePath}${path}`);
    if (imageNode && imageNode.childImageSharp) {
      imageData = getImage(imageNode.childImageSharp.gatsbyImageData);
    }
  }

  if (!imageNode) {
    return (
      <div style={notFoundStyle}>
        <span>
          <StaticImage 
            src="../../images/mysterious_frog.png"
            alt="mysterious_frog"
            style={{width: "100px"}} 
          />
        </span>
        <p>An image was requested, but the frog was found.</p>
        {alt ? <p>Alt: "{alt}"</p> : <p>No alt specified!</p>}
        {caption ? <p>Caption: "{caption}"</p> : <p>No caption specified!</p>}
        {path ? <p>Missing path: <b>"{basePath}{path}"</b></p> : <p>Error type: <b>missing path</b></p>}
      </div>
    )
  }

  return (
    <center>
      <AnimationOnScroll offset={offset} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
        {zoom && imageData ? (
          <Zoom>
            <div className="noselect">
              <GatsbyImage style={imageStyle} image={imageData} alt={alt} />
            </div>
          </Zoom>
        ) : imageData ? (
          <GatsbyImage style={imageStyle} image={imageData} alt={alt} />
        ) : (
          <div style={notFoundStyle}>Unexpected error: Image data could not be loaded.</div>
        )}
        {caption && <p className={styles.caption}>{caption}</p>}
      </AnimationOnScroll>
    </center>
  );  
};

export default Image;
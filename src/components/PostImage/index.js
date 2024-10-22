import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from "gatsby";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import 'animate.css/animate.min.css';  

const imageStyle = {
  "padding-bottom": "0px",
  "margin-top": "8px",
  "border-radius": "2vh",
}

const captionStyle = {
  'color': '#8e8e8e',
  'font-weight': 'bold',
  'font-size': '22px',
  'margin-top': '0px',
  'margin-bottom': '30px'
}

const notFoundStyle = {
  'color': '#8e8e8e',
  'font-size': '20px',
  'line-height': '8px',
  'padding': '20px 32px',
  'background-color': '#e6e3e3',
  'border-radius': '2vh',
  'margin': '40px 0px'
}

const Image = ({ path, caption="", zoom=false, offset="300" }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { 
          sourceInstanceName: { eq: "images" },
          relativePath: { regex: "/posts/(adventures|research|thoughts)/" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              quality: 100
            )
          }
          relativePath
        }
      }
    }
  `);

  const image = data.allFile.nodes.find(node => node.relativePath === path);
  const imageData = getImage(image.childImageSharp.gatsbyImageData);

  if (!image) {
    return (
      <div style={notFoundStyle}>
        <span>
          <StaticImage 
            src="../../images/mysterious_frog.png" 
            style={{"width": "100px"}} 
          />
        </span>
        <p>An image was requested, but the frog was found</p>
        <p>Missing path: <strong>{path}</strong></p>
      </div>
    )
  }

  if (zoom == "true") {
    zoom = true
  } else if (zoom = "false") {
    zoom = false
  }

  return (
    <center>
      <AnimationOnScroll offset={offset} duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
        {zoom ? (
          <Zoom>
            <div class="noselect">
              <GatsbyImage style={imageStyle} image={imageData} alt={caption} />
            </div>
          </Zoom>
        ) : (
          <GatsbyImage style={imageStyle} image={imageData} alt={caption} />
        )}
        {caption && <p style={captionStyle}>{caption}</p>}
      </AnimationOnScroll>
    </center>
  );  
};

export default Image;
import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-medium-image-zoom'
import * as styles from './styles.module.scss';  
import 'animate.css/animate.min.css';  
  
const Image = ({ alt, p, c="", w="100%", offset="300" }) => {

  if (!alt) alert(`An image with missing alt prop was detected! Please provide an informative description required for SEO. Path: ${p}`)

  return (
    <center>
    	<AnimationOnScroll offset={offset} duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
    		<Zoom>
    			<img alt={alt} src={p} width={w} />
    		</Zoom>
    		<p className={styles.caption}>{c}</p>
    	</AnimationOnScroll>
    </center>
  );
};

export default Image;

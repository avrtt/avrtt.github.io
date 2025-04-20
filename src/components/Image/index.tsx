/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-medium-image-zoom'
import * as styles from './styles.module.scss';  
import 'animate.css/animate.min.css';  
  
interface ImageProps {
  alt: string;
  p: string;
  c?: string;
  w?: string;
  offset?: number;
}

const Image: React.FC<ImageProps> = ({ alt, p, c="", w="100%", offset=300 }) => {

  if (!alt) alert(`An image with missing alt prop was detected! Please provide an informative description required for SEO. Path: ${p}`)

  return (
    <center>
    	<AnimationOnScroll offset={offset} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
    		<Zoom>
    			<img alt={alt} src={p} width={w} />
    		</Zoom>
    		<p className={styles.caption}>{c}</p>
    	</AnimationOnScroll>
    </center>
  );
};

export default Image;

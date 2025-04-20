/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';  

interface VideoProps {
  ytKey: string;
  c?: string;
  offset?: number;
}
  
const captionStyle: React.CSSProperties = {
    color: '#8e8e8e',
    fontWeight: 'bold',
    fontSize: '22px',
    marginTop: '0px',
}
  
const Vid: React.FC<VideoProps> = ({ ytKey, c="", offset=300 }) => {

  const ytLink = 'https://www.youtube.com/embed/' + ytKey;

  return (
    <center>
    	<AnimationOnScroll offset={offset} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
    		<div className="iframeWrapper">
    		    <iframe className="iframe" src={ytLink} title="video"></iframe>
    		</div>
    		<p style={captionStyle}>{c}</p>
    	</AnimationOnScroll>
    </center>
  );
};
export default Vid;

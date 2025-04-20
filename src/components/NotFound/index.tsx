/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from "react";
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo'

const notFoundStyle = {
  'display': 'block',
  'margin-left': 'auto',
  'margin-right': 'auto', 
  'width': '50%', 
  'margin-top': '100px', 
  'text-align': 'center'
}

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1800)
  }, [])
  return (
    <div style={notFoundStyle}>
	    <a href="https://www.youtube.com/watch?v=KLn43uJl6o4">
        <StaticImage
          src="./mysterious_frog.png"
          alt="mysterious_frog"
          loading="eager"
          backgroundColor="transparent"
          placeholder= 'none'
        />
      </a>
	    <p>Error 404: the frog was found</p>
	  </div>
  );
};

export default NotFound;

export const Head = () => (
  <SEO 
    title="404 - avrtt.blog"
    flagHidden={true}
  />
)
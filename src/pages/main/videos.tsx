/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { videosLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Videos = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
				<p>I'm currently looking for a better way to forward saved notes from Telegram to here.</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {videosLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Videos;

export const Head = () => (
  <SEO 
    title="Videos - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/videos"
    schemaType="WebPage"
    
  />
)

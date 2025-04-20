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
import { habitsLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Habits = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
				Maybe I'll make a tracker of some habits here in the future. Publicity motivates me.
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {habitsLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Habits;

export const Head = () => (
  <SEO 
    title="Habits - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/habits"
    schemaType="WebPage"
    
  />
)

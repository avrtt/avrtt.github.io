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
import cover from '../../images/covers/software.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { softwareLastUpdated } from '../../data/lastUpdated';
import * as stylesPlaques from "../../styles/plaques.module.scss"
import 'animate.css/animate.min.css';

const Software = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/software.jpg" 
				alt="Page cover: a painting depicting long-haired man looking at a laptop in a cozy room"
			/>

			<div className="softwareBody">
				<br/>
				<div className={stylesPlaques.yellowNotice}>
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div className="lastUpdatedSoftware">UPDATED ON {softwareLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Software;

export const Head = () => (
  <SEO 
    title="Software - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/software"
    schemaType="WebPage"
    
  />
)

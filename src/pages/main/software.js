import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
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

			<div class="softwareBody">
				<br/>
				<div class={stylesPlaques.yellowNotice}>
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div class="lastUpdatedSoftware">UPDATED ON {softwareLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Software;

export const Head = () => (
  <SEO 
    title="Software - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl=""
    schemaType=""
    children
  />
)

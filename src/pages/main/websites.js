import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { websitesLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Websites = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div class="generalBody">
				<p>I'm currently looking for a better way to forward saved notes from Telegram to here.</p>
			</div>
			<div class="lastUpdatedTalks">UPDATED ON {websitesLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Websites;

export const Head = () => (
  <SEO 
    title="Websites - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/websites"
    schemaType=""
    children
  />
)

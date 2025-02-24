import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { feedLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Feed = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div class="generalBody">
				<p>Work in progress...</p>
			</div>
			<div class="lastUpdatedTalks">UPDATED ON {feedLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Feed;

export const Head = () => (
  <SEO 
    title="Feed - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/feed"
    schemaType=""
    children
  />
)

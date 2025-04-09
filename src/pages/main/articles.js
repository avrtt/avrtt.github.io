import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { articlesLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Articles = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
				<p>I'm currently looking for a better way to forward saved notes from Telegram to here.</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {articlesLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Articles;

export const Head = () => (
  <SEO 
    title="Articles - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/articles"
    schemaType=""
    children
  />
)

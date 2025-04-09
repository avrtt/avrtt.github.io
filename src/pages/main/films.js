import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { filmsLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Films = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
				<p>Work in progress...</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {filmsLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Films;

export const Head = () => (
  <SEO 
    title="Films - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/films"
    schemaType=""
    children
  />
)

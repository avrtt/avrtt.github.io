import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/stories.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { storiesLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Stories = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/stories.jpg" 
				alt="Page cover: a painting depicting campfire at night"
			/>

			<div className="generalBody">
				<p>This page is reserved for my life experiences beyond posts.</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {storiesLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Stories;

export const Head = () => (
  <SEO 
    title="Stories - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/stories"
    schemaType=""
    children
  />
)

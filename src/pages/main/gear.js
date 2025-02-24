import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/gear.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { gearLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Gear = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/gear.jpg" 
				alt="Page cover: a painting depicting travel gear, including a backpack, a hat, a flask and boots"
			/>

			<div class="generalBody">
				<p>Work in progress...</p>
			</div>
			<div class="lastUpdatedTalks">UPDATED ON {gearLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Gear;

export const Head = () => (
  <SEO 
    title="Gear & tools - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/gear"
    schemaType=""
    children
  />
)

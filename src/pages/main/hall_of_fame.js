import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/hall_of_fame.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { hallOfFameLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const HallOfFame = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/hall_of_fame.jpg" 
				alt="Page cover: a painting depicting a wall with many paintings of people in sunglasses"
			/>

			<div class="generalBody">
				<p>This will be a list of the people who have helped me the most, whether they are donators or just people who gave me a helping hand. I'm posting their links if they don't mind.</p>
			</div>
			<div class="lastUpdatedTalks">UPDATED ON {hallOfFameLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default HallOfFame;

export const Head = () => (
  <SEO 
    title="Hall of fame - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/hall_of_fame"
    schemaType=""
    children
  />
)

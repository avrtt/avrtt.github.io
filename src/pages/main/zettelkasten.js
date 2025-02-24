import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/zettelkasten.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { zettelkastenLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Zettelkasten = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/zettelkasten.jpg" 
				alt="Page cover: a painting depicting an enormous underground library"
			/>

			<div class="generalBody">
				<p>This is my learning logs and knowledge base. I'm currently looking for a better way to pull everything from Obsidian to here.</p>
			</div>
			<div class="lastUpdatedTalks">UPDATED ON {zettelkastenLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Zettelkasten;

export const Head = () => (
  <SEO 
    title="Zettelkasten - avrtt.blog"
    description=""
    keywords={["knowledge repository", "zettelkasten"]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/zettelkasten"
    schemaType=""
    children
  />
)

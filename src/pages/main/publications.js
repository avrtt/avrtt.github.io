import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/publications.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { publicationsLastUpdated } from '../../data/lastUpdated';
import * as stylesPlaques from "../../styles/plaques.module.scss"
import 'animate.css/animate.min.css';

const Publications = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/publications.jpg" 
				alt="Page cover: a painting depicting scientific papers with books and a feather"
			/>

			<div className="publicationsBody">
				<br/>
				<div class={stylesPlaques.yellowNotice}>
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div className="lastUpdatedPublications">UPDATED ON {publicationsLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Publications;

export const Head = () => (
  <SEO 
    title="Publications - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/publications"
    schemaType=""
    children
  />
)

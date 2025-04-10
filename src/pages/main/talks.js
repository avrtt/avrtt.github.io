import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/talks.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { talksLastUpdated } from '../../data/lastUpdated';
import * as stylesPlaques from "../../styles/plaques.module.scss"
import 'animate.css/animate.min.css';

const Talks = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/talks.jpg" 
				alt="Page cover: a painting depicting long-haired man giving a speech to an audience"
			/>

			<div className="talksBody">
				<br/>
				<div className={stylesPlaques.yellowNotice}>
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {talksLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Talks;

export const Head = () => (
  <SEO 
    title="Talks - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/talks"
    schemaType=""
    children
  />
)

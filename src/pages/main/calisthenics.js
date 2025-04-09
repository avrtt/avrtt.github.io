import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { calisthenicsLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Calisthenics = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
				<p>This is a good place to keep track of my progress in calisthenics. Soon there will be photos, timeline, statistics, exercises, records, etc.</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {calisthenicsLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Calisthenics;

export const Head = () => (
  <SEO 
    title="Calisthenics - avrtt.blog"
    description="A page for tracking progress in calisthenics"
    keywords={["exercises", "timeline", "progression", "sports"]}
    image={""}
    canonicalUrl="https://avrtt.github.io/calisthenics"
    schemaType=""
    children
  />
)

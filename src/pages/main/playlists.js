import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { playlistsLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Playlists = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
				<p>Work in progress...</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {playlistsLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Playlists;

export const Head = () => (
  <SEO 
    title="Playlists - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/playlists"
    schemaType=""
    children
  />
)

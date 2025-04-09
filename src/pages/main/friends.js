import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/friends.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { friendsLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Friends = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/friends.jpg" 
				alt="Page cover: a painting depicting friends talking in a tavern, medieval RPG style"
			/>

			<div className="generalBody">
				<p>In today's world where "media fast food" (with a ton of AI garbage) has become the dominant form of content, it's become hard to find good old classic blogs. That's why I'm encouraging friends to create their own blogs and promote each other — leave social media to neural networks and move to your own uncluttered corner, where only you can be heard.</p>
				<p>Here I'll be collecting blogs of my friends or simply awesome people. I don't expect anything in return, although I'd appreciate a mention of my blog from you.</p>
			</div>
			<br/>
			<div className="generalBody">
				<p>(gathering the party...)</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {friendsLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Friends;

export const Head = () => (
  <SEO 
    title="Friend blogs - avrtt.blog"
    description="A collection of awesome blogs"
    keywords={["list of links", "blogs"]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/friends"
    schemaType=""
    children
  />
)

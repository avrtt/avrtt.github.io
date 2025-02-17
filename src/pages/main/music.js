import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { musicLastUpdated } from '../../data/lastUpdated';
import * as stylesPlaques from "../../styles/plaques.module.scss"
import 'animate.css/animate.min.css';

const Music = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div class="musicBody">
				<br/>
				<div class={stylesPlaques.yellowNotice}>
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div class="lastUpdatedMusic">UPDATED ON {musicLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Music;

export const Head = () => (
  <SEO 
    title="Music - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl=""
    schemaType=""
    children
  />
)

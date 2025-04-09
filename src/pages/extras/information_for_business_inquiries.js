import React, { useEffect } from 'react';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import * as stylesPlaques from "../../styles/plaques.module.scss"

const Business = () => {
		
  return (
	<motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
	
		<div className="aboutBody">

		<br/>
		<div class={stylesPlaques.yellowNotice}>
			<M text="## 🚧 HEADS UP!"/>
			<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
		</div>

		</div>    
   </motion.div>
	);
};
  
export default Business;

export const Head = () => (
  <SEO 
    title="Information for Business Inquiries - avrtt.blog"
    canonicalUrl="https://avrtt.github.io/information_for_business_inquiries"
  />
)

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';


const TITLE = 'Information for Business Inquiries - avrtt.blog'

const Business = () => {
		
  return (
	<motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>

		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>
	
		<div class="aboutBody">

		<br/>
		<div class="yellowNotice">
			<M text="## 🚧 HEADS UP!"/>
			<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
		</div>

		</div>    
   </motion.div>
	);
};
  
export default Business;

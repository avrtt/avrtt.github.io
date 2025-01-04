import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { softwareLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const TITLE = 'Software - avrtt.blog'

const Software = () => {
	return (
		<motion.div className='noselect'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			<div class="softwareBody">
				<br/>
				<div class="yellowNotice">
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div class="lastUpdatedSoftware">UPDATED ON {softwareLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Software;

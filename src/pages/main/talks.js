import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { talksLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const TITLE = 'Talks - avrtt.blog'

const Talks = () => {
	return (
		<motion.div className='noselect'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			<div class="talksBody">
				<br/>
				<div class="yellowNotice">
					<M text="## 🚧 HEADS UP!"/>
					<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
				</div>
			</div>
			<div class="lastUpdatedTalks">UPDATED ON {talksLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Talks;

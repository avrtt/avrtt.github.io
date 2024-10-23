import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const TITLE = 'Course - avrtt.blog'

const Course = () => {
	return (
		<motion.div className='noselect'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			
			
	  	</motion.div>
	);
};
  
export default Course;

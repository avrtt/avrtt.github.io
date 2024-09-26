import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import Spoiler from '../../components/Spoiler';
import { aboutLastUpdated } from '../itemData';
import aboutPhoto from "../../images/about/photoAbout.jpg";
import info from "../../images/goals/info.svg";

const TITLE = 'About - avrtt.blog'

const aboutPhotoStyle = {
    'float': 'right',
    'border-radius': '20px',
    'margin-left': '60px',
    'margin-right': '0px',
    'margin-top': '15px',
    'margin-bottom': '60px'
}

const About = () => {
	
	useEffect(() => {
  		//window.scrollTo(0, 0)
	}, [])	
	
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
        <div class="lastUpdatedAbout">UPDATED ON {aboutLastUpdated}</div>
   </motion.div>
	);
};
  
export default About;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { cvLastUpdated } from '../../data/lastUpdated';
import Stack from'../../components/Stack'
import CvPosition from'../../components/CvPosition'
import CvPositionFirst from'../../components/CvPositionFirst'
import * as stylesPlaques from "../../styles/plaques.module.scss"

const TITLE = 'CV - avrtt.blog'

const downloadStyle = {
	"text-align": "center",
	"margin-bottom": "53px"
} 

const downloadDescStyle = {
	"font-size": "22px",
	"margin-top": "-12px"
} 

const CV = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>

		<div class="cvBody">
			<br/>
			<div class={stylesPlaques.yellowNotice}>
				<M text="## 🚧 HEADS UP!"/>
				<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
			</div>
		</div>
		<div class="lastUpdatedCv">UPDATED ON {cvLastUpdated}</div>
    </motion.div>
  );
};
  
export default CV;

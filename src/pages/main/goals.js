import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import { TelegramComments } from 'react-telegram-comments';
import { goalsLastUpdated } from '../itemData';
import M from '../../components/Markdown';
import GoalCategory from '../../components/GoalCategory';
import checkbox from "../../images/goals/checked.svg";
import refLink from "../../images/goals/refLink.svg";
import resultLink from "../../images/goals/resultLink.svg";
import info from "../../images/goals/info.svg";

import { goalsTags, goals1, goals2, goals3, goals4, goals5, goals6, goals7, goals8, goals9, goals10, goals11, goals12, goals13, goals14, goals15, goals16 } from "../itemData"
const goalsConcat = [].concat(goals1, goals2, goals3, goals4, goals5, goals6, goals7, goals8, goals9, goals10, goals11, goals12, goals13, goals14, goals15, goals16)
const goalsTagsSpecific = goalsTags.filter((x) => x.name === 'COMMON' || x.name === 'UNCOMMON' || x.name === 'RARE' || x.name === 'LEGENDARY' || x.name === 'SAFE' || x.name === 'UNSAFE' || x.name === 'DANGEROUS');
const goalsTagsCategories = goalsTags.filter((x) => !goalsTagsSpecific.includes(x));

const TITLE = 'Goals - avrtt.blog'

const spanStyle = {
	'opacity': 0.5,
}

const tagStatsWrapper = {
    'font-size': '16px',
    'margin-left': '5%',
    'margin-right': '5%',
    'max-width': '100%',
    'text-align': 'center',
    'margin-top': '18px',
    'margin-bottom': '-4px'
}

const tagStat = {
    'background-color': '#D7D7D7',
    'border-radius': '10px',
    'display': 'inline-block',
    'font-weight': 'bold',
    'padding-left': '10px',
    'padding-right': '10px',
    'vertical-align': 'middle',
    'margin': '4px 2px 0 2px',
}

const taggedGoalsNumStyle = {
    'opacity': '0.6'
}

const placeholderTop = {
    'margin-top': '-30px'
}

const placeholderBottom = {
    'margin-bottom': '90px'
}

const textImg = {
    'width': '32px',
    'opacity': '0.4',
    'vertical-align': 'middle'
}

const Goals = () => {
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>

        <div class='goalsBody'>

            <div class="goalsBodyNested">

            
                
            </div> 
            <div class="lastUpdatedGoals">UPDATED ON {goalsLastUpdated}</div>
        </div> 
        <div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId='goals' showDislikes={true} /></div>
    </motion.div>
  );
};
  
export default Goals;
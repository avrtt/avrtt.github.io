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
	
    const [isOpaque, setIsOpaque] = useState(false)
    const [hideChecked, setHideChecked] = useState(false)
    const [hideUnchecked, setHideUnchecked] = useState(false)

    const toggleOpacity = () => {
        setIsOpaque(prevState => !prevState)
    }

    const removeChecked = () => {
        setHideChecked(prevState => !prevState)
    }

    const removeUnchecked = () => {
        setHideUnchecked(prevState => !prevState)
    }

    const hideCheckedButtonStyle = {
        'opacity': hideUnchecked ? 0.3 : 1,
        'pointer-events': hideUnchecked ? 'none' : '',
    }

    const hideUncheckedButtonStyle = {
        'opacity': hideChecked ? 0.3 : 1,
        'pointer-events': hideChecked ? 'none' : '',
    }

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
                <div class="goalsTextContent">
                    
                    <button onClick={toggleOpacity}>{isOpaque ? 'Hide tags' : 'Show tags'}</button>
                    <button style={hideUncheckedButtonStyle} onClick={removeUnchecked}>{hideUnchecked ? 'Show unachieved goals' : 'Hide unachieved goals' + ' (' + goalsConcat.reduce((acc, cur) => cur.status === 'u' ? ++acc : acc, 0) + ')'}</button>
                    <button style={hideCheckedButtonStyle} onClick={removeChecked}>{hideChecked ? 'Show achieved goals' : 'Hide achieved goals' + ' (' + goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0) + ')'}</button>
                    
                    <p></p>
                </div>
                <p style={placeholderTop}> </p>

                <GoalCategory array={goals1} 
                    name='EXPERIENCES: GENERAL' 
                    desc='ACTIVITIES, EVENTS, FUN, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals2} 
                    name='EXPERIENCES: LOCATION SPECIFIC' 
                    desc='ACTIVITIES, EVENTS, FUN, ETC. IN A SPECIFIC PLACE'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals3} 
                    name='EXPLORING' 
                    desc='PLACES, TRAVEL CHALLENGES, TRANSPORTATION, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals4} 
                    name='OBSERVING' 
                    desc='NATURE, PHENOMENA, THINGS, LIVING BEINGS, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals5} 
                    name='LIFESTYLE' 
                    desc='NOMADISM, MINIMALISM, ASCETICISM, FREEDOM, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals6} 
                    name='LEARNING' 
                    desc='KNOWLEDGE, SKILLS, EDUCATION'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals7} 
                    name='CREATIVITY' 
                    desc='BLOG, YOUTUBE, MUSIC, DIY, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals8} 
                    name='SOCIAL' 
                    desc='APPEARANCE, ACQUAINTANCES, ENGAGEMENT, PUBLICITY, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals9} 
                    name='PRODUCTIVITY' 
                    desc='SELF-MANAGEMENT, HABITS, WORK OPTIMIZATION, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals10} 
                    name='CAREER & FINANCE' 
                    desc='TECH, WORK PROJECTS, INVESTMENTS, FINANCIAL INDEPENDENCE'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals11} 
                    name='BODY' 
                    desc='HEALTH, FITNESS, PHYSICAL CHALLENGES'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals12} 
                    name='GOOD DEEDS' 
                    desc='HELPING, VOLUNTEERING, CHARITY, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals13} 
                    name='FOOD' 
                    desc='EAT, DRINK, COOK'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals14} 
                    name='SELF' 
                    desc='PERSONALITY, SPIRITUALITY, INNER PEACE'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals15} 
                    name='PROPERTY'
                    desc='POSSESSIONS, REAL ESTATE, HOME DECORATION, ETC.'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>

                <GoalCategory array={goals16} 
                    name='MISC' 
                    desc='UNSORTED, EXTRAORDINARY'
                    isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>
                
            </div> 
            <div class="lastUpdatedGoals">UPDATED ON {goalsLastUpdated}</div>
        </div> 
        <div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId='goals' showDislikes={true} /></div>
    </motion.div>
  );
};
  
export default Goals;
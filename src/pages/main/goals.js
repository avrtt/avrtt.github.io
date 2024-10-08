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
                    <M text="Here you can find the public version of my bucket list, which is actually an organized collection of my life's achievements if it was a RPG (that's exactly how I feel this life). There are boring cliché goals, serious and challenging ones, but also just simple little things for folks who, like me, enjoy goofing around doing stupid and sometimes epic dangerous stuff, because that's what makes life exciting."/>
                    <M text="Keeping a list of goals constantly reminds me of my passions and motivates me to push forward, and I hope it can give you some inspiration if you're feeling stuck in life."/>
                    <M text="Before you dive deep, here's a little explanation of the notation:"/>
                    <ul>
                        <li><span class="tooltipGoals"><img id="checkboxStyle" style={textImg} src={info} class=".c" alt='checkbox'/><span class="tooltiptextGoals">Hooray, you've discovered mouse control!</span></span> will prompt additional information about a goal on hover </li>
                        <li><img src={refLink} style={textImg} /> can be a reference, inspiration, or extra source to describe a goal</li>
                        <li><img src={resultLink} style={textImg} /> is a link to the result or proof of accomplishing a goal</li>
                        <li>The right side of the page shows two tags: difficulty/rareness (stars) and the level of risk</li>
                        <li>A bunch of icons on the left side represent the category tags for navigation and the statistics at the bottom of the page</li>
                        <li>The text after "–" reflects a rough deadline for a goal </li>
                        <li>Hovering over the <span class="tooltipGoals"><img id="checkboxStyle" style={textImg} src={checkbox} class=".c" alt='checkbox'/><span class="tooltiptextGoals">Yep, just like that.</span></span> icons displays the dates of completion</li>
                    </ul>

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
                
                <br/>
                <div class="sectionBreak"><M text="----------"/></div>
                <p style={placeholderBottom}> </p>
                <div class="goalsTextContent">
                    <M text="For me, keeping a list of goals has become one of the biggest drivers of a fulfilling life, and this website is a reminder of how to live in a more peaceful yet epic, creative lifestyle. Even if I won't live long enough to accomplish this - even half - I'm glad there's a place for my ideas somewhere, because they will live on after me and can inspire people to live the vibrant lives they want."/>
                    <M text="If you have any ideas for goals, I'd really appreciate it if you could share them in the comments section below."/>
                </div>
            </div> 
            <div class="lastUpdatedGoals">UPDATED ON {goalsLastUpdated}</div>
            <br/><br/>
            <div class="noselect" style={tagStatsWrapper}>
                {goalsTagsSpecific && goalsTagsSpecific.map(tag =>                  
                    <p class={tag.name} style={tagStat}>
                        <span class="select">{tag.emoji}</span>
                        &nbsp;
                        <span>{tag.name}</span>
                        &nbsp;
                        <span class={tag.name} style={taggedGoalsNumStyle}>{
                            goalsConcat.reduce((acc, cur) => cur.difftag === String(tag.emoji) && cur.status === 'c' ? ++acc : acc, 0) +
                            goalsConcat.reduce((acc, cur) => cur.safetytag === String(tag.emoji) && cur.status === 'c' ? ++acc : acc, 0)} 
                            <span>/{
                                goalsConcat.reduce((acc, cur) => cur.difftag === String(tag.emoji) ? ++acc : acc, 0) +
                                goalsConcat.reduce((acc, cur) => cur.safetytag === String(tag.emoji) ? ++acc : acc, 0)}
                            </span>
                        </span>
                    </p>
                )}
            </div>
            <div className="noselect" style={tagStatsWrapper}>
                {goalsTagsCategories.map(tag => {
                    const totalGoals = goalsConcat.reduce((acc, cur) => {
                        const isTagged = [cur.tag1, cur.tag2, cur.tag3, cur.tag4, cur.tag5].includes(String(tag.emoji))
                        return isTagged ? acc + 1 : acc
                    }, 0)
                    const completedGoals = goalsConcat.reduce((acc, cur) => {
                        const isTaggedAndCompleted = [cur.tag1, cur.tag2, cur.tag3, cur.tag4, cur.tag5].includes(String(tag.emoji)) && cur.status === 'c'
                        return isTaggedAndCompleted ? acc + 1 : acc
                    }, 0)
                    return { ...tag, totalGoals, completedGoals }
                }).sort((a, b) => b.totalGoals - a.totalGoals).map(tag =>
                    <p className={tag.name} style={tagStat} key={tag.name}>
                        <span className="select">{tag.emoji}</span>
                        &nbsp;
                        <span>{tag.name}</span>
                        &nbsp;
                        <span className={tag.name} style={taggedGoalsNumStyle}>
                            {tag.completedGoals}/{tag.totalGoals}
                        </span>
                    </p>
                )}
            </div>
            <div class="tagStatsWrapper noselect">
                <span class="tagStats">
                    {goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0)}&nbsp;
                    <span style={spanStyle}>/ {goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0) 
                        + goalsConcat.reduce((acc, cur) => cur.status === 'u' ? ++acc : acc, 0)}</span>
                </span>
            </div>
        </div> 
        <div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId='goals' showDislikes={true} /></div>
    </motion.div>
  );
};
  
export default Goals;
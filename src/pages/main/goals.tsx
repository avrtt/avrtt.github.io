/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useState, useRef } from 'react';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import { TelegramComments } from 'react-telegram-comments';
import { graphql, useStaticQuery } from 'gatsby';
import { goalsTags } from '../../data/goals/tags';
import { goalsLastUpdated } from '../../data/lastUpdated';
import M from '../../components/Markdown';
import cover from '../../images/covers/goals.jpg';
import { StaticImage } from "gatsby-plugin-image";
import StickerPack from '../../components/StickerPack';
import GoalCategory from '../../components/GoalCategory';
import checkbox from "../../images/goals/checked.svg";
import refLink from "../../images/goals/refLink.svg";
import resultLink from "../../images/goals/resultLink.svg";
import info from "../../images/goals/info.svg";
import Notice from '../../components/Notice';
import * as stylesGoalsPage from "../../styles/goals_page.module.scss"
import * as stylesSpoilers from "../../styles/spoilers.module.scss"
import * as stylesButtonsCommon from "../../styles/buttons_common.module.scss"
import * as stylesCommentsSections from '../../styles/comments_sections.module.scss';

const goalsTagsSpecific = goalsTags.filter((x) => x.name === 'COMMON' || x.name === 'UNCOMMON' || x.name === 'RARE' || x.name === 'LEGENDARY' || x.name === 'SAFE' || x.name === 'UNSAFE' || x.name === 'DANGEROUS');
const goalsTagsCategories = goalsTags.filter((x) => !goalsTagsSpecific.includes(x));

const spanStyle = {
	'opacity': 0.5,
}

const tagStatsWrapper = {
    'fontSize': 'clamp(0.4rem, 2.5vw, 1rem)',
    'marginLeft': '5%',
    'marginRight': '5%',
    'maxWidth': '100%',
    'textAlign': 'center' as const,
    'marginTop': '18px',
    'marginBottom': '-4px'
}

const tagStat = {
    'backgroundColor': '#D7D7D7',
    'borderRadius': '10px',
    'display': 'inline-block',
    'fontWeight': 'bold',
    'paddingLeft': '10px',
    'paddingRight': '10px',
    'verticalAlign': 'middle',
    'margin': '4px 2px 0 2px',
}

const taggedGoalsNumStyle = {
    'opacity': '0.6'
}

const textImg = {
    'width': '32px',
    'opacity': '0.4',
    'verticalAlign': 'middle',
    'margin': '0'
}

interface Goal {
    text: string;
    status: 'c' | 'u';
    deadline?: string;
    dateCompleted?: string;
    difftag?: string;
    safetytag?: string;
    tag1?: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
    tag5?: string;
    info?: string;
    refLink?: string;
    resultLink?: string;
}

const Goals = () => {

    const collRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const coll = collRef.current;
        coll.forEach((element) => {
            if (element) {
                element.addEventListener("click", toggleContent);
            }
        });
        return () => {
            coll.forEach((element) => {
                if (element) {
                    element.removeEventListener("click", toggleContent);
                }
            });
        };
    }, []);

    const toggleContent = (event: Event) => {
        const button = event.currentTarget as HTMLButtonElement;
        const content = button.nextElementSibling as HTMLElement;
        button.classList.toggle(stylesSpoilers.activeSpoiler);
        if (content.style.maxHeight) {
            content.style.maxHeight = "";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    const data = useStaticQuery(graphql`
        query {
          allGoalsYaml {
            nodes {
              order
              title
              description
              goals {
                text
                status
                deadline
                dateCompleted
                difftag
                safetytag
                tag1
                tag2
                tag3
                tag4
                tag5
                info
                refLink
                resultLink
              }
            }
          }
        }
      `
    )
    
    const sortedCategories = data.allGoalsYaml.nodes.sort((a: any, b: any) => a.order - b.order);
    const allGoals = data.allGoalsYaml.nodes.map((node: any) => node.goals);
    const goalsConcat = [].concat(...allGoals) as Goal[];

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

    const hideCheckedButtonOpacity = hideUnchecked ? 0.3 : 1
    const hideUncheckedButtonOpacity = hideChecked ? 0.3 : 1

  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>

        <StaticImage
            className="pageCover" 
            src="../../images/covers/goals.jpg" 
            alt="Page cover: a painting depicting a trophy room"
        />

        <div className="goalsBody">

            <div className="goalsBodyNested">
                <div className={stylesGoalsPage.goalsTextContent}>

                    <Notice title="☝️ Wait a moment" text="I've removed the goals to reorganize them into categories. They'll be here soon. You can only see the test ones."/>

                    <p>Here you can find the public version of my bucket list, which is actually an organized collection of my life's achievements if it was a RPG (that's exactly how I feel this life). There are boring cliché goals, serious and challenging ones, but also just simple little things for folks who, like me, enjoy goofing around doing stupid and sometimes epic dangerous stuff, because that's what makes life exciting. <StickerPack sticker="pug_dance"/> </p>
                    <div className="desktopOnlySupport">
                        <button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
                            &nbsp;&nbsp;
                            <span className={stylesSpoilers.spoilerText}></span>
                            Spoiler: How to read this list
                            &nbsp;&nbsp;
                        </button>
                        <div className={stylesSpoilers.spoilerContentWrapper}>
                            <div className={stylesSpoilers.spoilerContentGoals}>
                                <M text="Before you dive deep, here's a little explanation of the notation:"/>
                                <ul>
                                    <li><span className={stylesGoalsPage.tooltipGoals}><img style={textImg} src={info} className={stylesGoalsPage.c} alt='info-icon'/></span> will show additional information about a goal on hover </li>
                                    <li><img src={refLink} style={textImg} alt="reference-icon" /> can be a reference, inspiration, or extra source to describe a goal</li>
                                    <li><img src={resultLink} style={textImg} alt="result-link-icon" /> is a link to the result or proof of accomplishing a goal</li>
                                    <li>The right side of the page shows two tags: difficulty/rareness (stars) and the level of risk</li>
                                    <li>The date/text after "–" reflects a rough deadline for a goal</li>
                                    <li>The bunch of icons after each goal description represent the category tags for navigation and the statistics at the bottom of the page</li>
                                    <li>Hovering over the <span className={stylesGoalsPage.tooltipGoals}><img id={stylesGoalsPage.checkboxStyle} style={textImg} src={checkbox} className={stylesGoalsPage.c} alt='checkbox-icon'/><span style={{ left: "50%"}} className={stylesGoalsPage.tooltiptextGoals}>You've discovered mouse control!</span></span> icons displays the date and location of completion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <M text="Keeping a list of goals constantly reminds me of my passions and motivates me to push forward, and I hope it can give you some inspiration if you're feeling stuck in life."/>
                </div>
            </div>
            <br/>
            <div className="goalsBodyNested goalsBodyNestedMain">
                <div className={stylesGoalsPage.goalsButtonsWrapper}>
                    <motion.button onClick={toggleOpacity} whileTap={{ scale: 0.93 }} className={`desktopOnlySupport noselect ${stylesGoalsPage.goalsButton}`}>
                        <motion.div
                            className={stylesButtonsCommon.buttonTextWrapper}
                            key={isOpaque ? 'opaque' : 'transparent'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {isOpaque ? 'Hide tags' : 'Show tags'}
                        </motion.div>
                    </motion.button>
                    <span className="mobileOnlySupport"><br/></span>
                    <motion.button 
                        style={{ opacity: hideUncheckedButtonOpacity }} 
                        onClick={removeUnchecked} 
                        whileTap={{ scale: 0.93 }} 
                        className={`noselect ${stylesGoalsPage.goalsButton}`}
                        disabled={hideChecked}
                    >
                        <motion.div
                            className={stylesButtonsCommon.buttonTextWrapper}
                            key={hideUnchecked ? 'hidden-unchecked' : 'shown-unchecked'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <span>
                                {hideUnchecked ? 'Show unachieved goals' : 'Hide unachieved goals'}
                            </span>
                            <span className={stylesGoalsPage.goalsButtonCount}>
                                {hideUnchecked ? ' (' + goalsConcat.reduce((acc, cur) => cur.status === 'u' ? ++acc : acc, 0) + ')' : ' (' + goalsConcat.reduce((acc, cur) => cur.status === 'u' ? ++acc : acc, 0) + ')'}
                            </span>
                        </motion.div>
                    </motion.button>
                    <span className="mobileOnlySupport"><br/></span>
                    <motion.button 
                        style={{ opacity: hideCheckedButtonOpacity }} 
                        onClick={removeChecked} 
                        whileTap={{ scale: 0.93 }} 
                        className={`noselect ${stylesGoalsPage.goalsButton}`}
                        disabled={hideUnchecked}
                    >
                        <motion.div
                            className={stylesButtonsCommon.buttonTextWrapper}
                            key={hideChecked ? 'hidden-checked' : 'shown-checked'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <span>
                                {hideChecked ? 'Show achieved goals' : 'Hide achieved goals'}
                            </span>
                            <span className={stylesGoalsPage.goalsButtonCount}>
                                {hideChecked ? ' (' + goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0) + ')' : ' (' + goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0) + ')'}
                            </span>
                        </motion.div>
                    </motion.button>
                </div>
                <br/>
                <span className="mobileOnlySupport"><br/></span>
                {sortedCategories.map((category) => (
                    <GoalCategory
                        array={category.goals}
                        name={category.title} 
                        desc={category.description} 
                        isOpaque={isOpaque}
                        hideChecked={hideChecked}
                        hideUnchecked={hideUnchecked}
                    />
                ))}
                <br/>
            </div>
            <br/>
            <div className="goalsBodyNested">
                <div className={stylesGoalsPage.goalsTextContent}>
                    <M text="For me, keeping a list of goals has become one of the biggest drivers of a fulfilling life, and this website is a reminder of how to live in a more peaceful yet epic and creative lifestyle. Even if I won't live long enough to accomplish this - even half - I'm glad there's a place for my ideas somewhere, because they will live on after me and can inspire people to live the vibrant life they want."/>
                    <M text="If you have any ideas for goals, I'd really appreciate it if you could share them in the comments section below."/>
                </div>
            </div> 
            <div className="lastUpdatedGoals">UPDATED ON {goalsLastUpdated}</div>
            <br/><br/>
            <div className="noselect" style={tagStatsWrapper}>
                {goalsTagsSpecific && goalsTagsSpecific.map(tag =>                  
                    <p className={stylesGoalsPage[tag.name]} style={tagStat}>
                        <span className="select">{tag.emoji}</span>
                        &nbsp;
                        <span>{tag.name}</span>
                        &nbsp;
                        <span className={tag.name} style={taggedGoalsNumStyle}>{
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
                    <p className={stylesGoalsPage[tag.name]} style={tagStat} key={tag.name}>
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
            <div className={stylesGoalsPage.tagStatsWrapper}>
                <span className={stylesGoalsPage.tagStats}>
                    {goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0)}&nbsp;
                    <span style={spanStyle}>/ {goalsConcat.reduce((acc, cur) => cur.status === 'c' ? ++acc : acc, 0) 
                        + goalsConcat.reduce((acc, cur) => cur.status === 'u' ? ++acc : acc, 0)}</span>
                </span>
            </div>
        </div> 
        <div className={stylesCommentsSections.chatWrapper}><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId='goals' showDislikes={true} /></div>
    </motion.div>
  );
};

export default Goals;

export const Head = () => (
  <SEO 
    title="Goals - avrtt.blog"
    description="Explore my bucket list filled with various life goals."
    keywords={["bucket list", "list of achievements", "list of life goals", "personal goals", "personal achievements"]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/goals"
    
  />
)

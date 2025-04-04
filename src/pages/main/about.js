import React, { useEffect, useState, useRef } from 'react';
import SEO from '../../components/seo'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import H from '../../components/Highlight';
import S from '../../components/Shine';
import Tooltip from '../../components/Tooltip';
import ContentBlock from '../../components/ContentBlock';
import TileContainer from '../../components/TileContainer';
import VisitedCountriesMap from '../../components/VisitedCountriesMap';
import LastThreeGalleryImages from '../../components/LastThreeGalleryImages'
import { aboutLastUpdated } from '../../data/lastUpdated';
import { getNumOfVisitedISOa2, getNumOfAllISOa2 } from '../../utils/countryCounters';
import { StaticImage } from 'gatsby-plugin-image';
import CountPosts from "../../fetchers/count_posts";
import { projectsCount } from '../../data/freelance/arrays';
import wave from "../../images/about/wave.png"; 
import disguise from "../../gifs/disguise.gif";
import plant from "../../gifs/plant.gif";
import cool from "../../gifs/cool.gif";
import gear from "../../gifs/gear.gif";
import notes from "../../gifs/notes.gif";
import snake from "../../gifs/snake.gif";
import camping from "../../gifs/camping.gif";
import globe from "../../gifs/globe.gif";
import footprints from "../../gifs/footprints.gif";
import cap from "../../gifs/cap.gif";
import rocket from "../../gifs/rocket.gif";
import robot from "../../gifs/robot.gif";
import sparkles from "../../gifs/sparkles.gif";
import pencil from "../../gifs/pencil.gif";
import dove from "../../gifs/dove.gif";
import hide from "../../gifs/hide.gif";
import monocle from "../../gifs/monocle.gif";
import photoAbout from "../../images/about/photoAbout.jpg";
import { Link } from 'gatsby';
import LocationAnnouncements from "../../components/LocationAnnouncements";
import * as stylesTagBadges from "../../styles/tag_badges.module.scss";
import * as stylesAboutPage from "../../styles/about_page.module.scss";
import * as stylesSpoilers from "../../styles/spoilers.module.scss";

const greetingsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
}

const About = () => {

    const isBrowser = typeof window !== 'undefined';
    const [screenWidth, setScreenWidth] = useState(isBrowser ? window.innerWidth : 1200);
    const collRef = useRef([]);
    
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

    const toggleContent = (event) => {
        const content = event.target.nextElementSibling;
        event.target.classList.toggle(stylesSpoilers.activeSpoiler);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    useEffect(() => {
        if (!isBrowser) return;
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isBrowser]);

    var mapWidth, mapHeight, mapMarginLeft, mapMarginRight, mapWidthFlat, mapHeightFlat, scaleFlat, widthDivisorFlat
    if (screenWidth <=991) { 
        mapWidthFlat = screenWidth / 1.5
        mapHeightFlat = mapWidthFlat / 1.6
        scaleFlat = mapWidthFlat * 0.55 / 2.5
        widthDivisorFlat = screenWidth / mapWidthFlat * 1.45
    }
    else if (screenWidth >= 992 && screenWidth <=1249) { 
        mapWidth = screenWidth / 3 
        mapHeight = screenWidth / 3
        mapMarginLeft = "-" + 5 + "vw"
        mapMarginRight = "-" + 5 + "vw"
    }
    else if (screenWidth >= 1250 && screenWidth <= 2099) { 
        mapWidth = (screenWidth - 210) / 2 
        mapHeight = 600
        mapMarginLeft = "-" + screenWidth / 350 + "vw"
        mapMarginRight = "-" + screenWidth / 300 + "vw"
    }
    else if (screenWidth >= 2100) { 
        mapWidth = (screenWidth - 210) / 3
        mapHeight = 600
        mapMarginLeft = screenWidth / 500 + "vw"
        mapMarginRight = "-" + screenWidth / 500 + "vw"
    }

    const { courseCount } = CountPosts();
	
    return (
        <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.15 }}>
                       
            <div class="aboutBodyTile">
                <div className={`${stylesAboutPage.greetingsWrapper} ${stylesAboutPage.tileContainer} noselect`}>
                    <p style={greetingsStyle}>
                        <img className={stylesAboutPage.wave} src={wave} alt="👋🏻"/>
                        <span>Hi there! I'm Vlad.</span>
                        <StaticImage
                            src="../../images/about/photoAbout.jpg"
                            alt="photo-vladislav-averett"
                            placeholder="blurred"
                            width={350}
                            quality="100"
                            className={stylesAboutPage.aboutPhoto}
                        />
                    </p>
                </div>
                <TileContainer columns={2} animationonscroll={false} gap="1.5vw" marginBottom="4vh" marginTop="2vh">
                    <ContentBlock
                        isMarkdown={false}
                        description={
                            <>
                                I'm an adventurous <H>nomad</H>, <H>data scientist</H>, aspiring <H>AI researcher</H>, occasional <H>developer</H>, experimental <H>musician</H> and <H>content creator</H> from 🐻 <strong>Russia</strong> (living abroad).
                            </>
                        }
                        backgroundColor="transparent"
                        fontSizeTitle="40px"
                        paddingDescription="0"
                        divAnimation={false}
                        width="30%"
                    />
                    <div className="mobileOnlySupport"><br/></div>
                    <ContentBlock
                        description={<>
                            My life has been devoted to <b>discovery</b> and <b>inspiration</b> through wandering, documenting life and <Link to="/goals">testing my resolve</Link>. I'm committed to contributing both to <H>people's hearts</H> and to <H>science</H> — these are my two missions: one to focus on now, and one for later. <br/><br/> I'm curious and creative, I live slowly and freely, and my works are deeply imbued with Zen weirdness. I'd like to see the world to acquire wisdom — in order to dive fully into science afterward. Because science requires a grasp of humanity.
                        </>}
                        isMarkdown={false}
                        backgroundColor="transparent"
                        paddingDescription="0"
                        divAnimation={false}
                        width="65%"
                    />
                </TileContainer>
                <TileContainer columns={1} animationonscroll={false}  marginBottom="8vh" marginTop="0vh">
                    <ContentBlock
                        description={<>
                            <p className="desktopOnlySupport">Let me introduce myself here in some detail.</p>
                            <p style={{ textAlign: "left" }} className="mobileOnlySupport">Let me introduce myself here in some detail.<br/><br/></p>
                        </>}
                        backgroundColor="transparent"
                        fontSizeTitle="40px"
                        paddingDescription="0"
                        divAnimation={false}
                        isMarkdown={false}
                        textAlign='center'
                        textColor="#7d7d7d"
                    />
                </TileContainer>
                <div className="mobileOnlySupport"><br/></div>
                <TileContainer columns={1}>
                    <ContentBlock
                        emoji='✨'
                        emojiGif={sparkles}
                        description="In 2020, during university, I realized that I should stop vegetating at home all the time, and became obsessed with the idea of traveling: back then, I spent days on end coming up with my own itineraries, figuring out the ins and outs and studying about countries along with my main classes. I spent a *lot* of time on it, but it paid off: now I have my own guidebook, as well as an understanding of which specific places I want to visit and how to get through them in the most optimal way. Some time later, I made my first solo trip in the Altai Republic to see how much money I'd actually need — but quickly realized I need nothing at all."
                        backgroundColor="#E5E5E5"
                        justifyContent = 'start'
                        emojiAlign='left'
                    />
                </TileContainer>
                <TileContainer columns={3}>
                    <ContentBlock
                        emoji=' '
                        description={''}
                        backgroundColor="#f2f2f2"
                        width='11%'
                        textColor="#7d7d7d"
                        paddingDescription="0.8rem 1rem 0rem 1rem"
                        divAnimation={false}
                        isMarkdown={false}
                    />
                    <ContentBlock
                        emoji='🕊️'
                        emojiGif={dove}
                        description="During [another wave](https://en.wikipedia.org/wiki/Russian_emigration_during_the_Russian_invasion_of_Ukraine) of emigration from Russia, I decided to start living on the road instead of settling somewhere. To achieve this, I've learned to work remotely and became an extreme minimalist, then [grabbed a camera](https://www.youtube.com/@vladaverett) and transformed my life into a full-time adventure."
                        backgroundColor="#E5E5E5"
                        justifyContent = 'start'
                        emojiAlign='right'
                        width='75%'
                    />
                    <ContentBlock
                        emoji=' '
                        description={''}
                        backgroundColor="#f2f2f2"
                        width='11%'
                        textColor="#7d7d7d"
                        paddingDescription="0.8rem 1rem 0rem 1rem"
                        divAnimation={false}
                        isMarkdown={false}
                    />
                </TileContainer>
                <div className="mobileOnlySupport"><br/></div>
                <TileContainer columns={2}>
                    <ContentBlock
                        emoji='🏕️'
                        emojiGif={camping}
                        description={<><p>Now I live for exploration, which changed my lifestyle: a five-something-kg backpack of everything I own (my home, basically), <a href="https://en.wikipedia.org/wiki/Simple_living">simple living</a>, total mobility and genuine hobo-punk spirit. I tend to invest in experiences, being a renter, not looking for material possessions. No shoes & no problems. Only freedom and rock 'n' roll mixed with inner peace — I refer to my own "philosophy" as <S><H>"Zenpunk"</H></S>, and it sounds sexy.  <br/><br/> After exploring most countries, I'll probably start traveling more casually, but while I'm young — there can't be any other options. Seize the day!</p>
                        </>}
                        backgroundColor="#E5E5E5"
                        justifyContent = 'start'
                        emojiAlign='right'
                        width="46%"
                        isMarkdown={false}
                    />
                    <ContentBlock
                        emoji='👣'
                        emojiGif={footprints}
                        description={<><p>At the moment I'm <Link to="/gear">sticking</Link> to <H>hobo travel style</H>, namely the triad: <a href="https://en.wikipedia.org/wiki/Ultralight_backpacking">lightpacking</a>, <a href="https://en.wikipedia.org/wiki/Hitchhiking">hitchhiking</a> and <a href="https://en.wikipedia.org/wiki/Couch_surfing">couchsurfing</a>. I almost always travel solo, over long distances at a time, co-op with other <a href="https://en.wikipedia.org/wiki/Digital_nomad">digital nomads</a> at stopovers, and stay away from touristy spots, occasionally venturing out on small 1-2 day <a href="https://en.wikipedia.org/wiki/Backpacking_(hiking)">treks</a> with a tent. This style requires almost no money, and therefore allows me to work much less often. I also intend to try <b>moto-traveling</b> and <b>van-dwellling</b> in the future, but for now extreme is preferred — the lack of pretentiousness makes it possible to understand people better by living alongside them, as well as to learn how to get out of trouble, speak to people, not give up.</p></>}
                        backgroundColor="#E5E5E5"
                        justifyContent = 'start'
                        emojiAlign='center'
                        width="52.5%"
                        isMarkdown={false}
                    />
                </TileContainer>
                <div className="desktopOnlySupport">
                    <TileContainer columns={3}>
                        <VisitedCountriesMap 
                            isFlat={false}
                            marginLeft={mapMarginLeft}
                            marginRight={mapMarginRight}
                            width={mapWidth}
                            height={mapHeight}
                        />
                        <ContentBlock
                            emoji="🌍"
                            emojiGif={globe}
                            description={<>
                                <p>I love <H>maps</H>, and especially to draw maps <i>of</i> and <i>for</i> my journeys. I turned map planning into a science, so now I treat traveling accordingly: <i>absolute</i> spontaneity isn't my style; I always need a plan and methodology. <br/><br/> So far, I've visited <H>{getNumOfVisitedISOa2()}</H><b>/{getNumOfAllISOa2()}</b> countries & territories. The globe is simplified: it omits routes and region/subject subdivision; for more detailed maps, see <Link to="/exploration">Exploration</Link>. <br/><br/> I'd like to <Link to="/handbook">save my methods</Link> and routes to share the stories behind them with people from around the world. One day, I hope to welcome guests to my home country with the same hospitality that I've experienced in my travels.</p>
                            </>}
                            isMarkdown={false}
                            backgroundColor="#dbdbdb"
                            justifyContent = 'start'
                            emojiAlign='left'
                            width="40%"
                        />
                        <ContentBlock
                            emoji=""
                            emojiGif={""}
                            description=""
                            isMarkdown={false}
                            backgroundColor="#f2f2f2"
                            justifyContent = 'start'
                            emojiAlign='center'
                            width="0%"
                        />
                    </TileContainer>
                </div>
                <div className="mobileOnlySupport">
                    <br/>
                    <Link to="/exploration">
                        <VisitedCountriesMap 
                            isFlat={true} 
                            width={mapWidthFlat} 
                            height={mapHeightFlat}
                            scale={scaleFlat}
                            widthDivisor={widthDivisorFlat}
                        />
                    </Link>
                    <ContentBlock
                        emoji=' '
                        description={<>
                            <p>Visited countries ⬆️</p>
                        </>}
                        backgroundColor="#f2f2f2"
                        textColor="#7d7d7d"
                        textAlign="center"
                        paddingDescription="0rem 0 2rem 0"
                        divAnimation={false}
                        isMarkdown={false}
                    />
                </div>
                <TileContainer columns={3}>
                    <ContentBlock
                        emoji="🤖"
                        emojiGif={robot}
                        description={<>
                            <p><H>AI</H> and <H>data</H> has fascinated me even longer — that's why I chose a related career. It's a piece of pleasant routine: with my active lifestyle, I'm glad I can slow down to delve into complicated things requiring diligence. Some of my discoveries are published in <Link to="/research">Research</Link>.</p>
                        </>}
                        isMarkdown={false}
                        backgroundColor="#dbdbdb"
                        justifyContent = 'start'
                        emojiAlign='center'
                        width="40%"
                    />
                    <ContentBlock
                        emoji="🚀"
                        emojiGif={rocket}
                        description={<>
                            <p>I'm a multidisciplinary <H>full-time freelancer</H>: I work with data, do analytics, design AI algorithms and build software (see <Link to="/freelance">my portfolio</Link> with <H>{projectsCount} projects</H>). It's a starter for my small, slowly growing business.</p>
                        </>}
                        isMarkdown={false}
                        backgroundColor="#dbdbdb"
                        justifyContent = 'start'
                        emojiAlign='center'
                        width="31%"
                    />
                    <ContentBlock
                        emoji="🎓"
                        emojiGif={cap}
                        description={<>
                            <p>I'm also an author and maintainer of a <Link to="/course">free in-depth course</Link> on machine learning and data science. There are <H><strong>{courseCount}</strong> articles</H> in the course so far.</p>
                        </>}
                        isMarkdown={false}
                        backgroundColor="#dbdbdb"
                        justifyContent = 'start'
                        width="26%"
                    />
                </TileContainer>
                <TileContainer columns={2} animationonscroll={false} marginBottom='4vh'>
                    <ContentBlock
                        emoji='✏️'
                        emojiGif={pencil}
                        description={<>
                            <p>Since my life is full of adventure, I feel this <H>journey should be shared</H>. I don't like identical travel (b/v)logs, so I regularly experiment with different formats and styles — composing <b>soundtracks</b>, referencing art in my <b>writing</b>, and practicing <b>filmmaking</b> (to make a feature-length?) — eventually, I'll create my own style. The diary isn't just this site or YouTube channel, nor is it only about the "Zen pilgrimage" inside myself or a collection of travel memoirs. My work extends beyond my personality into artistic imagery, dissolving the lyrical hero into the viewer's stream of consciousness. <br/><br/> I've been publishing my reflections in the form of "diaries of an ascetic" since 2019, originally in Russian. Now, I create content mostly in English — to foster my own small global community and to become more open. </p>
                        </>}
                        isMarkdown={false}
                        backgroundColor="#DEDEDE"
                        justifyContent = 'start'
                        emojiAlign='right'
                        width="64%"
                    />
                    <ContentBlock
                        emoji="🎶"
                        emojiGif={notes}
                        description={<>
                            <p><H>Music</H> is my side passion, a place for my alter ego. Starting with writing <b>black metal</b> and <b>dungeon synth</b>, I gradually switched to dark-sounding <b>ambient/noise/drone</b> and raw <b>techno</b>, and now practice creating experimental IDs (often combining all the mentioned genres). <br/><br/> I also enjoy <H>DJing</H>, mixing "electro punk" sets for small home parties or undisclosed underground "raves".</p>
                        </>}
                        backgroundColor="#DEDEDE"
                        justifyContent = 'start'
                        textAlign='left'
                        emojiAlign='center'
                        isMarkdown={false}
                        width="34.5%"
                    />
                </TileContainer>
                <div className="mobileOnlySupport"><br/></div>
                <AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
                    <div class="aboutBodyRegular">
                        <M text="# 🗓 BIOGRAPHY TIMELINE"/>
                        <div class="listDescTime"><M text="- 2008 June"/></div>
                        <div class="listDescItem"><M text="Moved from 🇰🇬 [Bishkek](https://en.wikipedia.org/wiki/Bishkek) to 🇷🇺 [Orenburg](https://en.wikipedia.org/wiki/Orenburg), the family's hometown where I spent my school years"/></div>
                        <div class="listDescTime"><M text="- 2023 July"/></div>
                        <div class="listDescItem"><M text="Got a bachelor's degree in 🇷🇺 [Novosibirsk](https://en.wikipedia.org/wiki/Novosibirsk), where I moved from parents at 18"/></div>
                        <div class="listDescTime"><M text="- 2023 July"/></div>
                        <div class="listDescItem"><M text="Moved to 🇬🇪 [Batumi](https://en.wikipedia.org/wiki/batumi) and got some hitchhiking experience with almost no money in the Caucasus and Kurdistan"/></div>
                        <div class="listDescTime"><M text="- 2024 June"/></div>
                        <div class="listDescItem"><M text="Became a full-time freelancer"/></div>
                        <div class="listDescTime"><M text="- 2025 February — Ongoing"/></div>
                        <div class="listDescItem"><p>Started a free and open source <Link to="/course">course</Link> on machine learning and data science</p></div>
                        <div class="listDescTime"><M text="- 2025 March — Ongoing"/></div>
                        <div class="listDescItem"><p>Set off on my <Link to="/adventures/venturing_forth">planned trip</Link> around the world with the goal of circumnavigating the globe</p></div>
                    {/*<div class="listDescTime"><M text="- ?"/></div>
                        <div class="listDescItem"><M text="Traveled throughout Central Asia, make a long stop in 🇰🇿 [Almaty](https://en.wikipedia.org/wiki/Almaty)"/></div>*/}
                        <div class="listDescItemLast"></div>
                        <br/>
                    </div>
                
                </AnimationOnScroll>
                <div className="mobileOnlySupport"><br/></div>
                <TileContainer columns={1} marginTop='2vh' marginBottom='4vh'>
                    <div style={{ maxWidth: "fit-content", marginInline: "auto" }}>
                        <div>
                            <button style={{ maxWidth: "fit-content", marginInline: "auto" }} class="noselect" className={stylesSpoilers.spoilerButton} ref={(el) => collRef.current.push(el)}>
                                &nbsp;&nbsp;
                                <span className={stylesSpoilers.spoilerText}></span>
                                Where am I right now?
                                &nbsp;&nbsp;
                            </button>
                            <div style={{ borderRadius: "2vh" }} className={stylesSpoilers.spoilerContentWrapper}>
                                <div className={stylesSpoilers.spoilerContentAbout}>
                                    <LocationAnnouncements backgroundColor="#e7e7e7"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </TileContainer>
                <br/>
                <div className="mobileOnlySupport"><br/></div>
                <AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
                    <div class="aboutBodyRegular">
                        <M text="# 👨🏻‍💻 PROFESSIONAL CAREER"/>
                        <p>Generally speaking, I help individuals and businesses implement, configure and improve <H>AI solutions</H>, handle <H>data-related & analytical problems</H> <Tooltip text="I work with any data-driven products & data itself, which can be collected, processed, structured or analyzed, and then used to extract helpful insights, especially when it comes to building predictive models, reports, visualizations, and other tools of data analysis."/>, and develop software to <H>automate processes</H>. Sometimes I build <H>websites</H> suitable for <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">organic traffic</a> (like this one) and do other tech-related stuff.</p>
                        <div class="list">
                            <M text={`
- 🤔 Interested in <a href="https://en.wikipedia.org/wiki/Deep_learning">deep learning</a>, classical <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a> algorithms, <a href="https://en.wikipedia.org/wiki/Statistics">statistics</a>, <a href="https://en.wikipedia.org/wiki/Data_analysis">data analysis</a> and <a href="https://en.wikipedia.org/wiki/Data_and_information_visualization">data visualization</a>; passionate about everything data/AI-related
- 🤓 Secondary (hobby-like) interests: <a href="https://en.wikipedia.org/wiki/Web_development">web development</a> (mostly frontend), <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a> apps and <a href="https://en.wikipedia.org/wiki/Prompt_engineering">prompt engineering</a>
- 🔬 Prefer to analyse & research rather than develop
- 👁️ Main focus in DL applications is <a href="https://en.wikipedia.org/wiki/Computer_vision">computer vision</a> 
- 🏆 Sometimes I <a href="https://www.kaggle.com/lenferdetroud">participate</a> in ML competitions and hackathons
- 🔎 Currently developing skills towards <a href="https://en.wikipedia.org/wiki/Artificial_intelligence_engineering">AI engineering</a>
                            `}/>
                        </div>
                        <p>While not formally affiliated with academic institutions, I dedicate myself to studying scientific papers, at a slow pace, piecing together foundational knowledge of the field out of curiosity, and for the future work. My primary areas of research are <a href="https://en.wikipedia.org/wiki/Computational_creativity">computational creativity</a> and <a href="https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning">knowledge representation</a>.</p>
                        <p>For more details on my professional skills, see <Link to="/cv">the CV page</Link>. For ordering freelance services, take a look at my projects in the <Link to="/freelance">Freelance</Link> section.</p>
                    </div>
                </AnimationOnScroll>
                <div className="mobileOnlySupport"><br/></div>
                <TileContainer columns={3} marginTop='4vh' marginBottom='4vh'>
                    <ContentBlock
                        emoji="🌱"
                        emojiGif={plant}
                        description="I absolutely love **open source** and actively contributing myself (check out my [GitHub](https://github.com/avrtt)). And yes, [this site is open source](https://github.com/avrtt/avrtt.github.io) too. You can help with minor fixes or even contribute to the course!"
                        backgroundColor="#C7F6C7"
                        justifyContent = 'start'
                        emojiAlign='left'
                        width="38%"
                    />
                    <ContentBlock
                        emoji="😎"
                        emojiGif={cool}
                        description="I'm a long-time **Linux** user. My setups are usually minimalistic, lightweight and optimized as much as possible for the computer's hardware. [Here](https://github.com/avrtt/arch-dotfiles) you can find my Arch Linux config."
                        backgroundColor="#FBFBFB"
                        justifyContent = 'start'
                        emojiAlign='center'
                        width="36%"
                    />
                    <ContentBlock
                        emoji="⚙️"
                        emojiGif={gear}
                        description="I'm slowly moving towards complete [self-hosting](https://en.wikipedia.org/wiki/Self-hosting_(web_services)) of all my data and apps to stay independent."
                        backgroundColor="#d4e9fc"
                        justifyContent = 'start'
                        emojiAlign='right'
                        width="22%"
                    />
                </TileContainer>
                <div className="mobileOnlySupport"><br/></div>
                <AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
                    <div class="aboutBodyRegular">
                        <M text="# 🔥 INTERESTS"/>
                        <div class={stylesTagBadges.badgesAboutWrapper}>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🎒</span> Travel theory <Tooltip isBadge={true} text="This may sound ridiculous, but comfortable, interesting, cheap and safe (all in one) travel ALWAYS requires planning and extensive knowledge, e.g., understanding methods of transportation, local guidelines, tricks to save money, ways to find essentials and lodging w/o money, clothing and gear materials, proper communication with people, cartography, orienteering, basic survival skills, mending, weight optimization, natural phenomena and environments, physics, physiology, food energy value, different situations and many other topics along with common sense. Travel is a philosophy, a science and an art, and I'm all for rational travel."/></div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>📜</span> History <Tooltip isBadge={true} text="I'm interested in the history of all regions and nations of the world, trying to invest some time in learning about places I visit — which makes a big difference in travel experience."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🤗</span> World cultures <Tooltip isBadge={true} text="Especially Nordic, Slavic and Himalayan cultures, as well as Japanese and Chinese art."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>☯️</span> Eastern philosophy</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🗽</span> Political science</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>📢</span> Politics</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🧭</span> Cartography</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🌍</span> Geography</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>📊</span> Statistics</div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>🤖</span> Machine learning</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🪶</span> Ultralight backpacking</div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>📹</span> Vlogging</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🎥</span> Filmmaking <Tooltip isBadge={true} text="It's better to portray the spirit of wanderlust in fewer words, making an immersive experience of pure arthouse."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🎵</span> Music composition</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🏔️</span> Mountaineering <Tooltip isBadge={true} text="Nothing extreme, just casual mountain ascending. There is no better place in the world than mountains."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🌲</span> Bushcraft <Tooltip isBadge={true} text="Camping and wilderness survival skills: environmental understanding, tracking and observation, situational awareness, navigation, firecraft, food & water procurement, etc."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🔒</span> Cryptography <Tooltip isBadge={true} text="I'm fascinated by cryptography since high school (you know, felt like a hacker & netstalker), though I'm not savvy at it. Just curious about encryption methods and privacy in general, and would like to explore cybersec and complex algorithms deeply."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🌐</span> Cyberliberty <Tooltip isBadge={true} text="It's mostly about privacy-enhancing technologies (e.g., decentralized systems) and the culture of cypherpunks."/></div> 
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🗄️</span> Self-hosting</div>   
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>👍</span> Hitchhiking</div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>🛋️</span> Couchsurfing</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🦾</span> Robotics</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>👾</span> Theoretical computer science <Tooltip isBadge={true} text="Especially information theory."/></div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🎛️</span> Mixing & DJing</div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>🔎</span> Data analysis</div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>📶</span> Data visualization</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🏍️</span> Motorcycles <Tooltip isBadge={true} text="I like enduro bikes, but realistically, I'd rather buy a more practical motorcycle for traveling."/></div>
                            <div class={stylesTagBadges.badgeAboutMarked}><span class={stylesTagBadges.badgeEmoji}>📖</span> Russian literature</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>💡</span> AI research</div>
                            <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🧠</span> Philosophy of AI</div>
                            {/* Cybernetics, Transhumanism */}
                        </div>
                        <p><H color={"#ffd56a"}>Orange</H> indicates the topics and skills that I'm predominantly dedicated to right now (studying, practicing or simply being especially interested in). Actively learning/doing the same or want to share something? Feel free to <Link to="/contact">text me</Link>.</p>
                    </div>
                </AnimationOnScroll>
                <div className="mobileOnlySupport">
                    <br/><br/>
                    <span style={{ fontSize: "1.1rem", lineHeight: "1.4rem" }}>
                        <center><S><H>RANDOM FACTS & MORE FANCY BADGES</H></S></center>
                    </span>
                    <br/>
                </div>
                <div className="mobileOnlySupport"><br/></div>
                <TileContainer columns={3} marginTop='4vh' marginBottom='2vh'>
                    <ContentBlock
                        emoji=' '
                        description={<>
                            <S><p className="desktopOnlySupport noselect" style={{ transform: "rotate(-90deg)" }}><H>RANDOM FACTS & MORE FANCY BADGES</H></p></S>
                        </>}
                        backgroundColor="#f2f2f2"
                        width='16%'
                        textColor="#000000"
                        textAlign='center'
                        paddingDescription="0 0 0 0rem"
                        isMarkdown={false}
                        divAnimation={false}
                    />
                    <ContentBlock
                        emoji="🥸"
                        emojiGif={disguise}
                        description={<>
                            <p>Despite the ubiquitous usage, <b>Averett</b> isn't my surname, but a pseudonym or even <Link to="/thoughts/lifelong_pilgrimage">something of an alter ego</Link>.</p>
                        </>}
                        isMarkdown={false}
                        backgroundColor="#dbdbdb"
                        textAlign='left'
                        justifyContent='start'
                        emojiAlign='center'
                        width='28%'
                    />
                    <ContentBlock
                        emoji="😶‍🌫️"
                        emojiGif={hide}
                        description={<>
                            <p>Before 2022 I wanted to move to 🇷🇺 <a href="https://en.wikipedia.org/wiki/Saint_Petersburg">Saint Petersburg</a>, but had to put this idea on hold for an indefinite period of time&nbsp; <Tooltip text="At the moment, if I return to Russia, I won't be able to leave the country and will face repressive laws, losing many other rights — because I'm conscripted for military service (travel restrictions are imposed automatically)."/>. I'm still considering this city for permanent residence in the future, yet supposing permanent emigration if returning to Russia won't be possible for the next few years.&nbsp; <Tooltip text={`Note to self: I consider 🇦🇷 Buenos Aires on a "Nómadas digitales" visa as my top priority migration option in case I can't/won't go back to Russia, as I'd like to learn Spanish and it's possible to get citizenship there quickly (opening up free travel to Europe), so I see this passport as a good investment of ~2 years.`}/>
                            </p>
                        </>}
                        backgroundColor="#dbdbdb"
                        textAlign='left'
                        justifyContent='start'
                        emojiAlign='right'
                        width='53%'
                        isMarkdown={false}
                    />
                </TileContainer>
                <TileContainer columns={4} marginTop='2vh' marginBottom='4vh'>
                    <ContentBlock
                        emoji=""
                        emojiGif={""}
                        description=""
                        backgroundColor="#f2f2f2"
                        justifyContent = 'start'
                        textAlign='center'
                        emojiAlign='center'
                        width='5%'
                    />
                    <ContentBlock
                        emoji="🐍"
                        emojiGif={snake}
                        description={<>
                            <p>In most of my political attitudes, I support the ideas of <a href="https://en.wikipedia.org/wiki/Right-libertarianism">right-wing libertarianism</a> (more towards <a href="https://en.wikipedia.org/wiki/Classical_liberalism">classical liberalism</a>) and <a href="https://en.wikipedia.org/wiki/Cultural_conservatism">cultural conservatism</a> — as I'm moderately conservative overall.&nbsp; <Tooltip text={<>In short, I mostly advocate freedom of speech & self-defence, property & privacy rights, free-market capitalism, natural law and true federalization along with gradual reduction of government — which is (sadly) an unpopular set of views — it's neither the liberal nor the far-right side of the Russian right wing. I support some initiatives of the <b>Libertarian Party of Russia</b> since 2018; the party proposes libertarian reforms in this rusty political system, but since 2022 it has been completely in exile, mostly being focused only on distingushing Russian people from the Russian state against the backdrop of collective discrimination.</>}/>
                            </p>
                        </>}
                        backgroundColor="#fff491"
                        justifyContent = 'start'
                        textAlign='left'
                        emojiAlign='center'
                        width='52%'
                        isMarkdown={false}
                    />
                    <ContentBlock
                        emoji="🧐"
                        emojiGif={monocle}
                        description="I keep a channel [@avreads](https://t.me/avreads) in Telegram with some knowledge I get from reading Wikipedia and classic literature."
                        backgroundColor="#dbdbdb"
                        justifyContent = 'start'
                        textAlign='center'
                        emojiAlign='center'
                        width="33%"
                    />
                    <ContentBlock
                        emoji=""
                        emojiGif={""}
                        description=""
                        backgroundColor="#f2f2f2"
                        justifyContent = 'start'
                        textAlign='center'
                        emojiAlign='center'
                        width='5%'
                    />
                </TileContainer>
            </div>
            <AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
                <div class={stylesTagBadges.badgesAboutWrapper}>
                    <div class={stylesTagBadges.badgeAbout} style={{ backgroundColor: "#f2f2f2", color: "black" }}><H>Leisure & favorite activities</H> <span className="desktopOnlySupport">&nbsp;</span></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🧭</span> Exploring little-known places <Tooltip isBadge={true} text="From private underground clubs and industrial landscapes (such as factory rooftops or abandoned subway stations) to the weirdest locations like cemeteries and remote villages: my life feels like an open-world game with achievements about searching for something."/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>💪</span> Calisthenics <Tooltip isBadge={true} text="There is nothing more satisfying in this world than working out in the cold with brutal metal in your ears. I love calisthenics for mobility (workout anywhere) and as a much healthier alternative to gym for my joints and heart."/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🖼</span> Gazing at artworks <Tooltip isBadge={true} text="Especially I love Russian and Dutch landscape painters."/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>📝</span> Wikipedia <Tooltip isBadge={true} text="I have an addiction to reading Wikipedia for years, at times I edit it."/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🏰</span> Fantasy RPG <Tooltip isBadge={true} text="Fantasy and medieval aesthetics seems to be my favorite theme in video games. Sometimes I also play DnD."/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🏃</span> Trail running & hiking <Tooltip isBadge={true} text="I love nature and running, especially at dawn, and I avoid hurrying people. Running outdoors fits just right, as well as other outdoor activities."/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>📚</span> Libraries <Tooltip isBadge={true} text="I enjoy exploring libraries in different cities, often working from there (instead of boring coworking spaces), or reading encyclopedias."/></div>
                    {/* 
                        🍄 Foraging
                        🧘‍♂️ Meditation
                     */}
                </div>
                <div style={{ marginTop: "-1.5rem" }} class={stylesTagBadges.badgesAboutWrapper}>
                    <div class={stylesTagBadges.badgeAbout} style={{ backgroundColor: "#f2f2f2", color: "black" }}><H>Music preferences</H> <span className="desktopOnlySupport">&nbsp;</span></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>👿</span> Black metal <Tooltip isBadge={true} text={<>For many years, black metal – especially <b>atmospheric/ambient</b> BM and <b>folk/pagan</b> BM – has remained my absolute favorite genre. There's a special place in my heart for such cold music featuring themes of nature and solitude. I must mention a project called Paysage d'Hiver here, as my source of inspiration.</>}/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🫥</span> Drone <Tooltip isBadge={true} text={<>Amps go <span style={{ opacity: 0.4 }}>BBBBBBBBBBBBBBBRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR~</span></>}/></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>👁️</span> Dark ambient</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🫠</span> Noise</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🧙🏻‍♂️</span> Dungeon synth</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>✖</span> Punk/crust</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🎸</span> Classic rock</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>👽</span> Techno</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🪈</span> Folk music</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>💀</span> Grindcore</div>
                    {/* stoner/doom, psychedelic/occult rock/metal, classical music */}
                </div>
                <div style={{ marginTop: "-1.5rem" }} class={stylesTagBadges.badgesAboutWrapper}>
                    <div class={stylesTagBadges.badgeAbout} style={{ backgroundColor: "#f2f2f2", color: "black" }}><H>Misc</H> <span className="desktopOnlySupport">&nbsp;</span></div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🌅</span> Early bird</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🍏</span> Flexitarian</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>👶</span> Childless</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🐱</span> Pet-free</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🥃</span> Non-drinker</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🚬</span> Non-smoker</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🥶</span> Prefer cold climate</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>😌</span> Prefer to live alone</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🇺🇸</span> C1</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🇪🇸</span> A2</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🇸🇪</span> A1</div>
                    <div class={stylesTagBadges.badgeAbout}><span class={stylesTagBadges.badgeEmoji}>🇷🇺</span> Native</div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
                <div class="aboutBodyRegular">
                    <M text="# EVEN MORE DATA FOR GOOGLE AND THE CIA"/>
                    <M text="This place is reserved for something good. A family photo? Someday."/>
                </div>
            </AnimationOnScroll>
            <div className="desktopOnlySupport" style={{ marginTop: "4rem" }}>
                <span style={{ fontSize: "1.3rem", color: "black" }}>
                    <center><H style={{ padding: "0.5rem 6rem" }}>LATEST FROM GALLERY</H></center>
                </span>
                <LastThreeGalleryImages />
            </div>
            <div class="lastUpdatedAbout">UPDATED ON {aboutLastUpdated}</div>
        </motion.div>
    );
};
  
export default About;

export const Head = () => (
    <SEO 
        title="About - avrtt.blog"
        description="About page that introduces Vladislav Averett — an adventurous traveler, digital nomad, YouTuber, blogger, data scientist, freelancer, artificial intelligence researcher, developer, and musician. The page features general information about the personality, his biography timeline, interests, and professional career, as well as photo."
        keywords={["about me", "personal page", "media personality"]}
        image={photoAbout}
        canonicalUrl="https://avrtt.github.io/about"
        schemaType="Person"
        type="profile"
        children
    >
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Vladislav Averett",
                "additionalName": "Vlad Averett",
                "givenName": "Vladislav",
                "image": photoAbout,
                "description": "Traveler, content creator (YouTuber & blogger), data scientist, freelancer, artificial intelligence researcher, developer, and musician.",
                "url": "https://avrtt.github.io/about",
                "sameAs": [
                    "https://youtube.com/@vladaverett",
                    "https://instagram.com/avrttv",
                    "https://twitter.com/vladaverett",
                    "https://tiktok.com/@vladaverett",
                    "https://github.com/avrtt",
                    "https://facebook.com/vladaverett",
                    "https://youtube.com/@avheuristics",
                    "https://t.me/venturingforth",
                    "https://t.me/avheuristics",
                    "https://kaggle.com/lenferdetroud",
                    "https://couchsurfing.com/people/averett",
                    "https://youtube.com/@noiserett",
                    "https://facebook.com/averett.freelance",
                    "https://facebook.com/avrttblog",
                ]
            })}
        </script>
        <meta property="profile:first_name" content="Vladislav" />
        <meta property="profile:last_name" content="Averett" />
        <meta property="profile:username" content="avrtt" />
    </SEO>
)

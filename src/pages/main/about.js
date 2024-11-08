import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import Spoiler from '../../components/Spoiler';
import ContentBlock from '../../components/ContentBlock';
import TileContainer from '../../components/TileContainer';
import { aboutLastUpdated } from '../../data/lastUpdated';
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
    
        <div class="aboutBodyTile">
            <TileContainer columns={1} gap="1.5vw" marginBottom="0vh" marginTop="2vh">
                <ContentBlock
                    title="👋 Hi there! I'm Vlad."
                    backgroundColor="transparent"
                    fontSizeTitle="50px"
                    titleColor="#615050"
                    textAlignTitle="center"
                />
            </TileContainer>
            <TileContainer columns={2} gap="1.5vw" marginBottom="4vh" marginTop="2vh">
                <ContentBlock
                    description="I'm an adventurous nomad, data scientist, AI researcher, occasional developer, experimental musician and content creator from 🐻 **Russia**."
                    backgroundColor="transparent"
                    fontSizeTitle="40px"
                    paddingDescription="0"
                />
                <ContentBlock
                    description="An extra place for general detailes about me and photo"
                    backgroundColor="transparent"
                    paddingDescription="0"
                />
            </TileContainer>
            <TileContainer columns={2}>
                <ContentBlock
                    description="Example"
                    backgroundColor="#dbdbdb"
                    justifyContent = 'start'
                />
                <ContentBlock
                    emoji="🥸"
                    description="Despite the ubiquitous usage, **Averett** isn't my surname, but a pseudonym or even something of an alter ego."
                    backgroundColor="#dbdbdb"
                    textAlign='center'
                    textAlignEmoji='center'
                />
            </TileContainer>
            <TileContainer columns={3}>
                <ContentBlock
                    description="Example"
                    backgroundColor="#dbdbdb"
                    justifyContent = 'start'
                />
                <ContentBlock
                    description="Example"
                    backgroundColor="#bdb7b7"
                    justifyContent = 'start'
                />
                <ContentBlock
                    description="Example"
                    backgroundColor="#dbdbdb"
                    justifyContent = 'start'
                />
            </TileContainer>
            <TileContainer columns={1}>
                <ContentBlock
                    description="Example"
                    backgroundColor="#dbdbdb"
                    justifyContent = 'start'
                />
            </TileContainer>
            <TileContainer columns={4} marginBottom = '4vh'>
                <ContentBlock
                    description="Example"
                    backgroundColor="#dbdbdb"
                    justifyContent = 'start'
                />
                <ContentBlock
                    description="Example"
                    backgroundColor="#bdb7b7"
                    justifyContent = 'start'
                />
                <ContentBlock
                    description="Example"
                    backgroundColor="#dbdbdb"
                    justifyContent = 'start'
                />
                <ContentBlock
                    description="Example"
                    backgroundColor="#bdb7b7"
                    justifyContent = 'start'
                />
            </TileContainer>
        </div>
        <div class="aboutBodyRegular">
            Content
        </div>
        <div class="lastUpdatedAbout">UPDATED ON {aboutLastUpdated}</div>
    </motion.div>
  );
};
  
export default About;

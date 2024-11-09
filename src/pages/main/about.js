import React, { useEffect, useState } from 'react';
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
import disguise from "../../gifs/disguise.gif";
import wave from "../../gifs/wave.gif"; 
import waveFrame from "../../gifs/wave_frame.gif"; 

const TITLE = 'About - avrtt.blog'

const aboutPhotoStyle = {
    'float': 'right',
    'border-radius': '20px',
    'margin-left': '60px',
    'margin-right': '0px',
    'margin-top': '15px',
    'margin-bottom': '60px'
}

const greetingsStyle = {
    width: `calc((100%) - 1.5vw)`
}

const greetingsWrapperStyle = {
    marginTop: "2vh",
    fontSize: '50px',
    textAlign: "center",
    color: "#615050",
    fontWeight: 'bold',
    marginTop: "2vh",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: '-35px'
}

const waveGifStyle = {
    width: '56px',
    verticalAlign: 'middle',
    marginRight: '5px',
    opacity: 0,
}

const waveFrameStyle = {
    width: '56px',
    verticalAlign: 'middle',
    marginRight: '-55px',
    opacity: 1,
}


const About = () => {
	
	const [waveGifOpacity, setWaveGifOpacity] = useState(0);
    const [waveFrameOpacity, setWaveFrameOpacity] = useState(1);

    useEffect(() => {
        setWaveGifOpacity(1);
        setWaveFrameOpacity(0);

        const switchToFrameTimeout = setTimeout(() => {
            setWaveGifOpacity(0);
            setWaveFrameOpacity(1);
        }, 1100);

        return () => clearTimeout(switchToFrameTimeout);
    }, []);
	
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
            <div style={greetingsWrapperStyle} className="tileContainer noselect">
                <p style={greetingsStyle}>
                    <span>
                        <img
                            style={{ ...waveFrameStyle, opacity: waveFrameOpacity }}
                            src={waveFrame}
                            alt="👋🏻"
                        />
                        <img
                            style={{ ...waveGifStyle, opacity: waveGifOpacity }}
                            src={wave}
                            alt="👋🏻"
                        />
                    </span>
                    &nbsp;
                    <span>Hi there! I'm Vlad.</span>
                </p>
            </div>
            <TileContainer columns={2} gap="1.5vw" marginBottom="4vh" marginTop="2vh">
                <ContentBlock
                    description="I'm an adventurous nomad, data scientist, AI researcher, occasional developer, experimental musician and content creator from 🐻 **Russia**."
                    backgroundColor="transparent"
                    fontSizeTitle="40px"
                    paddingDescription="0"
                    divAnimation={false}
                />
                <ContentBlock
                    description="An extra place for general detailes about me and photo"
                    backgroundColor="transparent"
                    paddingDescription="0"
                    divAnimation={false}
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
                    emojiGif={disguise}
                    description="Despite the ubiquitous usage, **Averett** isn't my surname, but a pseudonym or even something of an alter ego."
                    backgroundColor="#dbdbdb"
                    textAlign='center'
                    emojiAlign='center'
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

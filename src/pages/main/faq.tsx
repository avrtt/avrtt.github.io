/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import Tooltip from '../../components/Tooltip';
import { faqLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Faq = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<div className="generalBody">
                <h3>❓ FAQ</h3>
                <p>
                    <b>Q</b>: Can I buy advertising on this site?
                    <br/>
                    <b>A</b>: Nope.
                    <br/><br/>
                    <b>Q</b>: Why do you prefer English?
                    <br/>
                    <b>A</b>: 1. Broader audience: I like to be able to interact with as many people as possible; 2. traffic decline: the Russian state has blocked YouTube and other major platforms, which reduced views among content makers; 3. no coins: YouTube closed monetization of views from Russia. <Tooltip text="I don't monetize content anyway and I'm not going to make it my main source of income, but it's better to have a possibility to earn a little from creative projects in the future."/> <br/>I'm fluent (kinda) in both, so why not use the more beneficial language. I'd translate all the content on the site and other platforms into Russian as well, but I don't have time for that (I use Russian in other projects though).
                    <br/><br/>
                    <b>Q</b>: How you've made artworks with the same style?
                    <br/>
                    <b>A</b>: For creating banner images and some illustrations, I use a combination of AI tools (like Recraft and ComfyUI) for generating, inpainting, outpainting and style transfer, with public domain paintings as references. The Research post banners are taken from engravings by <a href="https://en.wikipedia.org/wiki/Gustave_Dor%C3%A9#Gallery">Gustave Doré</a>, and colorized using my simple custom OpenCV model. Often these images turn out a little crooked, so I do some manual photoshop, color adjustments, and... that's it. In addition, some pictures aren't AI-generated, but collages that take hours of work each.
                    <br/><br/>
                    <b>Q</b>: Why so many emojis?
                    <br/>
                    <b>A</b>: Idk im autistic
                    <br/><br/>
                    (to be expanded)
                </p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {faqLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Faq;

export const Head = () => (
  <SEO 
    title="FAQ - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/faq"
    schemaType="WebPage"
    
  />
)

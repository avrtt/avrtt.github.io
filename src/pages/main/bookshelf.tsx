/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import cover from '../../images/covers/bookshelf.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { bookshelfLastUpdated } from '../../data/lastUpdated';
import 'animate.css/animate.min.css';

const Bookshelf = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/bookshelf.jpg" 
				alt="Page cover: a painting depicting bookcase wall full of books"
			/>

			<div className="generalBody">
				<p>Empty here :/ (for now)</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {bookshelfLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Bookshelf;

export const Head = () => (
  <SEO 
    title="Bookshelf - avrtt.blog"
    description=""
    keywords={[""]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/bookshelf"
    schemaType="WebPage"
    
  />
)

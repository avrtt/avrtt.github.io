import React, { useEffect, useState } from 'react';
import RemoveMarkdown from 'remove-markdown';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { wordsPerMinuteResearch } from '../../data/commonVariables';
import 'animate.css/animate.min.css';

const TITLE = 'Research - avrtt.blog'

function formatReadTime(minutes) {
	if (minutes <= 10) return '~10 min';
	if (minutes <= 20) return '~20 min';
	if (minutes <= 30) return '~30 min';
	if (minutes <= 40) return '~40 min';
	if (minutes <= 50) return '~50 min';
	if (minutes <= 60) return '~1 h';

	const hours = Math.floor(minutes / 60);
	const remainder = minutes % 60;

	if (remainder <= 30) {
		return `~${hours}${remainder > 0 ? '.5' : ''} h`;
	}
	return `~${hours + 1} h`;
}

function calculateReadTime(body, extraTime = 0) {
	const plainText = RemoveMarkdown(body)
		.replace(/import .*? from .*?;/g, '')
		.replace(/<.*?>/g, '')
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
		.trim();
	const wordCount = plainText.split(/\s+/).length;
	const baseReadTime = Math.ceil(wordCount / wordsPerMinute);
	return formatReadTime(baseReadTime + extraTime);
}

const wordsPerMinute = wordsPerMinuteResearch;

const Posts = ({ data }) => {
	const posts = data.allMdx.nodes.map(post => ({...post.frontmatter, readTime: calculateReadTime(post.body)}));
	const [isTileView, setIsTileView] = useState(true);
  
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);

	const toggleView = () => {
		setIsTileView(!isTileView);
	};

	const viewVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.3 } },
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};
  
	return (
		<motion.div className='noselect'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			<div className="viewButtonWrapper">
				<button onClick={toggleView} className="viewButton noselect">
					{isTileView ? 'Compact view' : 'Gallery view'}
				</button>
			</div>

			<Box>
				<motion.div
					key={isTileView ? 'tileView' : 'listView'}
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={viewVariants}
				>
					{isTileView ? (
						<ImageList cols={2} gap={5}>
							{posts.map(post => {
								const image = getImage(post.banner);
								return (
									<ImageListItem key={post.id}>
										<div className="hover">
											<AnimationOnScroll offset="999999" animateIn="animate__fadeIn" animatePreScroll="false" duration="0.3">
												<GatsbyImage
													className="prev-home"
													image={image}
													alt={post.title}
												/>
											</AnimationOnScroll>
											<Link to={post.slug}>
												<div className="overlay-back">
													<div className="titleblock">
														<p className="title">{post.title}</p>
													</div>
												</div>
												<div className="overlay-base">
													<p className="title">{post.title}</p>
													<div className="description">{post.desc}</div>
												</div>
											</Link>
										</div>
									</ImageListItem>
								);
							})}
						</ImageList>
					) : (
						<Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
							{posts.map(post => (
								<li key={post.id} style={{ marginBottom: '4px' }}>
									<div>
										<span style={{opacity: "0.5"}}>{post.date}</span> 
										&nbsp;&nbsp;
										<span style={{ background: "#ffffff", padding: "6px 11px 6px 11px", borderRadius: "10px" }}>
											<Link to={post.slug} className="compactViewLink">
												{post.titleDetailed || post.title}
											</Link>
											&nbsp;
											<span style={{opacity: "0.5"}}>{post.readTime}</span>
										</span>
										&#8239;&#8239;
										<strong><span style={{opacity: "0.5"}}>#{post.index}</span></strong>
									</div>
								</li>
							))}
						</Box>
					)}
				</motion.div>
			</Box>
	  	</motion.div>
	);
};

export const query = graphql`
	query PostGalleryQuery {
  		allMdx(
    		filter: {frontmatter: {slug: {regex: "/^/research//"}}}
    		sort: {frontmatter: {index: DESC}}
  		) {
    		nodes {
      			id
      			frontmatter {
        			index
        			title
					titleDetailed
					desc
					date
					extraReadTimeMin
					slug
					banner {
          				childImageSharp {
            				gatsbyImageData(
								formats: [JPG, WEBP], 
								placeholder: BLURRED, 
								quality: 100
							)
          				}
        			}
      			}
				body
    		}
  		}
	}
`;
  
export default Posts;

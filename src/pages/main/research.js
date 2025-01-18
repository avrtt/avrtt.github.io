import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const TITLE = 'Research - avrtt.blog'

const Posts = ({ data }) => {
	const posts = data.allMdx.nodes;
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
								const image = getImage(post.frontmatter.banner);
								return (
									<ImageListItem key={post.id}>
										<div className="hover">
											<AnimationOnScroll offset="999999" animateIn="animate__fadeIn" animatePreScroll="false" duration="0.3">
												<GatsbyImage
													className="prev-home"
													image={image}
													alt={post.frontmatter.title}
												/>
											</AnimationOnScroll>
											<Link to={post.frontmatter.slug}>
												<div className="overlay-back">
													<div className="titleblock">
														<p className="title">{post.frontmatter.title}</p>
													</div>
												</div>
												<div className="overlay-base">
													<p className="title">{post.frontmatter.title}</p>
													<div className="description">{post.frontmatter.desc}</div>
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
										<span style={{opacity: "0.5"}}>{post.frontmatter.date}</span> 
										&nbsp;&nbsp;
										<Link to={post.frontmatter.slug} className="compactViewLink">
											{post.frontmatter.titleDetailed || post.frontmatter.title}
										</Link>
										&nbsp;&nbsp;
										<span style={{opacity: "0.5"}}>#{post.frontmatter.index}</span>
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
    		}
  		}
	}
`;
  
export default Posts;

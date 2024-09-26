import React, { useEffect } from 'react';
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

const TITLE = 'Thoughts - avrtt.blog'

const Posts = ({ data }) => {
	const posts = data.allMdx.nodes;
  
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);
  
	return (
		<motion.div className='noselect'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>
  
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>

			<Box>
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
			</Box>
	  	</motion.div>
	);
};

export const query = graphql`
	query PostGalleryQuery {
  		allMdx(
    		filter: {frontmatter: {slug: {regex: "/^/thoughts//"}}}
    		sort: {frontmatter: {index: DESC}}
  		) {
    		nodes {
      			id
      			frontmatter {
        			index
        			title
					desc
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

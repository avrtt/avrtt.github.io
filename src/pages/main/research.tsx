/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useState } from 'react';
import RemoveMarkdown from 'remove-markdown';
import { graphql } from 'gatsby';
import SEO from '../../components/seo'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { wordsPerMinuteResearch } from '../../data/commonVariables';
import PugDance from "../../stickers/pug_dance.gif"
import * as stylesPostsGallery from "../../styles/posts_gallery.module.scss"
import * as stylesButtonsCommon from "../../styles/buttons_common.module.scss"
import * as stylesCompactViews from "../../styles/compact_views.module.scss"
import * as stylesTagBadges from "../../styles/tag_badges.module.scss";
import 'animate.css/animate.min.css';

interface PostFrontmatter {
	id: string;
	index: number;
	title: string;
	titleDetailed?: string;
	desc: string;
	date: string;
	extraReadTimeMin?: number;
	difficultyLevel?: number;
	flagMindfuckery?: boolean;
	mainTag: string;
	slug: string;
	banner: any;
}

interface PostNode {
	id: string;
	frontmatter: PostFrontmatter;
	body: string;
}

interface PostsQueryData {
	allMdx: {
		nodes: PostNode[];
	};
}

function formatReadTime(minutes: number): string {
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

function calculateReadTime(body: string, extraTime: number = 0): string {
	const plainText = RemoveMarkdown(body)
		.replace(/import .*? from .*?;/g, '')
		.replace(/<.*?>/g, '')
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
		.trim();
	const wordCount = plainText.split(/\s+/).length;
	const baseReadTime = Math.ceil(wordCount / wordsPerMinute);
	return formatReadTime(baseReadTime + extraTime);
}

let difficultyIcon: string = "";

function parseDifficulty(difficultyLevel: number, isMindfuckery: boolean): string {
	if (isMindfuckery) {
		difficultyIcon = "⚫️"
	} else {
		if (difficultyLevel === 1) {
			difficultyIcon = ""
		} else if (difficultyLevel === 2) {
			difficultyIcon = "🟡"
		} else if (difficultyLevel === 3) {
			difficultyIcon = "🔴"
		} 
	}
	return difficultyIcon
}

const wordsPerMinute = wordsPerMinuteResearch;

const Posts = ({ data }: { data: PostsQueryData }) => {
	const posts = data.allMdx.nodes.map((post: PostNode) => ({...post.frontmatter, readTime: calculateReadTime(post.body)}));
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
		<>
			<div className="smallScreenNotice noselect">
				<p>This page is not supported on small screen devices (and I'm a lazy ass to fix it). Use "Posts" page instead.</p>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<img src={PugDance} style={{ width: '4rem' }} alt="dancing-pug" />
				</div>
			</div>
			<motion.div className='desktopOnlySupport noselect'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.15 }}>

				<div className={stylesCompactViews.viewButtonWrapper}>
					<motion.button onClick={toggleView} whileTap={{ scale: 0.95 }} className={`noselect ${stylesCompactViews.viewButton}`}>
						<motion.div
							className={stylesButtonsCommon.buttonTextWrapper}
							key={isTileView ? 'tile' : 'list'}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							{isTileView ? 'Switch to compact view' : 'Switch to gallery view'}
						</motion.div>
					</motion.button>
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
								{posts.map((post: PostFrontmatter & { readTime: string }) => {
									const image = getImage(post.banner);
									return (
										<ImageListItem key={post.id}>
											<div className="hover">
												<span className={`${stylesTagBadges.tagPosts} ${stylesTagBadges.mainTagGallery}`}>{post.mainTag}</span>
												<AnimationOnScroll offset={999999} animateIn="animate__fadeIn" animatePreScroll={false} duration={0.3}>
													{image && (
														<GatsbyImage
															className={stylesPostsGallery.prevHome}
															image={image}
															alt={post.title}
														/>
													)}
												</AnimationOnScroll>
												<Link to={post.slug}>
													<div className={stylesPostsGallery.overlayBack}>
														<div className={stylesPostsGallery.titleblock}>
															<p className={stylesPostsGallery.title}>{post.title}</p>
														</div>
													</div>
													<div className={stylesPostsGallery.overlayBase}>
														<p className={stylesPostsGallery.title}>{post.title}</p>
														<div className={stylesPostsGallery.description}>{post.desc}</div>
													</div>
												</Link>
											</div>
										</ImageListItem>
									);
								})}
							</ImageList>
						) : (
							<Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
								{posts.map((post: PostFrontmatter & { readTime: string }) => (
									<li key={post.id} style={{ marginBottom: '4px' }}>
										<div>
											<span style={{ opacity: "0.5" }}>{post.date}</span> 
											&nbsp;&nbsp;
											<span style={{ background: "#ffffff", padding: "6px 11px 6px 11px", borderRadius: "10px" }}>
												<Link to={post.slug} className="compactViewLink">
													{post.titleDetailed || post.title}
												</Link>
												&nbsp;
												<span style={{ opacity: "0.5" }}>{post.readTime}</span>
												<span style={{ display: ((post.difficultyLevel === 1) && !post.flagMindfuckery) ? "none" : "" }}>&#8239;&#8239;{parseDifficulty(post.difficultyLevel || 1, post.flagMindfuckery || false)}</span>
											</span>
											&#8239;&#8239;
											<b><span style={{ opacity: "0.5" }}>#{post.index}</span></b>
										</div>
									</li>
								))}
							</Box>
						)}
					</motion.div>
				</Box>
			</motion.div>
		</>
	);
};

export const query = graphql`
	query PostGalleryQuery {
  		allMdx(
    		filter: {
				frontmatter: {
					slug: { regex: "/^/research//" }
					flagHidden: { ne: true }
				}
			}
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
					difficultyLevel
					flagMindfuckery
					mainTag
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

export const Head = () => (
  <SEO 
    title="Research - avrtt.blog"
    description="Explore the list of Research category posts dedicated to artificial intelligence and other tech-related areas."
    image={""}
    canonicalUrl="https://avrtt.github.io/research"
    schemaType="CollectionPage"
    
  />
)

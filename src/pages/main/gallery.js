import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import SEO from '../../components/seo';
import Tooltip from '../../components/Tooltip';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import 'animate.css/animate.min.css';
import galleryData from '../../data/gallery';
import { talksLastUpdated } from '../../data/lastUpdated';
import * as stylesGallery from '../../styles/gallery.module.scss';

const Gallery = ({ data }) => {
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 992);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const imagesMap = {};
	data.allFile.nodes.forEach(fileNode => {
		imagesMap[fileNode.base] = getImage(fileNode.childImageSharp);
	});

  	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}
		>
			<div className="generalBody">
				<p>This page only contains pictures that I've printed or planning to do so, i.e. the most important ones: memorable photos with friends, random moments of life, something connected to emotions I'd like to preserve, and some favorite paintings. Instead of sharing for likes and comments, I started uploading outside of social media, for myself, which brought more mindfulness to my life. I no longer take pictures of everything, but only rare snapshots, savoring the moment.</p>
			</div>
			<div className="lastUpdatedTalks">UPDATED ON {talksLastUpdated}</div>
			<br/>
			<div className={stylesGallery.galleryGrid}>
				{galleryData.map((item, index) => {
					const imageData = imagesMap[item.path];
					return (<>
						{isLargeScreen ?
							(
								<div className={stylesGallery.galleryImageWrapper}>
									<Zoom>
										<GatsbyImage image={imageData} alt={item.alt} className={stylesGallery.galleryImage}/>
									</Zoom>
									
										<span className={stylesGallery.block}>
											<span className={stylesGallery.text}>
												"{item.name}"
											</span>
											&nbsp;
											{item.desc && (
												<>
													&nbsp;
													<span className={stylesGallery.icon}>
														<Tooltip text={item.desc} />
													</span>
												</>
											)}
										</span>
									
								</div>
							) : (
								<AnimationOnScroll key={index} offset="100" animateIn="animate__fadeIn" animatePreScroll={true} duration={1} animateOnce={true}>
									<div className={stylesGallery.galleryImageWrapper}>
										<GatsbyImage image={imageData} alt={item.alt} className={stylesGallery.galleryImage}/>
										{item.desc && (
											<div style={{ marginLeft: "0.2rem", marginTop: "0.1rem", lineHeight: "1rem", fontSize: "0.9rem", width: "100%" }}>
												<span style={{ fontWeight: "bold" }}>"{item.name}"</span>
												&nbsp;—&nbsp;
												<span>{item.desc}</span>
											</div>
										)}
									</div>
								</AnimationOnScroll>
							)
						}
					</>)
				})}
			</div>
		</motion.div>
  	)
}

export default Gallery;

export const pageQuery = graphql`
  query {
    allFile(
      filter: { 
        sourceInstanceName: { eq: "images" }, 
        relativeDirectory: { eq: "gallery" } 
      }
    ) {
      nodes {
        base
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            width: 1000
          )
        }
      }
    }
  }
`;

export const Head = ({ data }) => {

	const imagesMap = {};
	data.allFile.nodes.forEach(fileNode => {
		imagesMap[fileNode.base] = fileNode.childImageSharp;
	});

	const firstGalleryImage = galleryData[0].path;
	const firstImageData = getImage(imagesMap[firstGalleryImage]);
	const firstImageSrc = getSrc(firstImageData);
  
	return (
		<SEO
			title="Gallery - avrtt.blog"
			description="This page contains different pictures: memorable photos with friends, random moments of life, something connected to emotions, and sometimes paintings."
			keywords={["photo gallery", "favorite images"]}
			image={firstImageSrc}
			canonicalUrl="https://avrtt.github.io/gallery"
			schemaType=""
			children
		/>
  	)
}
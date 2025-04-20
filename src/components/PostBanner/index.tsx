/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import Views from "../../images/posts/eye.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const prevImgStyle: React.CSSProperties = {
	width: "55%",
	clipPath: "inset(25% 0px 30% 0px round 1.6vh)",
	transform: "scale(1.8)",
	filter: "brightness(70%)",
}

const prevImgStyleMobile: React.CSSProperties = {
	width: "100%",
	borderRadius: "2vh",
	marginBottom: "2rem",
	filter: "brightness(70%)",
}

const prevStyle: React.CSSProperties = {
	position: "relative",
}

const prevDateStyle: React.CSSProperties = {
	position: "absolute",
	top: "10%",
	left: "90%",
	width: "6vw",
	transform: "translate(-50%, -70%)",
	margin: "0",
	padding: "0",
	color: "#ffffff",
	fontSize: "0.9vw",
	fontFamily: "'Quicksand', sans-serif",
	fontWeight: "900",
	opacity: "1",
	borderRadius: "0"
}

const prevUpdatedStyle: React.CSSProperties = {
	position: "absolute",
	top: "15%",
	left: "90%",
	width: "6vw",
	transform: "translate(-50%, -70%)",
	margin: "0",
	padding: "0",
	color: "#ffffff",
	fontSize: "0.9vw",
	fontFamily: "'Quicksand', sans-serif",
	fontWeight: "900",
	opacity: "0.6",
	borderRadius: "0"
}

const prevInfoStyle: React.CSSProperties = {
	position: "absolute",
	top: "75%",
	left: "0",
	right: "0",
	marginLeft: "auto",
	marginRight: "auto",
	width: "100%",
	padding: "0",
	fontSize: "0.9vw",
	fontFamily: "'Quicksand', sans-serif",
	fontWeight: "1000",
}

const prevNumberStyle: React.CSSProperties = {
	position: "absolute",
	top: "10%",
	left: "96%",
	width: "3vw",
	transform: "translate(-50%, -70%)",
	margin: "0",
	padding: "0",
	color: "#ffffff",
	fontSize: "0.9vw",
	fontFamily: "'Quicksand', sans-serif",
	fontWeight: "900",
	opacity: "1",
	borderRadius: "0"
}

const prevNumberStyleMobile: React.CSSProperties = {
	position: "absolute",
	top: "clamp(6.5rem, 20vw, 7.5rem)",
	right: "clamp(2rem, 2vw, 4rem)",
	width: "3vw",
	transform: "translate(-50%, -70%)",
	margin: "0",
	padding: "0",
	color: "#ffffff",
	fontSize: "1rem",
	fontFamily: "'Quicksand', sans-serif",
	fontWeight: "900",
	opacity: "1",
	borderRadius: "0"
}

const viewsWrapperStyle: React.CSSProperties = {
    position: "absolute",
	transform: "translate(2vw, -7.5vh)",
}

const viewsStyle: React.CSSProperties = {
	opacity: "1", 
	height: "3.1vh", 
}

const svgStyle: React.CSSProperties = {
	opacity: "1",
	display: "inline-block",
	height: "2.5vh", 
	transform: "translate(0.3vw, -0.08vw)",
}

const PostBanner: React.FC<PostBannerProps> = ({ postNumber, date, updated, readTime, difficulty, title, desc, banner, section, postKey, isMindfuckery, mainTag }) => {

	const prevUpdatedTextStyle: React.CSSProperties = {
		position: "absolute",
		top: "15%",
		left: "90%",
		width: "6vw",
		transform: "translate(-110%, -70%)",
		margin: "0",
		padding: "0",
		color: "#ffffff",
		fontSize: "0.9vw",
		fontFamily: "'Quicksand', sans-serif",
		fontWeight: "900",
		opacity: updated ? "0.6" : "0",
		borderRadius: "0"
	}

    const prevTextStyle: React.CSSProperties = {
    	position: "absolute",
    	top: "46%",
    	left: "50%",
    	width: "fit-content",
    	transform: "translate(-50%, -70%)",
    	margin: "0",
    	padding: "0 2vw 0 2vw",
    	color: "#7C7C7C",
    	fontSize: "2.5vw",
    	fontFamily: "'Quicksand', sans-serif",
    	fontWeight: "1000",
    	backgroundColor: "rgb(255, 255, 255)",
    	opacity: "1",
    	borderRadius: "2vh"
    }

	const prevTextStyleMobile: React.CSSProperties = {
    	position: "absolute",
    	top: "clamp(9rem, 28vw, 18rem)",
    	left: "50%",
    	width: "100vw",
		maxWidth: "100%",
    	transform: "translate(-50%, -70%)",
    	margin: "0",
    	padding: "0 2vw 0 2vw",
    	color: "#7C7C7C",
    	fontSize: "clamp(1.25rem, 5vw, 2rem)",
    	fontFamily: "'Quicksand', sans-serif",
    	fontWeight: "1000",
    	backgroundColor: "#f2f2f2",
    	opacity: "1",
    	borderRadius: "2vh"
    }

    const prevDescStyle: React.CSSProperties = {
    	position: "absolute",
    	top: "57%",
    	left: "50%",
    	width: "fit-content",
    	transform: "translate(-50%, -70%)",
    	margin: "0",
		maxWidth: "100%",
    	color: "#ffffff",
    	fontSize: "1.2vw",
    	fontFamily: "'Quicksand', sans-serif",
    	fontWeight: "bold",
    	opacity: "1",
    	borderRadius: "0"
  	}

	const prevDescStyleMobile: React.CSSProperties = {
    	position: "absolute",
    	top: "clamp(12rem, 35vw, 30rem)",
    	left: "50%",
    	width: "85vw",
		justifyContent: "start",
		lineHeight: "1rem",
    	transform: "translate(-50%, -70%)",
    	margin: "0",
		maxWidth: "100%",
    	color: "#ffffff",
    	fontSize: "clamp(0.9rem, 3vw, 1.5rem)",
    	fontFamily: "'Quicksand', sans-serif",
    	fontWeight: "bold",
    	opacity: "1",
  	}

  	const mainTagStyle: React.CSSProperties = {
		backgroundColor: "rgb(255, 255, 255)", 
		padding: "6px 11px 6px 11px", 
		borderRadius: "10px",
		color: "#7C7C7C",
	}

	const readTimeStyle: React.CSSProperties = {
		backgroundColor: "rgb(255, 255, 255)", 
		padding: "6px 11px 6px 11px", 
		borderRadius: "10px",
		color: "#7C7C7C",
	}

	const readTimeStyleMobile: React.CSSProperties = {
		position: "absolute",
    	top: "clamp(17rem, 68vw, 40rem)",
    	left: "50%",
		transform: "translate(-50%, -70%)",
		backgroundColor: "rgb(255, 255, 255)", 
		padding: "0.1rem 0.4rem 0.1rem 0.4rem", 
		borderRadius: "10px",
		color: "#7C7C7C",
		fontWeight: "1000",
		fontSize: "clamp(0.8rem, 3vw, 1.4rem)"
	}

	var difficultyEmoji, difficultyText

	if (isMindfuckery) {
		difficultyEmoji = "💀"
		difficultyText = "Mindfuckery"
	} else if (section === "research") {
		if (difficulty === 1) {
			difficultyEmoji = "🗿"
			difficultyText = "Beginner"
		} else if (difficulty === 2) {
			difficultyEmoji = "🤓"
			difficultyText = "Intermediate"
		} else if (difficulty === 3) {
			difficultyEmoji = "📚"
			difficultyText = "Advanced"
		} 
	} else if (section === "thoughts") {
		if (difficulty === 1) {
			difficultyEmoji = "🍪"
			difficultyText = "Easy to read"
		} else if (difficulty === 2) {
			difficultyEmoji = "🤓"
			difficultyText = "Requires some knowledge"
		} else if (difficulty === 3) {
			difficultyEmoji = "📚"
			difficultyText = "Requires background"
		} 
	}

	const difficultyStyle: React.CSSProperties = {
		display: difficulty ? "" : "none",
		backgroundColor: (isMindfuckery) ? ("rgb(30, 30, 30)") : ((difficulty === 1) ? ("rgb(255, 255, 255)") : ((difficulty === 2) ? ("rgb(255, 206, 71)") : ((difficulty === 3) ? ("rgb(238, 16, 16)") : ("rgba(0, 0, 0, 0)")))),
		padding: "6px 11px 6px 11px", 
		borderRadius: "10px",
		color: (isMindfuckery) ? ("rgb(213, 213, 213)") : ((difficulty === 1) ? ("#7C7C7C") : ((difficulty === 2) ? ("#6e6b6b") : ((difficulty === 3) ? ("#383838") : ("rgb(255, 255, 255)")))),
	}

  const viewsLink = "https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Favrtt.github.io%2F%23%2F" + section + "%2F"+ postKey + "&label=&labelColor=%23f2f2f2&countColor=%23f2f2f2&style=flat-square&labelStyle=none"
  
  const image = getImage(banner);

  return (
    <>
        <center>
            <div className='desktopOnlySupport noselect' style={prevStyle}>
				{image && <GatsbyImage style={prevImgStyle} image={image} alt="banner" />}
			    <strong><div style={prevTextStyle}>{title}</div></strong>
			    <div style={prevDescStyle}>{desc}</div>
				<div style={prevInfoStyle}>
					<span style={mainTagStyle}>#️⃣&#8239;&#8239;{mainTag}</span>
					&nbsp;
					<span style={readTimeStyle}>⌛&#8239;&#8239;{readTime}</span>
					&nbsp;
					<span style={difficultyStyle}>{difficultyEmoji}&#8239;&#8239;{difficultyText}</span>
				</div>
			    <div style={prevDateStyle}>{date}</div>
				<span style={prevUpdatedTextStyle}>upd: </span><span style={prevUpdatedStyle}>{updated}</span>
			    <div style={prevNumberStyle}>#{postNumber}</div>
			    <br/>
		    </div>
		    <div className="desktopOnlySupport noselect" style={viewsWrapperStyle}>
		        <img style={svgStyle} src={Views} alt="views-badge"/>
		        <img style={viewsStyle} src={viewsLink} alt="views-badge"/>
		    </div>
			<div className="mobileOnlySupport">
				{image && <GatsbyImage style={prevImgStyleMobile} image={image} alt="banner" />}
				<strong><div style={prevTextStyleMobile}>{title}</div></strong>
				<div style={prevDescStyleMobile}>{desc}</div>
				<span style={readTimeStyleMobile}>⌛&#8239;&#8239;{readTime}</span>
			    <div style={prevNumberStyleMobile}>#{postNumber}</div>
      		</div>
		</center>
	</>
  );
};
export default PostBanner;

import React from 'react';
import Views from "../../images/posts/eye.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const prevImgStyle = {
	"width": "55%",
	"clip-path": "inset(25% 0px 30% 0px round 1.6vh)",
	"transform": "scale(1.8)",
	"filter": "brightness(70%)",
}

const prevImgStyleMobile = {
	"width": "100%",
	"border-radius": "2vh",
	"margin-bottom": "2rem",
	"filter": "brightness(70%)",
}

const prevStyle = {
	"position": "relative",
}

const prevDateStyle = {
	"position": "absolute",
	"top": "10%",
	"left": "90%",
	"width": "6vw",
	"transform": "translate(-50%, -70%)",
	"margin": "0",
	"padding": "0",
	"color": "#ffffff",
	"font-size": "0.9vw",
	"font-family": "'Quicksand', sans-serif",
	"font-weight": "900",
	"opacity": "1",
	"border-radius": "0"
}

const prevUpdatedStyle = {
	"position": "absolute",
	"top": "15%",
	"left": "90%",
	"width": "6vw",
	"transform": "translate(-50%, -70%)",
	"margin": "0",
	"padding": "0",
	"color": "#ffffff",
	"font-size": "0.9vw",
	"font-family": "'Quicksand', sans-serif",
	"font-weight": "900",
	"opacity": "0.6",
	"border-radius": "0"
}

const prevInfoStyle = {
	"position": "absolute",
	"top": "75%",
	"left": "0",
	"right": "0",
	"margin-left": "auto",
	"margin-right": "auto",
	"width": "100%",
	"padding": "0",
	"font-size": "0.9vw",
	"font-family": "'Quicksand', sans-serif",
	"font-weight": "1000",
}

const prevNumberStyle = {
	"position": "absolute",
	"top": "10%",
	"left": "96%",
	"width": "3vw",
	"transform": "translate(-50%, -70%)",
	"margin": "0",
	"padding": "0",
	"color": "#ffffff",
	"font-size": "0.9vw",
	"font-family": "'Quicksand', sans-serif",
	"font-weight": "900",
	"opacity": "1",
	"border-radius": "0"
}

const prevNumberStyleMobile = {
	"position": "absolute",
	"top": "clamp(6.5rem, 20vw, 7.5rem)",
	"right": "clamp(2rem, 2vw, 4rem)",
	"width": "3vw",
	"transform": "translate(-50%, -70%)",
	"margin": "0",
	"padding": "0",
	"color": "#ffffff",
	"font-size": "1rem",
	"font-family": "'Quicksand', sans-serif",
	"font-weight": "900",
	"opacity": "1",
	"border-radius": "0"
}

const viewsWrapperStyle = {
    "position": "absolute",
	"transform": "translate(2vw, -7.5vh)",
}

const viewsStyle = {
	"opacity": "1", 
	"height": "3.1vh", 
}

const svgStyle = {
	"opacity": "1",
	"display": "inline-block",
	"height": "2.5vh", 
	"transform": "translate(0.3vw, -0.08vw)",
}

const PostBanner = ({ postNumber, date, updated, readTime, difficulty, title, desc, banner, section, postKey, isMindfuckery, mainTag }) => {

	const prevUpdatedTextStyle = {
		"position": "absolute",
		"top": "15%",
		"left": "90%",
		"width": "6vw",
		"transform": "translate(-110%, -70%)",
		"margin": "0",
		"padding": "0",
		"color": "#ffffff",
		"font-size": "0.9vw",
		"font-family": "'Quicksand', sans-serif",
		"font-weight": "900",
		"opacity": updated ? "0.6" : "0",
		"border-radius": "0"
	}

    const prevTextStyle = {
    	"position": "absolute",
    	"top": "46%",
    	"left": "50%",
    	"width": "fit-content",
    	"transform": "translate(-50%, -70%)",
    	"margin": "0",
    	"padding": "0 2vw 0 2vw",
    	"color": "#7C7C7C",
    	"font-size": "2.5vw",
    	"font-family": "'Quicksand', sans-serif",
    	"font-weight": "1000",
    	"background-color": "rgb(255, 255, 255)",
    	"opacity": "1",
    	"border-radius": "2vh"
    }

	const prevTextStyleMobile = {
    	"position": "absolute",
    	"top": "clamp(9rem, 28vw, 18rem)",
    	"left": "50%",
    	"width": "100vw",
		"max-width": "100%",
    	"transform": "translate(-50%, -70%)",
    	"margin": "0",
    	"padding": "0 2vw 0 2vw",
    	"color": "#7C7C7C",
    	"font-size": "clamp(1.25rem, 5vw, 2rem)",
    	"font-family": "'Quicksand', sans-serif",
    	"font-weight": "1000",
    	"background-color": "#f2f2f2",
    	"opacity": "1",
    	"border-radius": "2vh"
    }

    const prevDescStyle = {
    	"position": "absolute",
    	"top": "57%",
    	"left": "50%",
    	"width": "fit-content",
    	"transform": "translate(-50%, -70%)",
    	"margin": "0",
		"max-width": "100%",
    	"color": "#ffffff",
    	"font-size": "1.2vw",
    	"font-family": "'Quicksand', sans-serif",
    	"font-weight": "bold",
    	"opacity": "1",
    	"border-radius": "0"
  	}

	  const prevDescStyleMobile = {
    	"position": "absolute",
    	"top": "clamp(12rem, 35vw, 30rem)",
    	"left": "50%",
    	"width": "85vw",
		"justify-content": "start",
		"line-height": "1rem",
    	"transform": "translate(-50%, -70%)",
    	"margin": "0",
		"max-width": "100%",
    	"color": "#ffffff",
    	"font-size": "clamp(0.9rem, 3vw, 1.5rem)",
    	"font-family": "'Quicksand', sans-serif",
    	"font-weight": "bold",
    	"opacity": "1",
  	}

  	const mainTagStyle = {
		"background-color": "rgb(255, 255, 255)", 
		"padding": "6px 11px 6px 11px", 
		"borderRadius": "10px",
		"color": "#7C7C7C",
	}

	const readTimeStyle = {
		"background-color": "rgb(255, 255, 255)", 
		"padding": "6px 11px 6px 11px", 
		"borderRadius": "10px",
		"color": "#7C7C7C",
	}

	const readTimeStyleMobile = {
		"position": "absolute",
    	"top": "clamp(17rem, 68vw, 40rem)",
    	"left": "50%",
		"transform": "translate(-50%, -70%)",
		"background-color": "rgb(255, 255, 255)", 
		"padding": "0.1rem 0.4rem 0.1rem 0.4rem", 
		"borderRadius": "10px",
		"color": "#7C7C7C",
		"font-weight": "1000",
		"font-size": "clamp(0.8rem, 3vw, 1.4rem)"
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

	const difficultyStyle = {
		"display": difficulty ? "" : "none",
		"background-color": (isMindfuckery) ? ("rgb(30, 30, 30)") : ((difficulty === 1) ? ("rgb(255, 255, 255)") : ((difficulty === 2) ? ("rgb(255, 206, 71)") : ((difficulty === 3) ? ("rgb(238, 16, 16)") : ("rgba(0, 0, 0, 0)")))),
		"padding": "6px 11px 6px 11px", 
		"borderRadius": "10px",
		"color": (isMindfuckery) ? ("rgb(213, 213, 213)") : ((difficulty === 1) ? ("#7C7C7C") : ((difficulty === 2) ? ("#6e6b6b") : ((difficulty === 3) ? ("#383838") : ("rgb(255, 255, 255)")))),
	}

  const viewsLink = "https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Favrtt.github.io%2F%23%2F" + section + "%2F"+ postKey + "&label=&labelColor=%23f2f2f2&countColor=%23f2f2f2&style=flat-square&labelStyle=none"
  
  const image = getImage(banner);

  return (
    <>
        <center>
            <div className='desktopOnlySupport noselect' style={prevStyle}>
				<GatsbyImage style={prevImgStyle} image={image} alt="banner" />
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
				<GatsbyImage style={prevImgStyleMobile} image={image} alt="banner" />
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

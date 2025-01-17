import React from "react";
import Views from "../../images/posts/eye.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const prevImgStyle = {
	"width": "55%",
	"clip-path": "inset(25% 0px 30% 0px round 1.6vh)",
	"transform": "scale(1.8)",
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

const PostBanner = ({ postNumber, date, updated, title, desc, banner, section, postKey }) => {

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

  const viewsLink = "https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Favrtt.github.io%2F%23%2F" + section + "%2F"+ postKey + "&label=&labelColor=%23f2f2f2&countColor=%23f2f2f2&style=flat-square&labelStyle=none"
  
  const image = getImage(banner);

  return (
    <>
        <center>
            <div class='noselect' style={prevStyle}>
				<GatsbyImage style={prevImgStyle} image={image} alt="banner" />
			    <b><div style={prevTextStyle}>{title}</div></b>
			    <div style={prevDescStyle}>{desc}</div>
			    <div style={prevDateStyle}>{date}</div>
				<span style={prevUpdatedTextStyle}>upd: </span><span style={prevUpdatedStyle}>{updated}</span>
			    <div style={prevNumberStyle}>#{postNumber}</div>
			    <br/>
		    </div>
		    <div class="noselect" style={viewsWrapperStyle}>
		        <img style={svgStyle} src={Views} alt="badge"/>
		        <img style={viewsStyle} src={viewsLink} alt="badge"/>
		    </div>
		</center>
	</>
  );
};
export default PostBanner;

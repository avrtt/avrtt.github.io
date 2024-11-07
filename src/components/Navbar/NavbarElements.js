import { Link } from "gatsby";
import styled from "styled-components";

export const Nav = styled.nav`
	margin-bottom: 2vh; 
	margin-top: -11vh; 
	margin-left: -7.5vh;
	padding: 4.3vh 2.4em 0.5em 0;
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: 12;
	-webkit-touch-callout: none;
     -webkit-user-select: none;
      -khtml-user-select: none;
        -moz-user-select: none; 
         -ms-user-select: none;
             user-select: none;
`;
  
export const NavMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1482px) {
		display: none;
	}
`;

export const Dropdown = styled.div`
	position: relative;
	display: inline-block;
	z-index: 999;
`;

export const DropdownMenu = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	padding: 0.5vh 0;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;

	${Dropdown}:hover & {
    	opacity: 1;
		visibility: visible;
  	}
`;

export const DropdownItem = styled(Link)`
	padding: 0.8vh 2vh;
	color: #8e8e8e;
	text-decoration: none;
	font-weight: 1000;
	font-size: 2vh;
	background-color: #fff;
	border-radius: 1vh;
	white-space: nowrap;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #f2f2f2;
		color: #545456;
	}

	&.active {
		opacity: 0.22;
	}
`;

export const NavLink = styled(Link)`
	width: fit-content;
	border-radius: 1vh;
	background-color: rgb(255, 255, 255);
	height: 4.2vh;
	font-size: 2.2vh;
	justify-content: center;
	margin: 0 0.4vh 0 0.4vh;
	border-bottom: 0;
	overflow: hidden;	
	color: #8e8e8e;
	font-weight: 1000;
	display: flex;
	align-items: center;
	padding: 0 1.75vh;
	cursor: pointer;
	text-decoration: none;
	transition-duration: 0.1s;

	&.active {
		opacity: 0.22;
		background-color: rgba(255, 255, 255, 0) !important;
	}

	&:hover {
		color: #545456;
		transform: translate(1px, 2px);
		background-color: #f2f2f2;
	}

	&:hover.active {
		transform: translate(0px, 0px);
		opacity: 0.14;
	}

	${Dropdown}:hover & {
    	opacity: 0.22;
    	background-color: rgba(255, 255, 255, 0) !important;
  }
`;

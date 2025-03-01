import React from "react"
import M from "../Markdown"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const MoreCoursesNotice = () => {
  return (
	<>
    	<div class={stylesPlaques.greyNoticeCompact}>
        	<M text="I'm happy to announce that I've started working on **standalone paid courses**, so you could support my work and get cheap educational material. These courses will be of completely different quality, with more theoretical depth and niche focus, and will feature challenging projects, quizzes, exercises, video lectures and supplementary stuff. Publishing dates are uncertain, so stay tuned! — *25.03.2025*"/>
    	</div>
	</>
  );
};
export default MoreCoursesNotice;
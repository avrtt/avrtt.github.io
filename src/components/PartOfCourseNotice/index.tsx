/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import { Link } from "gatsby"
import H from "../../components/Highlight"
import CountPosts from "../../fetchers/count_posts";
import * as stylesPlaques from "../../styles/plaques.module.scss"

interface PartOfCourseNoticeProps {
  index: number;
  category: string;
}

const PartOfCourseNotice = ({ index, category }: PartOfCourseNoticeProps) => {

  const { courseCount } = CountPosts();

  return (
	<>
    	<div className={stylesPlaques.greyNoticeCompact}>
        	<h2>🎓 <span style={{ color: "black" }}><H>{index}/{courseCount}</H></span></h2>
			<p>This post is a part of the <strong>{category ? category : "unspecified"}</strong> educational series from <Link to="/course">my free course</Link>. Please keep in mind that the correct sequence of posts is outlined on the course page, while it can be arbitrary in Research.</p>
			<p>I'm also happy to announce that I've started working on standalone paid courses, so you could support my work and get cheap educational material. These courses will be of completely different quality, with more theoretical depth and niche focus, and will feature challenging projects, quizzes, exercises, video lectures and supplementary stuff. Stay tuned!</p>
    	</div>
	</>
  );
};
export default PartOfCourseNotice;
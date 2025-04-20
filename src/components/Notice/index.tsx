/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import * as stylesPlaques from "../../styles/plaques.module.scss"

interface NoticeProps {
  title: string;
  text: string;
}

const Notice = ({ title, text }: NoticeProps) => {
  return (
	<>
    	<div className={stylesPlaques.yellowNotice}>
        	<M text={"## " + title}/>
        	<M text={text}/>
    	</div>
	</>
  );
};
export default Notice;



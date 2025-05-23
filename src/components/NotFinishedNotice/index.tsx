/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const NotFinishedNotice = () => {
  return (
	<>
    	<div className={stylesPlaques.yellowNotice}>
        	<M text="## 🚧 HEADS UP, A DRAFT!"/>
        	<M text="This post isn't finished. There may be typos, inconsistent narration, superficiality and lack of stylization. If you'd like to contribute, you're always welcome to [make a PR](https://github.com/avrtt/avrtt.github.io)."/>
    	</div>
	</>
  );
};
export default NotFinishedNotice;



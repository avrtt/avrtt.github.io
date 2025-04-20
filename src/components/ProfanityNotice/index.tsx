/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const ProfanityNotice = () => {
  return (
	<>
    	<div className={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="gandonio" marginLeft="0px" marginRight="0.2em"/> Language warning!</h2>
        	<M text="This page contains profanity. Little dudes aren't supposed to read it."/>
    	</div>
	</>
  );
};
export default ProfanityNotice;
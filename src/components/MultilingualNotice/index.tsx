/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const MultilingualNotice = () => {
  return (
	<>
    	<div className={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="babel_tower" marginLeft="0px" marginRight="0.2em"/> Забугорный слогъ</h2>
        	<M text="This page is written in multiple languages. It's either not yet translated or written so to convey the message accurately. I don't know why you should be warned about this. I just love these custom wiki-like plaques."/>
    	</div>
	</>
  );
};
export default MultilingualNotice;
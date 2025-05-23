/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const UnreliablyNotice = () => {
  return (
	<>
    	<div className={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="pepe_agree" marginLeft="0px" marginRight="0.2em"/> Unverified information</h2>
        	<M text={`This page was written by yet another "I'm something of a scientist myself". I don't have the appropriate education nor in-depth background to describe the topic accurately. Please be critical of the information below.`}/>
    	</div>
	</>
  );
};
export default UnreliablyNotice;
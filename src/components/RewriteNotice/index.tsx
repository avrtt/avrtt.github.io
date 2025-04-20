/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const RewriteNotice = () => {
  return (
	<>
    	<div className={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="dog_nerd" marginLeft="0px" marginRight="0.2em"/> Rewriting is coming!</h2>
        	<M text="This page needs to be rewritten as it's either not well-written or the information here is outdated."/>
    	</div>
	</>
  );
};
export default RewriteNotice;
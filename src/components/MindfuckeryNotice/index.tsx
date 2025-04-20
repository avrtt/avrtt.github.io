/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const MindfuckeryNotice = () => {
  return (
	<>
    	<div className={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="nerazdyplenish3" marginLeft="0px" marginRight="0.2em"/> ɕłůʝçğÿʔʃí₽ɣŧÞř! ъуъъ!!!</h2>
        	<M text="This page is full of incomprehensible total mindfuckery. **NOT A SINGLE MENTALLY SANE PERSON WOULD EVER WANT TO FUCKING UNDERSTAND THIS.** Please take a moment to reflect about it. Is there something wrong with your personal life?"/>
    	</div>
	</>
  );
};
export default MindfuckeryNotice;
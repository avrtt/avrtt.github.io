import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const PoliticsNotice = () => {
  return (
	<>
    	<div class={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="bibizan" marginLeft="0px" marginRight="0.2em"/> Politics ahead!</h2>
        	<M text="This is yet another page loaded with political gibberish. Probably politically incorrect. Nobody cares. Brace yourself."/>
    	</div>
	</>
  );
};
export default PoliticsNotice;
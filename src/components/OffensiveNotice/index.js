import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const OffensiveNotice = () => {
  return (
	<>
    	<div class={stylesPlaques.greyNoticeCompact}>
        	<h2><StickerPack sticker="pepe_punch" marginLeft="0px" marginRight="0.2em"/> First time?</h2>
        	<M text="This page may be offensive to some people. It's probably filled with satire to scare off the wrong crowd and attract the right one, or just to make some lulz out of it. Sensitive individuals are advised to go fuck themselves right now. 🖕❤️"/>
    	</div>
	</>
  );
};
export default OffensiveNotice;
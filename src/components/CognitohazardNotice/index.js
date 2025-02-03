import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const CognitohazardNotice = () => {
  return (
	<>
    	<div class={stylesPlaques.greyNoticeCompact}>
			<h2><StickerPack sticker="cursed_emoji1" marginLeft="0px" marginRight="0.2em"/> Cognitohazard alert!</h2>
        	<M text="Thoughtful reading of the following schizophrenic bullshit has the potential to inflict irreparable mental damage or make a person wish to drink poison."/>
    	</div>
	</>
  );
};
export default CognitohazardNotice;
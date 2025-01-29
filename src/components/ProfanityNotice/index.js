import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"

const ProfanityNotice = () => {
  return (
	<>
    	<div class="greyNoticeCompact">
        	<h2><StickerPack sticker="gandonio" marginLeft="0px" marginRight="0.2em"/> Language warning!</h2>
        	<M text="This page contains profanity. Little dudes aren't supposed to read it."/>
    	</div>
	</>
  );
};
export default ProfanityNotice;
import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"

const MultilingualNotice = () => {
  return (
	<>
    	<div class="greyNoticeCompact">
        	<h2><StickerPack sticker="babel_tower" marginLeft="0px" marginRight="0.2em"/> Забугорный слогъ</h2>
        	<M text="This page is written in multiple languages. It's either not yet translated or written so to convey the message accurately. I don't know why you should be warned about this. I just love these custom Wikipedia-like plaques."/>
    	</div>
	</>
  );
};
export default MultilingualNotice;
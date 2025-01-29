import React from "react"
import M from "../Markdown"
import StickerPack from "../../components/StickerPack"

const HiddenNotice = () => {
  return (
	<>
    	<div class="greyNoticeCompact">
			<h2><StickerPack sticker="beluga" marginLeft="0px" marginRight="0.2em"/> Non-public page</h2>
        	<M text="For some reason, this page was hidden from the public or even never published. You can't find it in the list of pages/posts. It's probably referenced elsewhere. Anyway, this is the dark side of my blog, the technical backrooms, and all kinds of weird crap could be found here."/>
    	</div>
	</>
  );
};
export default HiddenNotice;



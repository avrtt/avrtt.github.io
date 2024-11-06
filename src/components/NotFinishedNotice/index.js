import React from "react"
import M from "../Markdown"

const NotFinishedNotice = () => {
  return (
	<>
    	<div class="yellowNotice">
        	<M text="## 🚧 HEADS UP!"/>
        	<M text="This post isn't finished. There may be typos, inconsistent narration, superficiality and lack of stylization. If you'd like to contribute, you're always welcome to [make a PR](https://github.com/avrtt/avrtt.github.io)."/>
    	</div>
	</>
  );
};
export default NotFinishedNotice;



import React from "react"
import M from "../Markdown"

const Notice = ({ title, text }) => {
  return (
	<>
    	<div class="yellowNotice">
        	<M text={"## " + title}/>
        	<M text={text}/>
    	</div>
	</>
  );
};
export default Notice;



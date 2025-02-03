import React from "react"
import M from "../Markdown"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const Notice = ({ title, text }) => {
  return (
	<>
    	<div class={stylesPlaques.yellowNotice}>
        	<M text={"## " + title}/>
        	<M text={text}/>
    	</div>
	</>
  );
};
export default Notice;



import React from "react"
import M from "../Markdown"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const AnomalyNotice = () => {
  return (
	<>
    	<div class={stylesPlaques.yellowNotice}>
        	<M text="## ATTENTION!"/>
        	<M text="This page is classified as a strangely suspicious web document having unexpected characteristics within an appropriate environment. I don't really know how you came across it, but I deliberately left it contained in the quarantine zone to collect records of anomalous activity."/>
			<M text="Facility information was omitted purposefully."/>
    	</div>
	</>
  );
};
export default AnomalyNotice;



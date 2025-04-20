/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import M from "../Markdown"
import B from "../Burn"
import StickerPack from "../../components/StickerPack"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const OffensiveNotice = () => {
  return (
	<>
		<B
			fireSize = {[16, 30]}
			fireDuration = {1000}
			fireFrequency = {300}
			style={{}}
			className={""}
		>
			<div className={stylesPlaques.greyNoticeCompact}>
				<h2><StickerPack sticker="pepe_punch" marginLeft="0px" marginRight="0.2em"/> <span style={{ color: "red", fontWeight: "66666" }}>OFFENSIVENESS</span></h2>
				<M text="This page may be offensive to some people. It's probably filled with satire to scare off the wrong crowd and attract the right one, or just to make some lulz out of it. Sensitive individuals are advised to [go fuck themselves](/dev/null) right now. 🖕❤️"/>
			</div>
		</B>
	</>
  );
};
export default OffensiveNotice;
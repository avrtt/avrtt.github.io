import React from "react"

import PepeWink from "../../stickers/pepe_wink.gif"
import Gandonio from "../../stickers/gandonio.png"
import CatYaPiska from "../../stickers/cat_ya_piska.png"
import DogNerd from "../../stickers/dog_nerd.png"
import PepeDance from "../../stickers/pepe_dance.gif"
import PepeCry from "../../stickers/pepe_cry.gif"
import PepeMoney from "../../stickers/pepe_money.gif"
import Beluga from "../../stickers/beluga.png"
import CatSmile from "../../stickers/cat_smile.png"
import Trollface from "../../stickers/trollface.png"
import PepeMeditation from "../../stickers/pepe_meditation.png"
import PepeChill from "../../stickers/pepe_chill.png"
import YobaPledik from "../../stickers/yoba_pledik.png"
import PepeLinux from "../../stickers/pepe_linux.png"
import PepeMage from "../../stickers/pepe_mage.png"
import CatBW from "../../stickers/cat_bw.png"
import MorshuGnome from "../../stickers/morshu_gnome.png"
import Nerazdyplenish1 from "../../stickers/nerazdyplenish1.png"
import Nerazdyplenish2 from "../../stickers/nerazdyplenish2.png"
import CatSleep from "../../stickers/cat_sleep.png"
import CatStand from "../../stickers/cat_stand.png"
import PepePledik from "../../stickers/pepe_pledik.png"
import PepeAgree from "../../stickers/pepe_agree.gif"
import PepePunch from "../../stickers/pepe_punch.gif"
import PepeRun from "../../stickers/pepe_run.gif"
import PepeSerious from "../../stickers/pepe_serious.gif"
import PepeChair from "../../stickers/pepe_chair.gif"
import PugDance from "../../stickers/pug_dance.gif"
import YobaDovolen from "../../stickers/yoba_dovolen.png"

const stickerStyle = {
  width: "46px",
  height: "46px",
  verticalAlign: "middle",
  marginTop: "-10px",
  marginBottom: "0px",
  marginLeft: "4px",
}

const StickerPack = ({ sticker }) => {
  if (sticker == "pepe_wink") { return ( <img style={stickerStyle} src={PepeWink}/> ) }
  if (sticker == "gandonio") { return ( <img style={stickerStyle} src={Gandonio}/> ) }
  if (sticker == "ya_piska") { return ( <img style={stickerStyle} src={CatYaPiska}/> ) }
  if (sticker == "dog_nerd") { return ( <img style={stickerStyle} src={DogNerd}/> ) }
  if (sticker == "pepe_dance") { return ( <img style={stickerStyle} src={PepeDance}/> ) }
  if (sticker == "pepe_cry") { return ( <img style={stickerStyle} src={PepeCry}/> ) }
  if (sticker == "pepe_money") { return ( <img style={stickerStyle} src={PepeMoney}/> ) }
  if (sticker == "beluga") { return ( <img style={stickerStyle} src={Beluga}/> ) }
  if (sticker == "cat_smile") { return ( <img style={stickerStyle} src={CatSmile}/> ) }
  if (sticker == "trollface") { return ( <img style={stickerStyle} src={Trollface}/> ) }
  if (sticker == "pepe_meditation") { return ( <img style={stickerStyle} src={PepeMeditation}/> ) }
  if (sticker == "pepe_chill") { return ( <img style={stickerStyle} src={PepeChill}/> ) }
  if (sticker == "yoba_pledik") { return ( <img style={stickerStyle} src={YobaPledik}/> ) }
  if (sticker == "pepe_linux") { return ( <img style={stickerStyle} src={PepeLinux}/> ) }
  if (sticker == "pepe_mage") { return ( <img style={stickerStyle} src={PepeMage}/> ) }
  if (sticker == "cat_bw") { return ( <img style={stickerStyle} src={CatBW}/> ) }
  if (sticker == "morshu_gnome") { return ( <img style={stickerStyle} src={MorshuGnome}/> ) }
  if (sticker == "nerazdyplenish1") { return ( <img style={stickerStyle} src={Nerazdyplenish1}/> ) }
  if (sticker == "nerazdyplenish2") { return ( <img style={stickerStyle} src={Nerazdyplenish2}/> ) }
  if (sticker == "cat_sleep") { return ( <img style={stickerStyle} src={CatSleep}/> ) }
  if (sticker == "cat_stand") { return ( <img style={stickerStyle} src={CatStand}/> ) }
  if (sticker == "pepe_pledik") { return ( <img style={stickerStyle} src={PepePledik}/> ) }
  if (sticker == "pepe_agree") { return ( <img style={stickerStyle} src={PepeAgree}/> ) }
  if (sticker == "pepe_punch") { return ( <img style={stickerStyle} src={PepePunch}/> ) }
  if (sticker == "pepe_run") { return ( <img style={stickerStyle} src={PepeRun}/> ) }
  if (sticker == "pepe_serious") { return ( <img style={stickerStyle} src={PepeSerious}/> ) }
  if (sticker == "pepe_chair") { return ( <img style={stickerStyle} src={PepeChair}/> ) }
  if (sticker == "pug_dance") { return ( <img style={stickerStyle} src={PugDance}/> ) }
  if (sticker == "yoba_dovolen") { return ( <img style={stickerStyle} src={YobaDovolen}/> ) }
}
export default StickerPack



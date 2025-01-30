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
import Hedgehog from "../../stickers/hedgehog.gif"
import Chad from "../../stickers/chad.gif"
import Burnt from "../../stickers/burnt.gif"
import Nerazdyplenish3 from "../../stickers/nerazdyplenish3.gif"
import CatShake from "../../stickers/cat_shake.gif"
import Mda from "../../stickers/mda.png"
import CursedEmoji1 from "../../stickers/cursed_emoji1.png"
import CursedEmoji2 from "../../stickers/cursed_emoji2.png"
import Bibizan from "../../stickers/bibizan.gif"
import BabelTower from "../../stickers/babel_tower.png"

const StickerPack = ({ sticker, marginLeft = "4px", marginRight = "0px" }) => {

  const stickerStyle = {
    width: "1.8em",
    height: "1.8em",
    verticalAlign: "middle",
    marginTop: "-10px",
    marginRight: marginRight,
    marginLeft: marginLeft,
  }

  if (sticker == "babel_tower") { return ( <img style={stickerStyle} src={BabelTower}/> ) }
  if (sticker == "bibizan") { return ( <img style={stickerStyle} src={Bibizan}/> ) }
  if (sticker == "mda") { return ( <img style={stickerStyle} src={Mda}/> ) }
  if (sticker == "cursed_emoji1") { return ( <img style={stickerStyle} src={CursedEmoji1}/> ) }
  if (sticker == "cursed_emoji2") { return ( <img style={stickerStyle} src={CursedEmoji2}/> ) }
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
  if (sticker == "hedgehog") { return ( <img style={stickerStyle} src={Hedgehog}/> ) }
  if (sticker == "chad") { return ( <img style={stickerStyle} src={Chad}/> ) }
  if (sticker == "burnt") { return ( <img style={stickerStyle} src={Burnt}/> ) }
  if (sticker == "nerazdyplenish3") { return ( <img style={stickerStyle} src={Nerazdyplenish3}/> ) }
  if (sticker == "cat_shake") { return ( <img style={stickerStyle} src={CatShake}/> ) }
}
export default StickerPack



/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useState, useEffect } from "react";

type StickerKey = keyof typeof stickerImports;

const stickerImports = {
  hater: () => import("../../stickers/hater.png"),
  babel_tower: () => import("../../stickers/babel_tower.png"),
  bibizan: () => import("../../stickers/bibizan.gif"),
  cursed_emoji2: () => import("../../stickers/cursed_emoji2.png"),
  cursed_emoji1: () => import("../../stickers/cursed_emoji1.png"),
  mda: () => import("../../stickers/mda.png"),
  cat_shake: () => import("../../stickers/cat_shake.gif"),
  nerazdyplenish3: () => import("../../stickers/nerazdyplenish3.gif"),
  burnt: () => import("../../stickers/burnt.gif"),
  chad: () => import("../../stickers/chad.gif"),
  hedgehog: () => import("../../stickers/hedgehog.gif"),
  yoba_dovolen: () => import("../../stickers/yoba_dovolen.png"),
  pug_dance: () => import("../../stickers/pug_dance.gif"),
  pepe_chair: () => import("../../stickers/pepe_chair.gif"),
  pepe_serious: () => import("../../stickers/pepe_serious.gif"),
  pepe_run: () => import("../../stickers/pepe_run.gif"),
  pepe_punch: () => import("../../stickers/pepe_punch.gif"),
  pepe_agree: () => import("../../stickers/pepe_agree.gif"),
  pepe_pledik: () => import("../../stickers/pepe_pledik.png"),
  cat_stand: () => import("../../stickers/cat_stand.png"),
  cat_sleep: () => import("../../stickers/cat_sleep.png"),
  nerazdyplenish2: () => import("../../stickers/nerazdyplenish2.png"),
  nerazdyplenish1: () => import("../../stickers/nerazdyplenish1.png"),
  morshu_gnome: () => import("../../stickers/morshu_gnome.png"),
  cat_bw: () => import("../../stickers/cat_bw.png"),
  pepe_mage: () => import("../../stickers/pepe_mage.png"),
  pepe_linux: () => import("../../stickers/pepe_linux.png"),
  yoba_pledik: () => import("../../stickers/yoba_pledik.png"),
  pepe_chill: () => import("../../stickers/pepe_chill.png"),
  pepe_meditation: () => import("../../stickers/pepe_meditation.png"),
  trollface: () => import("../../stickers/trollface.png"),
  cat_smile: () => import("../../stickers/cat_smile.png"),
  beluga: () => import("../../stickers/beluga.png"),
  pepe_money: () => import("../../stickers/pepe_money.gif"),
  pepe_cry: () => import("../../stickers/pepe_cry.gif"),
  pepe_dance: () => import("../../stickers/pepe_dance.gif"),
  dog_nerd: () => import("../../stickers/dog_nerd.png"),
  cat_ya_piska: () => import("../../stickers/cat_ya_piska.png"),
  gandonio: () => import("../../stickers/gandonio.png"),
  pepe_wink: () => import("../../stickers/pepe_wink.gif"),
};

const StickerPack: React.FC<StickerPackProps> = ({ sticker, marginLeft = "4px", marginRight = "0px" }) => {
  const [stickerSrc, setStickerSrc] = useState<string | null>(null);

  useEffect(() => {
    // check if the sticker key exists in our map
    const stickerKey = sticker as StickerKey;
    if (stickerImports[stickerKey]) {
      stickerImports[stickerKey]().then((module: { default: string }) => setStickerSrc(module.default));
    }
  }, [sticker]);

  if (!stickerSrc) return null; // avoid rendering until loaded

  const stickerStyle = {
    width: "1.8em",
    height: "1.8em",
    verticalAlign: "middle",
    marginTop: "-10px",
    marginRight: marginRight,
    marginLeft: marginLeft,
  }

  return <img alt="sticker" style={stickerStyle} src={stickerSrc} />
}

export default StickerPack


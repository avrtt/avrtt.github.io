/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import Box from '@mui/material/Box';
import * as styles from "./styles.module.scss";

/*
const telegramPrevStyle = {
	'border': '0px',
	'height': '700px',
	'width': '100%',
	'margin-top': '5px',
	'border-radius': '20px',
}

const textStyle = {
	'margin-top': '80px',
	'color': '#ececec',
    'background-color': '#1e1e1e',
    'padding': '6px 15px 16px 15px',
    'border-radius': '20px 20px 0 0',
    'vertical-align': 'middle',
    'margin-bottom': '-54px',
    'font-size': '22px',
    'position': 'relative',
    'z-index': '1'
}

const divStyle = {
	'position': 'relative'
}

const pStyle = {
	'position': 'absolute',
	'top': '50%',
    'left': '50%',
    'z-index': '-1',
    'transform': 'translate(-50%, -50%)'
}

const linkStyle = {
    'text-decoration': 'none',
	'font-weight': '800',
	'border-bottom': '0',
	'color': '#8e8e8e',
    '-webkit-transition': 'color 0.1s ease-in-out',
       '-moz-transition': 'color 0.1s ease-in-out',
         '-o-transition': 'color 0.1s ease-in-out',
            'transition': 'color 0.1s ease-in-out',
}
*/

interface ChannelPreviewProps {
  tgLink: string;
  ytLink: string;
  tgChannelPicture: string;
  tgChannelName: string;
  tgChannelDesc: string;
}

const ChannelPreview: React.FC<ChannelPreviewProps> = ({ tgLink, ytLink, tgChannelPicture, tgChannelName, tgChannelDesc }) => {

  const ytUrl = "https://www.youtube.com/embed?listType=playlist&list=" + ytLink + "&index=1";
  const tgHandle = "@" + tgLink;
  const hrefLink = "https://t.me/" + tgLink

  /*
  const srcLink = "https://xn--r1a.website/s/" + link
  const srcLink = "https://xn--r1a.site/s/" + link
  const srcLink = "https://t.me/s/" + link

  return (
	<>
		<center>
			<p style={textStyle}>Subscribe to <a style={linkStyle} href={hrefLink}>@{link}</a> on Telegram for updates and more posts</p>
			<div style={divStyle}>
				<p style={pStyle}>[ Channel preview was probably removed by the Adblock extension ]</p>
				<iframe className="noselect" id='telegram-embed' style={telegramPrevStyle} src={srcLink} title='Telegram Preview' />
			</div>
		</center>
	</>
  );
  */
  
  return (
	<>
		<Box className={styles.moreContentWrapper}>
            <a href={hrefLink}><div className={styles.blockLeft}>
				<img className={styles.tgChannelPicture} src={tgChannelPicture} alt="telegram_channel"/>
				<span className={styles.blockLeftTitle}>{tgChannelName}</span>
				<span className={styles.blockLeftLink}>{tgHandle}</span>
				<p className={styles.blockLeftDesc}>{tgChannelDesc}</p>
			</div></a>
            <iframe className={styles.blockRight} src={ytUrl} frameBorder="0" allowFullScreen={true}></iframe>
		</Box>
	</>
  );

};
export default ChannelPreview;



import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import { TelegramComments } from 'react-telegram-comments';
import { placesArr } from '../../data/exploration/temp';
import { countriesArr } from '../../data/exploration/temp';
import { mapData } from '../../data/exploration/temp';
import CountryMap from '../../components/CountryMap';
import TravelMap from '../../components/TravelMap';
import M from '../../components/Markdown';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { explorationLastUpdated } from '../../data/lastUpdated';
import info from "../../images/goals/info.svg";

const TITLE = 'Exploration - avrtt.blog'

const divStyle = {
	width: '100%',
	height: '540px',
	overflow: 'hidden'
}  

const mapFrameStyle = {
	border: 'none',
	width: '100%',
	height: '540px',
	position: 'relative',
	top: '-50px'
}

const posStyle = {
	'font-size': 25,
	'color': '#575656',
	'text-align': 'left',
	'opacity': '0.6'
}

const flagStyle = {
	'font-size': 20,
	'text-align': 'right'
}

const nameStyle = {
	'color': '#8e8e8e',
	'width': '200px'
}

const statStyle = {
	'font-size': 25,
	'text-align': 'center',
}

const spanStyle = {
	'opacity': 0.5
}

const sectionTitleStyle = {
	'font-size': '30px',
	'text-align': 'center',
	'margin-bottom': '0.8em'
}

const infoStyle = {
	'font-weight': 'bold',
	'text-align': 'left',
}

const yearStyle = {
	'color': '#696969',
	'font-weight': 'normal',
	'text-align': 'right',
	'opacity': '0.6'
}

const flags = {
  	AF: "🇦🇫",
	AX: "🇦🇽",
	AL: "🇦🇱",
	DZ: "🇩🇿",
	AS: "🇦🇸",
	AD: "🇦🇩",
	AO: "🇦🇴",
	AI: "🇦🇮",
	AQ: "🇦🇶",
	AG: "🇦🇬",
	AR: "🇦🇷",
	AM: "🇦🇲",
	AW: "🇦🇼",
	AU: "🇦🇺",
	AT: "🇦🇹",
	AZ: "🇦🇿",
	BS: "🇧🇸",
	BH: "🇧🇭",
	BD: "🇧🇩",
	BB: "🇧🇧",
	BY: "🇧🇾",
	BE: "🇧🇪",
	BZ: "🇧🇿",
	BJ: "🇧🇯",
	BM: "🇧🇲",
	BT: "🇧🇹",
	BO: "🇧🇴",
	BQ: "🇧🇶",
	BA: "🇧🇦",
	BW: "🇧🇼",
	BV: "🇧🇻",
	BR: "🇧🇷",
	IO: "🇮🇴",
	BN: "🇧🇳",
	BG: "🇧🇬",
	BF: "🇧🇫",
	BI: "🇧🇮",
	CV: "🇨🇻",
	KH: "🇰🇭",
	CM: "🇨🇲",
	CA: "🇨🇦",
	KY: "🇰🇾",
	CF: "🇨🇫",
	TD: "🇹🇩",
	CL: "🇨🇱",
	CN: "🇨🇳",
	CX: "🇨🇽",
	CC: "🇨🇨",
	CO: "🇨🇴",
	KM: "🇰🇲",
	CG: "🇨🇬",
	CD: "🇨🇩",
	CK: "🇨🇰",
	CR: "🇨🇷",
	CI: "🇨🇮",
	HR: "🇭🇷",
	CU: "🇨🇺",
	CW: "🇨🇼",
	CY: "🇨🇾",
	CZ: "🇨🇿",
	DK: "🇩🇰",
	DJ: "🇩🇯",
	DM: "🇩🇲",
	DO: "🇩🇴",
	EC: "🇪🇨",
	EG: "🇪🇬",
	SV: "🇸🇻",
	GQ: "🇬🇶",
	ER: "🇪🇷",
	EE: "🇪🇪",
	ET: "🇪🇹",
	FK: "🇫🇰",
	FO: "🇫🇴",
	FJ: "🇫🇯",
	FI: "🇫🇮",
	FR: "🇫🇷",
	GF: "🇬🇫",
	PF: "🇵🇫",
	TF: "🇹🇫",
	GA: "🇬🇦",
	GM: "🇬🇲",
	GE: "🇬🇪",
	DE: "🇩🇪",
	GH: "🇬🇭",
	GI: "🇬🇮",
	GR: "🇬🇷",
	GL: "🇬🇱",
	GD: "🇬🇩",
	GP: "🇬🇵",
	GU: "🇬🇺",
	GT: "🇬🇹",
	GG: "🇬🇬",
	GN: "🇬🇳",
	GW: "🇬🇼",
	GY: "🇬🇾",
	HT: "🇭🇹",
	HM: "🇭🇲",
	VA: "🇻🇦",
	HN: "🇭🇳",
	HK: "🇭🇰",
	HU: "🇭🇺",
	IS: "🇮🇸",
	IN: "🇮🇳",
	ID: "🇮🇩",
	IR: "🇮🇷",
	IQ: "🇮🇶",
	IE: "🇮🇪",
	IM: "🇮🇲",
	IL: "🇮🇱",
	IT: "🇮🇹",
	JM: "🇯🇲",
	JP: "🇯🇵",
	JE: "🇯🇪",
	JO: "🇯🇴",
	KZ: "🇰🇿",
	KE: "🇰🇪",
	KI: "🇰🇮",
	KP: "🇰🇵",
	KR: "🇰🇷",
	KW: "🇰🇼",
	KG: "🇰🇬",
	LA: "🇱🇦",
	LV: "🇱🇻",
	LB: "🇱🇧",
	LS: "🇱🇸",
	LR: "🇱🇷",
	LY: "🇱🇾",
	LI: "🇱🇮",
	LT: "🇱🇹",
	LU: "🇱🇺",
	MO: "🇲🇴",
	MK: "🇲🇰",
	MG: "🇲🇬",
	MW: "🇲🇼",
	MY: "🇲🇾",
	MV: "🇲🇻",
	ML: "🇲🇱",
	MT: "🇲🇹",
	MH: "🇲🇭",
	MQ: "🇲🇶",
	MR: "🇲🇷",
	MU: "🇲🇺",
	YT: "🇾🇹",
	MX: "🇲🇽",
	FM: "🇫🇲",
	MD: "🇲🇩",
	MC: "🇲🇨",
	MN: "🇲🇳",
	ME: "🇲🇪",
	MS: "🇲🇸",
	MA: "🇲🇦",
	MZ: "🇲🇿",
	MM: "🇲🇲",
	NA: "🇳🇦",
	NR: "🇳🇷",
	NP: "🇳🇵",
	NL: "🇳🇱",
	NC: "🇳🇨",
	NZ: "🇳🇿",
	NI: "🇳🇮",
	NE: "🇳🇪",
	NG: "🇳🇬",
	NU: "🇳🇺",
	NF: "🇳🇫",
	MP: "🇲🇵",
	NO: "🇳🇴",
	OM: "🇴🇲",
	PK: "🇵🇰",
	PW: "🇵🇼",
	PS: "🇵🇸",
	PA: "🇵🇦",
	PG: "🇵🇬",
	PY: "🇵🇾",
	PE: "🇵🇪",
	PH: "🇵🇭",
	PN: "🇵🇳",
	PL: "🇵🇱",
	PT: "🇵🇹",
	PR: "🇵🇷",
	QA: "🇶🇦",
	RE: "🇷🇪",
	RO: "🇷🇴",
	RU: "🇷🇺",
	RW: "🇷🇼",
	BL: "🇧🇱",
	SH: "🇸🇭",
	KN: "🇰🇳",
	LC: "🇱🇨",
	MF: "🇲🇫",
	PM: "🇵🇲",
	VC: "🇻🇨",
	WS: "🇼🇸",
	SM: "🇸🇲",
	ST: "🇸🇹",
	SA: "🇸🇦",
	SN: "🇸🇳",
	RS: "🇷🇸",
	SC: "🇸🇨",
	SL: "🇸🇱",
	SG: "🇸🇬",
	SX: "🇸🇽",
	SK: "🇸🇰",
	SI: "🇸🇮",
	SB: "🇸🇧",
	SO: "🇸🇴",
	ZA: "🇿🇦",
	GS: "🇬🇸",
	SS: "🇸🇸",
	ES: "🇪🇸",
	LK: "🇱🇰",
	SD: "🇸🇩",
	SR: "🇸🇷",
	SJ: "🇸🇯",
	SZ: "🇸🇿",
	SE: "🇸🇪",
	CH: "🇨🇭",
	SY: "🇸🇾",
	TW: "🇹🇼",
	TJ: "🇹🇯",
	TZ: "🇹🇿",
	TH: "🇹🇭",
	TL: "🇹🇱",
	TG: "🇹🇬",
	TK: "🇹🇰",
	TO: "🇹🇴",
	TT: "🇹🇹",
	TN: "🇹🇳",
	TR: "🇹🇷",
	TM: "🇹🇲",
	TC: "🇹🇨",
	TV: "🇹🇻",
	UG: "🇺🇬",
	UA: "🇺🇦",
	AE: "🇦🇪",
	GB: "🇬🇧",
	US: "🇺🇸",
	UM: "🇺🇲",
	UY: "🇺🇾",
	UZ: "🇺🇿",
	VU: "🇻🇺",
	VE: "🇻🇪",
	VN: "🇻🇳",
	VG: "🇻🇬",
	VI: "🇻🇮",
	WF: "🇼🇫",
	EH: "🇪🇭",
	YE: "🇾🇪",
	ZM: "🇿🇲",
	ZW: "🇿🇼",
};

const visitedCodes = Object.keys(Object.fromEntries(Object.entries(mapData).filter(([k,v]) => v === 1)));
var flagsCollected = '';
var flagsNotCollected = '';

for (const [k1, v1] of Object.entries(flags)) {
	for (const [k2, v2] of Object.entries(mapData)) {
  		if (v2 === 1 && k1 === k2) {
  	 		 flagsCollected = flagsCollected + v1;
  		}
  		if (v2 === 0 && k1 === k2) {
  	 		 flagsNotCollected = flagsNotCollected + v1;
  		}
	}
}	


const Exploration = () => {
	
	useEffect(() => {
  		window.scrollTo(0, 0)
	}, [])	
	
  return (
    <motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>
	
		<div class='explorationBody'> 
			<br/>
			<div class="yellowNotice">
				<M text="## 🚧 HEADS UP!"/>
				<M text="This page isn't finished or has been hidden for redesign. Content will appear soon."/>
			</div>
		</div> 
    </motion.div>
  );
};
  
export default Exploration;

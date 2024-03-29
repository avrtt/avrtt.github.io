import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

import BTC from "./img/donate/btc.svg";
import ETH from "./img/donate/eth.svg";
import XMR from "./img/donate/xmr.svg";
import BTCQR from "./img/donate/btc-qr.svg";
import ETHQR from "./img/donate/eth-qr.svg";
import XMRQR from "./img/donate/xmr-qr.svg";
import Search from "./img/donate/search.svg";
import QR from "./img/donate/qr.png";

const TITLE = 'Donate - segfaultnomad.github.io'

const logoStyle = {
	'vertical-align': 'middle'
}; 

function modal(myImg) {
	var modal = document.getElementById("myModal");
	var img = document.getElementById(myImg);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() { 
		modal.style.display = "none";
	}
}

const Donate = () => {
	useEffect(() => {
		modal("myImg1");
		modal("myImg2");
		modal("myImg3");
	}, []);
	
  return (
    <>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
		<motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }} class="container">
				
		<div class="wallet1">
			<img src={BTC} alt="btc_logo" width="60" height="60" style={logoStyle} />
			<code class="address" onClick={() => navigator.clipboard.writeText("bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d")}><div class="tooltip">bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d
			<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
			<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
			<img id="myImg1" class="icon" src={BTCQR} alt="bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
			<a href="https://mempool.space/address/bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
			<div class="currency-name"><b>BTC</b> (BITCOIN NETWORK)</div>
		</div>
		<div class="wallet2">
			<img src={ETH} alt="etherium_logo" width="60" height="60" style={logoStyle} />
			<code class="address" onClick={() => navigator.clipboard.writeText("0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf")}><div class="tooltip">0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf
			<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
			<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
			<img id="myImg2" class="icon" src={ETHQR} alt="0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
			<a href="https://etherscan.io/address/0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
			<div class="currency-name"><b>ETH • USDT • USDC • BUSD • DAI</b> (ETHEREUM NETWORK)</div>
		</div>
		<div class="wallet3">
			<img src={XMR} alt="xmr_logo" width="60" height="60" style={logoStyle} />
			<code class="address" onClick={() => navigator.clipboard.writeText("46qGpovqf577jmfR9b6KZ9ixQXV6TrSMp6YnwM19Us3zjitny9jjtHA753mLisvn7j9ZECJ17UbYEY6xKrRMffrc73aET7N")}><div class="tooltip">46qGpovqf577jmfR9b6KZ...EY6xKrRMffrc73aET7N
			<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
			<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
			<img id="myImg3" class="icon" src={XMRQR} alt="46qGpovqf577jmfR9b6KZ9ixQXV6TrSMp6YnwM19Us3zjit ny9jjtHA753mLisvn7j9ZECJ17UbYEY6xKrRMffrc73aET7N" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
			<div class="currency-name"><b>XMR</b> (MONERO NETWORK)</div>
		</div>
		</motion.div>
		
	<div id="myModal" class="modal">
		<div class="close">
			<img class="modal-content" id="img01" alt="modal-img" />
			<div id="caption"></div>
		</div>
	</div>
    </>
  );
};
  
export default Donate;

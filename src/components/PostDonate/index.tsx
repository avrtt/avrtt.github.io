/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from "react";
import { Link } from "gatsby"
import BTC from "../../images/donate/btc.svg";
import ETH from "../../images/donate/eth.svg";
import BNB from "../../images/donate/bnb.svg";
import KoFi from "../../images/donate/kofi.svg";
import PayPal from "../../images/donate/paypal.svg";
import Patreon from "../../images/donate/patreon.svg";
import BTCQR from "../../images/donate/btc-qr.svg";
import ETHQR from "../../images/donate/eth-qr.svg";
import BSCQR from "../../images/donate/bsc-qr.svg";
import { KofiLink, PaypalLink, PatreonLink, BitcoinWallet, BEP20Wallet, ERC20Wallet } from "../../data/paymentMethods";
import * as styles from "./styles.module.scss"
import * as stylesDonateCommon from "../../styles/donate_common.module.scss"

const logoStyle: React.CSSProperties = {
	verticalAlign: 'middle',
	margin: '0px 0.1vw 0 0.1vw'
} 

function modal(myImg: string, qr: string, address: string, caption1: string, caption2: string) {
	const modal = document.getElementById("myModal");
	const img = document.getElementById(myImg);
	const modalImg = document.getElementById("img01") as HTMLImageElement | null;
	const addressText = document.getElementById(stylesDonateCommon.address);
	const caption1Text = document.getElementById(stylesDonateCommon.caption1);
	const caption2Text = document.getElementById(stylesDonateCommon.caption2);
	
	if (img && modal && modalImg && addressText && caption1Text && caption2Text) {
		img.onclick = function(){
			if (modal) modal.style.display = "block";
			if (modalImg) modalImg.src = qr;
			if (addressText) addressText.innerHTML = address;
			if (caption1Text) caption1Text.innerHTML = caption1;
			if (caption2Text) caption2Text.innerHTML = caption2;
		}
	}
	
	const span = document.getElementsByClassName(stylesDonateCommon.close)[0];
	if (span && modal) {
		(span as HTMLElement).onclick = function() { 
			if (modal) modal.style.display = "none";
		}
	}
}

const PostDonate: React.FC<PostDonateProps> = ({ address, caption1, caption2 }) => {

  const btcAddress = address || BitcoinWallet;
  const btcCaption1 = caption1 || 'BITCOIN NETWORK';
  const btcCaption2 = caption2 || 'Address copied to clipboard!';

  useEffect(() => {
  		window.scrollTo(0, 0)
  		modal(styles.myImg1Post, BTCQR, btcAddress, btcCaption1, btcCaption2)
		modal(styles.myImg2Post, BSCQR, BEP20Wallet, 'BEP-20 NETWORK', 'Address copied to clipboard!')
		modal(styles.myImg3Post, ETHQR, ERC20Wallet, 'ERC-20 NETWORK', 'Address copied to clipboard!')
	}, [btcAddress, btcCaption1, btcCaption2])	

  return (
	<>
        <div className={styles.postDonateIconsWrapper}>
            <a target="_blank" href={KofiLink}>
                <img src={KoFi} className={styles.postDonateIcon1} alt="kofi_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PaypalLink}>
                <img src={PayPal} className={styles.postDonateIcon3} alt="paypal_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PatreonLink}>
                <img src={Patreon} className={styles.postDonateIcon2} alt="patreon_logo" style={logoStyle} />
            </a>
            <img src={BTC} id={styles.myImg1Post} className={styles.postDonateIcon4} style={logoStyle} onClick={() => navigator.clipboard.writeText(BitcoinWallet)} alt="btc-logo" />
			<img src={BNB} id={styles.myImg3Post} className={styles.postDonateIcon5} style={logoStyle} onClick={() => navigator.clipboard.writeText(BEP20Wallet)} alt="bnb-logo" />
			<img src={ETH} id={styles.myImg2Post} className={styles.postDonateIcon6} style={logoStyle} onClick={() => navigator.clipboard.writeText(ERC20Wallet)} alt="eth-logo" />	
		</div>
		<div className={styles.postDonateIconsWrapperMobile}>
            <a target="_blank" href={KofiLink}>
                <img src={KoFi} className={styles.postDonateIcon1} alt="kofi_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PaypalLink}>
                <img src={PayPal} className={styles.postDonateIcon3} alt="paypal_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PatreonLink}>
                <img src={Patreon} className={styles.postDonateIcon2} alt="patreon_logo" style={logoStyle} />
            </a>
            <Link to="/donate">
				<img src={BTC} id={styles.myImg1Post} className={styles.postDonateIcon4} style={logoStyle} alt="btc-logo" />
			</Link>
			<Link to="/donate">
				<img src={BNB} id={styles.myImg3Post} className={styles.postDonateIcon5} style={logoStyle} alt="bnb-logo" />
			</Link>
			<Link to="/donate">
				<img src={ETH} id={styles.myImg2Post} className={styles.postDonateIcon6} style={logoStyle} alt="eth-logo" />	
			</Link>
		</div>
        <div id="myModal" className={stylesDonateCommon.modal}>
	        <div className={stylesDonateCommon.close}>
		        <img className={stylesDonateCommon.modalContent} id="img01" alt="modal-img" />
		        <div id={stylesDonateCommon.address}></div>
		        <div id={stylesDonateCommon.caption1}></div>
		        <div id={stylesDonateCommon.caption2}></div>
	        </div>
        </div>
		
	</>
  );
};
export default PostDonate;



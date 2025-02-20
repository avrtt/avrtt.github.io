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
import { KofiLink, PaypalLink, PatreonLink, BitcoinWallet, BEP20Wallet, ERC20Wallet } from "../../data/paymentMethods.js";
import * as styles from "./styles.module.scss"
import * as stylesDonateCommon from "../../styles/donate_common.module.scss"

const logoStyle = {
	'vertical-align': 'middle',
	'margin': '0px 0.1vw 0 0.1vw'
} 

function modal(myImg, qr, address, caption1, caption2) {
	var modal = document.getElementById("myModal");
	var img = document.getElementById(myImg);
	var modalImg = document.getElementById("img01");
	var addressText = document.getElementById(stylesDonateCommon.address);
	var caption1Text = document.getElementById(stylesDonateCommon.caption1);
	var caption2Text = document.getElementById(stylesDonateCommon.caption2);
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = qr;
		addressText.innerHTML = address;
		caption1Text.innerHTML = caption1;
		caption2Text.innerHTML = caption2;
	}
	var span = document.getElementsByClassName(stylesDonateCommon.close)[0];
	span.onclick = function() { 
		modal.style.display = "none";
	}
}

const PostDonate = () => {

  useEffect(() => {
  		window.scrollTo(0, 0)
  		modal(styles.myImg1Post, BTCQR, BitcoinWallet, 'BITCOIN NETWORK', 'Address copied to clipboard!')
		modal(styles.myImg2Post, BSCQR, BEP20Wallet, 'BEP-20 NETWORK', 'Address copied to clipboard!')
		modal(styles.myImg3Post, ETHQR, ERC20Wallet, 'ERC-20 NETWORK', 'Address copied to clipboard!')
	}, [])	

  return (
	<>
        <div class={styles.postDonateIconsWrapper}>
            <a target="_blank" href={KofiLink}>
                <img src={KoFi} class={styles.postDonateIcon1} alt="kofi_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PaypalLink}>
                <img src={PayPal} class={styles.postDonateIcon3} alt="paypal_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PatreonLink}>
                <img src={Patreon} class={styles.postDonateIcon2} alt="patreon_logo" style={logoStyle} />
            </a>
            <img src={BTC} id={styles.myImg1Post} class={styles.postDonateIcon4} style={logoStyle} onClick={() => navigator.clipboard.writeText(BitcoinWallet)} alt="btc-logo" />
			<img src={BNB} id={styles.myImg3Post} class={styles.postDonateIcon5} style={logoStyle} onClick={() => navigator.clipboard.writeText(BEP20Wallet)} alt="bnb-logo" />
			<img src={ETH} id={styles.myImg2Post} class={styles.postDonateIcon6} style={logoStyle} onClick={() => navigator.clipboard.writeText(ERC20Wallet)} alt="eth-logo" />	
		</div>
		<div class={styles.postDonateIconsWrapperMobile}>
            <a target="_blank" href={KofiLink}>
                <img src={KoFi} class={styles.postDonateIcon1} alt="kofi_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PaypalLink}>
                <img src={PayPal} class={styles.postDonateIcon3} alt="paypal_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PatreonLink}>
                <img src={Patreon} class={styles.postDonateIcon2} alt="patreon_logo" style={logoStyle} />
            </a>
            <Link to="/donate">
				<img src={BTC} id={styles.myImg1Post} class={styles.postDonateIcon4} style={logoStyle} alt="btc-logo" />
			</Link>
			<Link to="/donate">
				<img src={BNB} id={styles.myImg3Post} class={styles.postDonateIcon5} style={logoStyle} alt="bnb-logo" />
			</Link>
			<Link to="/donate">
				<img src={ETH} id={styles.myImg2Post} class={styles.postDonateIcon6} style={logoStyle} alt="eth-logo" />	
			</Link>
		</div>
        <div id="myModal" class={stylesDonateCommon.modal}>
	        <div class={stylesDonateCommon.close}>
		        <img class={stylesDonateCommon.modalContent} id="img01" alt="modal-img" />
		        <div id={stylesDonateCommon.address}></div>
		        <div id={stylesDonateCommon.caption1}></div>
		        <div id={stylesDonateCommon.caption2}></div>
	        </div>
        </div>
		
	</>
  );
};
export default PostDonate;



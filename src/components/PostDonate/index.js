import React, { useEffect } from "react";
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

const logoStyle = {
	'vertical-align': 'middle',
	'margin': '0px 0.1vw 0 0.1vw'
} 

function modal(myImg, qr, address, caption1, caption2) {
	var modal = document.getElementById("myModal");
	var img = document.getElementById(myImg);
	var modalImg = document.getElementById("img01");
	var addressText = document.getElementById("address");
	var caption1Text = document.getElementById("caption1");
	var caption2Text = document.getElementById("caption2");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = qr;
		addressText.innerHTML = address;
		caption1Text.innerHTML = caption1;
		caption2Text.innerHTML = caption2;
	}
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() { 
		modal.style.display = "none";
	}
}

const PostDonate = () => {

  useEffect(() => {
  		window.scrollTo(0, 0)
  		modal("myImg1Post", BTCQR, BitcoinWallet, 'BITCOIN NETWORK', 'Address copied to clipboard!')
		modal("myImg2Post", BSCQR, BEP20Wallet, 'BEP-20 NETWORK', 'Address copied to clipboard!')
		modal("myImg3Post", ETHQR, ERC20Wallet, 'ERC-20 NETWORK', 'Address copied to clipboard!')
	}, [])	

  return (
	<>
        <div class="postDonateIconsWrapper">
            <a target="_blank" href={KofiLink}>
                <img src={KoFi} class="postDonateIcon1" alt="kofi_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PaypalLink}>
                <img src={PayPal} class="postDonateIcon3" alt="paypal_logo" style={logoStyle} />
            </a>
            <a target="_blank" href={PatreonLink}>
                <img src={Patreon} class="postDonateIcon2" alt="patreon_logo" style={logoStyle} />
            </a>
            
            <img src={BTC} id="myImg1Post" class="postDonateIcon4" style={logoStyle} onClick={() => navigator.clipboard.writeText(BitcoinWallet)} />
			<img src={BNB} id="myImg3Post" class="postDonateIcon5" style={logoStyle} onClick={() => navigator.clipboard.writeText(BEP20Wallet)} />
			<img src={ETH} id="myImg2Post" class="postDonateIcon6" style={logoStyle} onClick={() => navigator.clipboard.writeText(ERC20Wallet)} />	
		</div>
		
        <div id="myModal" class="modal">
	        <div class="close">
		        <img class="modal-content" id="img01" alt="modal-img" />
		        <div id="address"></div>
		        <div id="caption1"></div>
		        <div id="caption2"></div>
	        </div>
        </div>
		
	</>
  );
};
export default PostDonate;



import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { StaticImage } from "gatsby-plugin-image"
import M from '../../components/Markdown';
import StickerPack from '../../components/StickerPack';
import BTC from "../../images/donate/btc.svg";
import ETH from "../../images/donate/eth.svg";
import BNB from "../../images/donate/bnb.svg";
import KoFi from "../../images/donate/kofi.svg";
import PayPal from "../../images/donate/paypal.svg";
import Patreon from "../../images/donate/patreon.svg";
import Card from "../../images/donate/card.svg";
import CardSber from "../../images/donate/card_sber.svg";
import BTCQR from "../../images/donate/btc-qr.svg";
import ETHQR from "../../images/donate/eth-qr.svg";
import BSCQR from "../../images/donate/bsc-qr.svg";
import Search from "../../images/donate/search.svg";
import QR from "../../images/donate/qr.png";
import { KofiLink, KofiHandle, PaypalLink, PaypalHandle, PatreonLink, PatreonHandle, SberbankCardCopy, SberbankCardDisplay, SberbankSBPCopy, SberbankSBPDisplay, BitcoinWallet, BEP20Wallet, ERC20Wallet } from "../../data/paymentMethods.js";

const TITLE = 'Donate - avrtt.blog'

const logoStyle = {
	'vertical-align': 'middle'
};

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

const Donate = () => {
	
    const [showEasterEgg, setShowEasterEgg] = useState(false)

	useEffect(() => {
  		window.scrollTo(0, 0)

  		modal("myImg1", BTCQR, BitcoinWallet)
		modal("myImg2", BSCQR, BEP20Wallet)
		modal("myImg3", ETHQR, ERC20Wallet)

        const randomNumber = Math.floor(Math.random() * 50000) + 1;
        if (randomNumber === 1) {
            setShowEasterEgg(true)
        }
	}, [])	
	
    return (
        <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.15 }}>
            
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            
            <div class="donateBody">
                <M text="So, have any reason to thank me? You could use one of the following donation methods:"/>
                <div class="wallets">
                    <div class="wallet1">
                        <img src={KoFi} class="noselect" alt="kofi_logo" width="60" height="60" style={logoStyle} />
                        <s><a href={KofiLink}><code class="donateLink">{KofiHandle}</code></a></s>
                        <div class="currency-name">BUY ME A COFFEE WITH <b>KO-FI</b> </div>
                    </div>
                    <div class="wallet3">
                        <img src={PayPal} class="noselect" alt="paypal_logo" width="60" height="60" style={logoStyle} />
                        <s><a href={PaypalLink}><code class="donateLink">{PaypalHandle}</code></a></s>
                        <div class="currency-name"><b>PAYPAL</b> MULTICURRENCY TRANSFER</div>
                    </div>
                    <div class="wallet3">
                        <img src={Patreon} class="noselect" alt="patreon_logo" width="60" height="60" style={logoStyle} />
                        <s><a href={PatreonLink}><code class="donateLink">{PatreonHandle}</code></a></s>
                        <div class="currency-name"><b>PATREON</b> EXCLUSIVE CONTENT VIA PAID SUBSCRIPTION</div>
                    </div>
                    <div class="wallet3">
                        <img src={CardSber} class="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
                        <code class="address" onClick={() => navigator.clipboard.writeText(SberbankCardCopy)}><div class="tooltip">{SberbankCardDisplay}
                        <span class="tooltiptext">Click to copy</span></div></code>
                        <div class="currency-name"><b>RUB</b> &nbsp;(SBERBANK, RUSSIAN CARDS ONLY) &nbsp; | &nbsp; <code class="phoneNumber" onClick={() => navigator.clipboard.writeText(SberbankSBPCopy)}><div class="tooltip">{SberbankSBPDisplay}
                        </div></code></div>
                    </div>
                    <div class="wallet3">				
                        <img src={BTC} class="noselect" alt="btc_logo" width="60" height="60" style={logoStyle} />
                        <code class="address" onClick={() => navigator.clipboard.writeText(BitcoinWallet)}><div class="tooltip">{BitcoinWallet}
                        <span class="tooltiptext">Click to copy</span></div></code>&nbsp;
                        <img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
                        <img id="myImg1" class="icon" src={BTCQR} alt="BitcoinWallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
                        <a href={"https://mempool.space/address/" + BitcoinWallet}><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
                        <div class="currency-name"><b>BTC</b> &nbsp;(BITCOIN NETWORK)</div>
                    </div>		
                    <div class="wallet3">		
                        <img src={BNB} class="noselect" alt="bnb_logo" width="60" height="60" style={logoStyle} />
                        <code class="address" onClick={() => navigator.clipboard.writeText(BEP20Wallet)}><div class="tooltip">{BEP20Wallet}
                        <span class="tooltiptext">Click to copy</span></div></code>&nbsp;
                        <img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
                        <img id="myImg3" class="icon" src={BSCQR} alt="BEP20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
                        <a href={"https://bscscan.com/address/" + BEP20Wallet}><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
                        <div class="currency-name"><b>USDT • USDC • DAI • BNB</b> &nbsp;(BNB SMART CHAIN NETWORK, BEP-20)</div>
                    </div>				
                    <div class="wallet6">
                        <img src={ETH} class="noselect" alt="etherium_logo" width="60" height="60" style={logoStyle} />
                        <code class="address" onClick={() => navigator.clipboard.writeText(ERC20Wallet)}><div class="tooltip">{ERC20Wallet}
                        <span class="tooltiptext">Click to copy</span></div></code>&nbsp;
                        <img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
                        <img id="myImg2" class="icon" src={ETHQR} alt="ERC20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
                        <a href={"https://etherscan.io/address/" + ERC20Wallet}><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
                        <div class="currency-name"><b>USDT • USDC • DAI • ETH</b> &nbsp;(ETHEREUM NETWORK, ERC-20)</div>
                    </div>
                </div>
                <p>Your donations directly allow me to spend more time on my community-related projects! <StickerPack sticker="pepe_wink"/></p>
                {showEasterEgg && (
                    <div>
                        <br/><br/>
                        <M text="---"/>
                        <br/>
                        <M text="# EASTER EGG???"/>
                        <M text="Btw this is me when I don't have to work today thanks to your donation:"/>
                        <StaticImage
                            style={{
                                "border-radius": "2vh", 
                                "width": "80%", 
                                "margin-left": "auto", 
                                "margin-right": "auto",
                                "display": "block"
                            }} 
                            src="../../images/donate/me.jpg" 
                        />
                    </div>
                )}
                <div id="myModal" class="modal">
                    <div class="close">
                        <img class="modal-content" id="img01" alt="modal-img" />
                            <div id="address"></div>
                    </div>
                </div>			
            </div> 
        </motion.div>
    );
};

export default Donate;

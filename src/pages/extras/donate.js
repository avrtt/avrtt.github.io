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
import * as stylesWallets from "../../styles/wallets.module.scss"
import * as stylesDonateCommon from "../../styles/donate_common.module.scss"

const TITLE = 'Donate - avrtt.blog'

const logoStyle = {
	'vertical-align': 'middle'
};

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

const Donate = () => {
	
    const [showEasterEgg, setShowEasterEgg] = useState(false)

	useEffect(() => {
  		window.scrollTo(0, 0)

  		modal(stylesWallets.myImg1, BTCQR, BitcoinWallet)
		modal(stylesWallets.myImg2, BSCQR, BEP20Wallet)
		modal(stylesWallets.myImg3, ETHQR, ERC20Wallet)

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
                <div className="mobileOnlySupport">
                    <div style={{ marginLeft: 0, marginBottom: "1.8rem" }}>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={KoFi} class="noselect" alt="kofi_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <s><a href="https://ko-fi.com/avrtt">@avrtt</a></s>
                        </p>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={PayPal} class="noselect" alt="paypal_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <s><a href="https://www.paypal.me/vladaverett">@vladaverett</a></s>
                        </p>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={Patreon} class="noselect" alt="patreon_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <s><a href="https://www.patreon.com/avrtt">@avrtt</a></s>
                        </p>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={CardSber} class="noselect" alt="sber_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(SberbankCardCopy)} whileTap={{ scale: 0.95 }}>Copy card number</motion.button> (Sberbank)
                        </p>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={BTC} class="noselect" alt="btc_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(BitcoinWallet)} whileTap={{ scale: 0.95 }}>Copy address</motion.button> (BTC network)
                        </p>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={BNB} class="noselect" alt="bnb_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(BEP20Wallet)} whileTap={{ scale: 0.95 }}>Copy address</motion.button> (BEP-20 network)
                        </p>
                        <p style={{ marginBottom: "-0.8rem" }}>
                            <img src={ETH} class="noselect" alt="eth_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
                            <motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(ERC20Wallet)} whileTap={{ scale: 0.95 }}>Copy address</motion.button> (ETC-20 network)
                        </p>
                    </div>
                </div>
                <div className={`${stylesWallets.wallets} desktopOnlySupport`}>
                    <div class={stylesWallets.wallet1}>
                        <img src={KoFi} class="noselect" alt="kofi_logo" width="60" height="60" style={logoStyle} />
                        <s><a href={KofiLink}><code class={stylesWallets.donateLink}>{KofiHandle}</code></a></s>
                        <div class={stylesWallets.currencyName}>BUY ME A COFFEE WITH <b>KO-FI</b> </div>
                    </div>
                    <div class={stylesWallets.wallet3}>
                        <img src={PayPal} class="noselect" alt="paypal_logo" width="60" height="60" style={logoStyle} />
                        <s><a href={PaypalLink}><code class={stylesWallets.donateLink}>{PaypalHandle}</code></a></s>
                        <div class={stylesWallets.currencyName}><b>PAYPAL</b> MULTICURRENCY TRANSFER</div>
                    </div>
                    <div class={stylesWallets.wallet3}>
                        <img src={Patreon} class="noselect" alt="patreon_logo" width="60" height="60" style={logoStyle} />
                        <s><a href={PatreonLink}><code class={stylesWallets.donateLink}>{PatreonHandle}</code></a></s>
                        <div class={stylesWallets.currencyName}><b>PATREON</b> EXCLUSIVE CONTENT VIA PAID SUBSCRIPTION</div>
                    </div>
                    <div class={stylesWallets.wallet3}>
                        <img src={CardSber} class="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
                        <code class={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(SberbankCardCopy)}><div class={stylesWallets.tooltip}>{SberbankCardDisplay}
                        <span class={stylesWallets.tooltiptext}>Click to copy</span></div></code>
                        <div class={stylesWallets.currencyName}><b>RUB</b> &nbsp;(SBERBANK, RUSSIAN CARDS ONLY) &nbsp; | &nbsp; <code class={stylesWallets.phoneNumber} onClick={() => navigator.clipboard.writeText(SberbankSBPCopy)}><div class={stylesWallets.tooltip}>{SberbankSBPDisplay}
                        </div></code></div>
                    </div>
                    <div class={stylesWallets.wallet3}>				
                        <img src={BTC} class="noselect" alt="btc_logo" width="60" height="60" style={logoStyle} />
                        <code class={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(BitcoinWallet)}><div class={stylesWallets.tooltip}>{BitcoinWallet}
                        <span class={stylesWallets.tooltiptext}>Click to copy</span></div></code>&nbsp;
                        <img id={stylesWallets.qr} class={stylesWallets.icon} src={QR} width="36" height="36" title="QR code" alt="qr-code" />
                        <img id={stylesWallets.myImg1} class={stylesWallets.icon} src={BTCQR} alt="BitcoinWallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
                        <a href={"https://mempool.space/address/" + BitcoinWallet}><img class={stylesWallets.icon} src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
                        <div class={stylesWallets.currencyName}><b>BTC</b> &nbsp;(BITCOIN NETWORK)</div>
                    </div>		
                    <div class={stylesWallets.wallet3}>		
                        <img src={BNB} class="noselect" alt="bnb_logo" width="60" height="60" style={logoStyle} />
                        <code class={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(BEP20Wallet)}><div class={stylesWallets.tooltip}>{BEP20Wallet}
                        <span class={stylesWallets.tooltiptext}>Click to copy</span></div></code>&nbsp;
                        <img id={stylesWallets.qr} class={stylesWallets.icon} src={QR} width="36" height="36" title="QR code" alt="qr-code" />
                        <img id={stylesWallets.myImg3} class={stylesWallets.icon} src={BSCQR} alt="BEP20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
                        <a href={"https://bscscan.com/address/" + BEP20Wallet}><img class={stylesWallets.icon} src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
                        <div class={stylesWallets.currencyName}><b>USDT • USDC • DAI • BNB</b> &nbsp;(BNB SMART CHAIN NETWORK, BEP-20)</div>
                    </div>				
                    <div class={stylesWallets.wallet6}>
                        <img src={ETH} class="noselect" alt="etherium_logo" width="60" height="60" style={logoStyle} />
                        <code class={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(ERC20Wallet)}><div class={stylesWallets.tooltip}>{ERC20Wallet}
                        <span class={stylesWallets.tooltiptext}>Click to copy</span></div></code>&nbsp;
                        <img id={stylesWallets.qr} class={stylesWallets.icon} src={QR} width="36" height="36" title="QR code" alt="qr-code" />
                        <img id={stylesWallets.myImg2} class={stylesWallets.icon} src={ETHQR} alt="ERC20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
                        <a href={"https://etherscan.io/address/" + ERC20Wallet}><img class={stylesWallets.icon} src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
                        <div class={stylesWallets.currencyName}><b>USDT • USDC • DAI • ETH</b> &nbsp;(ETHEREUM NETWORK, ERC-20)</div>
                    </div>
                </div>
                <p>Your donations directly allow me to spend more time on my community-related projects! <StickerPack sticker="pepe_wink"/></p>
                {showEasterEgg && (
                    <div className="desktopOnlySupport">
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
                <div id="myModal" class={stylesDonateCommon.modal}>
                    <div class={stylesDonateCommon.close}>
                        <img class={stylesDonateCommon.modalContent} id="img01" alt="modal-img" />
                            <div id={stylesDonateCommon.address}></div>
                    </div>
                </div>			
            </div> 
        </motion.div>
    );
};

export default Donate;

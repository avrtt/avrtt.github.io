import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import LinkBlock from '../../components/LinkBlock';
import TileContainer from '../../components/TileContainer';
import { userDiff } from '../../utils/freelance';
import { categories, services } from '../../data/freelance/arrays';
import { freelanceLastUpdated } from '../../data/lastUpdated';
import Stack from'../../components/Stack';
import FreelanceCategory from'../../components/FreelanceCategory';
import Courses from'../../components/Courses';
import info from "../../images/goals/info.svg";
import SpoilerServices from '../../components/SpoilerServices';
import { Link } from "gatsby"
import CardSber from "../../images/donate/card_sber.svg";
import BTC from "../../images/donate/btc.svg";
import ETH from "../../images/donate/eth.svg";
import BNB from "../../images/donate/bnb.svg";
import BTCQR from "../../images/donate/btc-qr.svg";
import ETHQR from "../../images/donate/eth-qr.svg";
import BSCQR from "../../images/donate/bsc-qr.svg";
import Search from "../../images/donate/search.svg";
import QR from "../../images/donate/qr.png";
import telegram from "../../images/links/telegram.svg"
import envelope from "../../images/links/envelope.svg"
import facebook from "../../images/links/facebook.svg"
import upwork from "../../images/links/upwork.svg"
import fiverr from "../../images/links/fiverr.svg"
import kwork from "../../images/links/kwork.svg"
import habr from "../../images/links/habr.svg"
import { textMain } from "../strings/freelance"
import { SberbankCardCopy, SberbankCardDisplay, SberbankSBPCopy, SberbankSBPDisplay, BitcoinWallet, BEP20Wallet, ERC20Wallet } from "../../data/paymentMethods.js";

const TITLE = 'Фриланс - avrtt.blog'

const logoStyle = {
	'vertical-align': 'middle'
}; 

var tooltipText
if (userDiff === 0) {
	tooltipText = textMain.general.tooltip.sameZone.ru
} else {
	tooltipText = textMain.general.tooltip.diffZone.ru
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

const FreelanceRu = () => {

	const collRef = useRef([]);

    useEffect(() => {
        const coll = collRef.current;
        coll.forEach((element) => {
            if (element) {
                element.addEventListener("click", toggleContent);
            }
        });
        return () => {
            coll.forEach((element) => {
                if (element) {
                    element.removeEventListener("click", toggleContent);
                }
            });
        };
    }, []);

	useEffect(() => {
  		window.scrollTo(0, 0)
  		modal("myImg1", BTCQR, 'bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d')
		modal("myImg2", BSCQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf')
		modal("myImg3", ETHQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf')
	}, [])	

    const toggleContent = (event) => {
        const content = event.target.nextElementSibling;
        event.target.classList.toggle("activeSpoiler");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };
	
  	return (
		<motion.div
			initial={{opacity: 0 }}
			animate={{opacity: 1 }}
			exit={{opacity: 0 }}
			transition={{ duration: 0.15 }}>
			
			<Helmet>
				<title>{ TITLE }</title>
			</Helmet>

			<div class="languageSwitchWrapper noselect">
				<Link to="/freelance/">
					<span class="languageButton">EN</span>
				</Link>
			</div>

			<div class="freelanceBody">
				<p dangerouslySetInnerHTML={{ __html: textMain.general.intro.ru }}/>
				<SpoilerServices 
					title={textMain.general.spoiler.title.ru}
					services={services}
					spoilerExtraDesc={textMain.general.spoiler.extraDesc.ru}
					isEnglish={false}
				/>
				<M text={textMain.general.servicesRedirect.ru}/>
				<M text={textMain.general.contactMe.ru}/>
				<TileContainer columns={3} marginTop='4vh' marginBottom='2vh' animationonscroll={false}>
					<LinkBlock
						link='https://t.me/averett'
						icon={telegram}
						iconSize='3vw'
						name='Telegram'
						handle='@averett'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='14.5vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
					<LinkBlock
						link='mailto:avrtt@tuta.io'
						icon={envelope}
						iconSize='3vw'
						name='Почта'
						handle='avrtt@tuta.io'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='14.5vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
					<LinkBlock
						link='https://www.facebook.com/vladaverett'
						icon={facebook}
						iconSize='3vw'
						name='Facebook'
						handle='@vladaverett'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='14.5vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
				</TileContainer>
				<TileContainer columns={4} marginTop='2vh' marginBottom='6vh' animationonscroll={false}>
					<LinkBlock
						link='https://kwork.ru/user/avrtt'
						icon={kwork}
						iconSize='3vw'
						name='Kwork 🇷🇺'
						handle='@avrtt'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='10vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
					<LinkBlock
						link='https://freelance.habr.com/freelancers/avrtt'
						icon={habr}
						iconSize='3vw'
						name='Habr 🇷🇺'
						handle='@avrtt'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='10vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
					<LinkBlock
						link='https://www.upwork.com/freelancers/~019b5459361c20c528'
						icon={upwork}
						iconSize='3vw'
						name='Upwork 🌐'
						handle=''
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='10vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
					<LinkBlock
						link='https://www.fiverr.com/vladaverett'
						icon={fiverr}
						iconSize='3vw'
						name='Fiverr 🌐'
						handle='@vladaverett'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='10vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
				</TileContainer>
				<span>
					<span dangerouslySetInnerHTML={{ __html: textMain.general.schedule.ru }} />
					<span class="tooltipFreelance">
						&nbsp;&nbsp;
						<img id='infoFreelance' src={info} alt='info'/>
						<span class="tooltiptextFreelance">{tooltipText}</span>
					</span>
				</span>
				<M text={textMain.general.outro.ru}/>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.projects.heading.ru}/>
					<M text={textMain.projects.intro.ru}/>
					<div class="freelanceCategorySectionWrapper">
						{categories.map((category) => (
							<FreelanceCategory 
								categoryName={category.categoryNameRu}
								categoryDesc={category.categoryDescRu}
								numProjects={category.numProjectsRu}
								img={category.img}
								url={"/freelance/ru/projects/" + category.categoryKey + "/"}
							/>
						))}
					</div>
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.workflow.heading.ru}/>
					<M text={textMain.workflow.section1.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section1.block1.ru}/>
						<M text={textMain.workflow.section1.block2.ru}/>
						<M text={textMain.workflow.section1.block3.ru}/>
						<M text={textMain.workflow.section1.block4.ru}/>
					</p>
					<M text={textMain.workflow.section2.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section2.block1.ru}/>
						<M text={textMain.workflow.section2.block2.ru}/>
						<M text={textMain.workflow.section2.block3.ru}/>
					</p>
					<M text={textMain.workflow.section3.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section3.block1.ru}/>
					</p>
					<M text={textMain.workflow.section4.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section4.block1.ru}/>
						<M text={textMain.workflow.section4.block2.ru}/>
						<M text={textMain.workflow.section4.block3.ru}/>
					</p>
					<M text={textMain.workflow.section5.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section5.block1.ru}/>
						<M text={textMain.workflow.section5.block2.ru}/>
					</p>
					<M text={textMain.workflow.section6.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section6.block1.ru}/>
						<M text={textMain.workflow.section6.block2.ru}/>
					</p>
					<M text={textMain.workflow.section7.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section7.block1.ru}/>
					</p>
					<M text={textMain.workflow.section8.heading.ru}/>
					<p id="freelanceWorkflowItem">
						<M text={textMain.workflow.section8.block1.ru}/>
						<M text={textMain.workflow.section8.block2.ru}/>
					</p>
					<br/>
					<button className="spoilerButton noselect" ref={(el) => collRef.current.push(el)}>
						&nbsp;&nbsp;
						<span className="spoilerText"></span>
						{textMain.workflow.faq.title.ru}
						&nbsp;&nbsp;
					</button>
					<div className="spoilerContentWrapper">
						<div className="spoilerContentFAQ">
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q1.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a1.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q2.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a2.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q3.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a3.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q4.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.a4.ru }}/></p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q5.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.a5.ru }}/></p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.q6.ru }}/></p>
								<p class="spoilerAnswer"><strong>A:</strong> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.a6.ru }}/></p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.q7.ru }}/></p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a7.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q8.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a8.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q9.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a9.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q10.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a10.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q11.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a11.ru}</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> {textMain.workflow.faq.q12.ru}</p>
								<p class="spoilerAnswer"><strong>A:</strong> {textMain.workflow.faq.a12.ru}</p>
							</div>
						</div>
					</div>
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.testimonials.heading.ru}/>
					<TileContainer columns={2} marginTop='2vh' marginBottom='4vh' animationonscroll={false}>
						<LinkBlock
							link='https://t.me/avrtt_feedback/6'
							icon={telegram}
							iconSize='3vw'
							name='Telegram'
							handle='@avrtt_feedback'
							description={textMain.testimonials.telegramDesc.ru}
							backgroundColor='#dbdbdb'
							blockWidth='25vw'
							fontSizeName = '1vw'
							fontSizeHandle = '1vw'
							padding='1vw'
						/>
						<LinkBlock
							link='https://www.facebook.com/averett.freelance/reviews'
							icon={facebook}
							iconSize='3vw'
							name='Facebook'
							handle='@averett.freelance'
							description={textMain.testimonials.facebookDesc.ru}
							backgroundColor='#dbdbdb'
							blockWidth='25vw'
							fontSizeName = '1vw'
							fontSizeHandle = '1vw'
							padding='1vw'
						/>
					</TileContainer>
					<M text={textMain.testimonials.general.ru}/>
					<button className="spoilerButton noselect" ref={(el) => collRef.current.push(el)}>
						&nbsp;&nbsp;
						<span className="spoilerText"></span>
						{textMain.testimonials.spoilerDifference.title.ru}
						&nbsp;&nbsp;
					</button>
					<div className="spoilerContentWrapper">
						<div className="spoilerBlockTestimonials">
							<M text={textMain.testimonials.spoilerDifference.content.ru}/>
						</div>
					</div>
					<br/>
					<M text={textMain.testimonials.write.heading.ru}/>
					<M text={textMain.testimonials.write.template.ru}/>
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.background.heading.ru}/>
					<M text={textMain.background.block1.ru}/>
					<M text={textMain.background.block2.ru}/>
					<div className='listHome'>
						<M text={textMain.background.block3.ru}/>
					</div>
					<M text={textMain.background.block4.ru}/>
					<M text={textMain.background.block5.ru}/>
					<M text={textMain.background.block6.ru}/>
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.courses.heading.ru}/>
					<M text={textMain.courses.intro.ru}/>
					<Courses lang="ru"/>
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.stack.heading.ru}/>
					<Stack />
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.payment.heading.ru}/>
					<div class="wallets">
						<div class="wallet3">
							<img src={CardSber} class="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
							<code class="address" onClick={() => navigator.clipboard.writeText(SberbankCardCopy)}><div class="tooltip">{SberbankCardDisplay}
							<span class="tooltiptext">Скопировать</span></div></code>
							<div class="currency-name"><b>RUB</b> &nbsp;(СБЕРБАНК, ТОЛЬКО РОССИЙСКИЕ КАРТЫ) &nbsp; | &nbsp; <code class="phoneNumber" onClick={() => navigator.clipboard.writeText(SberbankSBPCopy)}><div class="tooltip">{SberbankSBPDisplay}
							</div></code></div>
						</div>
						<div class="wallet3">				
							<img src={BTC} class="noselect" alt="btc_logo" width="60" height="60" style={logoStyle} />
							<code class="address" onClick={() => navigator.clipboard.writeText(BitcoinWallet)}><div class="tooltip">{BitcoinWallet}
							<span class="tooltiptext">Скопировать</span></div></code>&nbsp;
							<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
							<img id="myImg1" class="icon" src={BTCQR} alt="BitcoinWallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
							<a href={"https://mempool.space/address/" + BitcoinWallet}><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="История транзакций" /></a>
							<div class="currency-name"><b>BTC</b> &nbsp;(СЕТЬ BITCOIN)</div>
						</div>		
						<div class="wallet3">		
							<img src={BNB} class="noselect" alt="bnb_logo" width="60" height="60" style={logoStyle} />
							<code class="address" onClick={() => navigator.clipboard.writeText(BEP20Wallet)}><div class="tooltip">{BEP20Wallet}
							<span class="tooltiptext">Скопировать</span></div></code>&nbsp;
							<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
							<img id="myImg3" class="icon" src={BSCQR} alt="BEP20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
							<a href={"https://bscscan.com/address/" + BEP20Wallet}><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="История транзакций" /></a>
							<div class="currency-name"><b>USDT • USDC • DAI • BNB</b> &nbsp;(СЕТЬ BNB SMART CHAIN, BEP-20)</div>
						</div>				
						<div class="wallet6">
							<img src={ETH} class="noselect" alt="etherium_logo" width="60" height="60" style={logoStyle} />
							<code class="address" onClick={() => navigator.clipboard.writeText(ERC20Wallet)}><div class="tooltip">{ERC20Wallet}
							<span class="tooltiptext">Скопировать</span></div></code>&nbsp;
							<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
							<img id="myImg2" class="icon" src={ETHQR} alt="ERC20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
							<a href={"https://etherscan.io/address/" + ERC20Wallet}><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="История транзакций" /></a>
							<div class="currency-name"><b>USDT • USDC • DAI • ETH</b> &nbsp;(СЕТЬ ETHEREUM, ERC-20)</div>
						</div>
					</div>
				</AnimationOnScroll>

				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text={textMain.related.heading.ru}/>
					<div class="listHome"> 
						<M text={textMain.related.links.ru}/>
					</div>   
				</AnimationOnScroll>
				
				<div id="myModal" class="modal">
					<div class="close">
						<img class="modal-content" id="img01" alt="modal-img" />
						<div id="address"></div>
					</div>
				</div>	
			</div>
			<div class="lastUpdatedFreelance">UPDATED ON {freelanceLastUpdated}</div>
		</motion.div>
  	);
};
  
export default FreelanceRu;

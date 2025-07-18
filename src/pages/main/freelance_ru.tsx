/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef } from 'react';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import H from "../../components/Highlight"
import LinkBlock from '../../components/LinkBlock';
import TileContainerLink from '../../components/TileContainerLink';
import { userDiff, freelanceExperienceStringRu, strUTCOffset, startHoursUTC, endHoursUTC } from '../../utils/freelance';
import { categories, services, projectsCount } from '../../data/freelance/arrays';
import { freelanceLastUpdated } from '../../data/lastUpdated';
import Stack from'../../components/Stack';
import FreelanceCategory from'../../components/FreelanceCategory';
import Courses from'../../components/Courses';
import SpoilerServices from '../../components/SpoilerServices';
import { Link } from "gatsby"
import PayPal from "../../images/donate/paypal.svg";
import CardBakai from "../../images/donate/card_bakai.svg";
import CardMbank from "../../images/donate/card_mbank.svg";
import CardVirtualEURMbank from "../../images/donate/card_mbank_virtual_eur.svg";
import CardVirtualRUBMbank from "../../images/donate/card_mbank_virtual_rub.svg";
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
import english from "../../images/flags/us.svg"
import FreelanceStatus from "../../components/FreelanceStatus"
import Tooltip from "../../components/Tooltip";
import photoAbout from "../../images/about/photoAbout.jpg";
import { textMain } from "../strings/freelance"
import { PaypalLink, PaypalHandle, BakaiCardCopy, BakaiCardDisplay, MbankCardCopy, MbankCardDisplay, MbankVirtualEURCardCopy, MbankVirtualEURCardDisplay, MbankVirtualRUBCardCopy, MbankVirtualRUBCardDisplay, SberbankCardCopy, SberbankCardDisplay, SberbankSBPCopy, SberbankSBPDisplay, BitcoinWallet, BEP20Wallet, ERC20Wallet } from "../../data/paymentMethods";
import * as stylesWallets from "../../styles/wallets.module.scss"
import * as stylesDonateCommon from "../../styles/donate_common.module.scss"
import * as stylesSpoilers from "../../styles/spoilers.module.scss"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const logoStyle: React.CSSProperties = {
	verticalAlign: 'middle'
}

const flagStyle = {
	width: '35px',
	borderRadius: '6px',
	marginRight: '6px'
}

const codeStyle = {
	marginBottom: '-4px'
}

let tooltipText: React.ReactNode;

if (userDiff === 0) {
	tooltipText = textMain.general.tooltip.sameZone.ru
} else {
	tooltipText = textMain.general.tooltip.diffZone.ru
}

function modal(myImg: string, qr: string, address: string, caption1: string = "", caption2: string = "") {
	const modal = document.getElementById("myModal");
	const img = document.getElementById(myImg);
	const modalImg = document.getElementById("img01") as HTMLImageElement;
	const addressText = document.getElementById(stylesDonateCommon.address);
	const caption1Text = document.getElementById(stylesDonateCommon.caption1);
	const caption2Text = document.getElementById(stylesDonateCommon.caption2);
	
	if (img) {
		img.onclick = function() {
			if (modal) modal.style.display = "block";
			if (modalImg) modalImg.src = qr;
			if (addressText) addressText.innerHTML = address;
			if (caption1Text) caption1Text.innerHTML = caption1;
			if (caption2Text) caption2Text.innerHTML = caption2;
		}
	}
	
	const span = document.getElementsByClassName(stylesDonateCommon.close)[0];
	if (span) {
		span.addEventListener('click', function() { 
			if (modal) modal.style.display = "none";
		});
	}
}

const FreelanceRu = () => {

	const collRef = useRef<(HTMLButtonElement | null)[]>([]);

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
  		modal(stylesWallets.myImg1, BTCQR, 'bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d', "", "")
		modal(stylesWallets.myImg2, BSCQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf', "", "")
		modal(stylesWallets.myImg3, ETHQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf', "", "")
	}, [])	

	const toggleContent = (event: Event) => {
		const button = event.currentTarget as HTMLButtonElement;
		const content = button.nextElementSibling as HTMLElement;
		button.classList.toggle(stylesSpoilers.activeSpoiler);
		if (content.style.maxHeight) {
			content.style.maxHeight = "";
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

			<div className={`noselect ${stylesFreelancePages.languageSwitchWrapper}`}>
				<Link to="/freelance/">
					<span className={stylesFreelancePages.languageButton}>
						<img style={flagStyle} src={english} alt="american-flag" />
						<span style={codeStyle}>EN</span>
					</span>
				</Link>
			</div>

			<div className="freelanceBody">
				<div className="mobileOnlySupport"><br/><br/></div>
				<FreelanceStatus isRussian={true}/>
				<p style={{ marginTop: "2.5rem" }}>
					<span dangerouslySetInnerHTML={{ __html: textMain.general.intro.ru1 }}/>
					<H>{freelanceExperienceStringRu} опыта фрилансинга</H>
					<span dangerouslySetInnerHTML={{ __html: textMain.general.intro.ru2 }}/>
					<H>{projectsCount} выполненных проектов</H>
					<span dangerouslySetInnerHTML={{ __html: textMain.general.intro.ru3 }}/>
				</p>
				<SpoilerServices 
					title={textMain.general.spoiler.title.ru}
					services={services}
					spoilerExtraDesc={textMain.general.spoiler.extraDesc.ru}
					isEnglish={false}
				/>
				<M text={textMain.general.servicesRedirect.ru}/>
				<M text={textMain.general.contactMe.ru}/>
				<div className="mobileOnlySupport">
					<div className="list" style={{ marginLeft: 0, marginBottom: "1rem" }}>
						<ul>
							<li>📲 Telegram: <a href="https://t.me/averett">@averett</a></li> 
							<li>📩 Почта: <a href="mailto:avrtt@tuta.io">avrtt@tuta.io</a></li>
							<li>👤 Facebook: <a href="https://www.facebook.com/vladaverett">@vladaverett</a></li>
							<li>🇷🇺 Kwork: <a href="https://kwork.ru/user/avrtt">@avrtt</a></li>
							<li>🌐 Upwork: <a href="https://www.upwork.com/freelancers/~019b5459361c20c528">link</a></li>
							<li>🌐 Fiverr: <a href="https://www.fiverr.com/vladaverett">@vladaverett</a></li>
						</ul>
					</div>
				</div>
				<div className="desktopOnlySupport">
					<TileContainerLink columns={3} marginTop='4vh' animationonscroll={false}>
						<LinkBlock
							link='https://t.me/averett'
							icon={telegram}
							name='Telegram'
							handle='@averett'
							description=''
							backgroundColor='#dbdbdb'
							padding='20px'
						/>
						<LinkBlock
							link='mailto:avrtt@tuta.io'
							icon={envelope}
							name='Почта'
							handle='avrtt@tuta.io'
							description=''
							backgroundColor='#dbdbdb'
							padding='20px'
						/>
						<LinkBlock
							link='https://www.facebook.com/vladaverett'
							icon={facebook}
							name='Facebook'
							handle='@vladaverett'
							description=''
							backgroundColor='#dbdbdb'
							padding='20px'
						/>
					</TileContainerLink>
					<TileContainerLink columns={3} marginBottom='6vh' animationonscroll={false}>
						<LinkBlock
							link='https://kwork.ru/user/avrtt'
							icon={kwork}
							name='Kwork 🇷🇺'
							handle='@avrtt'
							description=''
							backgroundColor='#dbdbdb'
							padding='20px'
						/>
						<LinkBlock
							link='https://www.upwork.com/freelancers/~019b5459361c20c528'
							icon={upwork}
							name='Upwork 🌐'
							handle=''
							description=''
							backgroundColor='#dbdbdb'
							padding='20px'
						/>
						<LinkBlock
							link='https://www.fiverr.com/vladaverett'
							icon={fiverr}
							name='Fiverr 🌐'
							handle='@vladaverett'
							description=''
							backgroundColor='#dbdbdb'
							padding='20px'
						/>
					</TileContainerLink>
				</div>
				<span>Рабочее время: <H>{startHoursUTC}–{endHoursUTC}</H> ({strUTCOffset}), Пн – Пт</span>&nbsp;&nbsp;<Tooltip text={tooltipText}/>
				<M text={textMain.general.outro.ru}/>
				<div className="sectionBreak"><M text="----------"/></div>
				<M text={textMain.projects.heading.ru}/>
				<M text={textMain.projects.intro.ru}/>
			</div>
			<div className="freelanceBodyNested">
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<div className={stylesFreelancePages.freelanceCategorySectionWrapper}>
						{categories.map((category) => (
							<FreelanceCategory 
								key={category.categoryNameRu}
								categoryName={category.categoryNameRu}
								categoryDesc={category.categoryDescRu}
								numProjects={category.numProjectsRu}
								img={category.img}
								url={"/freelance/ru/projects/" + category.categoryKey + "/"}
							/>
						))}
					</div>
				</AnimationOnScroll>
			</div>
			<div className="freelanceBody">
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<M text={textMain.workflow.heading.ru}/>
					<M text={textMain.workflow.section1.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section1.block1.ru}/>
						<M text={textMain.workflow.section1.block2.ru}/>
						<M text={textMain.workflow.section1.block3.ru}/>
						<M text={textMain.workflow.section1.block4.ru}/>
					</div>
					<M text={textMain.workflow.section2.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section2.block1.ru}/>
						<M text={textMain.workflow.section2.block2.ru}/>
						<M text={textMain.workflow.section2.block3.ru}/>
					</div>
					<M text={textMain.workflow.section3.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section3.block1.ru}/>
					</div>
					<M text={textMain.workflow.section4.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section4.block1.ru}/>
						<M text={textMain.workflow.section4.block2.ru}/>
						<M text={textMain.workflow.section4.block3.ru}/>
					</div>
					<M text={textMain.workflow.section5.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section5.block1.ru}/>
						<M text={textMain.workflow.section5.block2.ru}/>
					</div>
					<M text={textMain.workflow.section6.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section6.block1.ru}/>
						<M text={textMain.workflow.section6.block2.ru}/>
					</div>
					<M text={textMain.workflow.section7.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section7.block1.ru}/>
					</div>
					<M text={textMain.workflow.section8.heading.ru}/>
					<div id={stylesFreelancePages.freelanceWorkflowItem}>
						<M text={textMain.workflow.section8.block1.ru}/>
						<M text={textMain.workflow.section8.block2.ru}/>
					</div>
					<br/>
					<button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
						&nbsp;&nbsp;
						<span className={stylesSpoilers.spoilerText}></span>
						{textMain.workflow.faq.title.ru}
						&nbsp;&nbsp;
					</button>
					<div className={stylesSpoilers.spoilerContentWrapper}>
						<div className={stylesSpoilers.spoilerContentFAQ}>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q1.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a1.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q2.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a2.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q3.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a3.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q4.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.a4.ru }}/></p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q5.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.a5.ru }}/></p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.q6.ru }}/></p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.a6.ru }}/></p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> <span dangerouslySetInnerHTML={{ __html: textMain.workflow.faq.q7.ru }}/></p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a7.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q8.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a8.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q9.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a9.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q10.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a10.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q11.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a11.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q12.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a12.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q13.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a13.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q14.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a14.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q15.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a15.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q16.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a16.ru}</p>
							</div>
							<div className={stylesSpoilers.spoilerBlockQA}>
								<p className={stylesSpoilers.spoilerQuestion}><b>Q:</b> {textMain.workflow.faq.q17.ru}</p>
								<p className={stylesSpoilers.spoilerAnswer}><b>A:</b> {textMain.workflow.faq.a17.ru}</p>
							</div>
						</div>
					</div>
				</AnimationOnScroll>
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<div className="sectionBreak"><M text="----------"/></div>
					<M text={textMain.testimonials.heading.ru}/>
					<div className="mobileOnlySupport">
						<div className="list" style={{ marginLeft: 0, marginBottom: "1rem" }}>
							<ul>
								<li>👉 в <H>Telegram</H>: <a href="https://t.me/avrtt_feedback/6">@avrtt_feedback</a></li>
								<li>👉 в <H>Facebook</H>: <a href="https://www.facebook.com/averett.freelance/reviews">@averett.freelance</a></li>
							</ul>
						</div>
					</div>
					<div className="desktopOnlySupport">
						<TileContainerLink columns={2} marginTop='2vh' marginBottom='4vh' animationonscroll={false}>
							<LinkBlock
								link='https://t.me/avrtt_feedback/6'
								icon={telegram}
								name='Telegram'
								handle='@avrtt_feedback'
								description={textMain.testimonials.telegramDesc.ru}
								backgroundColor='#dbdbdb'
								padding='20px'
							/>
							<LinkBlock
								link='https://www.facebook.com/averett.freelance/reviews'
								icon={facebook}
								name='Facebook'
								handle='@averett.freelance'
								description={textMain.testimonials.facebookDesc.ru}
								backgroundColor='#dbdbdb'
								padding='20px'
							/>
						</TileContainerLink>
					</div>
					<M text={textMain.testimonials.general.ru}/>
					<button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
						&nbsp;&nbsp;
						<span className={stylesSpoilers.spoilerText}></span>
						{textMain.testimonials.spoilerDifference.title.ru}
						&nbsp;&nbsp;
					</button>
					<div className={stylesSpoilers.spoilerContentWrapper}>
						<div className={stylesSpoilers.spoilerBlockTestimonials}>
							<M text={textMain.testimonials.spoilerDifference.content.ru}/>
						</div>
					</div>
					<br/>
					<M text={textMain.testimonials.write.heading.ru}/>
					<M text={textMain.testimonials.write.template.ru}/>
				</AnimationOnScroll>
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<div className="sectionBreak"><M text="----------"/></div>
					<M text={textMain.background.heading.ru}/>
					<M text={textMain.background.block1.ru}/>
					<M text={textMain.background.block2.ru}/>
					<div className='list'>
						<M text={textMain.background.block3.ru}/>
					</div>
					<M text={textMain.background.block4.ru}/>
					<M text={textMain.background.block5.ru}/>
					<M text={textMain.background.block6.ru}/>
				</AnimationOnScroll>
				<div className="sectionBreak"><M text="----------"/></div>
				<M text={textMain.courses.heading.ru}/>
				<M text={textMain.courses.intro.ru}/>
			</div>
			<div className="freelanceBodyNested freelanceCoursesWrapper">
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<Courses lang="ru"/>
				</AnimationOnScroll>
			</div>
			<div className="freelanceBody">
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<M text={textMain.stack.heading.ru}/>
					<Stack />
				</AnimationOnScroll>
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<div className="sectionBreak"><M text="----------"/></div>
					<M text={textMain.payment.heading.ru}/>
					<div className="mobileOnlySupport">
						<div style={{ marginLeft: 0, marginBottom: "1.8rem" }}>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={PayPal} className="noselect" alt="paypal_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<a href="https://www.paypal.me/vladaverett">@vladaverett</a>
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={CardBakai} className="noselect" alt="card_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(BakaiCardCopy)} whileTap={{ scale: 0.95 }}>Скопировать номер карты</motion.button> (Бакай)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={CardMbank} className="noselect" alt="card_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(MbankCardCopy)} whileTap={{ scale: 0.95 }}>Скопировать номер карты</motion.button> (МБанк)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={CardVirtualEURMbank} className="noselect" alt="card_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(MbankVirtualEURCardCopy)} whileTap={{ scale: 0.95 }}>Скопировать номер карты</motion.button> (МБанк)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={CardVirtualRUBMbank} className="noselect" alt="card_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(MbankVirtualRUBCardCopy)} whileTap={{ scale: 0.95 }}>Скопировать номер карты</motion.button> (МБанк)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={CardSber} className="noselect" alt="card_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(SberbankCardCopy)} whileTap={{ scale: 0.95 }}>Скопировать номер карты</motion.button> (Сбер)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={BTC} className="noselect" alt="btc_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(BitcoinWallet)} whileTap={{ scale: 0.95 }}>Скопировать адрес</motion.button> (сеть BTC)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={BNB} className="noselect" alt="bnb_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(BEP20Wallet)} whileTap={{ scale: 0.95 }}>Скопировать адрес</motion.button> (сеть BEP-20)
							</p>
							<p style={{ marginBottom: "-0.8rem" }}>
								<img src={ETH} className="noselect" alt="eth_logo" width="32rem" height="32rem" style={logoStyle} />&nbsp;
								<motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText(ERC20Wallet)} whileTap={{ scale: 0.95 }}>Скопировать адрес</motion.button> (сеть ETC-20)
							</p>
						</div>
					</div>
					<div className={`${stylesWallets.wallets} desktopOnlySupport`}>
						<div className={stylesWallets.wallet3}>
							<img src={PayPal} className="noselect" alt="paypal_logo" width="60" height="60" style={logoStyle} />
							<a href={PaypalLink}><code className={stylesWallets.donateLink}>{PaypalHandle}</code></a>
							<div className={stylesWallets.currencyName}><b>PAYPAL</b> (МУЛЬТИВАЛЮТНЫЙ ПЕРЕВОД)</div>
						</div>
						<div className={stylesWallets.wallet3}>
							<img src={CardBakai} className="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(BakaiCardCopy)}><div className={stylesWallets.tooltip}>{BakaiCardDisplay}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>
							<div className={stylesWallets.currencyName}><b>USD</b> &nbsp;(БАКАЙ БАНК)</div>
						</div>
						<div className={stylesWallets.wallet3}>
							<img src={CardMbank} className="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(MbankCardCopy)}><div className={stylesWallets.tooltip}>{MbankCardDisplay}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>
							<div className={stylesWallets.currencyName}><b>USD</b> &nbsp;(МБАНК)</div>
						</div>
						<div className={stylesWallets.wallet3}>
							<img src={CardVirtualEURMbank} className="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(MbankVirtualEURCardCopy)}><div className={stylesWallets.tooltip}>{MbankVirtualEURCardDisplay}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>
							<div className={stylesWallets.currencyName}><b>EUR</b> &nbsp;(МБАНК)</div>
						</div>
						<div className={stylesWallets.wallet3}>
							<img src={CardVirtualRUBMbank} className="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(MbankVirtualRUBCardCopy)}><div className={stylesWallets.tooltip}>{MbankVirtualRUBCardDisplay}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>
							<div className={stylesWallets.currencyName}><b>RUB</b> &nbsp;(МБАНК)</div>
						</div>
						<div className={stylesWallets.wallet3}>
							<img src={CardSber} className="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(SberbankCardCopy)}><div className={stylesWallets.tooltip}>{SberbankCardDisplay}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>
							<div className={stylesWallets.currencyName}><b>RUB</b> &nbsp;(СБЕРБАНК, ТОЛЬКО РОССИЙСКИЕ КАРТЫ) &nbsp; | &nbsp; <code className={stylesWallets.phoneNumber} onClick={() => navigator.clipboard.writeText(SberbankSBPCopy)}><div className={stylesWallets.tooltip}>{SberbankSBPDisplay}
							</div></code></div>
						</div>
						<div className={stylesWallets.wallet3}>				
							<img src={BTC} className="noselect" alt="btc_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(BitcoinWallet)}><div className={stylesWallets.tooltip}>{BitcoinWallet}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>&nbsp;
							<img id={stylesWallets.qr} className={stylesWallets.icon} src={QR} width="36" height="36" title="QR code" alt="qr-code" />
							<img id={stylesWallets.myImg1} className={stylesWallets.icon} src={BTCQR} alt="BitcoinWallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
							<a href={"https://mempool.space/address/" + BitcoinWallet}><img className={stylesWallets.icon} src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="История транзакций" /></a>
							<div className={stylesWallets.currencyName}><b>BTC</b> &nbsp;(СЕТЬ BITCOIN)</div>
						</div>		
						<div className={stylesWallets.wallet3}>		
							<img src={BNB} className="noselect" alt="bnb_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(BEP20Wallet)}><div className={stylesWallets.tooltip}>{BEP20Wallet}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>&nbsp;
							<img id={stylesWallets.qr} className={stylesWallets.icon} src={QR} width="36" height="36" title="QR code" alt="qr-code" />
							<img id={stylesWallets.myImg3} className={stylesWallets.icon} src={BSCQR} alt="BEP20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
							<a href={"https://bscscan.com/address/" + BEP20Wallet}><img className={stylesWallets.icon} src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="История транзакций" /></a>
							<div className={stylesWallets.currencyName}><b>USDT • USDC • DAI • BNB</b> &nbsp;(СЕТЬ BNB SMART CHAIN, BEP-20)</div>
						</div>				
						<div className={stylesWallets.wallet6}>
							<img src={ETH} className="noselect" alt="ethereum_logo" width="60" height="60" style={logoStyle} />
							<code className={stylesDonateCommon.address} onClick={() => navigator.clipboard.writeText(ERC20Wallet)}><div className={stylesWallets.tooltip}>{ERC20Wallet}
							<span className={stylesWallets.tooltiptext}>Скопировать</span></div></code>&nbsp;
							<img id={stylesWallets.qr} className={stylesWallets.icon} src={QR} width="36" height="36" title="QR code" alt="qr-code" />
							<img id={stylesWallets.myImg2} className={stylesWallets.icon} src={ETHQR} alt="ERC20Wallet" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
							<a href={"https://etherscan.io/address/" + ERC20Wallet}><img className={stylesWallets.icon} src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="История транзакций" /></a>
							<div className={stylesWallets.currencyName}><b>USDT • USDC • DAI • ETH</b> &nbsp;(СЕТЬ ETHEREUM, ERC-20)</div>
						</div>
					</div>
				</AnimationOnScroll>
				<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
					<div className="sectionBreak"><M text="----------"/></div>
					<M text={textMain.related.heading.ru}/>
					<div className="list"> 
						<M text={textMain.related.links.ru}/>
					</div>     
				</AnimationOnScroll>
				
				<div id="myModal" className={stylesDonateCommon.modal}>
					<div className={stylesDonateCommon.close}>
						<img className={stylesDonateCommon.modalContent} id="img01" alt="modal-img" />
						<div id={stylesDonateCommon.address}></div>
					</div>
				</div>	
			</div>
			<div className="lastUpdatedFreelance">UPDATED ON {freelanceLastUpdated}</div>
		</motion.div>
  	);
};
  
export default FreelanceRu;

export const Head = () => (
	<SEO 
		title="Freelance - avrtt.blog"
		description="Фрилансер, предлагающий услуги преимущественно в области науки о данных, искусственного интеллекта, машинного обучения и разработки программного обеспечения на Python. Имеет опыт анализа данных, визуализации данных, веб-разработки, технического писательства, исследований и автоматизации. Предоставляет проектную работу, консультирование, сопровождение систем и обучение с 2020 года. Ознакомьтесь с выполненными проектами, отзывами клиентов и процессом взаимодействия. Обращайтесь к нам за профессиональными решениями в области искусственного интеллекта, анализом данных и эффективной разработкой программного обеспечения. Узнайте о рабочих процессах, ценах и опыте прошлых клиентов."
		keywords={[
			"Фрилансер дата саентист",
			"Фрилансер ИИ",
			"Эксперт по машинному обучению",
			"Python разработчик",
			"Data science консультации",
			"Раззработчик ИИ алгоритмов",
			"Аналитик данных",
			"Услуги по визуалиация данных",
			"Услуги веб-разработчика",
			"Услуги ИИ инженера",
			"Проекты по data science",
			"Python-автоматизация",
			"Эксперт в статистическом анализе",
			"ИИ-консультации фриланс",
			"Услуги технического специалиста",
			"Разработка ИИ моделей",
			"Услуги сбора данных",
			"Фрилансер бизнес-аналитик",
		]}
		image={""}
		canonicalUrl="https://avrtt.github.io/freelance/ru"
		
	>
		<script type="application/ld+json">
			{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				"name": "Владислав Аверетт",
				"url": "https://avrtt.github.io/about",
				"image": photoAbout,
				"jobTitle": "Фрилансер в Data Science и ИИ-разработке",
				"description": "Профессиональные услуги в области AI/ML и науки о данных, включая разработку моделей, анализ данных, визуализацию, сбор данных, промпт-инжиниринг, техническое письмо, разработку на Python и автоматизацию процессов.",
				"knowsAbout": ["data science", "machine learning", "data analysis", "data collection", "statistics", "data visualization", "python", "frontend", "prompt engineering", "technical writing", "sql", "javascript", "typescript", "tensorflow", "pytorch", "keras", "opencv", "sklearn", "pyspark", "pandas", "numpy", "matplotlib", "plotly", "seaborn", "scipy", "react", "xgboost", "postgresql", "sqlite", "beautifulsoup", "scrapy", "streamlit", "flask", "gatsby", "html", "css", "sass", "scss", "docker", "aws", "linux", "d3", "dash", "superset", "grafana", "tableau"],
				"offers": {
					"@type": "Service",
					"serviceType": "AI Development & Data Science",
					"areaServed": "Worldwide",
					"availableChannel": {
						"@type": "ServiceChannel",
						"serviceUrl": "https://avrtt.github.io/freelance"
					}
				},
				"sameAs": [
					"https://facebook.com/averett.freelance",
					"https://www.linkedin.com/in/vladaverett",
					"https://github.com/avrtt",
					"https://youtube.com/@avheuristics",
					"https://kaggle.com/lenferdetroud",
					"https://t.me/avheuristics",
				]
			})}
		</script>
	</SEO>
)

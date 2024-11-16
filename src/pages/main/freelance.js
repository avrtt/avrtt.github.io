import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import LinkBlock from '../../components/LinkBlock';
import TileContainer from '../../components/TileContainer';
import { categories, services, projectsCount } from '../../data/freelance/arrays';
import { currentZoneUTC, freelanceWorkHourStart, freelanceWorkHourEnd } from '../../data/freelance/variables';
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
import { SberbankCardCopy, SberbankCardDisplay, SberbankSBPCopy, SberbankSBPDisplay, BitcoinWallet, BEP20Wallet, ERC20Wallet } from "../../data/paymentMethods.js";

const TITLE = 'Freelance - avrtt.blog'

// fetch my current time zone and working hours (ints)
const myTimeOffset = parseInt(currentZoneUTC)
const startHourFetch = parseInt(freelanceWorkHourStart)
const endHourFetch = parseInt(freelanceWorkHourEnd)

// get user (browser) time zone offset in hours (int)
const userTimeOffset = -parseInt((new Date().getTimezoneOffset()) / 60)

// create "UTC[+/-]<offset>" string
var strUTCOffset
if (userTimeOffset < 0) {
	strUTCOffset = "UTC" + userTimeOffset 
} else {
	strUTCOffset = "UTC+" + userTimeOffset
}

// get time difference between user and me in hours (int)
const userDiff = myTimeOffset - userTimeOffset

// set Date objects with my working hours in user's time zone
var startTime = new Date()
var endTime = new Date() 
startTime.setHours(startHourFetch - userDiff)
endTime.setHours(endHourFetch - userDiff)

// extract hours from Date objects and create strings
var startHoursUTC = (startTime.getHours()).toString() + ":00"
var endHoursUTC = (endTime.getHours()).toString() + ":00"

// create tooltip text
var tooltipText
if (userDiff === 0) {
	tooltipText = "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is the same as yours."
} else {
	tooltipText = "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is UTC" + currentZoneUTC + "."
}

const freelanceStartDate = new Date(2024, 5, 1); // date of start freelancing full-time
const freelancePastMonths = 15; // total months of occasional freelancing from January 2020 to June 2024

function calculateWorkExperience(startDate, monthsToAdd) {
    const currentDate = new Date();
    let totalMonths = monthsToAdd;
    let totalYears = currentDate.getFullYear() - startDate.getFullYear();
    totalMonths += currentDate.getMonth() - startDate.getMonth();
    if (totalMonths < 0) {
        totalYears -= 1;
        totalMonths += 12;
    }
    totalMonths += totalYears * 12; 
    let roundedYears = Math.floor(totalMonths / 6) * 0.5;
    return roundedYears;
}

// get rounded years of freelance experience (0, 0.5, 1, 1.5, so on + "years")
const freelanceExperienceString = `${calculateWorkExperience(freelanceStartDate, freelancePastMonths)} years`;

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

const Freelance = () => {

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
				<Link to="/freelance/ru">
					<span class="languageButton">RU</span>
				</Link>
			</div>

			<div class="freelanceBody">
		
				<p>I'm a full-time freelancer primarily focused on Data Science, offering both regular and one-off services, including project-based work, system maintenance, consulting and teaching. Being in the field since 2020, I have more than <strong>{freelanceExperienceString} of freelancing</strong> experience in total, with more than <strong>{projectsCount} completed projects</strong> (listed below), as well as other various successful deals. My main areas of expertise are machine learning, data analysis, data collection, statistics, visualization and Python programming, but I'm also competent in web development, video/music post-production and prompt engineering.</p>
				<SpoilerServices 
					title={"Compact list: Services I offer"}
					services={services}
					spoilerExtraDesc={"This list includes services that I *prefer* to do right now. It's not exhaustive, and we may have a deal on things that goes beyond it."}
				/>
				<M text="If you need examples and more details, you can go straight to the [page of services](/freelance/services), which describes each type of job in the list above, step-by-step."/>
				<M text="Found a related problem? Feel free to contact me, I'll answer any questions you may have. You can reach out directly or choose one of the freelance platforms to make an offer:"/>
				<TileContainer columns={3} marginTop='2vh' marginBottom='2vh' animationonscroll={false}>
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
						name='Email'
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
				<TileContainer columns={4} marginTop='2vh' marginBottom='4vh' animationonscroll={false}>
					<LinkBlock
						link='https://www.upwork.com/freelancers/~019b5459361c20c528'
						icon={upwork}
						iconSize='3vw'
						name='Upwork 🌐'
						handle='019b5459361c20c528'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='14vw'
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
					<LinkBlock
						link='https://kwork.ru/user/avrtt'
						icon={kwork}
						iconSize='3vw'
						name='Kwork 🇷🇺'
						handle='@avrtt'
						description=''
						backgroundColor='#dbdbdb'
						blockWidth='9vw'
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
						blockWidth='8vw'
						fontSizeName = '1vw'
						fontSizeHandle = '1vw'
						padding='1vw'
					/>
				</TileContainer>
				<span>
					Working hours: <b>{startHoursUTC}–{endHoursUTC}</b> ({strUTCOffset}), Mon – Fri
					<span class="tooltipFreelance">
						&nbsp;&nbsp;
						<img id='infoFreelance' src={info} alt='info'/>
						<span class="tooltiptextFreelance">{tooltipText}</span>
					</span>
				</span>
				<M text="This page is designed for freelance clients and provides information regarding my freelance work. Please consider exploring it before contacting me for the first time. If you're HR, see the [CV](/cv) page instead."/>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# 📌 PROJECTS "/>
					<M text="My projects are organized into category pages. Please click on the category you're interested in to explore a particular list:"/>
					<div class="freelanceCategorySectionWrapper">
						{categories.map((category) => (
							<FreelanceCategory 
								categoryName={category.categoryName}
								categoryDesc={category.categoryDesc}
								numProjects={category.numProjects}
								img={category.img}
								url={"/freelance/projects/" + category.categoryKey + "/"}
							/>
						))}
					</div>
				</AnimationOnScroll>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# 🔀 THE WAY THINGS GET DONE "/>
					<M text="### 🚀 General prerequisites"/>
					<p id="freelanceWorkflowItem">
						<M text="Before contacting me, I recommend you to check the [Services](/freelance/services) page, determine what kind of job your request refers to and learn the specifics of the chosen service (get to know the methodology, tools, workflow and so on). This will help you to formulate your preferences better and thus help me to fulfill your requirements more precisely. Don't worry: we can also agree on a non-conventional approach to the problem — this is merely a helper page for setting the direction of our further interaction."/>
						<M text="Once you're done, drop me a message using any convenient option from the ones listed above. Please, try to describe the subject of the problem in **one message**."/>
						<M text="I'll let you know about my decision within a few hours. It can be any of the following: **a)** we immediately proceed to discussing the task; **b)** I agree to discuss the task, but when I'll be free (with providing the approximate dates); **c)** I'm not available/willing to consider the task (I leave myself the right not to disclose the reasons, but as a rule these tasks are either too demanding, don't fit my competence, or are too simple against my current bigger projects)."/>
						<M text="The following step-by-step workflow explains how I interact with clients depending on the type and complexity of the problem, the tools available, and the client's preferences. It varies under certain conditions."/>
					</p>
					<M text="### ✍ Step 1: Discussion"/>
					<p id="freelanceWorkflowItem">
						<M text="Sometimes projects are quite complicated, so clear problem definition and thorough discussion with the customer is a must. The results of negotiations at this point will set the terms, deadline and price (preliminary or final). Typically, this is where an agreement is established: prior to prepayment, either party may reject the terms and quit the deal."/>
						<M text="**My task** is to estimate my capabilities, figure out deadlines and outline the work, and the **customer's task** is to describe the desired result in as much detail as possible. If the customer isn't a technical specialist, I'll help with interpreting. Well-written terms of reference prevent intermediate clarifications, but this isn't a necessity for ordinary level projects."/>
						<M text="For convenience, we can communicate by text or audio/video call. In practice, small projects are usually described by text, while the brainstorming of business ideas for development of technical project scope is done through 1:1 calls."/>
					</p>
					<M text="### 🧐 Step 2: Free expert review"/>
					<p id="freelanceWorkflowItem">
						<M text="Depending on the complexity and type of project, I offer a free expert review, immediately (during the discussion) or within a day. I analyze the technical complexity and data, selecting the best tools and strategies. I then provide full information on upcoming work costs, non-obvious steps and pitfalls, and, if adjustments are required, a **final price**. I consult the customer, giving a clear explanation of the best possible solutions, which aslo makes it easier to understand what I'll be doing during the job."/>
					</p>
					<M text="### 🤝 Step 3: Prepayment"/>
					<p id="freelanceWorkflowItem">
						<M text="I charge **50%** upfront when working with **new clients** and never take any other intermediate payments. Rarely, it may be more convenient to arrange a **hourly fee**: there is no upfront fee in this case, and new clients are charged at the end of each working day."/>
						<M text="Payment details are listed below on this page (see **Payment methods**), or they will be given in conversation. I will start working exactly **from the moment the prepayment is received**, and will keep the sum until the end of the project just in case it has to be returned."/>
						<M text="Keep in mind that this page describes paying without an intermediary. Platforms like Upwork guarantee safety, but they charge a commission, which will make the costs higher. If you're looking to overpay for a secure deal, then consider contacting me through freelance marketplaces."/>
					</p>
					<M text="### 📞 Step 4: Intermediate interaction"/>
					<p id="freelanceWorkflowItem">
						<M text="Optionally and exclusively for **long-term projects**, I provide intermediate calls or progress reports in any convenient form. The point here is to basically present the deliverable by milestones for subsequent adjustments based on the customer's preferences, and to clarify some details, which can lead to a slightly more accurate result and faster implementation. The effectiveness of such approach comes from an assumption: the increasing deliverable complexity causes increasing complexity of fixing existing components, and therefore customer validation, like product testing, should be done iteratively."/>
						<M text="It's possible to organize a private GitHub/GitLab repository for real-time version tracking."/>
					</p>
					<M text="### ✅ Step 5: Release, post-payment and feedback"/>
					<p id="freelanceWorkflowItem">
						<M text="When completed, a **full version** of the product will be delivered, then you make a post-payment. In some cases (usually with new clients) I offer a **demo version** before post-payment is made — this depends on the complexity and type of project. For **hourly rates** with loyal clients, 100% post-payment is formed after calculating the total number of hours worked."/>
						<M text="Like any freelancer, I value testimonials and therefore offer a **discount of 10% off post-payment** for your feedback and references after any gig."/>
					</p>
					<M text="### ⚙️ Step 6: Technical support"/>
					<p id="freelanceWorkflowItem">
						<M text="To keep my customers completely satisfied, I provide **free support** for the developed projects: 3 months for business and 1 month for individuals. This consists of consulting and basic troubleshooting. Sometimes simple debugging may also be free."/>
					</p>
					<M text="### 🍪 Let's cooperate further"/>
					<p id="freelanceWorkflowItem">
						<M text="I keep in touch with my former customers. You can always contact me if something needs to be improved. For me, relationships with customers and their satisfaction are important, because, in Data Science, it's *much* easier and faster to work with returning clients than to constantly look for new ones."/>
						<M text="To keep clients coming back, I offer some discounts. Loyal customers can expect **lower pricing** for services and **lower upfront fees**, up to 100% postpaid."/>
					</p>
					<br/>
					<button className="spoilerButton noselect" ref={(el) => collRef.current.push(el)}>
						&nbsp;&nbsp;
						<span className="spoilerText"></span>
						FAQ
						&nbsp;&nbsp;
					</button>
					<div className="spoilerContentWrapper">
						<div className="spoilerContentFAQ">
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> Are there any other payment options available besides the ones below?</p>
								<p class="spoilerAnswer"><strong>A:</strong> No, this page contains all the possible, currently available payment methods.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> I'd like to pay in cryptocurrency. Is that legal?</p>
								<p class="spoilerAnswer"><strong>A:</strong> It depends. Some jurisdictions treat cryptocurrency as taxable assets, and some have banned transfers entirely. Although in practice the crypto exchange in these jurisdictions isn't prosecuted in any way, I'm not responsible for the consequences. Check your local laws first.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> Do you offer a legal contract?</p>
								<p class="spoilerAnswer"><strong>A:</strong> All the services described on this website are provided without signing a legal labor contract. If you're looking for guarantees of a fair deal in return for paying service fees, then consider contacting me via freelance marketplaces (see above).</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> How is copyright ownership transferred?</p>
								<p class="spoilerAnswer"><strong>A:</strong> Since no labor contract is signed, there's no way to transfer copyright  ownership (at least in most jurisdictions). Formally, I remain the owner of all digital products (intellectual property) created as part of a verbal or written agreement with a customer without the use of an intermediary (except for works done through a GitHub/GitLab repository, see below). Practically, this shouldn't be a problem, since I don't intend to assert my authorship in any way, and authorize further use, modification and distribution of the product without attribution or any limitations, and even if I did, I wouldn't be able to prove authorship in the absence of a legal agreement. However, if such legal aspects matter to you, I recommend you to contact me through freelance marketplaces, as copyright issues are considered there (for instance, see Upwork's <a href="https://www.upwork.com/legal#optional-service-contract-terms">Optional Service Contract Terms</a>).</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> How is software code licensed when working through a remote git repository?</p>
								<p class="spoilerAnswer"><strong>A:</strong> In the case of working through popular git repository hosting sites operating under the U.S. law (e.g., GitHub and GitLab), the customer may create a repository, <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository">choose a license</a>, and then add me as a collaborator. This way, the software code implemented inside the repository will be distributed according to the terms specified in the license. Please note that according to the U.S. law <a href="https://choosealicense.com/no-permission/">no license</a> is equivalent to exclusive copyright only if a creative work has no other contributors.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> Is there any legal guarantee that the contractor won't apply <a href="https://docs.github.com/en/site-policy/content-removal-policies/dmca-takedown-policy">DMCA takedown notice</a> to remove a part of deliverable that was transferred to my use and publicly hosted as a git repository?</p>
								<p class="spoilerAnswer"><strong>A:</strong> If the source code was implemented inside a repository you've licensed, then yes. In this case, I can only distribute the content of the repository under the terms specified in the license. Moreover, in case of a DMCA policy violation, the repository owner has the right to submit a request to remove an unauthorized copy of the software code by referring to the aforementioned repository. Platforms such as GitHub actively assist in enforcing the terms of the DMCA (and even <a href="https://github.com/github/dmca">list such cases</a> publicly).</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> Do you offer an <a href="https://en.wikipedia.org/wiki/Non-disclosure_agreement">NDA</a>?</p>
								<p class="spoilerAnswer"><strong>A:</strong> In some cases, if required by the customer.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> What if the work isn't completed on time?</p>
								<p class="spoilerAnswer"><strong>A:</strong> If the work is fully completed but not on time, I'll refund a portion of the cost depending on the specific situation.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> What if I'm not satisfied with the result of the work done?</p>
								<p class="spoilerAnswer"><strong>A:</strong> I'm always open to consider valid arguments in favor of the customer's rightness before they write a negative review. If the work doesn't match the terms of reference, then I'll refund the money, because reputation is more valuable when it comes to freelancing.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> What languages and style can we use to communicate?</p>
								<p class="spoilerAnswer"><strong>A:</strong> We can communicate in both formal and informal styles, the latter being more preferable for me. I'm proficient in English and Russian.</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> What jurisdiction is the contractor physically located in?</p>
								<p class="spoilerAnswer"><strong>A:</strong> In a wide variety of different. ;)</p>
							</div>
							<div className="spoilerBlockQA">
								<p class="spoilerQuestion"><strong>Q:</strong> I'm a business representative and I'm interested in long-term cooperation. Can I be sure that the contractor will comply with all applicable legislation?</p>
								<p class="spoilerAnswer"><strong>A:</strong> No. I don't give any legal guarantees, regularly being located outside my country of citizenship (Russia), the international status of which only makes official work more difficult. My legal status is generally unclear. Consider me solely as an unofficial worker.</p>
							</div>
						</div>
					</div>
				</AnimationOnScroll>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# 💳 PAYMENT METHODS "/>
					<div class="wallets">
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
				</AnimationOnScroll>

				
				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# ❤️ RECENT TESTIMONIALS "/>
					<M text="Здесь несколько последних отзывов в виде блоков с ссылками на источники и указанием проекта. Отзывы подтягиваются из массива в data: здесь последние, на отдельной странице (ниже) - все. Сделать такую же страницу на русском."/>
					<M text="You can check out more reviews on the [Testimonials](/freelance/testimonials) page."/>
				</AnimationOnScroll>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# 🛠️ TECH & TOOL STACK "/>
					<Stack />
				</AnimationOnScroll>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# 📚 BACKGROUND"/>
					<div class="listHome"> 
						<M text="
						Небольшой текст про бэкграунд<br/>
						Employment & academic experience<br/>
						🔥 Митапы, количество пройденных вневузовских курсов, вузовские курсы, доп. инфа по бакалаврскому курсу и т.д.<br/>
						🚀 Какие-нибудь не-фриланс проекты<br/>
						💼 Опыт работы по найму<br/>
						🎓 B.S. in Applied Mathematics & Computer Science<br/>
						💪 Actively [contributing](https://github.com/avrtt) to open-source<br/>
						✍️ Writing [blog posts](/research) about everything I research since 2022
						"/>
					</div>
				</AnimationOnScroll>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text="# 📜 COURSES"/>
					<M text="I enjoy learning from courses all the time. Here's a compact list of some of the courses I've taken that I liked the most (clicking redirects to certificate proof, if any):"/>
					<Courses lang="en"/>
				</AnimationOnScroll>


				<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
					<div class="sectionBreak"><M text="----------"/></div>
					<M text='# 🔗 RELATED LINKS'/>
					<div class="listHome"> 
						<M text='
						▶️ [YouTube](https://www.youtube.com/channel/UCpPtaqqxzFqm9rZAh2xC5OA)<br/>
						📚 [Telegram (tech blog)](https://t.me/avheuristics)<br/>
						🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)<br/>
						🧩 [LeetCode](https://leetcode.com/avrtt/)<br/>
						⚙️ [GitHub](https://github.com/avrtt)<br/>
						💼 [LinkedIn](https://www.linkedin.com/in/avrtt/)<br/>
						🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)
						'/>
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
  
export default Freelance;

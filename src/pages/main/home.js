import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import BTC from "../../images/donate/btc.svg";
import ETH from "../../images/donate/eth.svg";
import BNB from "../../images/donate/bnb.svg";
import KoFi from "../../images/donate/kofi.svg";
import PayPal from "../../images/donate/paypal.svg";
import Patreon from "../../images/donate/patreon.svg";
import Card from "../../images/donate/card.svg";
import CardTinkoff from "../../images/donate/card_tinkoff.svg";
import CardSber from "../../images/donate/card_sber.svg";
import BTCQR from "../../images/donate/btc-qr.svg";
import ETHQR from "../../images/donate/eth-qr.svg";
import BSCQR from "../../images/donate/bsc-qr.svg";
import Search from "../../images/donate/search.svg";
import QR from "../../images/donate/qr.png";
import LastPostAdventures from "../../fetchers/adventures_last_post"
import LastPostResearch from "../../fetchers/research_last_post"
import LastPostThoughts from "../../fetchers/thoughts_last_post"

const TITLE = 'Home - avrtt.blog'

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

const Home = () => {
	
	const lastPostAdventures = LastPostAdventures()
	const lastPostResearch = LastPostResearch()
	const lastPostThoughts = LastPostThoughts()
	const posts = [lastPostAdventures, lastPostResearch, lastPostThoughts];
	
	useEffect(() => {
  		window.scrollTo(0, 0)
  		modal("myImg1", BTCQR, 'bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d')
		modal("myImg2", BSCQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf')
		modal("myImg3", ETHQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf')
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
		
		<Box class="latestPosts noselect">
			<ImageList cols={3} gap={5}>
				{posts.map(post => {
					const image = getImage(post.frontmatter.banner);
					return (
						<ImageListItem key={post.id}>
							<div class="hover">
								<GatsbyImage
									className="prev-home"
									image={image}
									alt={post.frontmatter.title}
								/>
								<Link to={post.frontmatter.slug}>
									<div className="overlay-back">
										<div className="titleblock">
											<p className="title-home">{post.frontmatter.title}</p>
										</div>							
									</div>
									<div className="overlay-base-home">
										<p className="title-home">{post.frontmatter.title}</p>
									</div>
								</Link>
							</div>
						</ImageListItem>
					);
				})}
			</ImageList>
		</Box>
		<div class="homeBody">

			<M text="Greetings and welcome, my fellow stranger! This is my all-in-one website that serves as a blog and info page. Here's what you can find here:" />
			<div class="listHome">
			<M text="
			🧭 [Adventures](/adventures) — highlights from my travels, in text form with high-res photos<br/>
			🤖 [Research](/research) — posts related to my professional interests (mostly AI-related stuff)<br/>
			💭 [Thoughts](/thoughts) — insightful reflections on all kinds of things<br/>
			🏆 [Goals](/goals) — my bucket list of lifelong aims and challenges that always motivate me to go forward (with a lot of stupid ones)<br/>
			🗺️ [Exploration](/exploration) — my rankings of visited places and countries, with maps<br/>
			💼 [Freelance](/freelance) — page for freelance clients<br/>
			📃 [CV](/cv) — detailed version of my resume for recruiters<br/>
			👤 [About](/about) — my biography, interests, activities, views and so on
			"/>
			</div>
			<M text="The homepage will guide you through my main projects. You can find all the necessary links and ways to contact me below."/>

			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text='# 👋 GET IN TOUCH'/>

			Нужно чтобы эти ссылки соотносились с тем, что в ссылках тг-профиля (или хотя бы проверить, может тут больше их, а там только ключевые) + зачеркнуть неиспользуемые и неработающие

			<M text='### Main'/>
			<div class="listHome">
			<M text='📹 [YouTube](https://www.youtube.com/@vladaverett)'/>
			<div class="listHomeDesc">@vladaverett — vlog (bilingual, EN mostly)</div>
			<M text='📕 [Telegram](https://t.me/venturingforth)'/>
			<div class="listHomeDesc">@venturingforth — diary: extra content, daily life, thoughts, etc. (bilingual, RU mostly)</div>
			<M text='📷 [Instagram](https://www.instagram.com/avrttv)'/>
			<div class="listHomeDesc">@avrttv — highlights of my life (EN), здесь я фолловлюсь только на тех, с кем знаком лично и отвечаю в дм только им</div>
			<M text='🐦 [Twitter](https://twitter.com/vladaverett)'/>
			<div class="listHomeDescLast">@vladaverett — desc (bilingual, EN mostly), не отвечаю на сообщения</div>
			</div>

			<M text='### Community'/>
			<div class="listHome">
			<M text='🗨️ [Telegram](https://t.me/avrttclub)'/>
			<div class="listHomeDesc">@avrttclub — group, chats by topic (bilingual)</div>
			<M text='🗣️ [Discord](https://discord.gg/GPxjKDgYTa)'/>
			<div class="listHomeDesc">Server, chats by topic and voice rooms (bilingual)</div>
			<M text='🚀 [Patreon](https://www.patreon.com/avrtt)'/>
			<div class="listHomeDesc">@avrtt — exclusive content via paid subscription</div>
			<M text='👥 [Facebook](https://www.facebook.com/avrttblog)'/>
			<div class="listHomeDescLast">@avrttblog — blog page (EN)</div>
			</div>

			<M text='### Tech'/>
			<div class="listHome">
			<M text='👨🏻‍💻 [YouTube](https://www.youtube.com/@avheuristics)'/>
			<div class="listHomeDesc">@avheuristics — videos about data science, programming and freelancing (EN)</div>
			<M text='📚 [Telegram](https://t.me/avheuristics)'/>
			<div class="listHomeDesc">@avheuristics — tech blog (bilingual)</div>
			<M text='⚙️ [GitHub](https://github.com/avrtt)'/>
			<div class="listHomeDesc">@avrtt — desc</div>
			<M text='🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)'/>
			<div class="listHomeDesc">@lenferdetroud — desc</div>
			<M text='🧩 [LeetCode](https://leetcode.com/avrtt/)'/>
			<div class="listHomeDesc">@avrtt — desc</div>
			<M text='🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)'/>
			<div class="listHomeDescLast">Desc</div>
			</div>

			<M text='### Music'/>
			<div class="listHome">
			<M text='▶️ [YouTube](https://www.youtube.com/@noiserett)'/>
			<div class="listHomeDesc">@noiserett — all music records in one place</div>
			<M text='💿 [Telegram](t.me/noiserett)'/>
			<div class="listHomeDesc">@noiserett — record label announcements</div>
			<M text='🎵 [Bandcamp](https://hollofus.bandcamp.com/)'/>
			<div class="listHomeDescLast">@hollofus — desc</div>
			</div>

			<M text='### Homestays'/>
			<div class="listHome">
			<M text='
			🏘️ [CouchSurfing](https://www.couchsurfing.com/people/averett)<br/>
			🏠 [BeWelcome](https://www.bewelcome.org/members/averett)<br/>
			🏠 [Trustroots](https://www.trustroots.org/profile/averett)<br/>
			🏠 [Couchers](https://couchers.org/user/averett)<br/>
			🍀 [Workaway](???)<br/>
			☘️ [Worldpackers](https://www.worldpackers.com/users/4665966)<br/>
			🌱 [HelpX](https://helpx.net/profile/8dv1tok3c)
			'/>
			</div>

			<M text='### Work'/>
			<div class="listHome">
			<M text='💼 [LinkedIn](https://www.linkedin.com/in/avrtt)'/>
			<div class="listHomeDesc">@avrtt — desc</div>
			<M text='[🌟 Upwork](https://www.upwork.com/freelancers/~019b5459361c20c528/)'/>
			<div class="listHomeDesc">International freelance marketplace</div>
			<M text='[⭐ Fiverr](https://www.fiverr.com/vladaverett)'/>
			<div class="listHomeDesc">@vladaverett — international freelance marketplace</div>
			<M text='[✨ Kwork](https://kwork.ru/user/avrtt)'/>
			<div class="listHomeDesc">@avrtt — Russian freelance marketplace</div>
			<M text='[✨ Habr Freelance](https://freelance.habr.com/freelancers/avrtt)'/>
			<div class="listHomeDescLast">@avrtt — Russian freelance marketplace</div>
			</div>

			<M text='### Misc'/>
			<div class="listHome">
			<M text='🗺️ [Travel map](https://www.google.com/maps/d/viewer?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ll=0.3349379679002276%2C0&z=2&entry=yt)'/>
			<div class="listHomeDesc">Desc</div>
			<M text='🔥 [TikTok](https://www.tiktok.com/@vladaverett)'/>
			<div class="listHomeDesc">@vladaverett — highlights from my vlogs (bilingual), не отвечаю на сообщения</div>
			<M text='📖 [Telegram](https://t.me/tilfromwiki)'/>
			<div class="listHomeDesc">@tilfromwiki — TIL notes from Wikipedia (bilingual)</div>
			<M text='📝 [Telegram](https://t.me/+eaHjMs5hFnI3ZTAy)'/>
			<div class="listHomeDescLast">Private diary (bilingual, request approval required)</div>
			</div>

			</AnimationOnScroll>





			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 💬 CONTACT ME"/>
			<M text="Questions, corrections, business proposals, creative suggestions, bucket list ideas, offers to travel together, just chatting:"/>
			<div class="listHome">
			<M text="
			📲 Telegram (fastest way): **[@averett](https://t.me/averett)**<br/>
			📩 Email: **[avrtt@tuta.io](mailto:avrtt@tuta.io)**<br/>
			👤 Facebook: **[@vladaverett](https://www.facebook.com/vladaverett)**
			"/>
			</div>
			<M text="I'm open to making friends with people all over the world."/>
			<M text="If you're reaching out about business (i.e. ads and collaboration), please consider reading the [Information for Business Inquiries](/information_for_business_inquiries)."/>
			</AnimationOnScroll>





			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 🎁 DONATE"/>  
			<M text="Текст"/>
						<div class="wallets">
							<div class="wallet1">
								<img src={KoFi} class="noselect" alt="kofi_logo" width="60" height="60" style={logoStyle} />
								<s><a href="https://ko-fi.com/avrtt"><code class="donateLink">@avrtt</code></a></s>
								<div class="currency-name">BUY ME A COFFEE WITH <b>KO-FI</b> </div>
							</div>
							<div class="wallet3">
								<img src={PayPal} class="noselect" alt="paypal_logo" width="60" height="60" style={logoStyle} />
								<s><a href="https://www.paypal.me/vladaverett"><code class="donateLink">@vladaverett</code></a></s>
								<div class="currency-name"><b>PAYPAL</b> MULTICURRENCY TRANSFER</div>
							</div>
							<div class="wallet3">
								<img src={Patreon} class="noselect" alt="patreon_logo" width="60" height="60" style={logoStyle} />
								<s><a href="https://www.patreon.com/avrtt"><code class="donateLink">@avrtt</code></a></s>
								<div class="currency-name"><b>PATREON</b> EXCLUSIVE CONTENT VIA PAID SUBSCRIPTION</div>
							</div>
							<div class="wallet3">
								<img src={CardTinkoff} class="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
								<code class="address" onClick={() => navigator.clipboard.writeText("0000 0000 0000 0000")}><div class="tooltip"><s>0000 0000 0000 0000</s>
								<span class="tooltiptext">Click to copy</span></div></code>
								<div class="currency-name"><b>RUB</b> &nbsp;(TINKOFF BANK, RUSSIAN CARDS ONLY) &nbsp; | &nbsp; <code class="phoneNumber" onClick={() => navigator.clipboard.writeText("79083227150")}><div class="tooltip">+7 908 322 7150
								</div></code></div>
							</div>
							<div class="wallet3">
								<img src={CardSber} class="noselect" alt="card_logo" width="60" height="60" style={logoStyle} />
								<code class="address" onClick={() => navigator.clipboard.writeText("4276460040256153")}><div class="tooltip">4276 4600 4025 6153
								<span class="tooltiptext">Click to copy</span></div></code>
								<div class="currency-name"><b>RUB</b> &nbsp;(SBERBANK, RUSSIAN CARDS ONLY) &nbsp; | &nbsp; <code class="phoneNumber" onClick={() => navigator.clipboard.writeText("89083227150")}><div class="tooltip">+7 908 322 7150
								</div></code></div>
							</div>
							<div class="wallet3">				
								<img src={BTC} class="noselect" alt="btc_logo" width="60" height="60" style={logoStyle} />
								<code class="address" onClick={() => navigator.clipboard.writeText("bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d")}><div class="tooltip">bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d
								<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
								<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
								<img id="myImg1" class="icon" src={BTCQR} alt="bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
								<a href="https://mempool.space/address/bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
								<div class="currency-name"><b>BTC</b> &nbsp;(BITCOIN NETWORK)</div>
							</div>		
							<div class="wallet3">		
								<img src={BNB} class="noselect" alt="bnb_logo" width="60" height="60" style={logoStyle} />
								<code class="address" onClick={() => navigator.clipboard.writeText("0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf")}><div class="tooltip">0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf
								<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
								<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
								<img id="myImg3" class="icon" src={BSCQR} alt="0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
								<a href="https://bscscan.com/address/0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
								<div class="currency-name"><b>USDT • USDC • DAI • BNB</b> &nbsp;(BNB SMART CHAIN NETWORK, BEP-20)</div>
							</div>				
							<div class="wallet6">
								<img src={ETH} class="noselect" alt="etherium_logo" width="60" height="60" style={logoStyle} />
								<code class="address" onClick={() => navigator.clipboard.writeText("0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf")}><div class="tooltip">0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf
								<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
								<img id="qr" class="icon" src={QR} width="36" height="36" title="QR code" alt="qr-code" />
								<img id="myImg2" class="icon" src={ETHQR} alt="0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
								<a href="https://etherscan.io/address/0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
								<div class="currency-name"><b>USDT • USDC • DAI • ETH</b> &nbsp;(ETHEREUM NETWORK, ERC-20)</div>
							</div>
						</div>				
			</AnimationOnScroll>

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

export default Home;

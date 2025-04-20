/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef, useState } from 'react';
import SEO from '../../components/seo'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import M from '../../components/Markdown'
import S from '../../components/Shine'
import H from '../../components/Highlight'
import StickerPack from '../../components/StickerPack'
import LinkBlock from '../../components/LinkBlock'
import TileContainerLink from '../../components/TileContainerLink'
import LastPostAdventures from "../../fetchers/adventures_last_post"
import LastPostResearch from "../../fetchers/research_last_post"
import LastPostThoughts from "../../fetchers/thoughts_last_post"
import SecondLastPostAdventures from "../../fetchers/adventures_second_last_post"
import SecondLastPostResearch from "../../fetchers/research_second_last_post"
import SecondLastPostThoughts from "../../fetchers/thoughts_second_last_post"
import telegram from "../../images/links/telegram.svg"
import envelope from "../../images/links/envelope.svg"
import facebook from "../../images/links/facebook.svg"
import giftRed from "../../images/links/giftRed.svg"
import youtube from "../../images/links/youtube.svg"
import discord from "../../images/links/discord.svg"
import instagram from "../../images/links/instagram.svg"
import twitter from "../../images/links/twitter.svg"
import tiktok from "../../images/links/tiktok.svg"
import github from "../../images/links/github.svg"
import kaggle from "../../images/links/kaggle.svg"
import leetcode from "../../images/links/leetcode.svg"
import map from "../../images/links/map.svg"
import couchsurfing from "../../images/links/couchsurfing.svg"
import upwork from "../../images/links/upwork.svg"
import fiverr from "../../images/links/fiverr.svg"
import kwork from "../../images/links/kwork.svg"
import habr from "../../images/links/habr.svg"
import linktree from "../../images/links/linktree.svg"
import linkedin from "../../images/links/linkedin.svg"
import FreelanceStatus from "../../components/FreelanceStatus"
import LocationAnnouncements from "../../components/LocationAnnouncements"
import * as stylesPostsGallery from "../../styles/posts_gallery.module.scss"
import * as stylesAnnouncements from "../../styles/announcements.module.scss"
import * as stylesSpoilers from "../../styles/spoilers.module.scss"

const Home = () => {
	
	const lastPostAdventures = LastPostAdventures()
	const lastPostResearch = LastPostResearch()
	const lastPostThoughts = LastPostThoughts()
	const postsLast = [lastPostAdventures, lastPostResearch, lastPostThoughts];

	const secondLastPostAdventures = SecondLastPostAdventures()
	const secondLastPostResearch = SecondLastPostResearch()
	const secondLastPostThoughts = SecondLastPostThoughts()
	const postsSecondLast = [secondLastPostAdventures, secondLastPostResearch, secondLastPostThoughts];

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
						
			<Box className="noselect">
				<ImageList cols={3} gap={5}>
					{postsLast.map(post => {
						const image = getImage(post.frontmatter.banner);
						return (
							<ImageListItem key={post.id}>
								<div className="hover">
									<GatsbyImage
										className={stylesPostsGallery.prevHome}
										image={image}
										alt={post.frontmatter.title}
									/>
									<Link to={post.frontmatter.slug}>
										<div className={stylesPostsGallery.overlayBack}>
											<div className={stylesPostsGallery.titleblock}>
												<p className={stylesPostsGallery.titleHome}>{post.frontmatter.title}</p>
											</div>							
										</div>
										<div className={stylesPostsGallery.overlayBaseHome}>
											<p className={stylesPostsGallery.titleHome}>{post.frontmatter.title}</p>
										</div>
									</Link>
								</div>
							</ImageListItem>
						);
					})}
					{postsSecondLast.map(post => {
						const image = getImage(post.frontmatter.banner);
						return (
							<ImageListItem key={post.id}>
								<div className="hover">
									<GatsbyImage
										className={stylesPostsGallery.prevHome}
										image={image}
										alt={post.frontmatter.title}
									/>
									<Link to={post.frontmatter.slug}>
										<div className={stylesPostsGallery.overlayBack}>
											<div className={stylesPostsGallery.titleblock}>
												<p className={stylesPostsGallery.titleHome}>{post.frontmatter.title}</p>
											</div>							
										</div>
										<div className={stylesPostsGallery.overlayBaseHome}>
											<p className={stylesPostsGallery.titleHome}>{post.frontmatter.title}</p>
										</div>
									</Link>
								</div>
							</ImageListItem>
						);
					})}
				</ImageList>
			</Box>

			<div className={`${stylesAnnouncements.announcementsHomeWrapper} homeBodyRegular`}>
				<h1>📌 IMPORTANT ANNOUNCEMENTS</h1>
				<FreelanceStatus isHome={true}/>
				<LocationAnnouncements backgroundColor="#f2f2f2"/>
			</div>

			<div className="mobileOnlySupport"><br/></div>

			<div className="homeBodyRegular">
				<M text="### It's safe here, traveler."/>
				<p>Welcome to my <S style={{}} className={""}>personal</S> all-in-one corner of the internet — a reinvention of old school blogging, a community hub, an info page, a web dev playground, and even a course platform. Here I express my unbiased, honest opinion. No ads, no likes, no paywalls, no AI slop, no censorship, no hypocrisy, no bullshit. Truly libertarian. </p>
				<div className="desktopOnlySupport"><br/></div>
				<div>
					<button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
						&nbsp;&nbsp;
						<span className={stylesSpoilers.spoilerText}></span>
						Spoiler: More details
						&nbsp;&nbsp;
					</button>
					<div className={stylesSpoilers.spoilerContentWrapper}>
						<div className={stylesSpoilers.spoilerContentGoals}>
							<p>I built this site from scratch after a university course on React, supposing an open resource for sharing study notes. It eventually grew into a serious personal project with several types of audience. One of the reasons was because I'm not a social media person, yet I love to be open, to share emotions and new knowledge all the time. Nowadays I use social media purely to raise audience or stay in touch with those who need it, i.e. as a tool.</p>
							<span className="desktopOnlySupport"><br/></span>
							<h3>👋 For coachsurfers & nomads</h3>
							<p>If you came here from Couchsurfing, I'd recommend jumping straight to <Link to="/about">About</Link>, along with exploring <Link to="/gallery">Gallery</Link> and my social links (below on this page). Travel lovers may be interested in my <a href="https://www.youtube.com/channel/UCSGEQmkFLhS29sTSaFhqCIQ">YouTube vlog</a>. <br/><br/> If we're in the same city and you want to hang out, drop a message 👉 <Link to="/contact">/contact</Link>. <br/><br/> Please be aware that I always carry a sleeping bag with pad in my backpack, so I can sleep even in places without sleeping gear/beds.</p>
							<span className="desktopOnlySupport"><br/></span>
							<h3>☝️ Note for gifters</h3>
							<M text="My dear gifter, once you decide to give me a present for whatever reason, please be aware that I **don't need**:"/>
							<div className="list">
								<M text={`
- ❌ things you can't take in carry-on
- ❌ alcohol and other drugs
- ❌ living beings
- 💀 heavy items that I'd have to carry on my back for over a week
								`}/>
							</div>
							<M text="Instead, you could gift:"/>
							<div className="list">
								<M text={`
- ✅ consumables (e.g., camping essentials)
- ✅ healthy edibles (e.g., tea)
- ✅ a book
- ✅ emotions, memories, crazy epic shit together
- 😍 a detailed, high-quality map of the current country/region
- 😍 small memorabilia: printed photos, bracelets, handmade trinkets, etc.
- 😍 lightweight DIY things
								`}/>
							</div>
							<span className="desktopOnlySupport"><br/></span>
							<h3>🤓 Docs for nerds & copyright</h3>
							<p>If you're interested in technical and/or copyright aspects, consider reading the repository's <a href="https://github.com/avrtt/avrtt.github.io/blob/main/README.md">README</a> file. If you've found a copyright infringement, please contact me at <a href="mailto:avrtt@tuta.io">avrtt@tuta.io</a>. You can also contribute to the blog (but why would you?). <br/><br/> Please note that content on this site is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en">CC BY-NC-ND 4.0</a> (excluding the <Link to="/course">course</Link>) and <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY-SA 4.0</a> (for course content), while the open source code is distributed under <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU AGPLv3</a>.</p>
							<span className="desktopOnlySupport"><br/></span>
							<h3><StickerPack sticker="hater"/>For haters & SJW</h3>
							<p>I've made "<Link to="/dev/null/">/dev/null</Link>" — a <S style={{}} className={""}>special</S> page of the website just for you! Hope you enjoy it there.</p>
						</div>
					</div>
					<div className="mobileOnlySupport"><br/></div>
				</div>
			</div>

			<div className="mobileOnlySupport"><br/></div>
			
			<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
				<div className="homeBodyRegular">
					<M text="### Main contents"/>
					<p><Link to="/adventures">Adventures</Link>, <Link to="/research">Research</Link> and <Link to="/thoughts">Thoughts</Link> are categories of blog posts featuring highlights from my travels, research/study notes related to my professional interests (mostly AI-related stuff), and reflections on all kinds of things, respectively. You can filter these posts by tags <Link to="/tags">here</Link>.</p>
					<p><Link to="/publications">Publications</Link>, <Link to="/software">Software</Link> and <Link to="/music">Music</Link> pages are related to my works in different areas: articles, papers, highlighted coding projects, music records, etc. A particular work is my <Link to="/handbook">travel handbook</Link>, a compilation of practical advice I write on a road.</p>
					<p><Link to="/course">Course</Link> is essentially a compilation of my posts pulled from the Research and organized to form a large in-depth educational program on machine learning and data analytics. It's free forever.</p>
					<p><Link to="/talks">Talks</Link> provides recordings of my speaking engagements, podcasts, videos featuring me as a guest and information about conferences, meetups and online lectures, if any.</p>
					<p><Link to="/freelance">Freelance</Link> and <Link to="/cv">CV</Link> are pages for freelance clients and recruiters. They provide detailed information about my qualifications (projects, work experience, testimonials, academic background and so on).</p>
					<p>I use <Link to="/exploration">Exploration</Link> to track progress in exploring the world, rank visited places and countries, and play with maps. <Link to="/goals">Goals</Link> is used to keep my public bucket list of lifelong aims and challenges (with a lot of stupid ones). Finally, the <Link to="/about">About</Link> page describes my bio and interests, which helps to introduce myself to avoid frequently asked questions.</p>
					{/*<div className="desktopOnlySupport"><br/></div>
					<div>
						<button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
							&nbsp;&nbsp;
							<span className={stylesSpoilers.spoilerText}></span>
							More pages: Archive & Misc sections
							&nbsp;&nbsp;
						</button>
						<div className={stylesSpoilers.spoilerContentWrapper}>
							<div className={stylesSpoilers.spoilerContentGoals}>
								<p>...</p>
								<br/>
							</div>
							<div style={{ padding: "2rem", maxWidth: "fit-content", marginInline: "auto" }}>
								<StaticImage style={{ borderRadius: "2vh" }} src="../../images/home/me.jpg" alt="I need to write a list"/>
							</div>
						</div>
					</div>
					<div className="mobileOnlySupport"><br/></div>*/}
				</div>
			</AnimationOnScroll>

			<div className="mobileOnlySupport"><br/></div>

			<AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
				<div className="homeBodyRegular">
					<M text="# 👋 GET IN TOUCH"/>
					<div className="desktopOnlySupport">
						<TileContainerLink columns={3} marginTop='2vh' marginBottom='4vh' animationonscroll={false}>
							<LinkBlock
								link='https://t.me/averett'
								icon={telegram}
								name='Telegram'
								handle='@averett'
								description='Fastest way'
								backgroundColor='#dbdbdb'
							/>
							<LinkBlock
								link='mailto:avrtt@tuta.io'
								icon={envelope}
								name='Email'
								handle='avrtt@tuta.io'
								description='Traditional way'
								backgroundColor='#dbdbdb'
							/>
							<LinkBlock
								link='https://www.facebook.com/vladaverett'
								icon={facebook}
								name='Facebook'
								handle='@vladaverett'
								description='Alternative way'
								backgroundColor='#dbdbdb'
							/>
						</TileContainerLink>
					</div>
					<div className="mobileOnlySupport">
						<div className="list" style={{ marginLeft: 0 }}>
							<ul>
								<li>📲 Telegram: <a href="https://t.me/averett">@averett</a> 👈 <H>fastest way</H></li>
								<li>📩 Email: <a href="mailto:avrtt@tuta.io">avrtt@tuta.io</a></li>
								<li>👤 Facebook: <a href="https://www.facebook.com/vladaverett">@vladaverett</a></li>
							</ul>
						</div>
					</div>
					<div>
						<button className={`noselect ${stylesSpoilers.spoilerButton}`} ref={(el) => { if(el) collRef.current.push(el); }}>
							&nbsp;&nbsp;
							<span className={stylesSpoilers.spoilerText}></span>
							Spoiler: Ways to cooperate
							&nbsp;&nbsp;
						</button>
						<div className={stylesSpoilers.spoilerContentWrapper}>
							<div className={stylesSpoilers.spoilerContentGoals}>
								<p>Some of my <Link to="/goals">life goals</Link> require collaboration. Here are the most important collaborations I seek so far:</p>
								<ul>
									<li>Conduct significant research in machine learning as an unaffiliated researcher</li>
									<li>Create a small business in IT</li>
									<li>Become a co-host of coliving for travelers via Couchsurfing</li>
									<li>Form or join a black metal band (vocal and/or keyboard/electronic)</li>
									<li>Collaborate with travel vloggers</li>
									<li>Make an arthouse movie</li>
								</ul>
								<p>Invite me to:</p>
								<ul>
									<li>metal concerts, raves, DJ sets, cozy home parties</li>
									<li>join open-source projects, ML competitions and meetups</li>
									<li>attend discussions on politics or philosophy</li>
									<li>organized group travels</li>
									<li>trainhopping</li>
									<li>take enduro motorcycle trips</li>
									<li>attend travelers' meetings</li>
									<li>live in tent/van camps, hippie communes or other similar microsocieties</li>
								</ul>			
							</div>
						</div>
					</div>
					<p>If you're reaching out about business (i.e. ads on my social platforms and collaboration), please consider reading the <Link to="/information_for_business_inquiries">Information for Business Inquiries</Link>. If you're addressing a question, it may have already been answered <Link to="/faq">here</Link>.</p>
					<p>More ways to contact me are listed <Link to="/contact">here</Link>.</p>
					<div className="mobileOnlySupport">
						
						<h3>Social links</h3>
						<div className="list" style={{ marginLeft: 0, marginBottom: "1rem" }}>
							<ul>
								<li>📌 <H>Vlog</H> (YT): <a href="https://www.youtube.com/@vladaverett">@vladaverett</a></li>
								<li>📌 <H>Diary</H> (TG): <a href="https://t.me/venturingforth">@venturingforth</a></li>
								<li>👤 Instagram: <a href="https://www.instagram.com/avrttv">@avrttv</a></li>
								<li>👤 X: <a href="https://twitter.com/vladaverett">@vladaverett</a></li>
								<li>👤 TikTok: <a href="https://www.tiktok.com/@vladaverett">@vladaverett</a></li>
								<li>👥 Group (TG): <a href="https://t.me/avrttclub">@avrttclub</a></li>
								<li>👥 Stickers (TG): <a href="https://t.me/avrttclub/8">link</a></li>
								<li>👥 Blog page (FB): <a href="https://www.facebook.com/avrttblog">@avrttblog</a></li>
								<li>👥 Server (Discord): <a href="https://discord.gg/GPxjKDgYTa">link</a></li>
								<li>🧑‍💻 Tech videos (YT): <a href="https://www.youtube.com/@avheuristics">@avheuristics</a></li>
								<li>🧑‍💻 Tech blog (TG): <a href="https://t.me/avheuristics">@avheuristics</a></li>
								<li>🧑‍💻 GitHub: <a href="https://github.com/avrtt">@avrtt</a></li>
								<li>🧑‍💻 Kaggle: <a href="https://www.kaggle.com/lenferdetroud">@lenferdetroud</a></li>
								<li>🧑‍💻 LeetCode: <a href="https://leetcode.com/u/avrtt/">@avrtt</a></li>
								<li>🗺 CouchSurfing: <a href="https://www.couchsurfing.com/people/averett">@averett</a></li>
								<li>🗺 Travel map: <a href="https://www.google.com/maps/d/viewer?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ll=0.3349379679002276%2C0&z=2&entry=yt">link</a></li>
								<li>🎵 Label (YT): <a href="https://www.youtube.com/@noiserett">@noiserett</a></li>
								<li>🎵 Music blog (TG): <a href="https://t.me/noiserett">@noiserett</a></li>
								<li>🎵 Hollofus (Linktree): <a href="https://linktr.ee/hollofus">@hollofus</a></li>
								<li>🎵 Averett project (Linktree): <a href="https://linktr.ee/averett">@averett</a></li>
								<li>📎 Today I read (TG): <a href="https://t.me/avreads">@avreads</a></li>
								<li>🤝 Prof. page (FB): <a href="https://www.facebook.com/averett.freelance">@averett.freelance</a></li>
								<li>🤝 LinkedIn: <a href="https://www.linkedin.com/in/avrtt">@avrtt</a></li>
								<li>🤝 Upwork: <a href="https://www.upwork.com/freelancers/~019b5459361c20c528/">link</a></li>
								<li>🤝 Fiverr: <a href="https://www.fiverr.com/vladaverett">@vladaverett</a></li>
								<li>🤝 Kwork: <a href="https://kwork.ru/user/avrtt">@avrtt</a></li>
								<li>🎁 <S style={{}} className={""}><H>Donate</H>: <Link to="/donate">link</Link></S></li>
							</ul>
						</div>
					</div>
				</div>
			</AnimationOnScroll>

			<div className="homeBodyTile desktopOnlySupport">
				<TileContainerLink columns={4} gap="1em" marginBottom="1em">
					<LinkBlock
						link='https://www.youtube.com/@vladaverett'
						icon={youtube}
						categoryEmoji={'📌'}
						categoryName="Pinned"
						name='Vlog'
						handle='@vladaverett'
						description='Life, travels & films'
					/>
					<LinkBlock
						link='https://t.me/venturingforth'
						icon={telegram}
						categoryEmoji={'📌'}
						categoryName="Pinned"
						name='Diary'
						handle='@venturingforth'
						description='Extra content & random thoughts'
						isRussian={true}
					/>
					<LinkBlock
						link='https://www.instagram.com/avrttv'
						icon={instagram}
						categoryEmoji={''}
						categoryName="Social"
						name='Instagram'
						handle='@avrttv'
						description="Only follow/respond to DMs from people I personally know"
					/>
					<LinkBlock
						link='https://twitter.com/vladaverett'
						icon={twitter}
						categoryEmoji={''}
						categoryName="Social"
						name='X'
						handle='@vladaverett'
						description="Never respond to DMs"
						isEnglishAndRussian={true}
					/>
				</TileContainerLink>
				<TileContainerLink columns={4} gap="1em" marginBottom="1em">
					<LinkBlock
						link='https://www.tiktok.com/@vladaverett'
						icon={tiktok}
						categoryEmoji={''}
						categoryName="Social"
						name='TikTok'
						handle='@vladaverett'
						description='Never respond to DMs'
					/>
					<LinkBlock
						link='https://t.me/avrttclub'
						icon={telegram}
						categoryEmoji={''}
						categoryName="Community"
						name='Group'
						handle='@avrttclub'
						description='Community chats by topic'
						isEnglishAndRussian={true}
					/>
					<LinkBlock
						link='https://t.me/avrttclub/8'
						icon={telegram}
						categoryEmoji={''}
						categoryName="Community"
						name='Stickers'
						handle=''
						description='Community packs'
					/>
					<LinkBlock
						link='https://www.facebook.com/avrttblog'
						icon={facebook}
						categoryEmoji={''}
						categoryName="Community"
						name='Blog page'
						handle='@avrttblog'
						description='Mostly for announcements'
					/>
				</TileContainerLink>
				<TileContainerLink columns={4} gap="1em" marginBottom="1em">
					<LinkBlock
						inactive={true}
						link='https://discord.gg/GPxjKDgYTa'
						icon={discord}
						categoryEmoji={''}
						categoryName="Community"
						name='Server'
						handle=''
						description='Chats & voice rooms by topic'
						isEnglishAndRussian={true}
					/>
					<LinkBlock
						link='https://www.youtube.com/@avheuristics'
						icon={youtube}
						categoryEmoji={''}
						categoryName="Tech"
						name='Tech videos'
						handle='@avheuristics'
						description='Career-related content'
					/>
					<LinkBlock
						link='https://t.me/avheuristics'
						icon={telegram}
						categoryEmoji={''}
						categoryName="Tech"
						name='Tech blog'
						handle='@avheuristics'
						description='Career-related content'
						isEnglishAndRussian={true}
					/>
					<LinkBlock
						link='https://github.com/avrtt'
						icon={github}
						categoryEmoji={''}
						categoryName="Tech"
						name='GitHub'
						handle='@avrtt'
						description='Open source projects'
					/>
				</TileContainerLink>
				<TileContainerLink columns={4} gap="1em" marginBottom="1em">
					<LinkBlock
						link='https://www.kaggle.com/lenferdetroud'
						icon={kaggle}
						categoryEmoji={''}
						categoryName="Tech"
						name='Kaggle'
						handle=''
						description='ML competitions'
					/>
					<LinkBlock
						link='https://leetcode.com/u/avrtt/'
						icon={leetcode}
						categoryEmoji={''}
						categoryName="Tech"
						name='LeetCode'
						handle='@avrtt'
						description='Instead of chess'
					/>
					<LinkBlock
						link='https://www.couchsurfing.com/people/averett'
						icon={couchsurfing}
						categoryEmoji={''}
						categoryName="Travel"
						name='CouchSurfing'
						handle='@averett'
						description='Hospitality network'
					/>
					<LinkBlock
						link='https://www.google.com/maps/d/viewer?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ll=0.3349379679002276%2C0&z=2&entry=yt'
						icon={map}
						categoryEmoji={''}
						categoryName="Travel"
						name='Travel map'
						handle=''
						description='Being moved on the site ATM'
					/>
				</TileContainerLink>
				<TileContainerLink columns={4} gap="1em" marginBottom="1em">
					<LinkBlock
						link='https://www.youtube.com/@noiserett'
						icon={youtube}
						categoryEmoji={''}
						categoryName="Music"
						name='Label'
						handle='@noiserett'
						description='All music records in one place'
					/>
					<LinkBlock
						link='https://t.me/noiserett'
						icon={telegram}
						categoryEmoji={''}
						categoryName="Music"
						name='Music blog'
						handle='@noiserett'
						description='Demos, releases & favorites'
						isEnglishAndRussian={true}
					/>
					<LinkBlock
						inactive={true}
						link='https://linktr.ee/hollofus'
						icon={linktree}
						categoryEmoji={''}
						categoryName="Music"
						name='Hollofus'
						handle='@hollofus'
						description='Music project links'
					/>
					<LinkBlock
						inactive={true}
						link='https://linktr.ee/averett'
						icon={linktree}
						categoryEmoji={''}
						categoryName="Music"
						name='Averett'
						handle='@averett'
						description='Music project links'
					/>
				</TileContainerLink>
				<TileContainerLink columns={4} gap="1em" marginBottom="1em">
					<LinkBlock
						link='https://t.me/avreads'
						icon={telegram}
						categoryEmoji={''}
						categoryName="Misc"
						name='Today I read'
						handle='@avreads'
						description='My r/TIL-like notes'
						isEnglishAndRussian={true}
					/>
					<LinkBlock
						link='https://www.facebook.com/averett.freelance'
						icon={facebook}
						categoryEmoji={''}
						categoryName="Work"
						name='Prof. page'
						handle='@averett.freelance'
						description='Mostly for testimonials'
					/>
					<LinkBlock
						inactive={true}
						link='https://www.linkedin.com/in/avrtt'
						icon={linkedin}
						categoryEmoji={''}
						categoryName="Work"
						name='LinkedIn'
						handle='@avrtt'
						description='For the future'
					/>
					<LinkBlock
						inactive={true}
						link='https://www.upwork.com/freelancers/~019b5459361c20c528/'
						icon={upwork}
						categoryEmoji={''}
						categoryName="Work"
						name='Upwork'
						handle=''
						description='Freelance marketplace'
					/>
				</TileContainerLink>
				<TileContainerLink columns={4} gap="1em" marginBottom="0">
					<LinkBlock
						inactive={true}
						link='https://www.fiverr.com/vladaverett'
						icon={fiverr}
						categoryEmoji={''}
						categoryName="Work"
						name='Fiverr'
						handle='@vladaverett'
						description='Freelance marketplace'
					/>
					<LinkBlock
						inactive={true}
						link='https://kwork.ru/user/avrtt'
						icon={kwork}
						categoryEmoji={''}
						categoryName="Work"
						name='Kwork'
						handle='@avrtt'
						description='Freelance marketplace'
						isRussian={true}
					/>
					<LinkBlock
						inactive={true}
						link='https://freelance.habr.com/freelancers/avrtt'
						icon={habr}
						categoryEmoji={''}
						categoryName="Work"
						name='Habr'
						handle='@avrtt'
						description='Freelance marketplace'
						isRussian={true}
					/>
					<S style={{}} className={""}>
						<LinkBlock
							isExternalLink={false}
							link='/donate'
							icon={giftRed}
							categoryEmoji={''}
							categoryName=""
							name='Donate'
							handle=''
							description='Support my projects!'
						/>
					</S>
				</TileContainerLink>
			</div>
		
		</motion.div>
  	);
};

export default Home;

export const Head = () => (
	<SEO 
		title="Home - avrtt.blog"
		description="Vlad Averett's personal all-in-one website — a reinvention of old school blogging, a community hub, an info page and a course platform dedicated to artificial intelligence, research, travel, nomadic lifestyle, observations, reflections and daily life notes."
		keywords={["blog", "community", "course", "data science", "machine learning", "deep learning", "couchsurfing", "travel", "course platform", "study notes", "thoughts", "research", "machine learning research", "artificial intelligence", "AI research", "freelancer blog", "info page"]}
		image={""}
		canonicalUrl="https://avrtt.github.io/"
		schemaType="WebPage"
		
	/>
)
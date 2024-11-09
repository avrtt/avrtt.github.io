import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import LastPostAdventures from "../../fetchers/adventures_last_post"
import LastPostResearch from "../../fetchers/research_last_post"
import LastPostThoughts from "../../fetchers/thoughts_last_post"
import SecondLastPostAdventures from "../../fetchers/adventures_second_last_post"
import SecondLastPostResearch from "../../fetchers/research_second_last_post"
import SecondLastPostThoughts from "../../fetchers/thoughts_second_last_post"

const TITLE = 'Home - avrtt.blog'

const Home = () => {
	
	const lastPostAdventures = LastPostAdventures()
	const lastPostResearch = LastPostResearch()
	const lastPostThoughts = LastPostThoughts()
	const postsLast = [lastPostAdventures, lastPostResearch, lastPostThoughts];

	const secondLastPostAdventures = SecondLastPostAdventures()
	const secondLastPostResearch = SecondLastPostResearch()
	const secondLastPostThoughts = SecondLastPostThoughts()
	const postsSecondLast = [secondLastPostAdventures, secondLastPostResearch, secondLastPostThoughts];
		
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
					{postsLast.map(post => {
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
					{postsSecondLast.map(post => {
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

			</div> 
		</motion.div>
  	);
};

export default Home;

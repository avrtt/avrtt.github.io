import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { categories, services, projectsCount } from '../../data/freelance/arrays';
import { currentZoneUTC, freelanceWorkHourStart, freelanceWorkHourEnd } from '../../data/freelance/variables';
import { freelanceLastUpdated } from '../../data/lastUpdated';
import Stack from'../../components/Stack';
import FreelanceCategory from'../../components/FreelanceCategory';
import Courses from'../../components/Courses';
import info from "../../images/goals/info.svg";
import SpoilerServices from '../../components/SpoilerServices';
import { Link } from "gatsby"

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
				<M text="Found a related problem? Feel free to contact me — I'll answer any questions you may have:"/>
				<div class="listHome"> 
					<M text='
					⚡ Telegram (fastest way): **[@averett](https://t.me/averett)**<br/>
					✉️ Email: **[avrtt@tuta.io](mailto:avrtt@tuta.io)**<br/>
					💬 WhatsApp: **[?]()**<br/>
					👤 Facebook: **[@vladaverett](https://www.facebook.com/vladaverett)**
					'/>     
				</div> 
				<M text="Alternatively, you can choose one of the freelance platforms to make an offer:"/>
				<div class="listHome"> 
					<M text='
					🌐 Upwork: **[019b5459361c20c528](https://www.upwork.com/freelancers/~019b5459361c20c528)**<br/>
					🌐 Fiverr: **[@vladaverett](https://www.fiverr.com/vladaverett)**<br/>
					🇷🇺 Kwork: **[@avrtt](https://kwork.ru/user/avrtt)**<br/>
					🇷🇺 Habr Freelance: **[@avrtt](https://freelance.habr.com/freelancers/avrtt)**
					'/>     
				</div> 
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

			</div>
			<div class="lastUpdatedFreelance">UPDATED ON {freelanceLastUpdated}</div>
		</motion.div>
  	);
};
  
export default Freelance;

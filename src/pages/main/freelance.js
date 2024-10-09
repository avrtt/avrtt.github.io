import React from 'react';
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
				title={"Compact list: services I offer"}
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


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
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


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 🔀 THE WAY THINGS GET DONE "/>
			<M text="Step by step workflow: 
			Как происходит демонстрация промежуточных результатов и корректировка клиентом в больших заказах, весь процесс от обращения до сдачи заказа
			Как происходит оплата
			Первым делом предлагаю бесплатную экспертную оценку (это повышает конверсию)
			Описание как, в каких случаях и сколько берется предоплата, как происходит работа с клиентом, как работа происходит с постоянными клиентами. Сдача заказа происходит после демонстрации и полной оплаты в большинстве случаев
			В большинстве случаев я требую предоплату 50%, если заказ взят не на фриланс-маркетплейсе, который гарантирует безопасную оплату. В зависимости от заказчика и проекта, предоплата может изменяться в пользу заказчика.
			Непрерывное уточнение правильности работы проекта по майлстоунам, если клиент этого желает и проект крупный
			Для других типов работы описать (не-проектная)
			Под спойлер сделать FAQ
			Короче тут все про рабочий процесс от начала до конца для конкретных типов проектов и т.д.
			https://habr.com/ru/companies/weblancer/articles/448296/
			https://habr.com/ru/articles/697814/
			Любой новый клиент строго 50% предоплата
			Постоянным клиентам может быть снижена вплоть до 100% постоплаты, если проект перспективный и большой
			Промежуточной оплаты нет
			Какие заказы я не беру совсем (небольшие заказы, большие требования и неясное ТЗ)
			Скидки постоянным клиентам
			Text conversation или для более сложных проектов или по желанию клиента 1:1 video consultation calls to brainstorm an AI/ML-based business idea and develop a technical project scope
			Также см. описание конкретной услуги на странице services (там методология, описание по шагам и т.д.)
			"/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# ❤️ RECENT TESTIMONIALS "/>
			<M text="Здесь несколько последних отзывов в виде блоков с ссылками на источники и указанием проекта. Отзывы подтягиваются из массива в data: здесь последние, на отдельной странице (ниже) - все. Сделать такую же страницу на русском."/>
			<M text="You can check out more reviews on the [Testimonials](/freelance/testimonials) page."/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 🛠️ TECH & TOOL STACK "/>
			<Stack />
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 📚 BACKGROUND"/>
			<div class="listHome"> 
			<M text="
			Небольшой текст про бэкграунд<br/>
			Employment & academic experience<br/>
			🔥 Митапы, количество пройденных вневузовских курсов, вузовские курсы, доп. инфа по бакалаврскому курсу и т.д.<br/>
			🚀 Какие-нибудь не-фриланс проекты<br/>
			💼 Опыт работы по найму<br/>
			🎓 B.S. in Applied Mathematics & Computer Science<br/>
			💪 Actively [contributing](https://github.com/avrtt) to open-source
			"/>
			</div>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 📜 COURSES"/>
			<M text="I enjoy learning from courses all the time. Here's a compact list of some of the courses I've taken that I liked the most (clicking redirects to certificate proof, if any):"/>
			<Courses lang="en"/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
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

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { categories, services, projectsCount } from '../../data/freelance/arrays';
import { currentZoneUTC, freelanceWorkHourStart, freelanceWorkHourEnd } from '../../data/freelance/variables';
import { freelanceLastUpdated } from '../../data/lastUpdated';
import Stack from'../../components/Stack';
import FreelanceCategory from'../../components/FreelanceCategory';
import info from "../../images/goals/info.svg";
import { Link } from "gatsby"

const TITLE = 'Фриланс - avrtt.blog'

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
	tooltipText = "Рабочее время приводится для Вашего часового пояса, основываясь на данных браузера. На текущий момент наши часовые пояса совпадают."
} else {
	tooltipText = "Рабочее время приводится для Вашего часового пояса, основываясь на данных браузера. Мой текущий часовой пояс — UTC" + currentZoneUTC + "."
}

const FreelanceRu = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>

		<div class="languageSwitchWrapper">
			<Link to="/freelance/">
				<span class="languageButton noselect">EN</span>
			</Link>
		</div>

		<div class="freelanceBody">

			<p>Нужно обновить в соответствии с англоязычной версией.</p>

			<M text="Привет, я Влад! Выполняю фриланс-заказы, связанные, преимущественно, с Data Science, предлагая проектную работу, сопровождение сервисов, консалтинг и репетиторство. Мои основные области — машинное обучение, анализ данных, статистика, визуализация и Python-разработка, однако я также обладаю компетенциями в веб-разработке, постпродакшене видео и промпт-инжиниринге."/>
			<M text="Если у Вас имеется подобная задача — я готов ответить на любые вопросы в удобном формате:"/>
			<div class="listHome"> 
			<M text='
			⚡ Telegram (быстрый способ): **[@averett](https://t.me/averett)**<br/>
			✉️ Почта: **[avrtt@tuta.io](mailto:avrtt@tuta.io)**<br/>
			💬 WhatsApp: **[?]()**<br/>
			👤 Facebook: **[@vladaverett](https://www.facebook.com/vladaverett)**
			'/>     
			</div> 
			<M text="Кроме того, Вы можете выбрать одну из фриланс-платформ для размещения заказа:"/>
			<div class="listHome"> 
			<M text='
			🇷🇺 Kwork: **[@avrtt](https://kwork.ru/user/avrtt)**<br/>
			🇷🇺 Хабр Фриланс: **[@avrtt](https://freelance.habr.com/freelancers/avrtt)**<br/>
			🌐 Upwork: **[019b5459361c20c528](https://www.upwork.com/freelancers/~019b5459361c20c528)**<br/>
			🌐 Fiverr: **[@vladaverett](https://www.fiverr.com/vladaverett)**
			'/>     
			</div> 
			<span>
				Рабочее время: <b>{startHoursUTC}–{endHoursUTC}</b> ({strUTCOffset}), Пн – Пт
				<span class="tooltipFreelance">
					&nbsp;&nbsp;
					<img id='infoFreelance' src={info} alt='info'/>
					<span class="tooltiptextFreelance">{tooltipText}</span>
				</span>
			</span>
			<M text="Данная страница предназначена для фриланс-клиентов и предоставляет основную информацию касательно работы со мной. Пожалуйста, изучите её перед обращением."/>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 👨🏻‍💻 МОИ УСЛУГИ "/>
			<M text="Перевод"/>
			<div class="listHome"> 
			<M text="
			⚙️ Building predictive models and complicated ML algorithms incl. data pipelines for classification, clustering and regression<br/>
			Building, training and fine-tuning of neural networks (LLMs, ...)<br/>
			Data mining & parsing<br/>
			Bots (for your business, social media profiles, messenger apps, websites, etc. ...)<br/>
			Data cleansing (remove/replace/correct bad data of any kind from any dataset)<br/>
			Raw data preprocessing & feature engineering<br/>
			Data visualization & dashboard building<br/>
			Statistical analysis, statistical modeling, hypothesis testing<br/>
			Sequential analysis<br/>
			Regression analysis<br/>
			Time series analysis<br/>
			Ad hoc analysis<br/>
			EDA (make a demonstration of the data patterns and interrelationships of variables)<br/>
			Database management (analysis, data selection, making records)<br/>
			Front-end (React, Angular), web design, UX/UI<br/>
			OSINT<br/>
			Tutoring (math, Python programming, machine learning)<br/>
			Business consulting (data-driven solutions)<br/>
			Написание понятной технической документации с глубоким объяснением технических концепций<br/>
			Написание статей (ML, DL, DA, DS и смежным темам)<br/>
			AI system prompting<br/>
			Создание видео и анимаций с помощью AI: AI-empowered VFX, AI-визуалайзеры для треков, написание моделей нейросетей для специфических Image-to-Video и Text-to-Video задач (Video post-production в категории проектов)<br/>
			Video editing<br/>
			AI-driven design
			"/>
			</div>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 📌 ПРОЕКТЫ "/>

			<M text="Мои проекты распределены по категориям. Пожалуйста, нажмите на интересующую Вас категорию, чтобы перейти к странице проектов:"/>

			{categories.map((category) => (
				<FreelanceCategory 
					categoryName={category.categoryNameRu}
					categoryDesc={category.categoryDescRu}
					numProjects={category.numProjectsRu}
					img={category.img}
					url={"/freelance/ru/projects/" + category.categoryKey + "/"}
				/>
			))}

			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 🔀 КАК ПРОХОДИТ РАБОТА "/>
			<M text="Перевод"/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# ❤️ ПОСЛЕДНИЕ ОТЗЫВЫ "/>
			<M text="Перенести из англоязычной версии"/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 🛠️ СТЭК И ИНСТРУМЕНТЫ "/>
			<Stack />
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# 📚 ОПЫТ"/>
			<M text="### Работа и образование"/>
			<div class="listHome"> 
			<M text="
			🔥 Опыт работы на фрилансе (отсчет времени из переменной в itemData)<br/>
			🚀 В Data Science с 2020 года<br/>
			💼 Опыт работы датасаентистом<br/>
			🎓 Математическое образование (бакалавр)<br/>
			🏅 Звание Kaggle Expert (за соревнования и ноутбуки)<br/>
			💪 Активно вношу вклад в open-source 
			"/>
			</div>
			<M text="### Курсы"/>
			<M text="ОПИСАНИЕ ДОПОЛНИТЕЛЬНЫХ УЧЕБНЫХ ПРОГРАММ И КУРСОВ; СОРТИРОВКА ПО ВАЖНОСТИ"/>
			<M text='### Дополнительные ссылки'/>
			<div class="listHome"> 
			<M text='
			▶️ [YouTube](https://www.youtube.com/channel/UCpPtaqqxzFqm9rZAh2xC5OA)<br/>
			📚 [Telegram (профессиональный блог)](https://t.me/avheuristics)<br/>
			🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)<br/>
			🧩 [LeetCode](https://leetcode.com/avrtt/)<br/>
			⚙️ [GitHub](https://github.com/avrtt)<br/>
			💼 [LinkedIn](https://www.linkedin.com/in/avrtt/)<br/>
			🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)
			'/>
			</div>   
			</AnimationOnScroll>

		</div>
		<div class="lastUpdatedFreelance">UPDATED {freelanceLastUpdated}</div>
    </motion.div>
  );
};
  
export default FreelanceRu;

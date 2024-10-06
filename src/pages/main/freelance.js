import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { freelanceExperienceString, projectsCount, categories, currentZoneUTC, freelanceWorkHourStart, freelanceWorkHourEnd, freelanceLastUpdated } from '../itemData';
import Stack from'../../components/Stack';
import FreelanceCategory from'../../components/FreelanceCategory';
import Courses from'../../components/Courses';
import info from "../../images/goals/info.svg";
import SpoilerServices from '../../components/SpoilerServices';
import { Link } from "gatsby"
import ML from "../../images/freelance/machineLearningIcon.svg";
import DA from "../../images/freelance/dataAnalysisIcon.svg";
import DV from "../../images/freelance/dataVisualizationIcon.svg";
import DC from "../../images/freelance/dataCollectionIcon.svg";
import PA from "../../images/freelance/pythonAppsIcon.svg";
import WD from "../../images/freelance/webDevelopmentIcon.svg";
import RE from "../../images/freelance/researchIcon.svg";
import TW from "../../images/freelance/technicalWritingIcon.svg";
import PP from "../../images/freelance/postProductionIcon.svg";
import MI from "../../images/freelance/miscIcon.svg";

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
			
				// currently preferable services
				services={[ 
					{icon: PA, text: "Build or debug modular Python software (complex console apps, desktop GUIs, enterprise tools)"},
					{icon: DC, text: "Collect any kind of data using web scraping techniques"},
					{icon: DA, text: "Perform data processing (cleaning, transforming, annotation/labeling, reduction, validation)"},
					{icon: DV, text: "Create a clear and eye-catching visualization for any kind of data"},
					{icon: DA, text: "Conduct exploratory data analysis"},
					{icon: ML, text: "Fine-tune a deep learning model"},
					{icon: WD, text: "Build a frontend for a web app (React)"},
					{icon: WD, text: "Design and build a static website, such as a blog, portfolio or landing page (Next.js/Gatsby/Jekyll, CMS)"},
					{icon: PA, text: "Create a bot for your website or popular platforms (Telegram, Instagram, Discord), optionally including chatbot functionality with LLM integration"},
					{icon: PA, text: "Create custom data collection software (scraper, parser, web crawler)"},
					{icon: RE, text: "Conduct hypothesis testing, including A/B testing"},
					{icon: DA, text: "Create a dashboard to display metrics based on data"},
					{icon: TW, text: "Write SEO-optimized technical content related to Data Science: articles, tutorials, product documentations or blog posts"},
					{icon: PA, text: "Automate workflows using scripting (Python, Shell)"},
					{icon: WD, text: "Adapt and deploy a Python app to Streamlit"},
					{icon: MI, text: "Help with homework, coursework or thesis: coding projects (Python, SQL, JavaScript, TypeScript), Linux, probability theory & statistics, research"}
				]}

				/* hidden services and drafts
				- LLM integration: GPT4 and GeminiAI models, ... (LangChain) 
				- Design an end-to-end solution (visualizations, ML models, AI automation, web applications, etc.)
				- Создание модели детекции объектов (TensorFLow/PyTorch)
				- Создание рекомендательной системы (collaborative filtering or content-based filtering)
				- Churn prediction
				- Создание модели для подсказок
				- Векторизация текстов
				- Cloud solutions for analytics and automation (AWS, GCP)
				- Ранжирование
				- Business consulting: ... (misc icon)
				- Векторный поиск (ElasticSearch)
				- Time series analysis and forecasting (Statsmodels, Prophet, ARIMA, SARIMA, LSTM); ARIMA Modeling, Seasonal Decomposition, Exponential Smoothing, State Space Models, Cointegration, Vector Autoregression (VAR), Autoregressive Moving Average (ARMA), Unit Root Testing, Granger Causality, Kalman Filter, Forecasting Accuracy, High-Frequency Data Analysis, Long Memory Processes, Frequency Domain Analysis
				- Econometrics: Panel Data Analysis, Cross-Sectional Analysis, Generalized Method of Moments (GMM), Instrumental Variables (IV), Structural Equation Modeling (SEM), Fixed Effects Model, Random Effects Model, Difference-in-Differences (DiD), Bayesian Econometrics, Regression Analysis, Maximum Likelihood Estimation (MLE), Quantile Regression, Endogeneity, Causal Inference
				- Feature engineering
				- Data wrangling
				- Feature selection
				- Ensemble methods
				- Statistical analysis, statistical model design
				- Advanced mathematical and optimization modeling
				- Topic research / AI research
				- Complex deep learning models forp computer vision
				- Image/video processing
				- Computer vision tasks: segmentation, detection, recognition, feature matching, image restoration, OCR, etc. (OpenCV)
				- NLP tasks: ... (SpaCy, NLTK, BERT, GPT models, text preprocessing, tokenization, text classification, named entity recognition, text similarity, QA, search engines)
				- Build QA model
				- Sentiment analysis: social media analysis, customer feedback analysis  
				- Speech-to-Text, voice assistant
				- Text-to-Image, Image-to-Text
				- Data annotation
				- Build a generative AI model (...)
				- Data engineering, ETL pipelines
				- AWS cloud development for scalable solutions
				- SQL and noSQL queries, Stored Procedures, Functions, CLR
				- Testing design and implementation
				- Database administration (Maintain and administer your SQL instance, Design, document, and implement architectures and schemas, Migrate your data, Optimize your queries, Fix problematic queries and performance problems, Write stored procedures and functions, Write complex and simple queries, Integrate and develop custom code in SQL Server as a CLR)
				- Prompt engineering
				- Монтаж видео
				- Dockerize apps & microservices
				- Topic modeling
				- Google Sheets / Excel, Spreadsheet Modeling
				- API development and deployment
				- SEO optimization, entity matching, SEO analysis
				- UX/UI
				- AI-driven design
				- Website design 
				- Logo design
				- Map data analysis and visualization (OpenStreetMap, Leaflet) 
				- Построение модели регрессии, регрессионный анализ
				- Market analysis, эконометрика, trading, technical analysis, risk analysis, marketing metrics
				- Applications of ML in economics, e-commerce and stock market, customer lifetime value
				- Построение сложной модели классификации (image/audio/text/table data); customer loyalty prediction, ...
				- Построение сложной модели кластеризации (image/audio/text/table data); customer segmentation, ...
				- Построение сложной модели поиска аномалий (image/audio/text/table data); fraud detection, ...
				- Построение сложных ML-пайплайнов
				- Data mining problems
				- Big data processing, building ML models for large collections of data (PySpark)
				- OSINT
				- BI, business analytics
				- Database management (SQL)
				- MLOps
				- Python web apps, Python backend (Flask, Django, etc.)
				- ERP dashboards
				- Click-through rate prediction model for ads
				- Ad-hoc analysis, business reporting
				- Build a data analytics web-based platform for uploading datasets to generate automated visualizations and insights
				- Build a lead scoring system, credit risk scoring
				- Data augmentation
				- E-commerce pricing optimization model, dynamic pricing
				- Build a RAG model
				- Email automation
				- PDF extraction (OCR)
				*/

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
			"/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div class="sectionBreak"><M text="----------"/></div>
			<M text="# ❤️ RECENT TESTIMONIALS "/>
			<M text="Здесь несколько последних отзывов в виде блоков с ссылками на источники и указанием проекта. Отзывы подтягиваются из массива в itemData: здесь последние, на отдельной странице (ниже) - все. Сделать такую же страницу на русском."/>
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

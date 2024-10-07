import github from "../images/freelance/githubLogo.svg";
import kwork from "../images/freelance/kworkLogo.svg";

import ML from "../images/freelance/machineLearningIcon.svg";
import DA from "../images/freelance/dataAnalysisIcon.svg";
import DV from "../images/freelance/dataVisualizationIcon.svg";
import DC from "../images/freelance/dataCollectionIcon.svg";
import PA from "../images/freelance/pythonAppsIcon.svg";
import WD from "../images/freelance/webDevelopmentIcon.svg";
import RE from "../images/freelance/researchIcon.svg";
import TW from "../images/freelance/technicalWritingIcon.svg";
import PP from "../images/freelance/postProductionIcon.svg";
import MI from "../images/freelance/miscIcon.svg";

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

const freelanceStartDate = new Date(2024, 5, 1); // date of start freelancing full-time
const freelancePastMonths = 15; // total months of occasional freelancing from January 2020 to June 2024

// get rounded years of freelance experience (0, 0.5, 1, 1.5, so on + "years")
export const freelanceExperienceString = `${calculateWorkExperience(freelanceStartDate, freelancePastMonths)} years`;

function getProjects(projectCount) {
	if (projectCount === 0) { return 'No projects' }
	else if (projectCount === 1) { return projectCount + ' project' } 
	else { return projectCount + ' projects' }
}
function getProjectsRu(projectCount) {
	if (projectCount === 0) { return 'Нет проектов' }
	else if (projectCount % 10 === 1 && !(projectCount % 100 === 11)) { return projectCount + ' проект' }
	else if (projectCount % 10 === 2 && !(projectCount % 100 === 12)) { return projectCount + ' проекта' }
	else if (projectCount % 10 === 3 && !(projectCount % 100 === 13)) { return projectCount + ' проекта' }
	else if (projectCount % 10 === 4 && !(projectCount % 100 === 14)) { return projectCount + ' проекта' }
	else { return projectCount + ' проектов' } // блять инсульт
}

export const freelanceStatus = 1
// 1 - 👀 Open to any proposals
// 2 - 😎 Open to short-term gigs
// 3 - 🤔 Busy, but open to proposals for the future
// 4 - 🥵 Too busy, not answering
// 5 - 😴 Not working, not answering (on vacation or unable to work)
export const dateOfStartAnswering = "..." // "Jan 1" or "~ Jan 1" or "Jan 1 – Jan 6"  

export const currentZoneUTC = "+5" // [+/-]<offset>
export const freelanceWorkHourStart = "9"
export const freelanceWorkHourEnd = "17"
export const aboutLastUpdated = "SEP 6, 2023"
export const goalsLastUpdated = "SEP 5, 2023"
export const explorationLastUpdated = "OCT 14, 2023"
export const cvLastUpdated = "APR 7, 2024"
export const freelanceLastUpdated = "OCT 7, 2024"
export const footerYear = "2024"

// currently preferable services
export const services = [{},
	{icon: PA, title: "Modular Python software", // 1
		text: "Build or debug modular Python software (complex console apps, desktop GUIs, enterprise tools)"},
	{icon: DC, title: "Web scraping", // 2
		text: "Collect any kind of data using web scraping techniques"},
	{icon: DA, title: "Data processing", // 3
		text: "Perform data processing (cleaning, transforming, annotation/labeling, reduction, validation)"}, 
	{icon: DV, title: "Data visualization", // 4
		text: "Create a clear and eye-catching visualization for any kind of data"}, 
	{icon: DA, title: "Exploratory data analysis", // 5
		text: "Conduct exploratory data analysis"},
	{icon: ML, title: "Fine-tuning", // 6
		text: "Fine-tune a deep learning model"},
	{icon: WD, title: "Frontend", // 7
		text: "Build a frontend for a web app (React)"}, 
	{icon: WD, title: "Static websites", // 8
		text: "Design and build a static website, such as a blog, portfolio or landing page (Next.js/Gatsby/Jekyll, CMS)"}, 
	{icon: PA, title: "Bots", // 9
		text: "Create a bot for your website or popular platforms (Telegram, Instagram, Discord), optionally including chatbot functionality with LLM integration"}, 
	{icon: PA, title: "Data collection software", // 10
		text: "Create custom data collection software (scraper, parser, web crawler)"}, 
	{icon: RE, title: "Hypothesis testing", // 11
		text: "Conduct hypothesis testing, including A/B testing"}, 
	{icon: DA, title: "Dashboards", // 12
		text: "Create a dashboard to display metrics based on data"},
	{icon: TW, title: "Technical writing", // 13
		text: "Write SEO-optimized technical content related to Data Science: articles, tutorials, product documentations or blog posts"},
	{icon: PA, title: "Scripting", // 14
		text: "Automate workflows using scripting (Python, Shell)"}, 
	{icon: WD, title: "Streamlit apps", // 15
		text: "Adapt and deploy a Python app to Streamlit"}, 
	{icon: MI, title: "Academic help", // 16
		text: "Help with homework, coursework or thesis: coding projects (Python, SQL, JavaScript, TypeScript), Linux, probability theory & statistics, research"} 
]

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

export const projects = [
	{id: 1, 
		categoryKey: 'machine_learning',
		projectName: 'MobileEAST', 
		projectNameRu: 'MobileEAST',
		projectDesc: 'Lightweight and fast scene text detection based on EAST architecture and MobileNet layers', 
		projectDescRu: 'Легковесная и быстрая модель распознавания текста на сложных графических сценах, основанная на архитектуре EAST с добавлением слоёв MobileNet',
		date: 'Jun 9, 2023', 
		dateRu: '9 июля, 2023', 
		duration: '1 week', 
		durationRu: '1 неделя', 
		tag: 'Deep learning (computer vision)', 
		tagRu: 'Глубокое обучение (компьютерное зрение)', 
		source1: github, source1Link: 'https://github.com/avrtt/MobileEAST', 
		source2: '', source2Link: '', 
		source3: '', source3Link: '', 
		extraContentHide: false, 
		extraDesc: '', 
		extraDescRu: '', 
		demoImg1: '', demoImg2: '', demoImg3: '', // '../images/freelance/projects/[PROJECT]/[IMAGE]'
		demoVidYTKey: '',
		emoji: '🪶'},
	{id: 2, 
		categoryKey: 'misc',
		projectName: '2D FEM', 
		projectNameRu: '2D МКЭ', 
		projectDesc: 'Two-dimensional finite element method on rectangles', 
		projectDescRu: 'Аппроксимация методом конечных элементов на прямоугольниках в двумерном пространстве', 
		date: 'Dec 26, 2021', 
		dateRu: '26 декабря, 2021', 
		duration: '2 weeks', 
		durationRu: '2 недели', 
		tag: 'Mathematical modeling', 
		tagRu: 'Математическое моделирование', 
		source1: github, source1Link: 'https://github.com/avrtt/finite-element-method', 
		source2: '', source2Link: '', 
		source3: '', source3Link: '', 
		extraContentHide: true, 
		extraDesc: '', 
		extraDescRu: '', 
		demoImg1: '', demoImg2: '', demoImg3: '', 
		demoVidYTKey: '',
		emoji: '🔶'},
	{id: 3, 
		categoryKey: 'web_development',
		projectName: 'avrtt.blog', 
		projectNameRu: 'avrtt.blog', 
		projectDesc: 'Static website designed and written completely from scratch & with love using React and Gatsby', 
		projectDescRu: 'Статическое веб-приложение, написанное с нуля с использованием React и Gatsby', 
		date: '', 
		dateRu: '', 
		duration: 'Maintenance since May 29, 2022', 
		durationRu: 'Обслуживание с 29 мая, 2022', 
		tag: 'Frontend', 
		tagRu: 'Фронтенд', 
		source1: github, source1Link: 'https://github.com/avrtt/avrtt.github.io', 
		source2: '', source2Link: '', 
		source3: '', source3Link: '', 
		extraContentHide: true, 
		extraDesc: '', 
		extraDescRu: '', 
		demoImg1: '', demoImg2: '', demoImg3: '', 
		demoVidYTKey: '',
		emoji: '🚀'},
	{id: 4, 
		categoryKey: 'technical_writing',
		projectName: 'The Research section (avrtt.blog)', 
		projectNameRu: 'Раздел Research (avrtt.blog)', 
		projectDesc: "My tech blog about all the cool things I'm researching along my career path within Data Science", 
		projectDescRu: 'Мой профессиональный блог обо всём, что я узнаю на пути изучения Data Science', 
		date: '2020 – Ongoing', 
		dateRu: '2020 – Настоящее время', 
		duration: '', 
		durationRu: '', 
		tag: 'Blog posts', 
		tagRu: 'Публикации в блоге', 
		source1: '', source1Link: '', 
		source2: '', source2Link: '', 
		source3: '', source3Link: '', 
		extraContentHide: true, 
		extraDesc: '', 
		extraDescRu: '', 
		demoImg1: '', demoImg2: '', demoImg3: '', 
		demoVidYTKey: '',
		emoji: '🚀'},
]; 

export const categories = [
	{categoryKey: 'machine_learning', 
		categoryName: 'Machine learning', categoryNameRu: 'Машинное обучение', 
		categoryDesc: 'Building artificial intelligence models for organizations and individuals', 
		categoryDescRu: '',
		categoryDescDetailed: "Using [machine learning](https://en.wikipedia.org/wiki/Machine_learning), I can help you to solve a wide range of problems related to transforming data into useful information. Whether you're representing a company or just working on a standalone project, I can implement statistical algorithms, neural network models or ML pipelines for classification, regression, clustering, dimensionality reduction, anomaly detection and other (mixed) problems. // updating pipelines // ongoing or ad-hoc ML/data system maintenance, maintaining ML models // technical support, ML consulting // I can implement ML & AI techniques to automate decisions and predict outcomes, giving you a competitive edge", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'machine_learning').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'machine_learning').length), 
		img: ML
	},
	{categoryKey: 'data_analysis', 
		categoryName: 'Data analysis', 
		categoryNameRu: 'Анализ данных', 
		categoryDesc: ' Inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making', 
		categoryDescDetailed: "With data analysis skills, I can help you to understand and use data in a way that makes sense. // Data mining // Big Data // EDA // Market Analysis // ad hoc // Data Cleaning and Preprocessing // data wrangling, handling missing values, scaling, and encoding data // dealing with missing data, removing duplicates, normalizing data, and transforming it into usable formats // business analytics, data-driven decision-making consulting, DS/AI strategy for businesses", 
		categoryDescDetailedRu: '',
		categoryDescRu: 'Заполнить', 
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'data_analysis').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'data_analysis').length), 
		img: DA
	},
	{categoryKey: 'data_visualization', 
		categoryName: 'Data visualization', 
		categoryNameRu: 'Визуализация данных', 
		categoryDesc: 'Helping non-data professionals grasp any data by creating easy-to-understand graphical or visual representations, dashboards and other kinds of reports', 
		categoryDescRu: '', 
		categoryDescDetailed: "Extra desc.", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'data_visualization').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'data_visualization').length), 
		img: DV
	},
	{categoryKey: 'data_collection', 
		categoryName: 'Data collection', 
		categoryNameRu: 'Сбор данных', 
		categoryDesc: 'Extending company databases with external data for making better business decisions, or creating separate datasets for any needs from any open sources using different scraping techniques, SQL and data annotation/labeling', 
		categoryDescRu: '', 
		categoryDescDetailed: "Data is essential for training machine learning models, and more quality data tends to improve performance metrics, allowing you to solve business problems better. I can collect and label any open source data using a variety of scraping techniques, handling APIs and databases along the way. This can include data on social media platforms, product reviews, market trends you can use to understand public demand, and so on.", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'data_collection').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'data_collection').length), 
		img: DC
	},
	{categoryKey: 'python_apps', 
		categoryName: 'Python apps', 
		categoryNameRu: 'Приложения на Python', 
		categoryDesc: 'Designing, building, debugging and maintaining Python software: automating routine tasks using scripting, optimizing workflows and business processes, making bots, web crawlers, desktop apps, etc.', 
		categoryDescRu: 'Заполнить', 
		categoryDescDetailed: "I'm an expert programmer in Python. I've been developing apps before I got into Data Science — for various personal needs.", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'python_apps').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'python_apps').length), 
		img: PA
	},
	{categoryKey: 'web_development', 
		categoryName: 'Web development', 
		categoryNameRu: 'Веб-разработка', 
		categoryDesc: 'Designing and building web applications such as web interfaces, landing pages and complex websites ', 
		categoryDescRu: 'Заполнить', 
		categoryDescDetailed: "Extra desc.", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'web_development').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'web_development').length),  
		img: WD
	},
	{categoryKey: 'research', 
		categoryName: 'Research', 
		categoryNameRu: 'Исследовательская деятельность', 
		categoryDesc: 'Statistical analysis or any kind of investigation to summarize and come up with useful insights: hypothesis testing (incl. A/B testing), experimental design, conducting surveys & customer research, OSINT, ML papers research (as part of business strategy consulting), descriptive statistics, etc.', 
		categoryDescRu: 'Заполнить', 
		categoryDescDetailed: "", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'math_and_research').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'math_and_research').length), 
		img: RE
	},
	{categoryKey: 'technical_writing', 
		categoryName: 'Technical writing', 
		categoryNameRu: 'Техрайтинг', 
		categoryDesc: 'Writing articles, tutorials, blog posts and papers on subjects related to my specialization', 
		categoryDescRu: 'Заполнить', 
		categoryDescDetailed: "You may need technical writing when you create blog articles, educational courses, tutorials on a certain subject and other texts that require profound expertise in the topic. Using state-of-the-art LLMs and proper prompt engineering, I can write any kind of texts within a short period of deadline, complementing and validating them due to my knowledge in Data Science and related areas.", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'technical_writing').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'technical_writing').length), 
		img: TW
	},
	{categoryKey: 'post_production', 
		categoryName: 'Post-production', 
		categoryNameRu: 'Постпродакшн', 
		categoryDesc: 'Video/music processing as part of my hobby, including editing, SFX, AI-driven design, AI-generated visual content, animations, sound engineering, etc.', 
		categoryDescRu: 'Заполнить', 
		categoryDescDetailed: "Сюда мои ютуб-каналы, серии видео или полнометражные видео, а также музыку", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'post_production').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'post_production').length), 
		img: PP
	},
	{categoryKey: 'misc', 
		categoryName: 'Misc projects', 
		categoryNameRu: 'Прочие проекты', 
		categoryDesc: 'Linux, BI, DevOps, system configuration, reverse engineering, math modeling, etc.', 
		categoryDescRu: 'Заполнить', 
		categoryDescDetailed: "Extra desc.", 
		categoryDescDetailedRu: '',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'misc').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'misc').length), 
		img: MI
	},
];

// get id of the last element from projects array and round it (0, 10, 20, so on)
export const projectsCount = Math.floor(projects[projects.length - 1].id / 10) * 10;

export const goalsTags = [
    {emoji: '❓', name: 'QUESTIONABLE', desc: 'Description'},
    {emoji: '😈', name: 'BAD THINGS TO TRY ONCE', desc: 'Description'},
    {emoji: '🎬', name: 'MOVIE REFERENCES', desc: 'Description'},
    {emoji: '🌲', name: 'BUSHCRAFT & WILDLIFE', desc: 'Description'},
    {emoji: '🗓', name: 'HABIT TRACKING', desc: 'Description'},
    {emoji: '🍽️', name: 'FOOD', desc: 'Description'},
    {emoji: '💪', name: 'STRENGTH', desc: 'Description'},
    {emoji: '❤️', name: 'HEALTH & ENDURANCE', desc: 'Description'},
    {emoji: '📚', name: 'KNOWLEDGE', desc: 'Description'},
    {emoji: '💡', name: 'WISDOM', desc: 'Description'},
    {emoji: '⚡', name: 'AGILITY', desc: 'Description'},
    {emoji: '😉', name: 'CHARISMA', desc: 'Description'},
    {emoji: '✍️', name: 'BLOG', desc: 'Description'},
    {emoji: '💼', name: 'CAREER', desc: 'Description'},
    {emoji: '🤸🏼', name: 'CALISTHENICS', desc: 'Description'},
    {emoji: '🔬', name: 'SCIENCE', desc: 'Description'},
    {emoji: '🗣', name: 'LANGUAGES', desc: 'Description'},
    {emoji: '🎓', name: 'EDUCATION', desc: 'Description'},
    {emoji: '🌱', name: 'GARDENING', desc: 'Description'},
    {emoji: '🧭', name: 'TRAVEL CHALLENGES', desc: 'Description'},
    {emoji: '📍', name: 'PLACES', desc: 'Description'},
    {emoji: '👥', name: 'ACQUAINTANCES', desc: 'Description'},
    {emoji: '⛰', name: 'MOUNTAINEERING', desc: 'Description'},
    {emoji: '🦋', name: 'LIVING BEINGS TO SEE', desc: 'Description'},
    {emoji: '🍀', name: 'LUCK', desc: 'Description'},
    {emoji: '🎲', name: 'D&D', desc: 'Description'},
    {emoji: '🤝', name: 'SOCIAL RELATIONS', desc: 'Description'},
    {emoji: '😎', name: 'SOCIAL CONFIDENCE', desc: 'Description'},
    {emoji: '👨‍💻', name: 'PLACES TO WORK', desc: 'Description'},
    {emoji: '🛏️', name: 'PLACES TO SLEEP', desc: 'Description'},
    {emoji: '🚪', name: 'PLACES TO LIVE', desc: 'Description'},
    {emoji: '🎉', name: 'FESTIVALS & HOLIDAYS', desc: 'Description'},
    {emoji: '🎵', name: 'MUSIC COMPOSITION', desc: 'Description'},
    {emoji: '🤡', name: 'BEING CRINGE', desc: 'Description'},
    {emoji: '👽', name: 'WILD WASTELAND', desc: 'Description'},
    {emoji: '👍', name: 'HITCHHIKING', desc: 'Description'},
    {emoji: '🎸', name: 'SONGS TO COVER', desc: 'Description'},
    {emoji: '🏍️', name: 'MOTORCYCLES', desc: 'Description'},
    {emoji: '🎩', name: 'STYLE', desc: 'Description'},
    {emoji: '🏠', name: 'HOUSE & POSSESSIONS', desc: 'Description'},
    {emoji: '🛋️', name: 'COUCHSURFING', desc: 'Description'},
    {emoji: '🎙️', name: 'PODCASTING', desc: 'Description'},
    {emoji: '🎥', name: 'VLOGGING & FILMMAKING', desc: 'Description'},
    {emoji: '🗽', name: 'POLITICS', desc: 'Description'},
    {emoji: '✋', name: 'ILLEGAL', desc: 'Description'},
    {emoji: '🧩', name: 'COLLABORATIVE GOALS', desc: 'Description'},
    {emoji: '📦', name: 'MINIMALISM & DOWNSHIFTING', desc: 'Description'},
    {emoji: '🧳', name: 'NOMADISM', desc: 'Description'},
    {emoji: '◾', name: 'COMMON', desc: 'Description'},
    {emoji: '✨', name: 'UNCOMMON', desc: 'Description'},
    {emoji: '⭐', name: 'RARE', desc: 'Description'},
    {emoji: '🌟', name: 'LEGENDARY', desc: 'Legendary achievements are either extremely difficult challenges (typically the most significant goals in my life) or exceptionally rare occasions. They usually require much dedication or simply luck.'},
    {emoji: '🐥', name: 'SAFE', desc: 'Description'},
    {emoji: '⚠️', name: 'UNSAFE', desc: 'Description'},
    {emoji: '☠', name: 'DANGEROUS', desc: 'This achievement might be associated with extremely risky situations and life-threatening areas.'},
];

export const goals1 = [ // EXPERIENCES: GENERAL
	{text: 'Test', status: 'u', deadline: 'Deadline', dateCompleted: 'Date', difftag: '', safetytag: '', tag1: '', tag2: '', tag3: '', tag4: '', tag5: '', info: 'Test', refLink: 'test', resultLink: 'test'},
];
export const goals2 = [ // EXPERIENCES: LOCATION SPECIFIC
    
];
export const goals3 = [ // EXPLORING
    
];
export const goals4 = [ // OBSERVING
    
];
export const goals5 = [ // LIFESTYLE
    
];
export const goals6 = [ // LEARNING
    
];
export const goals7 = [ // CREATIVITY
    
];
export const goals8 = [ // SOCIAL
    
];
export const goals9 = [ // PRODUCTIVITY
    
];
export const goals10 = [ // CAREER & FINANCE
    
];
export const goals11 = [ // BODY
    
];
export const goals12 = [ // GOOD DEEDS
    
];
export const goals13 = [ // FOOD
    
];
export const goals14 = [ // SELF
    
];
export const goals15 = [ // PROPERTY
    
];
export const goals16 = [ // MISC
    
];
   
export const placesArr = [
    {pos: '1', flag: '🇷🇺', name: 'Altai Republic', year: '2022', link: '/adventures/altai', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
    {pos: '2', flag: '🇰🇬', name: 'Bishkek', year: '2001-2008', link: 'https://en.wikipedia.org/wiki/Bishkek', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
    {pos: '3', flag: '🇬🇪', name: 'Abkhazia', year: '?', link: 'https://en.wikipedia.org/wiki/Abkhazia', info: "This region is worth visiting for at least two reasons: if you want to feel the vibe of Soviet Georgia and for the huge number of beautiful caves. Here are the deepest known cave in the world, lonely beaches at the foot of the mountains, wine sold in Soviet soda machines, cheap food and tangerine gardens almost everywhere."},
    {pos: '4', flag: '🇷🇺', name: 'Novosibirsk', year: '2019-2023', link: '/adventures/novosibirsk', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
    {pos: '5', flag: '🇷🇺', name: 'Orenburg', year: '2008-2019', link: '/adventures/orenburg', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
    {pos: '6', flag: '🇰🇿', name: 'Astana', year: '?', link: 'https://en.wikipedia.org/wiki/Astana', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
];   

export const countriesArr = [
    {pos: '1', flag: '🇷🇺', name: 'Russia', year: '2008-2024', link: '', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
    {pos: '2', flag: '🇬🇪', name: 'Georgia', year: '2023', link: '', info: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"},
]; 


export const mapData = {
  	AF: 0,
	AX: 0,
	AL: 0,
	DZ: 0,
	AS: 0,
	AD: 0,
	AO: 0,
	AI: 0,
	AQ: 0,
	AG: 0,
	AR: 0,
	AM: 0,
	AW: 0,
	AU: 0,
	AT: 0,
	AZ: 0,
	BS: 0,
	BH: 0,
	BD: 0,
	BB: 0,
	BY: 0,
	BE: 0,
	BZ: 0,
	BJ: 0,
	BM: 0,
	BT: 0,
	BO: 0,
	BQ: 0,
	BA: 0,
	BW: 0,
	BV: 0,
	BR: 0,
	IO: 0,
	BN: 0,
	BG: 0,
	BF: 0,
	BI: 0,
	CV: 0,
	KH: 0,
	CM: 0,
	CA: 0,
	KY: 0,
	CF: 0,
	TD: 0,
	CL: 0,
	CN: 0,
	CX: 0,
	CC: 0,
	CO: 0,
	KM: 0,
	CG: 0,
	CD: 0,
	CK: 0,
	CR: 0,
	CI: 0,
	HR: 0,
	CU: 0,
	CW: 0,
	CY: 0,
	CZ: 0,
	DK: 0,
	DJ: 0,
	DM: 0,
	DO: 0,
	EC: 0,
	EG: 0,
	SV: 0,
	GQ: 0,
	ER: 0,
	EE: 0,
	ET: 0,
	FK: 0,
	FO: 0,
	FJ: 0,
	FI: 0,
	FR: 0,
	GF: 0,
	PF: 0,
	TF: 0,
	GA: 0,
	GM: 0,
	GE: 1,
	DE: 0,
	GH: 0,
	GI: 0,
	GR: 0,
	GL: 0,
	GD: 0,
	GP: 0,
	GU: 0,
	GT: 0,
	GG: 0,
	GN: 0,
	GW: 0,
	GY: 0,
	HT: 0,
	HM: 0,
	VA: 0,
	HN: 0,
	HK: 0,
	HU: 0,
	IS: 0,
	IN: 0,
	ID: 0,
	IR: 0,
	IQ: 0,
	IE: 0,
	IM: 0,
	IL: 0,
	IT: 0,
	JM: 0,
	JP: 0,
	JE: 0,
	JO: 0,
	KZ: 1,
	KE: 0,
	KI: 0,
	KP: 0,
	KR: 0,
	KW: 0,
	KG: 1,
	LA: 0,
	LV: 0,
	LB: 0,
	LS: 0,
	LR: 0,
	LY: 0,
	LI: 0,
	LT: 0,
	LU: 0,
	MO: 0,
	MK: 0,
	MG: 0,
	MW: 0,
	MY: 0,
	MV: 0,
	ML: 0,
	MT: 0,
	MH: 0,
	MQ: 0,
	MR: 0,
	MU: 0,
	YT: 0,
	MX: 0,
	FM: 0,
	MD: 0,
	MC: 0,
	MN: 0,
	ME: 0,
	MS: 0,
	MA: 0,
	MZ: 0,
	MM: 0,
	NA: 0,
	NR: 0,
	NP: 0,
	NL: 0,
	NC: 0,
	NZ: 0,
	NI: 0,
	NE: 0,
	NG: 0,
	NU: 0,
	NF: 0,
	MP: 0,
	NO: 0,
	OM: 0,
	PK: 0,
	PW: 0,
	PS: 0,
	PA: 0,
	PG: 0,
	PY: 0,
	PE: 0,
	PH: 0,
	PN: 0,
	PL: 0,
	PT: 0,
	PR: 0,
	QA: 0,
	RE: 0,
	RO: 0,
	RU: 1,
	RW: 0,
	BL: 0,
	SH: 0,
	KN: 0,
	LC: 0,
	MF: 0,
	PM: 0,
	VC: 0,
	WS: 0,
	SM: 0,
	ST: 0,
	SA: 0,
	SN: 0,
	RS: 0,
	SC: 0,
	SL: 0,
	SG: 0,
	SX: 0,
	SK: 0,
	SI: 0,
	SB: 0,
	SO: 0,
	ZA: 0,
	GS: 0,
	SS: 0,
	ES: 0,
	LK: 0,
	SD: 0,
	SR: 0,
	SJ: 0,
	SZ: 0,
	SE: 0,
	CH: 0,
	SY: 0,
	TW: 0,
	TJ: 0,
	TZ: 0,
	TH: 0,
	TL: 0,
	TG: 0,
	TK: 0,
	TO: 0,
	TT: 0,
	TN: 0,
	TR: 1,
	TM: 0,
	TC: 0,
	TV: 0,
	UG: 0,
	UA: 0,
	AE: 0,
	GB: 0,
	US: 0,
	UM: 0,
	UY: 0,
	UZ: 0,
	VU: 0,
	VE: 0,
	VN: 0,
	VG: 0,
	VI: 0,
	WF: 0,
	EH: 0,
	YE: 0,
	ZM: 0,
	ZW: 0,
};



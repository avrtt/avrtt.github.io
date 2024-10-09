import { getProjects, getProjectsRu } from "../../utils/freelance"
import github from "../../images/freelance/githubLogo.svg";
import kwork from "../../images/freelance/kworkLogo.svg";
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
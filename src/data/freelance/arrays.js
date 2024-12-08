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
	{icon: PA, 
		title: "Modular Python software", // 1
		titleRu: "Модульные Python-приложения",
		text: "Build or debug modular Python software (complex console apps, desktop GUIs, enterprise tools)",
		textRu: "Создать или отладить модульный софт на Python (сложные консольные программы, десктопные приложения, бизнес-инструменты)"},
	{icon: DC, 
		title: "Web scraping", // 2
		titleRu: "Веб-скрапинг",
		text: "Collect any kind of data using web scraping techniques",
		textRu: "Собрать данные любого формата с использованием инструментов веб-скрапинга"},
	{icon: DA, 
		title: "Data processing", // 3
		titleRu: "Обработка данных",
		text: "Perform data processing (cleaning, transforming, annotation/labeling, reduction, validation)",
		textRu: "Обработать данные (очистка, трансформирование, разметка, уменьшение размерности, валидация)"}, 
	{icon: DV, 
		title: "Data visualization", // 4
		titleRu: "Визуализация данных",
		text: "Create a clear and eye-catching visualization for any kind of data",
		textRu: "Создать наглядную и цепляющую визуализацию на основе любых данных"}, 
	{icon: DA, 
		title: "Exploratory data analysis", // 5
		titleRu: "Разведывательный анализ данных",
		text: "Conduct exploratory data analysis",
		textRu: "Провести разведывательный анализ данных"},
	{icon: ML, 
		title: "Fine-tuning", // 6
		titleRu: "Тонкая настройка нейросетей",
		text: "Fine-tune a deep learning model",
		textRu: "Настроить и оптимизировать модель глубокого обучения"},
	{icon: WD, 
		title: "Frontend", // 7
		titleRu: "Фронтенд",
		text: "Build a frontend for a web app (React)",
		textRu: "Написать фронтенд веб-приложения (React)"}, 
	{icon: WD, 
		title: "Static websites", // 8
		titleRu: "Статические сайты",
		text: "Design and build a static website, such as a blog, portfolio or landing page (Next.js/Gatsby/Jekyll, CMS)",
		textRu: "Спроектировать и создать статический сайт, например блог, страницу портфолио или лендинг (Next.js/Gatsby/Jekyll, CMS)"}, 
	{icon: PA, 
		title: "Bots", // 9
		titleRu: "Боты",
		text: "Create a bot for your website or popular platforms (Telegram, Instagram, Discord), optionally including chatbot functionality with LLM integration",
		textRu: "Создать бота для сайта или популярных платформ (Telegram, Instagram, Discord) с возможностью применения функционала чат-ботов (интеграция больших языковых моделей)"}, 
	{icon: PA, 
		title: "Data collection software", // 10
		titleRu: "Приложения для сбора данных",
		text: "Create custom data collection software (scraper, parser, web crawler)",
		textRu: "Создать инструмент сбора данных (скрапер, парсер, веб-краулер)"}, 
	{icon: RE, 
		title: "Hypothesis testing", // 11
		titleRu: "Проверка гипотез",
		text: "Conduct hypothesis testing, including A/B testing",
		textRu: "Провести проверку гипотезы, включая A/B-тестирование"}, 
	{icon: DA, 
		title: "Dashboards", // 12
		titleRu: "Дашборды",
		text: "Create a dashboard to display metrics based on data (Dash/Plotly, Superset, Grafana, Tableau, Google Sheets & Looker Studio, Excel)",
		textRu: "Разработать дашборд для отображения метрик по данным (Dash/Plotly, Superset, Grafana, Tableau, Google Sheets & Looker Studio, Excel)"},
	{icon: TW, 
		title: "Technical writing", // 13
		titleRu: "Техрайтинг",
		text: "Write SEO-optimized technical content related to Data Science: articles, tutorials, product documentations or blog posts",
		textRu: "Написать SEO-оптимизированный технический текст, относящийся к науке о данных: статьи, уроки, документация, посты"},
	{icon: PA, 
		title: "Scripting", // 14
		titleRu: "Скриптинг",
		text: "Automate workflows using scripting (Python, Shell)",
		textRu: "Автоматизировать рабочие процессы с использованием скриптов (Python, Shell)"}, 
	{icon: WD, 
		title: "Streamlit apps", // 15
		titleRu: "Приложения Streamlit",
		text: "Adapt and deploy a Python app to Streamlit",
		textRu: "Адаптировать и задеплоить Python-приложение на Streamlit"}, 
	{icon: MI, 
		title: "Academic help", // 16
		titleRu: "Академическая помощь",
		text: "Help with homework, coursework or thesis: coding projects (Python, SQL, JavaScript, TypeScript), Linux, probability theory & statistics, research",
		textRu: "Помочь с учебными задачами, курсовой или дипломом: задачи по программированию (Python, SQL, JavaScript, TypeScript), Linux, теория вероятностей и математическая статистика, исследования"} 
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
    - PDF extraction (OCR), обработка/оцифровка документов
	- Индексация цен (определение и корректировка цен)
*/
 
export const categories = [
	{categoryKey: 'machine_learning', 
		categoryName: 'Machine learning', 
		categoryNameRu: 'Машинное обучение', 
		categoryDesc: 'Building artificial intelligence models for businesses and individuals', 
		categoryDescRu: 'Создание моделей искусственного интеллекта для бизнеса и частных лиц',
		categoryDescDetailed: "Using [machine learning](https://en.wikipedia.org/wiki/Machine_learning), I can help you to solve a wide range of problems related to transforming data into useful information by automating decisions and predicting outcomes, giving you a competitive edge. Whether you represent a company or just working on a standalone project, I can implement, update or maintain (ongoing or ad-hoc) statistical algorithms, neural network models or ML pipelines for classification, regression, clustering, dimensionality reduction, anomaly detection and other (mixed) problems.", 
		categoryDescDetailedRu: 'Используя [машинное обучение](https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5), я могу помочь в решении широкого спектра задач, связанных с преобразованием данных в полезную информацию путем автоматизации принятия решений и прогнозирования результатов, что обеспечит вам конкурентное преимущество. Независимо от того, представляете ли вы компанию или просто работаете над независимым проектом, я могу внедрить, обновить или поддерживать (на постоянной или разовой основе) статистические алгоритмы, модели нейронных сетей или ML-пайплайны для классификации, регрессии, кластеризации, уменьшения размерности, обнаружения аномалий и других (смешанных) задач.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'machine_learning').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'machine_learning').length), 
		img: ML
	},
	{categoryKey: 'data_analysis', 
		categoryName: 'Data analysis', 
		categoryNameRu: 'Анализ данных', 
		categoryDesc: 'Inspecting, cleansing, transforming and modeling data with the goal of discovering useful information, informing conclusions and supporting decision-making', 
		categoryDescRu: 'Изучение, очистка, преобразование и моделирование данных с целью обнаружения полезной информации, обоснования выводов и поддержки принятия решений',
		categoryDescDetailed: 'With data analysis skills, I can help you to understand and use data in a way that makes sense. This includes data mining, data wrangling, big data processing, exploratory data analysis (EDA), business analytics, decision-making consulting and other ad hoc data-related tasks.', 
		categoryDescDetailedRu: 'Имея навыки анализа данных, я могу помочь понять и использовать данные таким образом, чтобы в этом был смысл. В частности, это касается интеллектуального анализа данных (data mining), подготовки данных (data wrangling), работы с большими данными, разведывательного анализа данных (EDA), бизнес-аналитики, консультирования по принятию решений и других ad hoc задач, связанных с данными.', 
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'data_analysis').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'data_analysis').length), 
		img: DA
	},
	{categoryKey: 'data_visualization', 
		categoryName: 'Data visualization', 
		categoryNameRu: 'Визуализация данных', 
		categoryDesc: 'Helping non-data professionals grasp any data by creating easy-to-understand graphical or visual representations, dashboards and other kinds of reports', 
		categoryDescRu: 'Помощь нетехническим специалистам в извлечении информации из любых данных путем создания удобных для восприятия визуализаций, дашбордов и других инструментов отчетности', 
		categoryDescDetailed: 'I specialize in transforming complex datasets into intuitive and visually appealing representations, making it easier for non-data professionals to understand and act on insights. This includes creating interactive dashboards, charts, graphs, infographics and comprehensive reports.', 
		categoryDescDetailedRu: 'Я специализируюсь на преобразовании сложных наборов данных в интуитивно понятные и визуально привлекательные представления, что упрощает их понимание и использование для принятия решений. Это включает создание интерактивных дашбордов, диаграмм, графиков, инфографики и подробных отчетов.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'data_visualization').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'data_visualization').length), 
		img: DV
	},
	{categoryKey: 'data_collection', 
		categoryName: 'Data collection', 
		categoryNameRu: 'Сбор данных', 
		categoryDesc: 'Extending company databases with external data for making better business decisions, or creating separate datasets for any needs from any open sources using different scraping techniques, SQL and data annotation/labeling', 
		categoryDescRu: 'Расширение баз данных компании внешними данными для принятия более эффективных бизнес-решений или создание отдельных наборов данных для любых нужд из любых открытых источников с использованием различных методов скрапинга, SQL и разметки данных', 
		categoryDescDetailed: "Data is essential for training machine learning models, and more quality data tends to improve performance metrics, allowing you to solve business problems better. I can collect and label any open source data using a variety of scraping techniques, handling APIs and databases along the way. This can include data on social media platforms, product reviews, market trends you can use to understand public demand, etc.", 
		categoryDescDetailedRu: 'Данные необходимы для обучения моделей машинного обучения, и более качественные данные, как правило, улучшают метрики, позволяя решать бизнес-задачи более эффективно. Я готов собрать и разметить любые данные из открытых источников, используя различные техники скрапинга, взаимодействуя, если необходимо, с API или базами данных. Среди них могут быть данные из социальных сетей, отзывы о продуктах, рыночные тенденции для понимания общественного спроса, и т.д.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'data_collection').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'data_collection').length), 
		img: DC
	},
	{categoryKey: 'python_apps', 
		categoryName: 'Python apps', 
		categoryNameRu: 'Приложения на Python', 
		categoryDesc: 'Designing, building, debugging and maintaining Python software: automating routine tasks using scripting, optimizing workflows and business processes, making bots, web crawlers, desktop apps, etc.', 
		categoryDescRu: 'Проектирование, разработка, отладка и сопровождение программного обеспечения на Python: автоматизация рутинных задач с помощью скриптов, оптимизация рабочих потоков и бизнес-процессов, создание ботов, веб-краулеров, десктопных приложений и т.д.', 
		categoryDescDetailed: "I'm an expert programmer in Python. I've been developing apps before I got into Data Science — for various personal needs. My expertise includes creating apps to automate routine tasks, optimize workflows and develop custom tools for unique requirements: from building bots and web crawlers to complex desktop applications.", 
		categoryDescDetailedRu: 'Я опытный программист на Python. Я занимался разработкой приложений еще до того, как пришел в Data Science, - для различных персональных целей. Мой опыт включает создание приложений для автоматизации рутинных задач, оптимизации рабочих процессов и разработки пользовательских инструментов для уникальных требований: от создания ботов и веб-краулеров до комплексных десктопных приложений.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'python_apps').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'python_apps').length), 
		img: PA
	},
	{categoryKey: 'web_development', 
		categoryName: 'Web development', 
		categoryNameRu: 'Веб-разработка', 
		categoryDesc: 'Designing and building web applications such as web interfaces, landing pages and complex websites', 
		categoryDescRu: 'Проектирование и разработка веб-приложений, таких как веб-интерфейсы, лендинговые страницы и комплексные сайты', 
		categoryDescDetailed: 'I offer some web development services, including designing and building landing pages, interfaces or multi-page websites. I mainly specialize in frontend.', 
		categoryDescDetailedRu: 'Я предлагаю некоторые услуги по веб-разработке, включая проектирование и создание лендинговых страниц, интерфейсов или многостраничных сайтов. Главным образом я специализируюсь на фронтенде.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'web_development').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'web_development').length),  
		img: WD
	},
	{categoryKey: 'research', 
		categoryName: 'Research', 
		categoryNameRu: 'Исследования', 
		categoryDesc: 'Statistical analysis and experiments, hypothesis testing, non-standard applications of data analysis or any kind of scientific investigation', 
		categoryDescRu: 'Статистический анализ и эксперименты, проверка гипотез, нестандартные приложения анализа данных или любые виды научных исследований', 
		categoryDescDetailed: 'Research is a pretty broad term, and therefore this category of projects is quite heterogeneous. I define research as various statistical experiments that go beyond data analysis (hypothesis testing including A/B testing, experimental design, conducting surveys & customer research, descriptive statistics), as well as non-standard applications of analysis (like OSINT) and direct investigation for further integration (as R&D engineers do), e.g. ML papers research as part of business strategy consulting.', 
		categoryDescDetailedRu: 'Исследования — широкий термин, а потому данная категория проектов довольно разнородна. Я понимаю под исследованием различные статистические эксперименты, выходящие за рамки анализа данных (проверка гипотез и A/B-тестирование, планирование эксперимента, проведение опросов и изучение клиентов, описательная статистика), а также нестандартные приложения анализа (например, разведка по открытым источникам) и непосредственное изучение информации для дальнейшего внедрения (как это делают R&D инженеры), например изучение ML-документации как часть бизнес-консалтинга.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'math_and_research').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'math_and_research').length), 
		img: RE
	},
	{categoryKey: 'technical_writing', 
		categoryName: 'Technical writing', 
		categoryNameRu: 'Техрайтинг', 
		categoryDesc: 'Writing articles, tutorials, blog posts and papers on subjects related to my specialization', 
		categoryDescRu: 'Написание статей, учебных материалов, постов для блогов и докладов по темам, связанным с моей специализацией', 
		categoryDescDetailed: "You may need technical writing when you create blog articles, educational courses, tutorials on a certain subject and other texts that require profound expertise in the topic. Using state-of-the-art LLMs and proper prompt engineering, I can write any kind of texts within a short period of deadline, complementing and validating them due to my knowledge in Data Science and related areas.", 
		categoryDescDetailedRu: 'Вам может понадобиться технический писатель при создании статьи для блога, образовательного курса, учебника по определенной тематике и других текстов, требующих глубоких знаний по теме. Используя языковые модели и грамотный промпт-инжиниринг, я готов написать любые тексты в короткие сроки, дополнив и проверив их благодаря знаниям в Data Science и смежных областях.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'technical_writing').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'technical_writing').length), 
		img: TW
	},
	{categoryKey: 'post_production', 
		categoryName: 'Post-production', 
		categoryNameRu: 'Постпродакшн', 
		categoryDesc: 'Video/music processing as part of my hobby, including editing, SFX, AI-driven design, AI-generated visual content, animations, sound engineering, etc.', 
		categoryDescRu: 'Обработка видео/музыки как часть моего хобби: монтаж, SFX, ИИ-дизайн, создание анимаций, звукорежиссура и т.д.', 
		categoryDescDetailed: 'Post-production is where raw content becomes polished and impactful. I offer extra services that include advanced editing, special effects (SFX), AI-driven visual design and creating animations. I also do some sound engineering and compose/mix electronic music.', 
		categoryDescDetailedRu: 'Постпродакшн превращает сырой (видео/аудио)контент в завершённый вид. Я предлагаю дополнительные услуги, которые включают в себя продвинутый монтаж, спецэффекты (SFX), визуальный дизайн на основе искусственного интеллекта и создание анимаций. Я также знаком с некоторыми аспектами звукорежиссуры и сочиняю/микширую электронную музыку.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'post_production').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'post_production').length), 
		img: PP
	},
	{categoryKey: 'misc', 
		categoryName: 'Misc projects', 
		categoryNameRu: 'Прочие проекты', 
		categoryDesc: 'Diverse projects related to Linux, system configuration, DevOps, databases, reverse engineering, computer modeling, etc.', 
		categoryDescRu: 'Разнообразные проекты, связанные с Linux, настройкой систем, DevOps, базами данных, реверс-инжинирингом, компьютерным моделированием и т.д.', 
		categoryDescDetailed: "This list simply contains all projects that don't fit into other categories.", 
		categoryDescDetailedRu: 'Этот список просто содержит все проекты, которые не попали в другие категории.',
		numProjects: getProjects(projects.filter(item => item.categoryKey === 'misc').length), 
		numProjectsRu: getProjectsRu(projects.filter(item => item.categoryKey === 'misc').length), 
		img: MI
	},
];

// get id of the last element from projects array and round it (0, 10, 20, so on)
export const projectsCount = Math.floor(projects[projects.length - 1].id / 10) * 10;
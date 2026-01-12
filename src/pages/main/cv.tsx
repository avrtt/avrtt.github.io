/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import { cvLastUpdated } from '../../data/lastUpdated';
import { Link } from 'gatsby';
import Stack from'../../components/Stack'
import Courses from'../../components/Courses';
import CvPosition from'../../components/CvPosition'
import CvPositionFirst from'../../components/CvPositionFirst'

const downloadStyle = {
	"font-size": "1.4rem",
	"text-align": "center",
	"margin-bottom": "3.4rem"
} 

const downloadDescStyle = {
	"font-size": "1.4rem",
	"margin-top": "-12px"
} 

const CV = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<div className="cvBody">
	
			<span className="mobileOnlySupport"><br/></span>
			<div className="noselect" style={downloadStyle}><a href="https://github.com/avrtt/avrtt.github.io/blob/main/src/documents/cv.pdf">Download</a> <br/> <div className={"desktopOnlySupport"} style={downloadDescStyle}>(compact version)</div></div>

			<p>I'm a <b>Middle Data Scientist</b> with experience in ML engineering, Python programming and analytics. I specialize in designing/implementing/refining/deploying ML systems, data-related problems (collection, processing, transforming, modeling, visualization, analysis, interpreting), and developing various automation software.</p>
			<p>This page provides a more detailed description of my professional skills, as opposed to the minimal version of the CV provided in the link above. For my freelance services and projects, check out the <Link to="/freelance">Freelance</Link> page.</p>

			<div className="sectionBreak"><M text="----------"/></div>
			<M text="# 👨🏻‍💻 WORK EXPERIENCE "/>
			<CvPosition 
				positionName={"Machine Learning Engineer (LLMs & multimodal learning)"} 
				companyName={"NPmatic GmbH"} 
				companyLink={"https://labs.npmatic.de/"}
				emoji={"🤖"} 
				expTime={"Jul 2025 — Nov 2025"} 
				expLocation={"Berlin, Germany (remote)"} 
				expDesc={"Designed and delivered production-ready components that combined modern LLM engineering with multimodal learning for a Russian-speaking fintech & enterprise analytics startup team based in the EU; moving from Data Scientist responsibilities toward ML Engineering (model adaptation, inference optimization, MLOps). NPmatic focuses on B2B, building LLM systems for reasoning, retrieval, large-scale data analysis and business process automation."}
				point1={"- Designed and implemented hybrid LLM + multimodal architectures (text + vision/audio encoders as perception frontends) to enable structured reasoning and grounded generation in product features, mostly for analyzing complicated reports & live presentations in order to provide automated question answering. Integrated CLIP into production pipelines."}
				point2={"- Built E2E RAG pipelines for corporate analytics: data ingestion workflows, chunking, embeddings generation, tuning & indexing into a vector store, vector search (OpenSearch), and reranking with cross-encoders & cache layers for low-latency contextual vector retrieval with fast access. Implemented hybrid retrieval strategies (vector + keyword) using OpenSearch and FAISS to balance recall and precision. Passed the extracted relevant passages to an LLM module in order to integrate the pipeline with LLM inference for factual grounding and tool-calling, enabling faster document summarization."}
				point3={"- Fine-tuned some LLMs & multimodal backbones to project-specific needs using PEFT approaches (LoRA/QLoRA), synthetic instruction and data augmentation, adapting them to financial domain while keeping training cost practical, which basically reduced hallucinations. Applied knowledge distillation to obtain smaller models for cost-efficient inference and reduced dependency on closed APIs."}
				point4={"- Implemented latency- and cost-reduction techniques for model inference optimization in production: request batching & shaping, operator fusion, dynamic truncation of long inputs and weight quantization improving throughput and Time-to-First-Token, which reduced memory footprint, per-request cost and accelerated response generation with minimal quality degradation, so we met strict enterprise latency SLAs. Applied INT8/INT4 quantization and optimized GPU utilization for cloud-based inference."}
				point5={"- Implemented model serving and MLOps practices for rapid response to data shifts and safe model updates without downtime: deployed containerized services and established CI/CD pipelines for automated delivery of model and data updates; implemented model versioning and quality monitoring (drift detectors, regression tests, metrics using LLM-as-judge, offline benchmarks) for stable production behavior and fast iteration. Monitored token usage, latency, failure modes and quality drift in production."}
				point6={"- Deployed models and services as scalable microservices on cloud infrastructure (Docker + Kubernetes, AWS), defined API contracts for frontend/backend integration and participated in PoC > MVP cycles: building APIs, demoing prototypes to clients and integrating feedback iteratively (so we accelerated feature delivery)."}
				pointLast={"- Developed reusable components that combined LLM reasoning with vision/audio modules. These components were reused across multiple product features and halved the development time for new scenarios. In particular, applying this solution shortened prototyping cycles, improved contextual accuracy in target features and sped up generation of analytic reports from corporate data (tasks that previously took hours or days now completed in minutes). Integrated agentic workflows (tool-calling, function execution, planners) using LlamaIndex–style abstractions with custom orchestration logic for multi-step reasoning tasks."}
			/>
			<CvPosition 
				positionName={"Data Scientist, ML Engineer & Python Developer"} 
				companyName={"Freelance"} 
				companyLink={"/freelance"}
				emoji={"🥥"} 
				expTime={"Jun 2024 — Nov 2025"} 
				expLocation={"Various places"} 
				expDesc={"Long-term full-time freelancing & seeking for a Middle ML Engineer position."}
				point1={"- Designed/implemented/refined/deployed ML systems."}
				point2={"- Handled data-related problems: collection, processing, transforming, modeling, visualization, analysis, etc."}
				pointLast={"- Developed various automation software."}
			/>
			<CvPosition 
				positionName={"Middle Data Analyst"} 
				companyName={"Remokate"} 
				companyLink={"https://remokate.com/eng"} 
				emoji={"✈️"} 
				expTime={"Jul 2023 — May 2024"} 
				expLocation={"Tbilisi, Georgia (remote)"} 
				expDesc={"Worked on solutions that impacted product and business outcomes for clients in fintech, retail, SaaS and large-scale product companies. Remokate is a recruitment agency that connects top IT talent with leading companies in Russia and abroad, including startups, large corporations and international relocation opportunities."}
				point1={"- Designed, monitored and interpreted key business and product metrics to identify growth opportunities and bottlenecks across customer funnels."}
				point2={"- Wrote and optimized complex SQL queries for large datasets, improving data processing speed and accuracy."}
				point3={"- Built and maintained interactive dashboards in BI tools (DataLens, Tableau), enabling stakeholders to track KPIs, detect anomalies and make data-informed decisions."}
				point4={"- Conducted hypothesis testing and A/B experiments to validate product changes and measure their impact on core metrics."}
				pointLast={"- Performed cohort, funnel and factor analysis to understand user behavior, retention and conversion trends."}
			/>
			<CvPositionFirst 
				positionName={"Python Developer & Data Analyst"} 
				emoji={"🌱"} 
				expTime={"Dec 2021 — Jul 2023"} 
				expLocation={"Russia (remote)"} 
				expDesc={"Various occasional short-term remote jobs and freelance gigs to get some experience (mostly [freelance.habr.com](https://freelance.habr.com/))."}
				point1={"- Built Python software: automation scripts, web scrapers and Telegram bots."}
				point2={"- Gathered data and performed data processing."}
				point3={"- Managed PostgreSQL databases for collected data."}
				point4={"- Implemented simple data pipelines."}
				pointLast={"- Designed and developed KPI dashboards and other analytical tools."}
			/>
			<CvPositionFirst 
				positionName={"Web Developer"} 
				emoji={"🐣"} 
				expTime={"Nov 2019 — Dec 2021"} 
				expLocation={"Russia (remote)"} 
				expDesc={"Freelance gigs on [freelance.habr.com](https://freelance.habr.com/) outside of university classes."} 
				point1={"- Designed landing pages, blogs and promotional web pages."}
				pointLast={"- Implemented frontend using React."}
			/>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 🛠️ TECHNICAL SKILLS "/>
			<M text="My key skills:"/>
			<M text="
			🏗️ Software engineering: building, debugging, testing, deploying<br/>
			🤹‍♂️ Data wrangling: collecting, processing, transforming<br/>
			🔍︎ Data analysis: statistical inference & visualization<br/>
			🤖 Traditional ML algorithms for supervised & unsupervised learning<br/>
			🧠 Deep leaning: designing, implementing, fine-tuning models<br/>
			☁️ Cloud infrastructure & big data processing<br/>
			🛢 Databases<br/>
			"/>
			<M text="Technologies and tools I use (clickable):"/>       
			<Stack />
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 🎓 EDUCATION"/>
			<M text="### Academic"/>
			<M text='
			🎓 B.S. in **Applied Mathematics & Computer Science** @ Novosibirsk State Technical University, Novosibirsk; major: "Computer Modeling and Information Technologies" (2019-2023), minor: "Statistics and Data Analysis" (2022-2023)<br/>
			📜 Thesis topic: "Research of state-of-the-art neural network architectures for scene text recognition problems" ([paper](https://github.com/avrtt/MobileEAST/blob/main/thesis.pdf)); research supervisor: [Popov A.A.](https://ciu.nstu.ru/kaf/persons/856/)
			'/>
			<M text="### Courses"/>
			<br/><br/>
			<Courses/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 💡 PROJECTS "/>
			<M text="My projects are organized into category pages:"/>
			<div className="listHome"> 
			<p>
			🤖 <Link to="/freelance/projects/machine_learning">Machine learning</Link><br/>
			🔎 <Link to="/freelance/projects/data_analysis">Data analysis</Link><br/>
			📊 <Link to="/freelance/projects/data_visualization">Data visualization</Link><br/>
			⛏️ <Link to="/freelance/projects/data_collection">Data collection</Link><br/>
			⚙️ <Link to="/freelance/projects/python_apps">Python apps</Link><br/>
			📝 <Link to="/freelance/projects/technical_writing">Technical writing</Link><br/>
			🌐 <Link to="/freelance/projects/web_development">Web development</Link><br/>
			📎 <Link to="/freelance/projects/misc">Misc</Link>
			</p>
			</div> 
			<M text="I've also contributed to many other open-source and closed-source projects. In addition, I've tackled several competitive Kaggle projects and [have](https://www.kaggle.com/lenferdetroud) the Kaggle Expert rank."/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 📝 PUBLICATIONS"/>
			<M text="### Blog articles"/>
			<M text="The most compelling blog posts will be featured here soon."/>
			<M text="### Courses"/>
			<p>I'm currently actively building & maintaining a <Link to="/course">free DS/ML course</Link> along with several paid mini-courses.</p>
			<M text="### Academic research"/>
			<M text="MobileEAST: a lightweight & fast scene text detection based on EAST architecture and MobileNet layers ([repository](https://github.com/avrtt/MobileEAST), 2023) "/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 🤝 SOFT SKILLS "/>
			<M text="My main strengths lie in analytical thinking (i.e. I love to do research and analyze everything) and strategizing. As a traveler, I'm adaptable and flexible. I used to work with a flexible schedule, so I can self-organize myself easily. Moreover, I'm curious, goal-oriented and thoughtful about project details: I learn new things easily and know how to search for information. I'm also good at explaining complex things in simple words."/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 😎 PERSONAL "/>
			<M text="
			💪 I'm actively [contributing](https://github.com/avrtt) to open-source community <br/>
			🔒 I'm a cryptography & privacy enthusiast <br/>
			🐧 I'm a long-time Linux user <br/>
			🗄️ I'm slowly moving towards complete self-hosting of all my data and apps <br/>
			⚖️ I'm trying hard to build a career in both full-time and freelance work in order to achieve a balance between flexibility and professional growth <br/>
			💬 I'm fluent in English (B2+) and Russian (native) <br/>
			"/>
			</AnimationOnScroll>


			<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true"><div className="sectionBreak"><M text="----------"/></div>
			<M text="# 🔗 LINKS "/>
			<M text='### Related profiles'/>
			<div className="listHome"> 
			<M text='
			▶️ [YouTube](https://www.youtube.com/channel/UCpPtaqqxzFqm9rZAh2xC5OA)<br/>
			📚 [Telegram (tech blog)](https://t.me/avheuristics)<br/>
			🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)<br/>
			🧩 [LeetCode](https://leetcode.com/avrtt/)<br/>
			⚙️ [GitHub](https://github.com/avrtt)<br/>
			🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)<br/>
			🌟 [Upwork](https://www.upwork.com/freelancers/~019b5459361c20c528)<br/>
			⭐ [Fiverr](https://www.fiverr.com/vladaverett)<br/>
			✨ [Kwork](https://kwork.ru/user/avrtt)<br/>
			✨ [Habr Freelance](https://freelance.habr.com/freelancers/avrtt)
			'/>
			</div>       
			<M text='### Contact me'/>
			<div className="listHome"> 
			<M text='
			📲 Telegram (fastest way): **[@averett](https://t.me/averett)**<br/>
			📩 Email: **[avrtt@tuta.io](mailto:avrtt@tuta.io)**<br/>
			💼 LinkedIn: **[@avrtt](https://www.linkedin.com/in/avrtt/)**
			'/>     
			</div> 
			</AnimationOnScroll>
	
		</div>
		<div className="lastUpdatedCv">UPDATED ON {cvLastUpdated}</div>
    </motion.div>
  );
};
  
export default CV;

export const Head = () => (
  <SEO 
    title="CV - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl="https://avrtt.github.io/cv"
    schemaType="WebPage"
    
  />
)
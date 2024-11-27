import { projectsCount } from '../../data/freelance/arrays'
import { currentZoneUTC } from '../../data/freelance/variables';
import { freelanceExperienceString, strUTCOffset, startHoursUTC, endHoursUTC } from "../../utils/freelance"

export const textMain = {
	general: {
        intro: {
            en: "I'm a full-time freelancer primarily focused on data science, offering both regular and one-off services, including project-based work, system maintenance, consulting and teaching. Being in the field since 2020, I have more than <strong>" + freelanceExperienceString + " of freelancing</strong> experience in total, with more than <strong>" + projectsCount + " completed projects</strong> (listed below), as well as other various successful deals. My main areas of expertise are machine learning, data analysis, data collection, statistics, visualization and Python software, but I'm also competent in web development, video/music post-production and prompt engineering.",
        },
        spoiler: {
            title: {
                en: "Compact list: Services I offer",
            },
            extraDesc: {
                en: "This list includes services that I *prefer* to do right now. It's not exhaustive, and we may have a deal on things that goes beyond it.",
            },
        },
        servicesRedirect: {
            en: "If you need examples and more details, you can go straight to the [page of services](/freelance/services), which describes each type of job in the list above, step-by-step.",
        },
        contactMe: {
            en: "Found a related problem? Feel free to contact me, I'll answer any questions you may have. You can reach out directly or choose one of the freelance platforms to make an offer:",
        },
        schedule: {
            en: "Working hours: <b>" + startHoursUTC + "–" + endHoursUTC + "</b> (" + strUTCOffset + "), Mon – Fri",
        },
        tooltip: {
            sameZone: {
                en: "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is the same as yours.",
            },
            diffZone: {
                en: "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is UTC" + currentZoneUTC + ".",
            },
        },
        outro: {
            en: "This page is designed for freelance clients and provides information regarding my freelance work. Please consider exploring it before contacting me for the first time. If you're HR, see the [CV](/cv) page instead.",
        },
	},
    projects: {
        heading: {
            en: "# 📌 PROJECTS",
        },
        intro: {
            en: "My projects are organized into category pages. Please click on the category you're interested in to explore a particular list:",
        },
    },
    workflow: {
        heading: {
            en: "# 🔀 THE WAY THINGS GET DONE",
        },
        section1: {
            heading: {
                en: "### 🚀 General prerequisites",
            },
            block1: {
                en: "Before contacting me, I recommend you to check the [Services](/freelance/services) page, determine what kind of job your request refers to and learn the specifics of the chosen service (get to know the methodology, tools, workflow and so on). This will help you to formulate your preferences better and thus help me to fulfill your requirements more precisely. Don't worry: we can also agree on a non-conventional approach to the problem — this is merely a helper page for setting the direction of our further interaction.",
            },
            block2: {
                en: "Once you're done, drop me a message using any convenient option from the ones listed above. Please, try to describe the subject of the problem in **one message**."
            },
            block3: {
                en: "I'll let you know about my decision within a few hours. It can be any of the following: **a)** we immediately proceed to discussing the task; **b)** I agree to discuss the task, but when I'll be free (with providing the approximate dates); **c)** I'm not available/willing to consider the task (I leave myself the right not to disclose the reasons, but as a rule these tasks are either too demanding, don't fit my competence, or are too simple against my current bigger projects)."
            },
            block4: {
                en: "The following step-by-step workflow explains how I interact with clients depending on the type and complexity of the problem, the tools available, and the client's preferences. It varies under certain conditions."
            },
        },
        section2: {
            heading: {
                en: "### ✍ Step 1: Discussion",
            },
            block1: {
                en: "Sometimes projects are quite complicated, so clear problem definition and thorough discussion with the customer is a must. The results of negotiations at this point will set the terms, deadline and price (preliminary or final). Typically, this is where an agreement is established: prior to prepayment, either party may reject the terms and quit the deal."
            },
            block2: {
                en: "**My task** is to estimate my capabilities, figure out deadlines and outline the work, and the **customer's task** is to describe the desired result in as much detail as possible. If the customer isn't a technical specialist, I'll help with interpreting. Well-written terms of reference prevent intermediate clarifications, but this isn't a necessity for ordinary level projects."
            },
            block3: {
                en: "For convenience, we can communicate by text or audio/video call. In practice, small projects are usually described by text, while the brainstorming of business ideas for development of technical project scope is done through 1:1 calls."
            },
        },
        section3: {
            heading: {
                en: "### 🧐 Step 2: Free expert review",
            },
            block1: {
                en: "Depending on the complexity and type of project, I offer a free expert review, immediately (during the discussion) or within a day. I analyze the technical complexity and data, selecting the best tools and strategies. I then provide full information on upcoming work costs, non-obvious steps and pitfalls, and, if adjustments are required, a **final price**. I consult the customer, giving a clear explanation of the best possible solutions, which aslo makes it easier to understand what I'll be doing during the job."
            },
        },
        section4: {
            heading: {
                en: "### 🤝 Step 3: Prepayment",
            },
            block1: {
                en: "I charge **50%** upfront when working with **new clients** and never take any other intermediate payments. Rarely, it may be more convenient to arrange a **hourly fee**: there is no upfront fee in this case, and new clients are charged at the end of each working day."
            },
            block2: {
                en: "Payment details are listed below on this page (see **Payment methods**), or they will be given in conversation. I will start working exactly **from the moment the prepayment is received**, and will keep the sum until the end of the project just in case it has to be returned."
            },
            block3: {
                en: "Keep in mind that this page describes paying without an intermediary. Platforms like Upwork guarantee safety, but they charge a commission, which will make the costs higher. If you're looking to overpay for a secure deal, then consider contacting me through freelance marketplaces."
            },
        },
        section5: {
            heading: {
                en: "### 📞 Step 4: Intermediate interaction",
            },
            block1: {
                en: "Optionally and exclusively for **long-term projects**, I provide intermediate calls or progress reports in any convenient form. The point here is to basically present the deliverable by milestones for subsequent adjustments based on the customer's preferences, and to clarify some details, which can lead to a slightly more accurate result and faster implementation. The effectiveness of such approach comes from an assumption: the increasing deliverable complexity causes increasing complexity of fixing existing components, and therefore customer validation, like product testing, should be done iteratively."
            },
            block2: {
                en: "It's possible to organize a private GitHub/GitLab repository for real-time version tracking."
            },
        },
        section6: {
            heading: {
                en: "### ✅ Step 5: Release, post-payment and feedback",
            },
            block1: {
                en: "When completed, a **full version** of the product will be delivered, then you make a post-payment. In some cases (usually with new clients) I offer a **demo version** before post-payment is made — this depends on the complexity and type of project. For **hourly rates** with loyal clients, 100% post-payment is formed after calculating the total number of hours worked."
            },
            block2: {
                en: "Like any freelancer, I value testimonials and therefore offer a **discount of 10% off post-payment** for your feedback and references after any gig."
            },
        },
        section7: {
            heading: {
                en: "### ⚙️ Step 6: Technical support",
            },
            block1: {
                en: "To keep my customers completely satisfied, I provide **free support** for the developed projects: 3 months for business and 1 month for individuals. This consists of consulting and basic troubleshooting. Sometimes simple debugging may also be free."
            },
        },
        section8: {
            heading: {
                en: "### 🍪 Let's cooperate further",
            },
            block1: {
                en: "I keep in touch with my former customers. You can always contact me if something needs to be improved. For me, relationships with customers and their satisfaction are important, because, in Data Science, it's *much* easier and faster to work with returning clients than to constantly look for new ones."
            },
            block2: {
                en: "To keep clients coming back, I offer some discounts. Loyal customers can expect **lower pricing** for services and **lower upfront fees**, up to 100% postpaid."
            },
        },
        faq: {
            title: {
                en: "Frequently asked questions",
            },
            q1: {
                en: "Are there any other payment options available besides the ones below?",
            },
            a1: {
                en: "No, this page contains all the possible, currently available payment methods.",
            },
            q2: {
                en: "I'd like to pay in cryptocurrency. Is that legal?",
            },
            a2: {
                en: "It depends. Some jurisdictions treat cryptocurrency as taxable assets, and some have banned transfers entirely. Although in practice the crypto exchange in these jurisdictions isn't prosecuted in any way, I'm not responsible for the consequences. Check your local laws first.",
            },
            q3: {
                en: "Do you offer a legal contract?",
            },
            a3: {
                en: "All the services described on this website are provided without signing a legal labor contract. If you're looking for guarantees of a fair deal in return for paying service fees, then consider contacting me via freelance marketplaces (see above).",
            },
            q4: {
                en: "How is copyright ownership transferred?",
            },
            a4: {
                en: `Since no labor contract is signed, there's no way to transfer copyright  ownership (at least in most jurisdictions). Formally, I remain the owner of all digital products (intellectual property) created as part of a verbal or written agreement with a customer without the use of an intermediary (except for works done through a GitHub/GitLab repository, see below). Practically, this shouldn't be a problem, since I don't intend to assert my authorship in any way, and authorize further use, modification and distribution of the product without attribution or any limitations, and even if I did, I wouldn't be able to prove authorship in the absence of a legal agreement. However, if such legal aspects matter to you, I recommend you to contact me through freelance marketplaces, as copyright issues are considered there (for instance, see Upwork's <a href="https://www.upwork.com/legal#optional-service-contract-terms">Optional Service Contract Terms</a>).`,
            },
            q5: {
                en: "How is software code licensed when working through a remote git repository?",
            },
            a5: {
                en: `In the case of working through popular git repository hosting sites operating under the U.S. law (e.g., GitHub and GitLab), the customer may create a repository, <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository">choose a license</a>, and then add me as a collaborator. This way, the software code implemented inside the repository will be distributed according to the terms specified in the license. Please note that according to the U.S. law <a href="https://choosealicense.com/no-permission/">no license</a> is equivalent to exclusive copyright only if a creative work has no other contributors.`,
            },
            q6: {
                en: `Is there any legal guarantee that the contractor won't apply <a href="https://docs.github.com/en/site-policy/content-removal-policies/dmca-takedown-policy">DMCA takedown notice</a> to remove a part of deliverable that was transferred to my use and publicly hosted as a git repository?`,
            },
            a6: {
                en: `If the source code was implemented inside a repository you've licensed, then yes. In this case, I can only distribute the content of the repository under the terms specified in the license. Moreover, in case of a DMCA policy violation, the repository owner has the right to submit a request to remove an unauthorized copy of the software code by referring to the aforementioned repository. Platforms such as GitHub actively assist in enforcing the terms of the DMCA (and even <a href="https://github.com/github/dmca">list such cases</a> publicly).`,
            },
            q7: {
                en: `Do you offer an <a href="https://en.wikipedia.org/wiki/Non-disclosure_agreement">NDA</a>?`,
            },
            a7: {
                en: "In some cases, if required by the customer.",
            },
            q8: {
                en: "What if the work isn't completed on time?",
            },
            a8: {
                en: "If the work is fully completed but not on time, I'll refund a portion of the cost depending on the specific situation.",
            },
            q9: {
                en: "What if I'm not satisfied with the result of the work done?",
            },
            a9: {
                en: "I'm always open to consider valid arguments in favor of the customer's rightness before they write a negative review. If the work doesn't match the terms of reference, then I'll refund the money, because reputation is more valuable when it comes to freelancing.",
            },
            q10: {
                en: "What languages and style can we use to communicate?",
            },
            a10: {
                en: "We can communicate in both formal and informal styles, the latter being more preferable for me. I'm proficient in English and Russian.",
            },
            q11: {
                en: "What jurisdiction is the contractor physically located in?",
            },
            a11: {
                en: "In a wide variety of different. ;)",
            },
            q12: {
                en: "I'm a business representative and I'm interested in long-term cooperation. Can I be sure that the contractor will comply with all applicable legislation?",
            },
            a12: {
                en: "No. I don't give any legal guarantees, regularly being located outside my country of citizenship (Russia), the international status of which only makes official work more difficult. My legal status is generally unclear. Consider me solely as an unofficial worker.",
            },
        },
    },
    testimonials: {
        
    },
    background: {
        heading: {
            en: "# 📚 BACKGROUND",
        },
        block1: {
            en: "I began by studying the field academically, but went into self-study once realized it's easier to learn with my *very custom* roadmap. I've even created [my own course](/course) along the way, using study notes.",
        },
        block2: {
            en: "A couple things on my background that are worth mentioning:",
        },
        block3: {
            en: `🎓 [B.S.](https://t.me/venturingforth/394) in **Applied Mathematics & Computer Science** (more info in [CV](/cv))<br/>
                💼 [~12 months](/cv) of *super boring* **non-freelance work** experience (a so-called *employment*)<br/>
                🤓 33 completed **courses**: 23 certified and 10+ non-certified (see the section below)<br/>
                💪 Actively [contributing](https://github.com/avrtt) to **open-source** community<br/>
                ✍️ Writing [blog posts](/research) about everything I **research** since 2022<br/>
                📢 Keeping tech-related **media platforms** beyond this blog (see links on the [Home](/) page)<br/>`,
        },
        block4: {
            en: "I've developed a *tremendous* amount of **Python programs** of different intricacy since I got into programming. Python, when it comes to implementing something, is definitely one of my strongest (if not the strongest) hard skills. Now I build software using AI for acceleration.",
        },
        block5: {
            en: "The second important hallmark is my experience in **visualization**. I have some UX/UI knowledge, and I've created many data representations using different kinds of datasets. By doing this just for fun, I learned the philosophy behind visualization, and now I can design and build intuitive charts and dashboards in my own style.",
        },
        block6: {
            en: `My primary soft skills are **adaptability** and **curiosity**. Although I don't have a strong expertise in a specific domain, I can easily learn new things by asking "why" in anything I touch, and I can do it *very quickly*. That's saved me many times!`,
        },
    },
    courses: {
        heading: {
            en: "# 📜 COURSES",
        },
        intro: {
            en: "I enjoy learning from courses all the time. Here's a compact list of some of the courses I've taken that I liked the most (clicking redirects to certificate proof, if any):",
        },
    },
    stack: {
        heading: {
            en: "# 🛠️ TECH & TOOL STACK",
        },
    },
    payment: {
        heading: {
            en: "# 💳 PAYMENT METHODS",
        },
    },
    related: {
        heading: {
            en: "# 🔗 RELATED LINKS",
        },
        links: {
            en: `▶️ [YouTube](https://www.youtube.com/channel/UCpPtaqqxzFqm9rZAh2xC5OA)<br/>
                📚 [Telegram (tech blog)](https://t.me/avheuristics)<br/>
                🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)<br/>
                🧩 [LeetCode](https://leetcode.com/avrtt/)<br/>
                ⚙️ [GitHub](https://github.com/avrtt)<br/>
                💼 [LinkedIn](https://www.linkedin.com/in/avrtt/)<br/>
                🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)`,
        },
    },
}

export const textServices = {
    intro: {
        en: 
`This subpage provides a detailed overview of all the freelance services that I *prefer* to do right now. Keep in mind: the list is not exhaustive, and we may have a deal on things that goes beyond it.`,
    },
    service1: {
        desc: {
            en: 
`Modular software is built with reusable, well-structured components, making it scalable and easy to maintain. This service is ideal for individuals or teams needing complex and organized programming projects. Whether you're building a tool, application or library, modular design ensures flexibility and long-term reliability.`,
        },
        youGet: {
            en: 
`- A Python codebase organized into reusable modules and packages
- Features like clean APIs, clear documentation and error handling
- Scalable design, enabling future enhancements and integrations
- Fully tested software with unit and integration tests included`,
        },
        why: {
            en: 
`- Save development time: reuse modules for future projects or extensions
- Improve collaboration: structured code makes teamwork and onboarding smoother
- Ensure reliability: robust, tested modules minimize bugs and downtime`,
        },
        iDo: {
            en: 
`- Plan the software architecture based on your project requirements
- Develop Python modules with clear input/output
- Use best practices for structuring codebases (e.g., following PEP-8 guidelines)
- Test modules using Python testing frameworks (Pytest, Unittest)
- Deliver the software with clear setup instructions, module documentation and API documentation`,
        },
        prerequisites: {
            en: 
`- A description of the project, its goals and the functionality required
- Any existing code or systems to integrate with
- Specifications for APIs, libraries or frameworks to be included
- (Optional) Examples of desired architecture or project templates`,
        },
        pricing: {
            en: 
`Highly depends on features and scope, but **~$500** is the average price for complex multi-module applications. Large-scale systems (e.g., enterprise-grade software with robust documentation) may cost **$1000–$2000**.`,
        },
    },
    service2: {
        desc: {
            en: 
`Web scraping involves extracting valuable data from websites in a structured format. If you're a business owner, marketer, researcher or data analyst, this service is for you. Need to track prices, monitor trends, collect leads or gather bulk data for research? Here's an efficient way to acquire information that can help you.`,
        },
        youGet: {
            en: 
`- A clean, well-organized dataset in your preferred format (Excel, CSV, JSON or database-ready)
- Screenshots and sample outputs to ensure you're receiving exactly what you need
- (Optional) Scripts used to collect the data`,
        },
        why: {
            en: 
`- Save money: no more manual data collection, which can be time-consuming and error-prone
- Create revenue opportunities: leverage market data to make better business decisions
- Stay ahead of competitors: gain insights into trends, customer preferences and more`,
        },
        iDo: {
            en: 
`- Analyze your data requirements and target websites
- Use scraping Python tools (BeautifulSoup, Scrapy) or Selenium to create scripts
- Develop custom solutions that bypass restrictions like CAPTCHA or dynamic loading
- Automatically clean and preprocess the extracted data inside scripts using Pandas pipelines (if needed)
- Deliver the final dataset in the format of your choice`,
        },
        prerequisites: {
            en: 
`- The URLs of target websites and a clear description of the type of data you need to collect
- Information on the desired format of the output data`,
        },
        pricing: {
            en: 
`The average price for scraping static pages with minimal formatting is **~$60**. Handling pagination, login authentication or dynamic content may cost **$100–$200**. More advanced features (e.g., bypassing captchas, integrating proxies or scraping multiple sites with API development) are highly unpredictable in price.`,
        },
    },
    service3: {
        desc: {
            en: 
`Data processing turns raw data into the required form. Whether you're dealing with messy spreadsheets, incomplete databases or large volumes of unstructured information, this service helps you make sense of it. Ideal for small businesses, analysts or researchers who need to clean, organize and visualize data for decision-making.`,
        },
        youGet: {
            en: 
`- A structured and cleaned dataset ready for analysis
- (Optional) Scripts used to process the dataset`,
        },
        why: {
            en: 
`- Save time: no more manual data cleaning or repetitive tasks
- Streamlined operations: enable efficient decision-making with organized and accurate data`,
        },
        iDo: {
            en: 
`- Depending on the source, load the data into my workspace to use Python tools (Pandas, NumPy), SQL or Excel/Spreadsheets
- Permorm data validation
- Clean, sort and standardize raw data
- Handle missing values, inconsistencies and duplicates
- Perform advanced data transformation, like pivoting, merging or aggregating`,
        },
        prerequisites: {
            en: 
`- The raw data files or access to your data source
- Details on the specific processing tasks or desired output
- (Optional) Information about the business problem or question you're trying to solve with the data`,
        },
        pricing: {
            en: 
`**$50–$100** for basic tasks like cleaning datasets or simple transformations, depending on the amount of data. Handling large datasets with big data tools or creating reusable workflows may cost **$100–$200**. Advanced workflows (real-time processing, integrating pipelines) or working with specialized formats may cost more. The average price for this service is **~$70**.`,
        },
    },
    service4: {
        desc: {
            en: 
`Data visualization turns numbers into understandable forms that can be presented to non-technical people or simply to see something important in those numbers. This service is perfect for business leaders, marketers, analysts or anyone looking to communicate insights clearly and effectively.`,
        },
        youGet: {
            en: 
`- Professionally designed charts, graphs, maps or infographics based on your data
- (Optional) Different variations of static visuals for presentations or reports`,
        },
        why: {
            en: 
`- Better communication: simplify complex data and understand its nature
- Increased engagement: captivate your audience with visually striking graphics
- Improved decision-making: quickly identify trends, anomalies and opportunities`,
        },
        iDo: {
            en: 
`- Analyze your data and determine the most effective visualization techniques
- Design visuals using Tableau or Python tools (Matplotlib, Seaborn, Plotly and others)
- Customize colors, layouts and interactivity to align with your branding or preferences
- Deliver exportable visuals compatible with your platforms
- Provide guidance on interpreting and using the visuals effectively`,
        },
        prerequisites: {
            en: 
`- A dataset or access to your data source
- Information on what you want to showcase or the story you want to tell
- Preferred platforms or tools if applicable
- (Optional) Branding guidelines or example visuals you admire`,
        },
        pricing: {
            en: 
`**$50–$100** for basic charts on common data types in Python, Excel or Google Sheets. **$100–$200** for interactive/animated visualizations and uncommon data types. **$200+** for highly customized and detailed visuals, advanced interactivity or visualizations on multiple datasets. These prices are mostly determined by urgency.`,
        },
    },
    service5: {
        desc: {
            en: 
`Exploratory data analysis uncovers patterns, relationships and anomalies in your data. Whether you're preparing for a data science project, trying to understand your customers or optimizing operations, EDA provides insights and ensures your data is ready for advanced analytics. This service is essentially a combination of data visualization and statistical analysis.`,
        },
        youGet: {
            en: 
`- An in-depth overview of your data, including key statistics, distributions and correlations
- Visualizations to explore trends and relationships
- A concise report summarizing findings, potential insights and recommendations
- (Optional) Data cleaning and preparation to remove outliers, handle missing values and standardize formats`,
        },
        why: {
            en: 
`- Deeper insights: reveal hidden trends and patterns in your data
- Data quality assurance: ensure your data is clean and reliable for further analysis
- Informed decisions: gain a solid foundation for strategy and predictive modeling`,
        },
        iDo: {
            en: 
`- Depending on the source, load the data into my workspace to use Python tools, SQL or Excel/Spreadsheets
- Perform data cleaning (Pandas, NumPy)
- Identify outliers, missing values and potential biases in the dataset
- Prepare the data for further modeling or analysis by transforming and normalizing it
- Conduct descriptive statistical analysis to summarize your data
- Visualize relationships and distributions (Seaborn, Matplotlib)
- Make a report (.pdf, Juputer Notebook, Google Colab, etc.)`,
        },
        prerequisites: {
            en: 
`- The dataset or access to your data source
- A clear understanding of your goals (e.g., uncover trends, assess data quality or identify potential issues)
- Preferred output formats
- (Optional) A description of the specific problem you're addressing or the decisions you aim to inform with the findings`,
        },
        pricing: {
            en: 
`**$100–$150** for summary statistics, correlations and basic charts with explanations. **$150–$250** for in-depth analysis, probably using feature engineering or specific problem-focused methods. Comprehensive reports on multiple large datasets or with advanced visualizations may vary in price highly.`,
        },
    },
    service6: {
        desc: {
            en: 
`ML model fine-tuning involves optimizing pre-trained models to meet specific business needs. This service is ideal for businesses and researchers who want to maximize the performance of existing models for tasks like image classification, natural language processing or predictive analytics.`,
        },
        youGet: {
            en: 
`- A fine-tuned ML model ready to solve your specific problem
- Comprehensive evaluation metrics to validate performance
- A detailed report explaining the modifications, performance improvements and potential applications
- (Optional) Deployment-ready code for integration into your existing systems`,
        },
        why: {
            en: 
`- Save time and resources: use existing powerful models without starting from scratch
- Customized solutions: tailor models to your unique dataset and objectives
- Enhanced accuracy: improve predictions, classifications or forecasts to drive better results`,
        },
        iDo: {
            en: 
`- Analyze your dataset and objectives to identify the most suitable pre-trained model
- Fine-tune model(s) using frameworks with TensorFlow/PyTorch
- Optimize hyperparameters
- Perform rigorous evaluation using your data and refine the model iteratively
- Deliver the fine-tuned model with clear documentation and guidance for use`,
        },
        prerequisites: {
            en: 
`- A labeled dataset or clear instructions on where to source training data
- Details about the task you want to solve
- Information on the deployment environment (e.g., cloud platform, local servers)
- (Optional) Access to computational resources for model training (if applicable)`,
        },
        pricing: {
            en: 
`**$200–$800** for tuning pre-trained models with perfomance validation, depending on many factors such as quality of data, problem scope and domain.`,
        },
    },
    service7: {
        desc: {
            en: 
`Frontend development focuses on creating engaging, user-friendly web applications. If you need a visually appealing interface, this service brings your ideas to life.`,
        },
        youGet: {
            en: 
`- A responsive, modern frontend for your needs
- Smooth navigation, interactive elements and an optimized UX
- Cross-browser compatibility and mobile-friendly designs
- Clean, well-documented code for seamless future updates or scaling`,
        },
        why: {
            en: 
`- Enhanced user engagement: create interfaces that are easy and enjoyable to use
- Increased conversions: guide users effectively to achieve your business goals`,
        },
        iDo: { 
            en: 
`- Design and develop the frontend using React framework
- Write clean, maintainable JavaScript/TypeScript components and CSS modules
- Implement animations, transitions and responsive designs for a dynamic experience
- Test for compatibility across browsers and devices`,
        },
        prerequisites: {
            en: 
`- A detailed description of your project goals and target audience
- (Optional) Wireframes, mockups or design inspiration
- (Optional) Branding guidelines (logos, colors, fonts) for consistency
- (Optional) Access to APIs or backend services if the frontend will integrate with them`,
        },
        pricing: {
            en: 
`**~$300** for frontend interfaces or single-page apps of moderate complexity with interactive elements and responsive designs, written in React. API integration and additional React modules may increase the price.`,
        },
    },
    service8: {
        desc: {
            en: 
`Static websites are lightweight, fast-loading websites that deliver consistent content to users. Perfect for personal portfolios, small business pages, blogs or event sites, static websites are cost-effective and require minimal maintenance. If you want a fast, secure and SEO-friendly online presence, this service is for you.`,
        },
        youGet: {
            en: 
`- A responsive website for your needs
- Up to 10 pages (e.g., Home, About, Services, Contact) designed to showcase your content effectively
- Optimized for speed, security and search engines (SEO)
- Hosted and deployed on platforms like GitHub Pages, Netlify or Vercel`,
        },
        why: {
            en: 
`- Save costs: no backend systems mean lower hosting fees and maintenance needs
- Faster load times: delight users with a seamless browsing experience
- Enhanced security: static sites are less prone to hacking compared to dynamic ones`,
        },
        iDo: {
            en: 
`- Develop the pages and components using React framework (JavaScript/TypeScript)
- Implement simple Next.js backend or use SSG (Gatsby & GraphQL, Jekyll)
- Incorporate tools like Tailwind CSS for responsive design
- Optimize images, fonts and code to ensure fast load times
- Implement SEO best practices like metadata, alt text and site maps
- Host the website`,
        },
        prerequisites: {
            en: 
`- A clear description of the website's purpose and target audience
- Content for the website (e.g., text, images, logos)
- Design preferences or examples of websites you admire
- (Optional) A domain name or hosting preference`,
        },
        pricing: {
            en: 
`**$150–$250** for basic 2-3 pages website (personal portfolio, small business pages). **~$400** for multi-page websites with contact forms, SEO and animations. Extensive custom design and JavaScript functionality may vary these prices significally. `,
        },
    },
    service9: {
        desc: {
            en: 
`Bots automate repetitive tasks and improve efficiency across various applications. Whether you need a chatbot for customer service or one to automate social media posts, this service provides reliable and intelligent solutions. Ideal for businesses, marketers and individuals looking to save time and enhance productivity.`,
        },
        youGet: {
            en: 
`- A customized bot designed to handle specific tasks
- Fully tested and deployed to your preferred platform (e.g., Telegram, Instagram, Discord, your website, standalone scripts)
- (Optional) Clear documentation on how to operate and maintain the bot`,
        },
        why: {
            en: 
`- Save time: automate repetitive tasks, freeing up valuable resources
- Improve engagement: chatbots provide 24/7 customer support or lead generation
- Streamline operations: automate data entry, notifications or even advanced tasks like workflow orchestration`,
        },
        iDo: {
            en: 
`- Assess your requirements and choose the right technologies
- Develop the main bot components (Python)
- Integrate chatbot functionality
- Test and refine the bot for accuracy, speed and reliability
- Integrate the bot with your systems, platforms or APIs as needed`,
        },
        prerequisites: {
            en: 
`- A clear description of the task or problem you want the bot to address
- Access to the data sources, APIs or platforms the bot will interact with
- Information on the preferred bot hosting or deployment platform (if applicable)
- (Optional) Examples or specifications for desired bot behavior`,
        },
        pricing: {
            en: 
`This service is highly unpredictable in price. In average, an NLP-driven bot of medium complexity with APIs integration or databases costs **~$230**. `,
        },
    },
    service10: {
        desc: {
            en: 
`Data collection software automates the gathering of structured or unstructured data from various sources like websites, APIs or databases. If you need to collect dynamic data for research, analytics, reporting or decision-making, this service will provide you with a reusable tool.`,
        },
        youGet: {
            en: 
`- Custom-built software for your data collection needs
- Data delivered in a structured format like Excel, CSV or a database
- Features like error handling, scheduling and automated updates
- Documentation and training on how to use the software effectively`,
        },
        why: {
            en: 
`- Save time: automate tedious data collection tasks
- Improve decision-making: access high-quality data to power analytics and insights
- Stay competitive: gather real-time data for trends, pricing or customer behavior`,
        },
        iDo: {
            en: 
`- Analyze your data collection requirements and identify the best sources
- Develop software using Python tools (BeautifulSoup, Scrapy) and/or API integrations
- Test the software extensively to ensure accuracy and reliability
- Deliver the tool with documentation`,
        },
        prerequisites: {
            en: 
`- A clear description of the data you need and where it can be sourced from
- Information on the preferred output format or storage location
- (Optional) Access to APIs, databases or websites requiring authentication`,
        },
        pricing: {
            en: 
`**$150–$200** for one-time data extraction tool. **$200–$400** for tools with scheduling, filtering or error-handling. Real-time data collection may double the price.`,
        },
    },
    service11: {
        desc: {
            en: 
`Hypothesis testing is a statistical method for evaluating assumptions about data. It's perfect for researchers, analysts and business owners who need to make data-driven decisions (by testing marketing strategies, customer preferences, product effectiveness and so on).`,
        },
        youGet: {
            en: 
`- A clear setup and explanation of the hypothesis to be tested
- Statistical analysis performed using industry-standard techniques
- Reports that explain the results in a simple way
- Recommendations or next steps based on the findings`,
        },
        why: {
            en: 
`- Validate ideas: make confident decisions based on data, not guesses
- Improve strategies: identify what works and what doesn't for your goals
- Optimize resources: focus efforts on initiatives with proven success potential`,
        },
        iDo: {
            en: 
`- Define the null and alternative hypotheses based on your objectives
- Collect or clean data to ensure it meets testing requirements
- Perform statistical tests using Python tools (SciPy, Statsmodels and many others)
- Create clear visuals (e.g., graphs, p-value tables) to explain the results
- Write a detailed report summarizing the findings and their implications`,
        },
        prerequisites: {
            en: 
`- A clear research question or hypothesis to test
- A dataset relevant to the hypothesis (raw or cleaned)
- Information on the context of the problem (e.g., what decision will the results impact?)
- (Optional) Benchmarks or expected results for comparison`,
        },
        pricing: {
            en: 
`This service depends on many factors, price is negotiable.`,
        },
    },
    service12: {
        desc: {
            en: 
`Dashboards are interactive visual tools that aggregate, analyze and display data in real time. Ideal for business leaders, analysts and teams needing to monitor KPIs, track performance or derive insights quickly.`,
        },
        youGet: {
            en: 
`- A custom-built, interactive dashboard
- Integration with data sources (Excel, databases, APIs, etc.) for real-time updates
- Clean, user-friendly layouts designed to display critical metrics effectively
- (Optional) Tutorials or guides to help your team navigate and utilize the dashboard`,
        },
        why: {
            en: 
`- Improved decision-making: access insights instantly
- Time savings: consolidate data from multiple sources into one view
- Enhanced collaboration: share insights seamlessly with your team or stakeholders`,
        },
        iDo: {
            en: 
`- Understand your key metrics and design a layout that meets your needs
- Build dashboard using Tableau and Python tools (mostly Plotly as a helper library)
- Connect the dashboard to your data sources for live or automated updates
- Optimize visuals for clarity, ensuring metrics are easy to interpret
- Provide training or documentation for effective use and updates`,
        },
        prerequisites: {
            en: 
`- A clear understanding of the KPIs or data you want to track
- Access to your data sources (e.g., files, databases, APIs)
- (Optional) Branding guidelines or design preferences
- (Optional) Examples of dashboards you like or features you need (e.g., filters, drill-downs)`,
        },
        pricing: {
            en: 
`Dashboards with simple visualizations and KPIs cost **$200–$400**. Custom features with advanced analytics, real-time updates and handling many data sources may cost **$400–$1000**. The averace price is **~$350**.`,
        },
    },
    service13: {
        desc: {
            en: 
`Technical writing transforms complex concepts into clear, concise documentation. This service is perfect for businesses needing user manuals, API documentation, technical blogs or guides. Whether you're targeting developers, users or clients, this service ensures your materials are professional and easy to understand.`,
        },
        youGet: {
            en: 
`- Well-organized, professional text to your audience in preferred writing style
- Accurate and concise language, free from ambiguity
- (Optional) Visual aids such as flowcharts, diagrams or screenshots`,
        },
        why: {
            en: 
`- Streamlined communication: help users or teams understand your tools and systems
- Increased efficiency: deduce support requests with clear, self-service documentation
- Enhanced credibility: professional materials reflect the quality of your product or service`,
        },
        iDo: {
            en: 
`- Research and analyze your product or process to understand its functionality
- Organize and structure content based on user needs and objectives
- Write and edit clear, accurate and engaging technical documents
- Ensure consistency with your brand's tone and style`,
        },
        prerequisites: {
            en: 
`- A description of the product, process or system needing documentation
- Access to relevant materials, such as prototypes, systems or existing notes
- Details about your target audience and their familiarity with the subject
- (Optional) Examples of documentation styles or formats you prefer`,
        },
        pricing: {
            en: 
`Simple documentation cost **$50–$200** (guides or FAQs), depending on text length. API documentation and user manuals cost **$200–$500**. Technical whitepapers may cost more.`,
        },
    },
    service14: {
        desc: {
            en: 
`Scripting involves writing code to automate tasks, enhance workflows or solve specific problems. If you're looking to save time or add custom functionality to your tools, this service can help you.`,
        },
        youGet: {
            en: 
`- Custom scripts to automate tasks, process data or solve specific challenges
- Fully tested, efficient and error-free code in your preferred scripting language (Python, Bash, PowerShell)
- Clear instructions for running the scripts and integrating them into your systems`,
        },
        why: {
            en: 
`- Save time: automate repetitive tasks, freeing up resources
- Improve accuracy: minimize errors in manual processes
- Increase productivity: speed up workflows with efficient, reusable scripts`,
        },
        iDo: {
            en: 
`- Analyze your needs and the tasks to be automated or solved
- Develop Python scripts and/or shell scripts
- Test the scripts extensively
- Deliver the scripts with usage instructions`,
        },
        prerequisites: {
            en: 
`- A clear description of the task or workflow you want to automate or enhance
- Access to the systems, data or tools the script will interact with
- Preferred scripting language (if applicable)
- (Optional) Examples or specifications for desired script functionality`,
        },
        pricing: {
            en: 
`**$50–$150** for simple automation tasks, **$150–$400** for handling data processing, working with databases or API integration. **$500–$1000+** for end-to-end workflow or highly complex logic. The averace price is **~$80**.`,
        },
    },
    service15: {
        desc: {
            en: 
`Streamlit apps turn your data, models or algorithms into interactive web applications. Ideal for data scientists, ML engineers and businesses wanting to share insights, predictive tools or custom solutions quickly, without the need for a full website.`,
        },
        youGet: {
            en: 
`- A sleek, interactive web application built using Streamlit
- Features like dropdowns, sliders, charts and tables to enhance user interaction
- Seamless integration with your data sources, APIs or machine learning models
- Fully deployable and accessible on the web or internal platforms`,
        },
        why: {
            en: 
`- Showcase insights: share interactive reports with your team or clients
- Streamline workflows: provide an easy-to-use interface for complex processes or models
- Save time: rapidly build and deploy apps without extensive coding overhead`,
        },
        iDo: {
            en: 
`- Develop the application using Streamlit, integrating necessary libraries
- Add features like file upload, live data updates and interactive widgets
- Test the app (usability, performance, reliability)
- Assist with deployment on platforms`,
        },
        prerequisites: {
            en: 
`- A clear description of the app's purpose and target audience
- Access to data, machine learning models or APIs the app will utilize
- Preferred hosting platform for deployment
- (Optional) Examples of similar apps or specific features you want included`,
        },
        pricing: {
            en: 
`Highly depends on initial software. The average price for static data displays and basic interactivity is **~$200**.`,
        },
    },
    service16: {
        desc: {
            en: 
`This service provides expert assistance with coding projects, Linux tasks, probability theory, statistics or research-related coursework and thesis requirements. Perfect for students, researchers and professionals aiming to enhance their understanding, complete assignments, or achieve academic goals with polished, high-quality work.`,
        },
        youGet: {
            en: 
`- Coding projects: debugged and well-commented Python, SQL, JavaScript or TypeScript code for your assignment or thesis requirements
- Linux support: guidance with advanced shell scripting, system configuration or tools
- Probability & statistics: step-by-step solutions, visualizations and statistical analysis
- Research assistance: help with structuring, coding or interpreting results for thesis projects, along with insights on best practices and clear documentation`,
        },
        why: {
            en: 
`- Improve academic performance: understand key concepts and submit high-quality work
- Save time: get efficient solutions while focusing on learning
- Gain confidence: learn practical skills in coding, statistics or research that extend beyond the project`,
        },
        iDo: {
            en: 
`- Review your assignment or project guidelines to understand the requirements
- Provide solutions with comments, explanations and demonstrations`,
        },
        prerequisites: {
            en: 
`- Detailed instructions for the assignment, coursework or thesis goals
- Access to any relevant datasets, systems or materials for your project
- Any tools, frameworks or environments required by your institution`,
        },
        pricing: {
            en: 
`**$50–$300** for coding tasks, statistical and mixed problems. **$500+** for complex research projects. These prices are mostly determined by urgency.`,
        },
    },
}
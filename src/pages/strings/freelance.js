import { projectsCount } from '../../data/freelance/arrays'
import { currentZoneUTC } from '../../data/freelance/variables';
import { freelanceExperienceString, strUTCOffset, startHoursUTC, endHoursUTC } from "../../utils/freelance"

export const textMain = {
	general: {
        intro: {
            en: "I'm a full-time freelancer primarily focused on Data Science, offering both regular and one-off services, including project-based work, system maintenance, consulting and teaching. Being in the field since 2020, I have more than <strong>" + freelanceExperienceString + " of freelancing</strong> experience in total, with more than <strong>" + projectsCount + " completed projects</strong> (listed below), as well as other various successful deals. My main areas of expertise are machine learning, data analysis, data collection, statistics, visualization and Python programming, but I'm also competent in web development, video/music post-production and prompt engineering.",
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
            en: "I've developed a *tremendous* amount of **Python programs** of different intricacy since I got into programming. Python, when it comes to implementing something, is definitely one of my strongest (if not the strongest) hard skills.",
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

}
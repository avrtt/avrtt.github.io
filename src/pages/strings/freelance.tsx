/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { countryCode, exactTimezone } from '../../data/announcements';
import { getTimezoneByCountryCode } from "../../utils/location"

export const textMain = {
	general: {
        intro: {
            en1: `I'm a full-time freelancer primarily focused on <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">AI algorithms</a>, <a href="https://en.wikipedia.org/wiki/Data_science">data science</a> and <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a> software in general, offering both regular and one-off services, including project-based work, system maintenance, consulting and teaching. Being in the field since 2020, I have more than `,
            en2: ` experience in total, with more than `,
            en3: ` (listed below), as well as other various successful deals. My main areas of expertise are <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a>, <a href="https://en.wikipedia.org/wiki/Data_analysis">data analysis</a>, <a href="https://en.wikipedia.org/wiki/Data_collection">data collection</a>, <a href="https://en.wikipedia.org/wiki/Mathematical_statistics">statistics</a>, <a href="https://en.wikipedia.org/wiki/Data_and_information_visualization">visualization</a> and automation, but I'm also competent in web development, video/music post-production and <a href="https://en.wikipedia.org/wiki/Prompt_engineering">prompt engineering</a>.`,
            ru1: `Я постоянный фрилансер, в основном специализирующийся на <a href="https://ru.wikipedia.org/wiki/%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82">ИИ-алгоритмах</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%83%D0%BA%D0%B0_%D0%BE_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">науке о данных</a> и <a href="https://ru.wikipedia.org/wiki/Python">Python</a>-разработке в целом, предлагающий как регулярное сотрудничество, так и разовые услуги, включающие проектную работу, сопровождение сервисов, консалтинг и репетиторство. Находясь в сфере с 2020 года, я имею более `,
            ru2: ` (суммарно) и более `,
            ru3: ` (см. ниже), а также различных других успешных сделок. Мои главные области экспертизы — <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5">машинное обучение</a>, <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">анализ данных</a>, <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B1%D0%BE%D1%80_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">сбор данных</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0">статистика</a>, <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%B7%D1%83%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">визуализация</a> и автоматизация, однако я также обладаю компетенциями в веб-разработке, постпродакшене видео/музыки и <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0_%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D0%BA">промпт-инжиниринге</a>.`
        },
        spoiler: {
            title: {
                en: "Compact list: Services I offer",
                ru: "Компактный список: Мои услуги"
            },
            extraDesc: {
                en: "This list includes services that I *prefer* to do right now. It's not exhaustive, and we may have a deal on things that goes beyond it.",
                ru: "Данный список содержит услуги, которые я *предпочитаю* выполнять в данный момент. Он не является исчерпывающим: мы можем договориться о чём-либо, что выходит за его рамки." 
            },
        },
        servicesRedirect: {
            en: "If you need examples and more details, you can go straight to the [page of services](/freelance/services), which describes each type of job in the list above, step-by-step.",
            ru: "Вы также можете ознакомиться со [страницей услуг](/freelance/ru/services), на которой представлены подробные описания, примеры и пошаговая работа для каждого типа услуг из представленных в списке выше."
        },
        contactMe: {
            en: "Found a related problem? Feel free to contact me, I'll answer any questions you may have. You can reach out directly or choose one of the freelance platforms to make an offer:",
            ru: "Нашли подходящую услугу? Свяжитесь со мной — я отвечу на любые вопросы. Вы можете сделать это напрямую или выбрать одну из фриланс-платформ для размещения заявки:"
        },
        tooltip: {
            sameZone: {
                en: "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is the same as yours.",
                ru: "Рабочее время приводится для Вашего часового пояса, основываясь на данных браузера. На текущий момент наши часовые пояса совпадают."
            },
            diffZone: {
                en: "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is UTC" + getTimezoneByCountryCode(countryCode, exactTimezone) + ".",
                ru: "Рабочее время приводится для Вашего часового пояса, основываясь на данных браузера. Мой текущий часовой пояс — UTC" + getTimezoneByCountryCode(countryCode, exactTimezone) + "."
            },
        },
        outro: {
            en: "This page is designed for freelance clients and provides information regarding my freelance work. Please consider exploring it before contacting me for the first time. If you're HR, see the [CV](/cv) page instead.",
            ru: "Данная страница предназначена для фриланс-клиентов и предоставляет основную информацию касательно работы со мной. Пожалуйста, изучите её перед обращением в первый раз."
        },
	},
    projects: {
        heading: {
            en: "# 📌 PROJECTS",
            ru: "# 📌 ПРОЕКТЫ"
        },
        intro: {
            en: "My projects are organized into category pages. Please click on the category you're interested in to explore a particular list:",
            ru: "Мои проекты распределены по категориям. Пожалуйста, нажмите на интересующую Вас категорию, чтобы перейти к странице проектов:"
        },
    },
    workflow: {
        heading: {
            en: "# 🔀 THE WAY THINGS GET DONE",
            ru: "# 🔀 АЛГОРИТМ РАБОТЫ"
        },
        section1: {
            heading: {
                en: "### 🚀 General prerequisites",
                ru: "### 🚀 Общие требования"
            },
            block1: {
                en: "Before contacting me, I recommend you to check the [Services](/freelance/services) page, determine what kind of job your request refers to and learn the specifics of the chosen service (get to know the methodology, tools, workflow and so on). This will help you to formulate your preferences better and thus help me to fulfill your requirements more precisely. Don't worry: we can also agree on a non-conventional approach to the problem — this is merely a helper page for setting the direction of our further interaction.",
                ru: "Перед связью со мной рекомендую перейти на [страницу услуг](/freelance/ru/services), определить к какому типу работы относится Ваш заказ и изучить особенности выбранной услуги. Это поможет Вам лучше сформулировать свои предпочтения, а мне, соответственно, — выполнить задачу качественнее. Не переживайте: мы можем договориться и о нестандартном решении проблемы. Это лишь страница-помощник для определения характера дальнейшего взаимодействия."
            },
            block2: {
                en: "Once you're done, drop me a message using any convenient option from the ones listed above. Please, try to describe the subject of the problem in **one message**.",
                ru: "Как только Вы закончите, отправляйте мне сообщение любым удобным способом из тех, что указаны в начале текущей страницы. Пожалуйста, постарайтесь описать суть задачи **одним сообщением**."
            },
            block3: {
                en: "I'll let you know about my decision within a few hours. It can be any of the following: **a)** we immediately proceed to discussing the task; **b)** I agree to discuss the task, but when I'll be free (with providing the approximate dates); **c)** I'm not available/willing to consider the task (I leave myself the right not to disclose the reasons, but as a rule these tasks are either too demanding, don't fit my competence, or are too simple against my current bigger projects).",
                ru: "В течение нескольких часов я сообщу Вам своё решение. Оно может быть одним из следующих: **a)** мы сразу же переходим к обсуждению заказа; **b)** я согласен рассмотреть заказ, но когда освобожусь (даю примерные сроки); **c)** я не готов рассматривать этот заказ (оставляю за собой право не оглашать причины, но, как правило, это либо слишком требовательные, либо не подходящие под мои компетенции, либо слишком простые заказы на фоне более крупных)."
            },
            block4: {
                en: "The following step-by-step workflow explains how I interact with clients depending on the type and complexity of the problem, the tools available, and the client's preferences. It varies under certain conditions.",
                ru: "Следующий пошаговый алгоритм работы описывает то, как я взаимодействую с клиентами в зависимости от типа и сложности задачи, доступных инструментов и предпочтений заказчика. Он изменяется при определённых условиях."
            },
        },
        section2: {
            heading: {
                en: "### ✍ Step 1: Discussion",
                ru: "### ✍ Шаг 1: Обсуждение"
            },
            block1: {
                en: "Sometimes projects are quite complicated, so clear problem definition and thorough discussion with the customer is a must. The results of negotiations at this point will set the terms, deadline and price (preliminary or final). Typically, this is where an agreement is established: prior to prepayment, either party may reject the terms and quit the deal.",
                ru: "Порой проекты бывают достаточно сложными, поэтому необходима понятная постановка задачи и детальное обсуждение проблемы с заказчиком. По результатам переговоров на данном этапе будут определены условия, сроки и стоимость работы (предварительная или окончательная). Здесь, как правило, создаётся договорённость: до момента предоплаты любая из сторон может не согласиться с условиями и выйти из сделки."
            },
            block2: {
                en: "**My task** is to estimate my capabilities, figure out deadlines and outline the work, and the **customer's task** is to describe the desired result in as much detail as possible. If the customer isn't a technical specialist, I'll help with interpreting. Well-written terms of reference prevent intermediate clarifications, but this isn't a necessity for ordinary level projects.",
                ru: "**Моя задача** — оценить свои возможности, определить сроки выполнения и составить план работы, а **задача заказчика** — максимально подробно описать желаемый результат. Если заказчик не является техническим специалистом, я помогу с интерпретацией этапов работы. Грамотно составленное техническое задание позволяет избежать промежуточных уточнений, однако это не обязательное условие для проектов простого уровня."
            },
            block3: {
                en: "For convenience, we can communicate by text or audio/video call. In practice, small projects are usually described by text, while the brainstorming of business ideas for development of technical project scope is done through 1:1 calls.",
                ru: "Для удобства заказчика мы можем общаться текстом, по аудиозвонку или по видеозвонку. На практике, небольшие проекты описываются текстом, а вот брейншторм бизнес-идей осуществляется через звонок."
            },
        },
        section3: {
            heading: {
                en: "### 🧐 Step 2: Free expert review",
                ru: "### 🧐 Шаг 2: Бесплатная экспертная оценка"
            },
            block1: {
                en: "Depending on the complexity and type of project, I offer a free expert review, immediately (during the discussion) or within a day. I analyze the technical complexity and data, selecting the best tools and strategies. I then provide full information on upcoming work costs, non-obvious steps and pitfalls, and, if adjustments are required, a **final price**. I consult the customer, giving a clear explanation of the best possible solutions, which aslo makes it easier to understand what I'll be doing during the job.",
                ru: "В зависимости от сложности и типа проекта, я предлагаю бесплатную экспертную оценку, сразу в ходе обсуждения задачи или в течение суток. Анализирую техническую сложность и данные, подбираю оптимальные инструменты и стратегии. После этого выдаётся полная информация о грядущих расходах на работу, неочевидных этапах и подводных камнях, и, если требуется корректировка, озвучивается **окончательная стоимость**. Я консультирую клиента, объясняя простым языком наиболее оптимальные решения; клиенту становится проще понимать, чем я буду заниматься в ходе выполнения заказа."
            },
        },
        section4: {
            heading: {
                en: "### 🤝 Step 3: Prepayment",
                ru: "### 🤝 Шаг 3: Предоплата"
            },
            block1: {
                en: "I charge **50%** upfront when working with **new clients** and never take any other intermediate payments. Rarely, it may be more convenient to arrange a **hourly fee**: there is no upfront fee in this case, and new clients are charged at the end of each working day. I usually indicate the prioritized payment type in the service description.",
                ru: "С **новыми клиентами** я работаю по предоплате в размере **50%** от озвученной окончательной стоимости и не требую промежуточную оплату. В редких случаях бывает удобнее договориться о **почасовой оплате**: в этом случае предоплата не взимается, и для новых клиентов оплата происходит в конце каждого рабочего дня. Как правило, я указываю приоритетный тип оплаты в описании услуги."
            },
            block2: {
                en: "Payment details are listed below on this page (see **Payment methods**), or they will be given in conversation. I will start working exactly **from the moment the prepayment is received**, and will keep the sum until the end of the project just in case it has to be returned. If the payment is in crypto, I additionally check the blockchain.",
                ru: "Реквизиты для оплаты указаны на текущей странице (см. **Методы оплаты** ниже), либо дублируются в переписке. Я приступаю к работе строго с **момента поступления предоплаты** на счёт и сохраняю сумму предоплаты до завершения проекта на случай, если по каким-либо причинам её придётся вернуть клиенту. Если оплата происходит в криптовалюте, я дополнительно проверяю блокчейн."
            },
            block3: {
                en: "Keep in mind that this page describes paying without an intermediary. Platforms like Upwork guarantee safety, but they charge a commission, which will make the costs higher. If you're looking to overpay for a secure deal, then consider contacting me through freelance marketplaces.",
                ru: "Имейте в виду, что здесь описывается оплата без посредника. Платформы вроде Upwork гарантируют безопасность, однако берут за это комиссию, из-за чего стоимость будет выше. Если Вы готовы переплачивать за безопасную сделку — связывайтесь со мной через фриланс-маркетплейс."
            },
        },
        section5: {
            heading: {
                en: "### 📞 Step 4: Intermediate interaction",
                ru: "### 📞 Шаг 4: Промежуточное взаимодействие"
            },
            block1: {
                en: "Optionally and exclusively for **long-term projects**, I provide intermediate calls or progress reports in any convenient form. The point here is to basically present the deliverable by milestones for subsequent adjustments based on the customer's preferences, and to clarify some details, which can lead to a slightly more accurate result and faster implementation. The effectiveness of such approach comes from an assumption: the increasing deliverable complexity causes increasing complexity of fixing existing components, and therefore customer validation, like product testing, should be done iteratively.",
                ru: "Опционально и исключительно для **долгосрочных проектов**, я предоставляю промежуточные консультационные звонки или отчёты в любой удобной форме. Их суть заключается преимущественно в презентации работы по этапам для последующей корректировки в соответствии с предпочтениями заказчика и уточнения некоторых моментов, что может привести к чуть более точному результату и ускорению выполнения заказа. Эффективность такого подхода исходит из предположения, что из-за роста сложности продукта растёт и сложность исправления существующих в нём компонентов, а потому валидация со стороны заказчика, как и тестирование продукта, должны проходить циклично."
            },
            block2: {
                en: "It's possible to organize a private GitHub/GitLab repository for real-time version tracking.",
                ru: "Возможно использование приватного GitHub/GitLab-репозитория для отслеживания заказчиком правок в режиме реального времени."
            },
        },
        section6: {
            heading: {
                en: "### ✅ Step 5: Release, post-payment and feedback",
                ru: "### ✅ Шаг 5: Реализ, постоплата и обратная связь"
            },
            block1: {
                en: "When completed, a **full version** of the product will be delivered, then you make a post-payment. In some cases (usually with new clients) I offer a **demo version** before post-payment is made — this depends on the complexity and type of project. For **hourly rates** with loyal clients, 100% post-payment is formed after calculating the total number of hours worked.",
                ru: "По завершении работы предоставляется **полная версия продукта**, и я ожидаю постоплату. В некоторых случаях (как правило, с новыми клиентами) я предлагаю **демо-версию** до осуществления постоплаты — это зависит от сложности и типа проекта. При **почасовой оплате** с постоянными клиентами 100%-ая постоплата формируется после подсчёта суммарного количества проработанных часов."
            },
            block2: {
                en: "Like any freelancer, I value testimonials and therefore offer a **discount of 10% off post-payment** for your feedback and references after any gig. Check out the \"Write a review\" section below to learn how to get the discount.",
                ru: "Как и любой фрилансер, я ценю отзывы, а потому предлагаю **скидку в размере 10% от постоплаты** за Вашу обратную связь и рекомендации после выполнения любого заказа. В разделе \"Написать отзыв\" ниже описывается, как получить скидку."
            },
        },
        section7: {
            heading: {
                en: "### ⚙️ Step 6: Technical support",
                ru: "### ⚙️ Шаг 6: Техническая поддержка"
            },
            block1: {
                en: "To keep my customers completely satisfied, I provide **free support** for the developed projects: 3 months for business and 1 month for individuals. This consists of consulting and basic troubleshooting. Sometimes simple debugging may also be free.",
                ru: "Чтобы клиент оставался доволен, я осуществляю **бесплатную поддержку** разработанного проекта на протяжении 3 месяцев для бизнеса и на протяжении 1 месяца для частных лиц, представляющую из себя консультирование и поиск неполадок. Диагностика багов может быть бесплатной, в зависимости от сложности."
            },
        },
        section8: {
            heading: {
                en: "### 🍪 Let's cooperate further!",
                ru: "### 🍪 Давайте сотрудничать дальше!"
            },
            block1: {
                en: "I keep in touch with my former customers. You can always contact me if something needs to be improved. For me, relationships with customers and their satisfaction are important, because, in Data Science, it's *much* easier and faster to work with returning clients than to constantly look for new ones.",
                ru: "Я поддерживаю контакт со своими бывшими клиентами. Вы всегда можете обратиться ко мне в случае, если продукт необходимо доработать. Для меня важны отношения с клиентами и их удовлетворённость, поскольку с возвращающимися клиентами намного проще и быстрее работать, нежели постоянно искать новых."
            },
            block2: {
                en: "To keep clients coming back, I offer some discounts. Loyal customers can expect **lower pricing** for services and **lower upfront fees**, up to 100% postpaid.",
                ru: "Чтобы клиенты возвращались, я предоставляю скидки. Постоянные клиенты могут рассчитывать на **более низкий прайсинг** за услуги и **снижение предоплаты** вплоть до 100% постоплаты."
            },
        },
        faq: {
            title: {
                en: "Frequently asked questions",
                ru: "Часто задаваемые вопросы"
            },
            q1: {
                en: "Are there any other payment options available besides the ones below?",
                ru: "Возможны ли другие способы оплаты помимо представленных ниже?"
            },
            a1: {
                en: "No, this page contains all the possible, currently available payment methods.",
                ru: "Нет, на данной странице представлены все возможные актуальные на текущий момент способы оплаты."
            },
            q2: {
                en: "I'd like to pay in cryptocurrency. Is that legal?",
                ru: "Я хочу оплатить заказ в криптовалюте. Это легально?"
            },
            a2: {
                en: "It depends. Some jurisdictions treat cryptocurrency as taxable assets, and some have banned transfers entirely. Although in practice the crypto exchange in these jurisdictions isn't prosecuted in any way, I'm not responsible for the consequences. Check your local laws first.",
                ru: "Это зависит от юрисдикции, в которой Вы находитесь. Некоторые государства рассматривают криптовалюту как имущество, облагаемое налогом при передаче, некоторые страны и вовсе запрещают транзакции. И хотя на практике передача криптовалюты в данных юрисдикциях никак не преследуется, я не несу ответственность за правовые последствия, связанные с криптовалютным обменом. Обращайтесь к местным законам."
            },
            q3: {
                en: "Do you offer a legal contract?",
                ru: "Составляется ли официальный контракт?"
            },
            a3: {
                en: "All the services described on this website are provided without signing a legal labor contract. If you're looking for guarantees of a fair deal in return for paying service fees, then consider contacting me via freelance marketplaces (see above).",
                ru: "Все указанные на данном сайте услуги предоставляются без оформления трудового договора. Если Вам нужны гарантии честной сделки взамен на оплату комиссии сервиса — связывайтесь со мной через фриланс-маркетплейсы (см. выше)."
            },
            q4: {
                en: "How is copyright ownership transferred?",
                ru: "Как передается авторское право на работу?"
            },
            a4: {
                en: `Since no labor contract is signed, there's no way to transfer copyright  ownership (at least in most jurisdictions). Formally, I remain the owner of all digital products (intellectual property) created as part of a verbal or written agreement with a customer without the use of an intermediary (except for works done through a GitHub/GitLab repository, see below). Practically, this shouldn't be a problem, since I don't intend to assert my authorship in any way, and authorize further use, modification and distribution of the product without attribution or any limitations, and even if I did, I wouldn't be able to prove authorship in the absence of a legal agreement. However, if such legal aspects matter to you, I recommend you to contact me through freelance marketplaces, as copyright issues are considered there (for instance, see Upwork's <a href="https://www.upwork.com/legal#optional-service-contract-terms">Optional Service Contract Terms</a>).`,
                ru: "Поскольку трудовой контракт не оформляется, то и интеллектуальные права передать невозможно (по крайней мере, в большинстве юрисдикций). Формально, я остаюсь владельцем всех цифровых продуктов (интеллектуальной собственности), созданных в рамках устной или письменной договорённости с клиентом без задействования посредника (исключением является работа через GitHub/GitLab-репозиторий, см. ниже). Практически — это не должно вызывать проблемы, поскольку я не намереваюсь как-либо отстаивать своё авторство и даю разрешение на дальнейшее использование, изменение и распространение продукта без атрибуции и каких-либо ограничений, а если бы намеревался — никак бы не смог доказать авторство в условиях отсутствия формальной договорённости. Однако, если подобные юридические аспекты для Вас имеют вес — рекомендую связываться со мной через фриланс-маркетплейсы, поскольку при работе через них вопросы авторского права учитываются."
            },
            q5: {
                en: "How is software code licensed when working through a remote git repository?",
                ru: "Как лицензируется программный код в случае работы через удалённый git-репозиторий?"
            },
            a5: {
                en: `In the case of working through popular git repository hosting sites operating under the U.S. law (e.g., GitHub and GitLab), the customer may create a repository, <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository">choose a license</a>, and then add me as a collaborator. This way, the software code implemented inside the repository will be distributed according to the terms specified in the license. Please note that according to the U.S. law <a href="https://choosealicense.com/no-permission/">no license</a> is equivalent to exclusive copyright only if a creative work has no other contributors.`,
                ru: `В случае работы через популярные хостинги git-репозиториев, находящихся в правовом поле США (например, GitHub и GitLab), заказчик может самостоятельно создать репозиторий, <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository">выбрать лицензию</a> и добавить меня в качестве collaborator. В этом случае реализуемый внутри репозитория программный код будет распространяться в соответствии с условиями, указанными в лицензии. Имейте в виду, что в рамках законодательства США <a href="https://choosealicense.com/no-permission/">отсутствие лицензии</a> приравнивается к exclusive copyright только в том случае, если содержимое творческой работы не имеет других соавторов.`
            },
            q6: {
                en: `Is there any legal guarantee that the contractor won't apply <a href="https://docs.github.com/en/site-policy/content-removal-policies/dmca-takedown-policy">DMCA takedown notice</a> to remove a part of deliverable that was transferred to my use and publicly hosted as a git repository?`,
                ru: `Существуют ли правовые гарантии того, что исполнитель не подаст <a href="https://docs.github.com/en/site-policy/content-removal-policies/dmca-takedown-policy">DMCA takedown notice</a> на удаление части программного кода, который перешёл в моё пользование после реализации заказа и был размещён публично на хостинге git-репозиториев?`
            },
            a6: {
                en: `If the source code was implemented inside a repository you've licensed, then yes. In this case, I can only distribute the content of the repository under the terms specified in the license. Moreover, in case of a DMCA policy violation, the repository owner has the right to submit a request to remove an unauthorized copy of the software code by referring to the aforementioned repository. Platforms such as GitHub actively assist in enforcing the terms of the DMCA (and even <a href="https://github.com/github/dmca">list such cases</a> publicly).`,
                ru: `Если программный код был реализован внутри лицензированного Вами репозитория, то да. В этом случае я могу распространять содержимое репозитория только в соответствии с условиями, указанными в лицензии. Более того, в случае нарушения политики DMCA владелец репозитория имеет право на отправку запроса на удаление присвоенной иным лицом копии программного кода, ссылаясь на упомянутый репозиторий. Такие платформы как GitHub активно содействуют выполнению условий DMCA.`
            },
            q7: {
                en: `Do you offer an <a href="https://en.wikipedia.org/wiki/Non-disclosure_agreement">NDA</a>?`,
                ru: `Составляется ли <a href="https://en.wikipedia.org/wiki/Non-disclosure_agreement">NDA</a>?`
            },
            a7: {
                en: "In some cases, if required by the customer.",
                ru: "В некоторых случаях составляется одностороннее соглашение о неразглашении, если это требуется заказчику."
            },
            q8: {
                en: "What if the work isn't completed on time?",
                ru: "Работа выполнена не в срок. Что делать?"
            },
            a8: {
                en: "If the work is fully completed but not on time, I'll refund a portion of the cost depending on the specific situation.",
                ru: "Если работа выполнена в полном объёме, но не в срок — я возвращаю часть стоимости в зависимости от конкретной ситуации."
            },
            q9: {
                en: "What if I'm not satisfied with the result of the work done?",
                ru: "Меня не устраивает результат работы. Что делать?"
            },
            a9: {
                en: "I'm always open to consider valid arguments in favor of the customer's rightness before they write a negative review. If the work doesn't match the terms of reference, then I'll refund the money, because reputation is more valuable when it comes to freelancing.",
                ru: "Я всегда готов к рассмотрению весомых аргументов в пользу правоты заказчика перед тем, как он напишет негативный отзыв. Если работа не соответствует ТЗ — я верну деньги, поскольку репутация важнее."
            },
            q10: {
                en: "What languages and style can we use to communicate?",
                ru: "На каких языках и в каком стиле мы можем общаться?"
            },
            a10: {
                en: "We can communicate in both formal and informal styles, the latter being more preferable for me. I'm proficient in English and Russian.",
                ru: "Мы можем общаться как в формальном, так и неформальном стилях, причём второй более предпочтителен для меня. Помимо родного языка, я довольно свободно владею английским."
            },
            q11: {
                en: "What jurisdiction is the contractor physically located in?",
                ru: "В какой юрисдикции физически находится исполнитель?"
            },
            a11: {
                en: "In a wide variety of different. ;)",
                ru: "В самых разных. ;)"
            },
            q12: {
                en: "I'm a business representative and I'm interested in long-term cooperation. Can I be sure that the contractor will comply with all applicable legislation?",
                ru: "Я — представитель бизнеса и меня интересует долгосрочное сотрудничество. Как мне быть уверенным в соблюдении исполнителем всех применимых законов и нормативных актов?"
            },
            a12: {
                en: "No. I don't give any legal guarantees, regularly being located outside my country of citizenship (Russia), the international status of which only makes official work more difficult. My legal status is generally unclear. Consider me solely as an unofficial worker.",
                ru: "Никак. Я не даю никаких правовых гарантий, поскольку постоянно нахожусь за пределами страны своего гражданства (Россия), международный статус которой лишь усложняет официальную работу. Мой же правовой статус, как правило, размыт. Рассматривайте меня исключительно как неофициального работника."
            },
            q13: {
                en: "How to make sure Telegram reviews are real?",
                ru: "Как удостовериться в подлинности отзывов в Telegram?"
            },
            a13: {
                en: "Telegram is a messenger and it links one account to one phone number. As an additional verification, I require each account to have at least one photo in their profile history that was uploaded at least 3 months prior to writing the review. You can verify that the account belongs to a real person by checking the upload dates of the photos by swiping in the app. Check the upload date against the date the review was posted. This is the only way to know that the Telegram account wasn't created just before the review was written.",
                ru: "Telegram — это мессенджер, и он привязывает один аккаунт к одному номеру телефона. В качестве дополнительной проверки я требую, чтобы каждый аккаунт имел хотя бы одно фото в истории профиля, которое было загружено не менее, чем за 3 месяца до написания отзыва. Вы можете убедиться в том, что аккаунт принадлежит настоящему человеку, проверив даты загрузки фотографий пролистыванием в приложении. Сверьте дату загрузки с датой отправки отзыва. Это единственный способ узнать, что Telegram-аккаунт был создан не перед написанием отзыва."
            },
            q14: {
                en: "A Telegram user prohibits access to their profile, or has deleted all photos. How can I be sure that the review is real?",
                ru: "Пользователь Telegram запрещает переход в свой профиль, либо удалил все фотографии. Как убедиться, что отзыв настоящий?"
            },
            a14: {
                en: "Sometimes users change account privacy settings or delete all photos, which makes it impossible to verify the authenticity of the account. I can't do anything about it, but it's not a common occurrence.",
                ru: "Иногда пользователи изменяют настройки приватности аккаунта или удаляют все фото, что лишает возможности проверить подлинность аккаунта. Я ничего не могу с этим сделать, но это и не частое явление."
            },
            q15: {
                en: "How do I make sure a Telegram review hasn't been changed?",
                ru: "Как мне убедиться, что Telegram-отзыв не был изменён?"
            },
            a15: {
                en: "Telegram indicates when a message has been edited by its author. Hover over \"edited\" in the app to see when, if ever, the message was modified by the user. I can't edit other people's messages in my group, and Telegram displays the sender's name.",
                ru: "Telegram указывает факт и время изменения сообщения его автором. Наведите курсор в приложении на \"edited\", чтобы узнать, когда сообщение было изменёно пользователем, если это было. Я не имею права изменять сообщения других людей в своей группе, а Telegram отображает имя отправителя."
            },
            q16: {
                en: "How to make sure Facebook reviews are real?",
                ru: "Как удостовериться в подлинности отзывов в Facebook?"
            },
            a16: {
                en: "If you have doubts about the authenticity of Facebook reviews, then you may want to check out user profiles. Facebook somewhat controls the integrity of business pages: for example, a business owner is prohibited from deleting or editing user reviews, or posting reviews of themselves from other accounts (at least because Facebook prohibits having multiple accounts and tracks them).",
                ru: "Если Вы сомневаетесь в подлинности отзывов в Facebook — изучайте профили пользователей. Facebook в некоторой степени контролирует честность ведения бизнес-страниц: например, владельцу бизнеса запрещено удалять или редактировать отзывы пользователей, а также размещать отзывы на самого себя с других аккаунтов (как минимум потому, что Facebook запрещает наличие нескольких аккаунтов и отслеживает это)."
            },
            q17: {
                en: "Are there other platforms to leave a review and get a discount?",
                ru: "Существуют ли другие платформы, чтобы оставить отзыв и получить скидку?"
            },
            a17: {
                en: "No. Only Telegram, Facebook and freelance marketplaces (when working through them). In any other cases, no discount will be applied.",
                ru: "Нет. Только Telegram, Facebook и фриланс-биржи (при работе через них). В любых иных случаях скидка предоставлена не будет."
            },
        },
    },
    testimonials: {
        heading: {
            en: "# ❤️ TESTIMONIALS",
            ru: "# ❤️ ОТЗЫВЫ"
        },
        telegramDesc: {
            en: "Group for any feedback, including reviews. For writing a review, you'll need to join the group, then you can leave it.",
            ru: "Группа для любой обратной связи, включая отзывы. Для написания отзыва потребуется вступить в группу, затем её можно будет покинуть."
        },
        facebookDesc: {
            en: "Reviews section on my business page. For writing a review, you'll need to click \"Yes\" (recommend), then you'll be prompted to write.",
            ru: 'Раздел отзывов на странице бизнес-аккаунта. Для написания отзыва потребуется нажать "Да" (рекомендую), после чего будет предложено написать текст.'
        },
        general: {
            en: 
`Reviews are available through one of these two links. They almost never intersect: Telegram is used primarily for Russian-speaking clients, and Facebook is used for English-speaking clients. If you don't speak Russian, you can use the built-in translation feature in the app.

Some reviews are also posted on freelance marketplaces (see the links at the top of this page).`,
            ru: 
`Отзывы доступны при переходе по одной из этих двух ссылок. Они практически не пересекаются: Telegram используется преимущественно для русскоязычных клиентов, а Facebook — для англоязычных. Если Вы не владеете английским языком, Вы можете использовать встроенную фукнцию перевода в Facebook ("Показать перевод").  

Некоторые отзывы также оставляются на фриланс-биржах (см. ссылки в начале этой страницы).`,
        },
        spoilerDifference: {
            title: {
                en: "A few words on review platforms",
                ru: "Пара слов о платформах для отзывов"
            },
            content: {
                en: 
`Telegram is my preferred platform since, unlike Facebook, it allows me to moderate fake reviews. That said, it does require trust in me as a contractor, since in theory I could remove real negative reviews. 

I recommend treating the rating of a Facebook business page as an *opinion* rather than an *assessment* of my skills, because 1) it uses a binary system (recommend / unrecommend), which can negatively affect the overall impression, and 2) negative reviews can be spammed there without any message, and I can't remove it. Telegram, on the other hand, reflects almost no majority opinion, but provides a detailed assessment of my skills. 

It's also important to note that Facebook doesn't allow you to leave more than one review per account, and at the same time their policy prohibits having more than one account per person. If suspected by ML algorithms, the account will be suspended until you verify your identity. So, returning clients end up using Telegram for discounts.

Reviews on freelance marketplaces are considered the most valuable, but I rarely work there, following customer preferences mostly.

Regardless of the platform, never trust reviews that don't describe the **problem** and **the process for solving it**.`,
                ru: 
`Telegram — более предпочтительная для меня платформа, поскольку он, в отличие от Facebook, позволяет модерировать фейковые отзывы. При этом, он требует доверия ко мне как к исполнителю, поскольку в теории я мог бы удалять настоящие негативные отзывы. 

Я рекомендую относиться к рейтингу бизнес-страницы в Facebook не как к *оценке* моих навыков, а как к *мнению*, поскольку 1) там используется бинарная система (нравится / не нравится), что может негативно влиять на общее впечатление, и 2) там можно спамить негативными отзывами без какого-либо содержания, и я не смогу их удалить. Telegram, напротив, практически не отражает мнения большинства, но предоставляет развернутую оценку моих навыков. 

Также важно заметить, что Facebook позволяет оставлять отзыв на моей странице лишь один раз, и при этом запрещает иметь несколько аккаунтов одному человеку. Если алгоритмы машинного обучения заподозрят нарушение этого правила, аккаунт будет приостановлен до тех пор, пока Вы не подтвердите личность. Поэтому возвращающиеся клиенты для получения скидки используют Telegram.

Наиболее ценными считаются отзывы на фриланс-биржах, однако я редко работаю через них, во многом следуя предпочтениям заказчиков.

Вне зависимости от платформы, никогда не доверяйте отзывам, в которых не описана **проблема** и **процесс её решения**.`
            },
        },
        write: {
            heading: {
                en: "### 📝 Write a review",
                ru: "### 📝 Написать отзыв"
            },
            template: {
                en: 
`To get your discount, use one of these options to publish a review. In order to save you time, I've prepared a template — simply answer the following questions:
1. What service did you order (or what problem did you have)?
2. What options have you considered (and why did you choose me)?
3. How did I help in solving the problem?
4. How quickly and efficiently was the work done? What did you like (or dislike)?
5. What did you expect and what did you get as a result?

The text form is flexible. You may also add other thoughts: any doubts you had which were resolved, quality of communication, etc. It's highly appreciated that the review should be addressed to other potential clients rather than me, i.e. it should be written as a recommendation. It's not necessary for you to have an "alive" or public profile, although that's a valuable attribute for me as well. Please, write in **one message**.

**Requirements:**
- Your review must at least **describe the problem solved**
- For **Telegram** reviews: you should have at least one photo/avatar in your account history that is at least **3 months old** (this is necessary for other clients to verify the authenticity of the account)
- For **Facebook** reviews: make sure that it's posted **publicly** ("Sharing to Public" above the review text)

I'll provide a discount after reading your review. Your detailed feedback helps me to improve my services!`,
                ru: 
`Чтобы получить скидку, опубликуйте отзыв на одной из указанных платформ. В целях экономии времени я подготовил шаблон — просто ответьте на следующие вопросы:
1. Какой услугой пользовались (или с какой проблемой обратились)?
2. Какие варианты решения проблемы изучали (и почему обратились ко мне)?
3. Как я помог решить проблему?
4. Насколько быстро и качественно была выполнена работа? Что (не) понравилось?
5. Что ожидали и что получили в итоге?

Форма текста свободная. Можно также добавить какие-либо другие мысли: возникшие сомнения, которые были решены, качество коммуникации и т.д. Крайне желательно, чтобы отзыв был адресован не мне, а другим потенциальным клиентам, т.е. написан как рекомендация. Вам не обязательно иметь "живой" или открытый настройками приватности профиль, хотя это также ценные его свойства для меня. Пожалуйста, пишите **одним сообщением**.

**Обязательные условия:**
- Ваш отзыв должен как минимум **описать решенную задачу**
- Для отзыва в **Telegram**: иметь хотя бы одно фото/аватар в истории аккаунта, которому как минимум **3 месяца** (это необходимо для подтверждения подлинности аккаунта другими клиентами)
- Для отзыва в **Facebook**: убедиться, что он размещается **публично** ("Доступно всем" над текстом отзыва)

Я предоставлю скидку после прочтения отзыва. Помните, что Ваши развёрнутые отзывы помогают мне улучшать качество услуг!`
            },
        },
    },
    background: {
        heading: {
            en: "# 📚 BACKGROUND",
            ru: "# 📚 ОПЫТ"
        },
        block1: {
            en: "I began by studying the field academically, but went into self-study once realized it's easier to learn with my *very custom* roadmap. I've even created [my own course](/course) along the way, using study notes.",
            ru: "Я начал с академического изучения области, однако перешёл на самообучение, поскольку понял, что мне легче учиться по собственному, *своеобразному* учебному плану. По пути я даже создал [свой курс](/course), используя учебные заметки."
        },
        block2: {
            en: "A couple things on my background that are worth mentioning:",
            ru: "Несколько фактов из моей биографии, которые стоит упомянуть:"
        },
        block3: {
            en: `
- 🎓 [B.S.](https://t.me/venturingforth/394) in **Applied Mathematics & Computer Science** (more info in [CV](/cv))<br/>
- 💼 [1.5 year](/cv) of **full-time work** experience<br/>
- 🤓 33 completed **courses**: 23 certified and 10+ non-certified (see the section below)<br/>
- 💪 Actively [contributing](https://github.com/avrtt) to **open-source** community<br/>
- 🏅 [Have a rank](https://kaggle.com/lenferdetroud) of Kaggle Competitions Expert (top 500)<br/>
- ✍️ Writing [blog posts](/research) about everything interesting I **research** since 2022<br/>
- 🔎 Currently **developing skills** towards [AI engineering](https://en.wikipedia.org/wiki/Artificial_intelligence_engineering)<br/>
- 📢 Keeping tech-related **social media blogs** beyond this website (see links on the [Home](/) page)<br/>
                `,
            ru: `
- 🎓 [Степень бакалавра](https://t.me/venturingforth/394) по **прикладной математике и информатике** (см. информацию в [CV](/cv))<br/>
- 💼 [1.5 года](/cv) опыта **фулл-тайм трудоустройства**<br/>
- 🤓 33 пройденных **курса**: 23 с сертификатами и 10+ без них (см. раздел ниже)<br/>
- 💪 Активно [вношу вклад](https://github.com/avrtt) в **опенсорс** сообщество<br/>
- 🏅 [Имею звание](https://kaggle.com/lenferdetroud) "Kaggle Competitions Expert" (топ 500)<br/>
- ✍️ Пишу [посты](/research) про всё интересное, что **изучаю** с 2022<br/>
- 🔎 На данный момент **развиваю навыки** в направлении [AI engineering](https://en.wikipedia.org/wiki/Artificial_intelligence_engineering)<br/>
- 📢 Веду профессиональные **блоги в соцсетях** помимо данного сайта (см. ссылки в [Home](/))<br/>
                `
        },
        block4: {
            en: "I've developed a *tremendous* amount of **Python programs** of different intricacy since I got into programming. Python, when it comes to implementing something, is definitely one of my strongest (if not the strongest) hard skills. Now I build software using AI for acceleration.",
            ru: "Я разработал *огромное* количество **приложений на Python** различной сложности с момента, когда начал изучать программирование. Python, когда дело касается реализации чего-либо, — один из моих самых сильных хард-скиллов (если не самый сильный). Сейчас я разрабатываю программы с использованием ИИ для ускорения."
        },
        block5: {
            en: "The second important hallmark is my experience in **visualization**. I have some UX/UI knowledge, and I've created many data representations using different kinds of datasets. By doing this just for fun, I learned the philosophy behind the good visualization, and now I can design and build intuitive charts and dashboards in my own style.",
            ru: "Вторым моим выделяющимся хард-скиллом является **визуализация данных**. У меня есть некоторые знания в области UX/UI и я создал большое количество визуализаций данных разного характера. Зачастую занимаясь этим просто ради удовольствия, я понял философию, стоящую за правильной визуализацией, и теперь способен создавать интуитивно понятные графики и дашборды в собственном стиле."
        },
        block6: {
            en: `My primary soft skills are **adaptability** and **curiosity**. Although I don't have a strong expertise in a specific domain, I can easily learn new things by asking "why" in anything I touch, and I can do it *very quickly*. That's saved me many times!`,
            ru: "Мои основные софт-скиллы — **адаптивность** и **любознательность**. Несмотря на то, что у меня нет глубоких знаний в определенной отрасли бизнеса, я легко осваиваю новое, задавая себе вопрос «почему» во всем, к чему бы ни прикоснулся, и я делаю это *очень быстро*. Это не раз спасало меня!"
        },
    },
    courses: {
        heading: {
            en: "# 📜 COURSES",
            ru: "# 📜 КУРСЫ"
        },
        intro: {
            en: "I enjoy learning from courses all the time. Here's a compact list of some of the courses I've taken that I liked the most (clicking redirects to certificate proof, if any):",
            ru: "Я люблю постоянно учиться по курсам. Вот компактный список некоторых пройденных курсов, которые понравились мне больше всего (нажатие перенаправит на полученный сертификат, если он есть):"
        },
    },
    stack: {
        heading: {
            en: "# 🛠️ TECH & TOOL STACK",
            ru: "# 🛠️ СТЭК И ИНСТРУМЕНТЫ"
        },
    },
    payment: {
        heading: {
            en: "# 💳 PAYMENT METHODS",
            ru: "# 💳 МЕТОДЫ ОПЛАТЫ"
        },
    },
    related: {
        heading: {
            en: "# 🔗 RELATED LINKS",
            ru: "# 🔗 РЕЛЕВАНТНЫЕ ССЫЛКИ"
        },
        links: {
            en: `
- ▶️ [YouTube](https://www.youtube.com/channel/UCpPtaqqxzFqm9rZAh2xC5OA)<br/>
- 📚 [Telegram (tech blog)](https://t.me/avheuristics)<br/>
- 🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)<br/>
- 🧩 [LeetCode](https://leetcode.com/avrtt/)<br/>
- ⚙️ [GitHub](https://github.com/avrtt)<br/>
- 💼 [LinkedIn](https://www.linkedin.com/in/avrtt/)<br/>
- 📢 [Facebook (business page)](https://www.facebook.com/averett.freelance/)<br/>
- 🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)
                `,
            ru: `
- ▶️ [YouTube](https://www.youtube.com/channel/UCpPtaqqxzFqm9rZAh2xC5OA)<br/>
- 📚 [Telegram (профессиональный блог)](https://t.me/avheuristics)<br/>
- 🏆 [Kaggle](https://www.kaggle.com/lenferdetroud)<br/>
- 🧩 [LeetCode](https://leetcode.com/avrtt/)<br/>
- ⚙️ [GitHub](https://github.com/avrtt)<br/>
- 💼 [LinkedIn](https://www.linkedin.com/in/avrtt/)<br/>
- 📢 [Facebook (страница бизнеса)](https://www.facebook.com/averett.freelance/)<br/>
- 🎓 [Coursera](https://www.coursera.org/user/6debb8344117076d8b1d5f743066057c)
                `,
        },
    },
}

export const textServices = {
    intro: {
        en: 
`This subpage provides a detailed overview of all the freelance services that I *prefer* to do right now. Keep in mind: the list is not exhaustive, and we may have a deal on things that goes beyond it.`,
        ru: `
Данная подстраница предоставляет подробный обзор всех фриланс-услуг, которые я *предпочитаю* выполнять в данный момент. Помните: список не является исчерпывающим, и мы можем договориться о задачах, выходящих за его рамки.`
    },
    service1: {
        desc: {
            en: 
`Modular software is built with reusable, well-structured components, making it scalable and easy to maintain. This service is ideal for individuals or teams needing complex and organized programming projects. Whether you're building a tool, user application or library, modular design ensures flexibility and long-term reliability.`,
            ru: 
`Модульные приложения создаются из многократно используемых, хорошо структурированных компонентов, что делает их масштабируемым и простым в обслуживании. Данная услуга идеально подходит частным лицам или командами, которым нужны сложные, организованные программные проекты. Независимо от того, создаёте ли Вы инструмент, пользовательское приложение или библиотеку, модульный дизайн обеспечивает гибкость и надежность в долгосрочной перспективе.`
        },
        youGet: {
            en: 
`- A Python codebase organized into modules and packages
- Features like clean APIs, clear documentation and error handling
- Scalable design, enabling future enhancements and integrations
- Fully tested software with unit and integration tests included`,
            ru: 
`- Код на Python, организованный в виде модулей и пакетов
- Чистые API, документация и обработка ошибок
- Масштабируемый дизайн, позволяющий в дальнейшем улучшать и интегрировать приложение
- Полностью протестированное ПО, прошедшее модульные и интеграционные тесты`
        },
        why: {
            en: 
`- **Save development time**: reuse modules for future projects or extensions
- **Improve collaboration**: structured code makes teamwork and onboarding smoother
- **Ensure reliability**: robust, tested modules minimize bugs and downtime`,
            ru:
`- **Экономия времени разработки**: используйте модули повторно в будущих расширениях функционала
- **Ускорение совместной работы**: структурированный код упрощает командную работу и онбординг
- **Надежность**: протестированные модули минимизируют ошибки и downtime`
        },
        iDo: {
            en: 
`- Plan the software architecture based on your project requirements
- Develop Python modules with clear input/output
- Use best practices for structuring codebases (e.g., following PEP-8 guidelines)
- Test modules using Python testing frameworks (**Pytest**, **Unittest**)
- Deliver the software with clear setup instructions, module documentation and API documentation`,
            ru:
`- Планирую архитектуру ПО в соответствии с вашими требованиями
- Разрабатываю модули на Python с четкими входными/выходными данными
- Применяю лучшие практики для структурирования кода (например, соблюдение стандартов PEP-8)
- Тестирую модули с использованием соответствующих фреймворков (**Pytest**, **Unittest**)
- Передаю ПО с понятными инструкциями по настройке, документацией модулей и API`
        },
        prerequisites: {
            en: 
`- A description of the project, its goals and the functionality required
- Any existing code or systems to integrate with
- Specifications for APIs, libraries or frameworks to be included
- (Optional) Examples of desired architecture or project templates`,
            ru:
`- Описание проекта, его целей и требуемого функционала
- Любой существующий код или системы, требующие интеграции
- Спецификации для API, библиотек или фреймворков, которые должны быть включены
- (Необязательно) Примеры желаемой архитектуры или шаблонов проекта`
        },
        pricing: {
            en: 
`Highly depends on features and scope, but **~$200** is the average price for complex multi-module applications. Large-scale systems (e.g., enterprise-grade software with robust documentation) may cost **$400–$700**.`,
            ru:
`Сильно зависит от функционала и объёма работы, но **~200$** — средняя цена для комплексных многомодульных приложений. Системы большего масштаба (например, корпоративное ПО с полной документацией) могут стоить **400–700$**.`
        },
        paymentModel: {
            en:
`Payment is normally pre-fixed and always per-deliverable.`,
            ru:
`Оплата, как правило, заранее фиксированная и всегда попроектная.`
        },
    },
    service2: {
        desc: {
            en: 
`Web scraping involves extracting valuable data from websites in a structured format. If you're a business owner, marketer, researcher or data analyst, this service is for you. Need to track prices, monitor trends, collect leads or gather bulk data for research? Here's an efficient way to acquire information that can help you.`,
            ru:
`Веб-скрапинг — это извлечение ценных данных с сайтов в структурированном формате. Если Вы владелец бизнеса, маркетолог, исследователь или аналитик данных, эта услуга для Вас. Нужно отслеживать цены, мониторить тренды, собирать лиды или получать данные для исследований? Вот эффективный способ получить информацию, которая Вам поможет.`
        },
        youGet: {
            en: 
`- A clean, well-organized dataset in your preferred format (Excel, CSV, JSON or database-ready)
- Screenshots and sample outputs to ensure you're receiving exactly what you need
- (Optional) Scripts used to collect the data`,
            ru:
`- Чистый и хорошо структурированный набор данных в предпочитаемом формате (Excel, CSV, JSON или готовый к переносу в БД)
- Скриншоты и примеры результатов
- (Необязательно) Скрипты, которые использовались для сбора данных`
        },
        why: {
            en: 
`- **Save money**: no more manual data collection, which can be time-consuming and error-prone
- **Create revenue opportunities**: leverage market data to make better business decisions
- **Stay ahead of competitors**: gain insights into trends, customer preferences and more`,
            ru:
`- **Экономия денег**: больше никакого тредоёмкого ручного сбора данных, из-за которого в дальнейшем могут возникнуть ошибки
- **Возможности для роста выручки**: используйте рыночные данные для принятия более эффективных бизнес-решений
- **Преимущество перед конкурентами**: получите представление о трендах, предпочтениях клиентов и многом другом`
        },
        iDo: {
            en: 
`- Analyze your data requirements and target websites
- Use scraping & HTTP Python tools (**BeautifulSoup**, **Scrapy**, **requests**) or **Selenium** to create scripts
- Develop custom solutions that bypass restrictions like CAPTCHA or dynamic loading
- Automatically clean and preprocess the extracted data inside scripts using **Pandas** pipelines (if needed)
- Deliver the final dataset in the format of your choice`,
            ru:
`- Анализирую Ваши требования к данным и целевые веб-сайты
- Использую Python-инструменты скрапинга и работы с HTTP (**BeautifulSoup**, **Scrapy**, **requests**) или **Selenium** для создания скриптов
- Разрабатываю решения для обхода ограничений, таких как CAPTCHA или динамическая загрузка
- Автоматически очищаю и предварительно обрабатываю извлеченные данные внутри скриптов с использованием **Pandas** (если необходимо)
- Передаю итоговый набор данных в предпочитаемом Вами формате`
        },
        prerequisites: {
            en: 
`- The URLs of target websites and a clear description of the type of data you need to collect
- Information on the desired format of the output data`,
            ru:
`- URL целевых веб-сайтов и четкое описание типа данных, которые нужно собрать
- Информация о формате выходных данных`
        },
        pricing: {
            en: 
`The average price for scraping static pages with minimal formatting is **~$40**. Handling pagination, login authentication or dynamic content may cost **$60–$100**. More advanced features (e.g., bypassing captchas, integrating proxies or scraping multiple sites with API development) are highly unpredictable in price.`,
            ru:
`Средняя стоимость скрапинга статических страниц с минимальным форматированием составляет **~40$**. Работа с многостраничностью, аутентификацией или динамическим контентом может стоить **60–100$**. Стоимость более сложных функции (например, обход CAPTCHA, интеграция прокси или скрапинг множества сайтов с разработкой API) сильно непредсказуема.`
        },
        paymentModel: {
            en:
`Payment is always per-deliverable and pre-fixed.`,
            ru:
`Оплата всегда попроектная и предварительно фиксированная.`
        },
    },
    service3: {
        desc: {
            en: 
`Data processing turns raw data into the required form. Whether you're dealing with messy spreadsheets, incomplete databases or large volumes of unstructured information, this service helps you make sense of it. Ideal for small businesses, analysts or researchers who need to clean, organize and visualize data for decision-making.`,
            ru:
`Обработка данных — это превращение сырых данных в необходимый формат. Независимо от того, имеете ли Вы дело с неаккуратными таблицами, неполными базами данных или большим объемом неструктурированной информации, эта услуга поможет разобраться с ними. Идеально подходит для малого бизнеса, аналитиков или исследователей, которым нужно очищать, упорядочивать и визуализировать данные для принятия решений.`
        },
        youGet: {
            en: 
`- A structured and cleaned dataset ready for analysis
- (Optional) Scripts used to process the dataset`,
            ru:
`- Структурированный и очищенный набор данных, готовый к анализу
- (Необязательно) Скрипты, которые использовались для обработки данных`
        },
        why: {
            en: 
`- **Save time**: no more manual data cleaning or repetitive tasks
- **Streamlined operations**: enable efficient decision-making with organized and accurate data`,
            ru:
`- **Экономия времени**: больше никакой ручной очистки данных
- **Оптимизация работы**: обеспечьте эффективное принятие решений с организованными и точными данными`
        },
        iDo: {
            en: 
`- Depending on the source, load the data into my workspace to use Python tools (**Pandas**, **NumPy**), **SQL** or **Google Sheets** (**Excel**)
- Perform data validation
- Clean, sort and standardize raw data
- Handle missing values, inconsistencies and duplicates
- Perform advanced data transformation, like pivoting, merging or aggregating`,
            ru:
`- В зависимости от источника, загружаю данные в рабочее пространство для использования Python-инструментов (**Pandas**, **NumPy**), **SQL** или **Google Sheets** (**Excel**)
- Провожу валидацию данных
- Очищаю, сортирую и стандартизирую сырые данные
- Работаю с пропущенными значениями, несоответствиями и дубликатами
- Провожу продвинутую трансформацию данных, такую как сводка (pivoting), слияние или агрегация`
        },
        prerequisites: {
            en: 
`- The raw data files or access to your data source
- Details on the specific processing tasks or desired output
- (Optional) Information about the business problem or question you're trying to solve with the data`,
            ru:
`- Исходные файлы с сырыми данными или доступ к Вашему источнику данных
- Детали о конкретных операциях по обработке или желаемом результате
- (Необязательно) Информация о бизнес-задаче или вопросе, который Вы хотите решить с помощью данных`
        },
        pricing: {
            en: 
`**$40–$100** for basic tasks like cleaning datasets or simple transformations, depending on the amount of data. Handling large datasets with big data tools or creating reusable workflows may cost **$100–$200**. Advanced workflows (real-time processing, integrating pipelines) or working with specialized formats may cost more. The average price for this service is **~$70**.`,
            ru:
`**40–100$** за базовые задачи, такие как очистка данных или простые трансформации, в зависимости от объема данных. Обработка больших данных с использованием специализированных инструментов или создание повторно используемых рабочих процессов может стоить **100–200$**. Более сложные задачи, такие как обработка в реальном времени или работа со специальными форматами, могут стоить больше. Средняя цена за эту услугу составляет **~70$**.`
        },
        paymentModel: {
            en:
`In some cases, payment may be on an hourly basis.`,
            ru:
`В некоторых случаях оплата может быть почасовой.`
        },
    },
    service4: {
        desc: {
            en: 
`Data visualization turns numbers into understandable forms that can be presented to non-technical people or simply to see something important in those numbers. This service is perfect for business leaders, marketers, analysts or anyone looking to communicate insights clearly and effectively.`,
            ru:
`Визуализация данных превращает числа в понятные формы, которые можно представить для нетехнической аудитории, либо просто увидеть что-либо важное в этих числах. Данная услуга идеально подходит для руководителей, маркетологов, аналитиков и любых людей, которым требуется ясно и эффективно донести свои выводы.`
        },
        youGet: {
            en: 
`- Professionally designed charts, graphs, maps or infographics based on your data
- (Optional) Different variations of static visuals for presentations or reports`,
            ru:
`- Профессионально оформленные диаграммы, графики, карты или инфографика на основе Ваших данных
- (Необязательно) Разные вариации статичных визуализаций для презентаций или отчетов`
        },
        why: {
            en: 
`- **Better communication**: simplify complex data and understand its nature
- **Increased engagement**: captivate your audience with visually striking graphics
- **Improved decision-making**: quickly identify trends, anomalies and opportunities`,
            ru:
`- **Повышение информативности**: упростите сложные данные, чтобы понять их суть
- **Улучшение вовлеченности**: увлеките свою аудиторию выразительными графиками
- **Ускорение принятия решений**: быстро выявляйте тренды, аномалии и возможности`
        },
        iDo: {
            en: 
`- Analyze your data and determine the most effective visualization techniques
- Design visuals using Python tools (**Matplotlib**, **Seaborn**, **Plotly** and others) or **Superset**/**Tableau**
- Customize colors, layouts and interactivity to align with your branding or preferences
- Deliver exportable visuals compatible with your platforms
- Provide guidance on interpreting and using the visuals effectively`,
            ru:
`- Анализирую Ваши данные и выбираю наиболее эффективные методы визуализации
- Создаю визуализации с использованием Python (**Matplotlib**, **Seaborn**, **Plotly** и прочие инструменты) или **Superset**/**Tableau**
- Настраиваю цвета, макеты и интерактивность в соответствии с Вашим брендом или предпочтениями
- Предоставляю визуализации, совместимые с Вашими платформами
- Даю рекомендации по интерпретации и использованию визуализаций`
        },
        prerequisites: {
            en: 
`- A dataset or access to your data source
- Information on what you want to showcase or the story you want to tell
- Preferred platforms or tools if applicable
- (Optional) Branding guidelines or example visuals you admire`,
            ru:
`- Набор данных или доступ к Вашему источнику данных
- Информация о том, что Вы хотите продемонстрировать или как желаете выстроить сторителлинг
- Предпочитаемые платформы или инструменты
- (Необязательно) Руководства по брендингу или примеры визуализаций, которые Вам нравятся`
        },
        pricing: {
            en: 
`**$30–$50** for basic charts on common data types in Python, Excel or Google Sheets. **$80–$200** for interactive/animated visualizations and uncommon data types. **$200+** for highly customized and detailed visuals, advanced interactivity or visualizations on multiple datasets. These prices are mostly determined by urgency.`,
            ru:
`**30–50$** за базовые графики на распространённых типах данных с использованием Python, Excel или Google Sheets. **80–200$** за интерактивные/анимированные визуализации и работу с редкими типами данных. **200$+** за высококастомизированные и детализированные визуализации, продвинутую интерактивность или визуализации на нескольких наборах данных. Данные расценки в основном определяются срочностью.`
        },
        paymentModel: {
            en:
`In some cases, payment may be on an hourly basis.`,
            ru:
`В некоторых случаях оплата может быть почасовой.`
        },
    },
    service5: {
        desc: {
            en: 
`Exploratory data analysis uncovers patterns, relationships and anomalies in your data. Whether you're preparing for a data science project, trying to understand your customers or optimizing operations, EDA provides insights and ensures your data is ready for advanced analytics. This service is essentially a combination of data visualization and statistical analysis.`,
            ru:
`Разведывательный анализ данных (EDA) выявляет закономерности, взаимосвязи и аномалии в Ваших данных. Независимо от того, готовите ли Вы проект в области науки о данных, стремитесь понять своих клиентов или оптимизировать операции, EDA предоставляет инсайты и гарантирует готовность данных к более сложной аналитической работе. Данная услуга, по сути, сочетает в себе визуализацию данных и статистический анализ.`
        },
        youGet: {
            en: 
`- An in-depth overview of your data, including key statistics, distributions and correlations
- Visualizations to explore trends and relationships
- A concise report summarizing findings, potential insights and recommendations
- (Optional) Data cleaning and preparation to remove outliers, handle missing values and standardize formats`,
            ru:
`- Подробный обзор Ваших данных, включая ключевые статистики, распределения и корреляции
- Визуализации для изучения трендов и взаимосвязей
- Краткий отчёт с обобщением выводов, возможными инсайтами и рекомендациями
- (Необязательно) Очистка и подготовка данных для удаления выбросов, обработки пропущенных значений и стандартизации форматов`
        },
        why: {
            en: 
`- **Deeper insights**: reveal hidden trends and patterns in your data
- **Data quality assurance**: ensure your data is clean and reliable for further analysis
- **Informed decisions**: gain a solid foundation for strategy and predictive modeling`,
            ru:
`- **Углубление понимания**: выявление скрытых трендов и закономерностей в Ваших данных
- **Гарантия качества данных**: обеспечение чистоты и надежности набора данных для дальнейшего анализа
- **Обоснованные решения**: заложите прочный фундамент для стратегии и прогнозного моделирования`
        },
        iDo: {
            en: 
`- Depending on the source, load the data into my workspace to use **Python** tools, **SQL** or **Google Sheets** (**Excel**)
- Perform data cleaning (**Pandas**, **NumPy**)
- Identify outliers, missing values and potential biases in the dataset
- Prepare the data for further modeling or analysis by transforming and normalizing it
- Conduct descriptive statistical analysis to summarize your data
- Visualize relationships and distributions (**Seaborn**, **Matplotlib**)
- Make a report (.pdf, Juputer Notebook, Google Colab, etc.)`,
            ru:
`- В зависимости от источника, загружаю данные в рабочее пространство для использования **Python**-инструментов, **SQL** или **Google Sheets** (**Excel**)
- Провожу очистку данных (**Pandas**, **NumPy**)
- Выявляю выбросы, пропущенные значения и потенциальные смещения/перекосы (bias) в наборе данных
- Подготавливаю данные для дальнейшего моделирования или анализа, выполняя необходимые трансформации и нормализацию
- Провожу описательный статистический анализ для обобщения данных
- Визуализирую взаимосвязи и распределения (**Seaborn**, **Matplotlib**)
- Создаю отчёт (.pdf, Jupyter Notebook, Google Colab и т.д.)`
        },
        prerequisites: {
            en: 
`- The dataset or access to your data source
- A clear understanding of your goals (e.g., uncover trends, assess data quality or identify potential issues)
- Preferred output formats
- (Optional) A description of the specific problem you're addressing or the decisions you aim to inform with the findings`,
            ru:
`- Набор данных или доступ к Вашему источнику данных
- Понимание Ваших целей (например, выявление трендов, оценка качества данных или выявление потенциальных проблем)
- Предпочитаемые форматы выходных данных или отчета
- (Необязательно) Описание конкретной проблемы, которую Вы решаете, или решений, которые Вы планируете принимать на основе полученных данных`
        },
        pricing: {
            en: 
`**$50–$150** for summary statistics, correlations and basic charts with explanations. **$150–$250** for in-depth analysis, probably using feature engineering or specific problem-focused methods. Comprehensive reports on multiple large datasets or with advanced visualizations may vary in price highly.`,
            ru:
`**50–150$** за сводную статистику, корреляции и основные графики с пояснениями. **150–250$** за углубленный анализ, возможно с использованием feature engineering или специальных методов, ориентированных на конкретную задачу. Комплексные отчеты по нескольким большим наборам данных или с продвинутой визуализацией могут сильно варьироваться в цене.`
        },
        paymentModel: {
            en:
`Payment is often on an hourly basis.`,
            ru:
`Оплата зачастую почасовая.`
        },
    },
    service6: {
        desc: {
            en: 
`ML model fine-tuning involves optimizing pre-trained models to meet specific business needs. This service is ideal for businesses and researchers who want to maximize the performance of existing models for tasks like image classification, natural language processing or predictive analytics.`,
            ru:
`Тонкая настройка моделей машинного обучения подразумевает оптимизацию предварительно обученных моделей под Ваши задачи. Услуга идеально подходит для компаний и исследователей, желающих добиться максимальной производительности от существующих современных моделей для решения задач вроде классификации изображений, обработки естественного языка или предиктивной аналитики.`
        },
        youGet: {
            en: 
`- A fine-tuned ML model ready to solve your specific problem
- Comprehensive evaluation metrics to validate performance
- A detailed report explaining the modifications, performance improvements and potential applications
- (Optional) Deployment-ready code for integration into your existing systems`,
            ru:
`- Настроенная ML-модель для решения Вашей задачи
- Оценка производительности модели на продвинутых метриках
- Подробный отчёт о модификациях, улучшениях производительности и возможных приложениях
- (Необязательно) Готовый к деплою код для интеграции с Вашими системами`
        },
        why: {
            en: 
`- **Save time and resources**: use existing powerful models without starting from scratch
- **Customized solutions**: tailor models to your unique dataset and objectives
- **Enhanced accuracy**: improve predictions, classifications or forecasts to drive better results`,
            ru:
`- **Экономия времени и ресурсов**: использование готовых мощных моделей вместо разработки с нуля
- **Индивидуальный подход**: адаптация моделей под Ваш набор данных и цели
- **Повышенная точность**: улучшение предсказаний модели для достижения лучших результатов`
        },
        iDo: {
            en: 
`- Analyze your dataset, processses and objectives to identify the most suitable pre-trained model
- Fine-tune a baseline model using **TensorFlow**/**PyTorch** frameworks
- Optimize hyperparameters
- Perform rigorous evaluation using your data and refine the model iteratively
- (Optionally) Perform A/B testing of the model
- Deliver/integrate the fine-tuned model with clear documentation and guidance for use
- (Optionally) Monitor the model performance metrics in production for potential optimization`,
            ru:
`- Анализирую Ваш набор данных, процессы и задачи для выбора подходящей предварительно обученной модели
- Настраиваю бейзлайн-модель с использованием фреймворков **TensorFlow**/**PyTorch**
- Оптимизирую гиперпараметры
- Провожу тщательную оценку производительности на Ваших данных и итеративно улучшаю модель
- (Необязательно) Провожу A/B-тестирование модели
- Передаю/интегрирую готовую модель с документацией и рекомендациями по использованию
- (Необязательно) Мониторю метрики эффективности модели в продакшене для потенциальной оптимизации`
        },
        prerequisites: {
            en: 
`- A labeled dataset or clear instructions on where to source training data
- Details about the task you want to solve
- Information on the deployment environment (e.g., cloud platform, local servers)
- (Optional) Access to computational resources for model training`,
            ru:
`- Размеченный набор данных или четкие инструкции о том, откуда взять данные для обучения
- Информация о задаче, которую Вы решаете с помощью модели
- Подробности о среде развертывания (например, облачная платформа или локальные серверы)
- (Необязательно) Доступ к вычислительным ресурсам для обучения модели`
        },
        pricing: {
            en: 
`**$100–$400** for tuning pre-trained models with perfomance validation, depending on many factors such as quality of data, problem scope and domain.`,
            ru:
`**100–400$** за настройку предварительно обученных моделей с оценкой производительности, в зависимости от множества факторов: качества данных, сложности задачи, области применения и т.д.`
        },
        paymentModel: {
            en:
`Payment is normally pre-fixed and always per-deliverable.`,
            ru:
`Оплата, как правило, предварительно фиксированная и всегда попроектная.`
        },
    },
    service7: {
        desc: {
            en: 
`Frontend development focuses on creating engaging, user-friendly web applications. If you need a visually appealing interface, this service brings your ideas to life.`,
            ru:
`Фронтенд-разработка направлена на создание привлекательных и удобных веб-приложений. Если Вам нужен современный и стильный интерфейс, эта услуга воплотит Ваши идеи в жизнь.`
        },
        youGet: {
            en: 
`- A responsive, modern frontend for your needs
- Smooth navigation, interactive elements and an optimized UX
- Cross-browser compatibility and mobile-friendly designs
- Clean, well-documented code for seamless future updates or scaling`,
            ru:
`- Адаптивный, современный интерфейс под Ваши задачи
- Плавная навигация, интерактивные элементы и оптимизированный UX
- Кроссбраузерная совместимость и адаптация под мобильные устройства
- Чистый, хорошо документированный код для дальнейшего масштабирования или обновления`
        },
        why: {
            en: 
`- **Enhanced user engagement**: create interfaces that are easy and enjoyable to use
- **Increased conversions**: guide users effectively to achieve your business goals`,
            ru:
`- **Повышение вовлеченности пользователей**: работайте с интерфейсами, которые удобно использовать
- **Увеличение конверсии**: эффективная фокусировка внимания пользователей на Ваших бизнес-целях`
        },
        iDo: { 
            en: 
`- Design and develop the frontend using **React** framework
- Write clean, maintainable **JavaScript**/**TypeScript** components and **CSS** modules
- Implement animations, transitions and responsive design for a dynamic experience
- Test for compatibility across browsers and devices`,
            ru:
`- Проектирую и разрабатываю фронтенд с использованием **React**
- Пишу чистые и простые в обслуживании **JavaScript**/**TypeScript** компоненты и **CSS**-модули
- Реализую анимации, переходы и адаптивный дизайн для динамичного восприятия
- Тестирую совместимость с разными браузерами и устройствами`
        },
        prerequisites: {
            en: 
`- A detailed description of your project goals and target audience
- (Optional) Wireframes, mockups or design inspiration
- (Optional) Branding guidelines (logos, colors, fonts) for consistency
- (Optional) Access to APIs or backend services if the frontend will integrate with them`,
            ru:
`- Подробное описание целей Вашего проекта и целевой аудитории
- (Необязательно) Прототипы, макеты, референсы дизайна
- (Необязательно) Руководства/рекомендации по брендингу (логотипы, цвета, шрифты) для достижения целостности дизайна
- (Необязательно) Доступ к API или бэкенд-сервисам, если фронтенд предполагается с ними интегрировать`
        },
        pricing: {
            en: 
`**~$150** for frontend interfaces or single-page apps of moderate complexity with interactive elements and responsive designs. API integration and additional React modules may increase the price.`,
            ru:
`**~150$** за интерфейс или одностраничное приложение средней сложности с интерактивными элементами и адаптивным дизайном. Интеграция с API и дополнительные React-модули могут увеличить стоимость.`
        },
        paymentModel: {
            en:
`Payment is always per-deliverable, but the price isn't guaranteed to be pre-fixed and depends on the client's revisions.`,
            ru:
`Оплата всегда попроектная, однако предварительно фиксированная стоимость не гарантируется в случае, если клиент вносит правки в ТЗ.`
        },
    },
    service8: {
        desc: {
            en: 
`Static websites are lightweight, fast-loading websites that deliver consistent content to users. Perfect for personal portfolios, landing pages, blogs or event sites, static websites are cost-effective and require minimal maintenance. If you want a fast, secure and SEO-friendly online presence, this service is for you. Look, I even made one for myself.`,
            ru:
`Статические сайты — это легковесные, быстро загружаемые страницы с постоянным (статическим) контентом. Они идеально подходят для персональных портфолио, лэндингов, блогов или страниц мероприятий. Если Вам нужен быстрый, стабильно работающий и SEO-оптимизированный сайт (как, например, мой), который эффективен с точки зрения затрат и требует минимального обслуживания, эта услуга для Вас.`
        },
        youGet: {
            en: 
`- A responsive website for your needs
- Up to 10 pages (e.g., Home, About, Services, Contact) designed to showcase your content effectively
- Optimized for speed, security and search engines (SEO)
- Hosted and deployed on platforms like GitHub Pages, Netlify or Vercel`,
            ru:
`- Адаптивный сайт, соответствующий Вашим потребностям
- До 10 страниц (например, главная страница, "О нас", "Услуги", "Контакты" и т.д.), эффективно демонстрирующих необходимый Вам контент
- Оптимизация в контексте скорости, безопасности и поисковых систем (SEO)
- Хостинг и развертывание на таких платформах, как GitHub Pages, Netlify или Vercel`
        },
        why: {
            en: 
`- **Save costs**: no backend systems mean lower hosting fees and maintenance needs
- **Faster load times**: delight users with a seamless browsing experience
- **Enhanced security**: static sites are less prone to hacking compared to dynamic ones`,
            ru:
`- **Экономия**: минимизация или отсутствие бэкенда снижает расходы на хостинг и обслуживание
- **Быстрая загрузка страниц**: обеспечьте пользователям удобство при работе с сайтом
- **Повышенная безопасность**: статические сайты менее подвержены взломам, чем динамические`
        },
        iDo: {
            en: 
`- Develop the pages and components using **React** framework (**JavaScript**/**TypeScript**)
- Implement primitive **Next.js** backend or use SSG (**Gatsby** & **GraphQL**, **Jekyll**)
- Incorporate tools like **Tailwind CSS** for responsive design
- Optimize images, fonts and code to ensure fast load times
- Implement SEO best practices like metadata, alt text and site maps
- Host the website`,
            ru:
`- Разрабатываю страницы и компоненты с использованием **React** (**JavaScript**/**TypeScript**)
- Реализую примитивный бэкенд на **Next.js** или использую генератор статических сайтов (**Gatsby** & **GraphQL**, **Jekyll**)
- Использую такие инструменты, как, например, **Tailwind CSS** для создания адаптивного дизайна
- Оптимизирую изображения, шрифты и код для ускорения загрузки
- Реализую лучшие практики SEO, включая работу с метаданными, alt-тексты, sitemap и т.д.
- Размещаю сайт на хостинге`
        },
        prerequisites: {
            en: 
`- A clear description of the website's purpose and target audience
- Content for the website (e.g., text, images, logos)
- Design preferences or examples of websites you admire
- (Optional) A domain name and/or hosting preference`,
            ru:
`- Четкое описание назначения сайта и его целевой аудитории
- Контент для сайта (тексты, изображения, логотипы и т.д.)
- Предпочтения в дизайне или примеры сайтов, которые Вам нравятся
- (Необязательно) Доменное имя и/или предпочитаемый хостинг`
        },
        pricing: {
            en: 
`**$150–$250** for basic 2-3 pages website (personal portfolio, small business pages). **~$400** for multi-page websites with contact forms, SEO and animations. Extensive custom design and JavaScript functionality may vary these prices significally.`,
            ru:
`**150–250$** за простой сайт на 2-3 страницы (портфолио, страницы для малого бизнеса). **~400$** за многостраничные сайты с формами обратной связи, SEO и анимациями. Сложный, нестандартный дизайн и функциональность JavaScript могут существенно повлиять на эти цены.`
        },
        paymentModel: {
            en:
`Payment is always per-deliverable, but the price isn't guaranteed to be pre-fixed and depends on the client's revisions.`,
            ru:
`Оплата всегда попроектная, однако предварительно фиксированная стоимость не гарантируется в случае, если клиент вносит правки в ТЗ.`
        },
    },
    service9: {
        desc: {
            en: 
`Bots automate repetitive tasks and improve efficiency across various applications. This service is for everyone, especially businesses, marketers and individuals looking to save time and enhance productivity.

Here are the most popular types of bots I've worked on:
- **Informational bot**: collects/aggregates any data and notifies the user when needed
- **Assistant**: automates the work of a consultant; allows you to guide the user and answer frequently asked questions according to a consistent algorithm
- **Chatbot**: allows you to bring the functionality of popular language models to other platforms to create conversations; can be modified and trained on your data in order to answer non-standard questions from customers regarding your product, service, etc.
- **Auto commenter**: a userbot that monitors new posts in specified channels/groups/chats and instantly sends AI-generated comments below; each comment is generated based on the text of the post and your pre-defined bot behavior (prompt)

It's hard to classify bots clearly. Usually, they utilize a variety of different tools and methods.`,
            ru:
`Боты автоматизируют выполнение повторяющихся задач и повышают эффективность работы в различных приложениях. Данная услуга может понадобиться всем, но особенно часто ей пользуются бизнес, маркетологи и частные лица, которым необходима экономия времени.

Вот наиболее популярные виды ботов, над которыми я работал:
- **Информационный бот**: собирает/агрегирует какие-либо данные и уведомляет пользователя в нужные моменты
- **Бот-ассистент**: автоматизирует работу консультанта; позволяет направлять пользователя и отвечает на часто задаваемые вопросы по единому алгоритму
- **Чат-бот**: позволяет перенести функционал популярных языковых моделей на другие платформы для создания диалогов; может быть модифицирован и обучен на Ваших данных для того, чтобы отвечать на нестандартные вопросы клиентов о Вашем продукте, сервисе и т.д.
- **Бот-комментатор** (нейрокомментинг): бот на основе аккаунта пользователя (юзербот), отслеживающий новые посты в заданных каналах/группах/чатах и моментально отправляющий сгенерированные нейросетью комментарии под ними; каждый комментарий генерируется на основе текста поста и заранее прописанного Вами поведения бота

Ботов сложно классифицировать однозначно. Зачастую в них реализуется смешанный функционал с использованием множества разнородных инструментов и методов.`
        },
        youGet: {
            en: 
`- A customized bot designed to handle specific tasks
- Fully tested and deployed to your preferred platform (e.g., Telegram, Instagram, Discord, your website, standalone scripts)
- (Optional) Clear documentation on how to operate and maintain the bot`,
            ru:
`- Индивидуально настроенный бот, предназначенный для выполнения конкретных задач
- Полное тестирование с дальнейшим размещением на предпочитаемой платформе (например, Telegram, Instagram, Discord, Ваш сайт, отдельные скрипты)
- (Необязательно) Понятная документация по эксплуатации и обслуживанию бота`
        },
        why: {
            en: 
`- **Save time**: automate repetitive tasks, freeing up valuable resources
- **Improve engagement**: chatbots provide 24/7 customer support or lead generation
- **Streamline operations**: automate data entry, notifications or even advanced tasks like workflow orchestration`,
            ru:
`- **Экономия времени**: автоматизируйте повторяющиеся задачи, освобождая ресурсы
- **Повышение вовлеченности**: чат-боты обеспечивают круглосуточную поддержку и привлечение новых клиентов
- **Оптимизация операций**: автоматизация ввода данных, отправки уведомлений и различных сложных задач, в том числе организации рабочих циклов`
        },
        iDo: {
            en: 
`- Assess your requirements and choose the right technologies
- Develop the main bot components (**Python**)
- Integrate language model functionality
- Test and refine the bot for accuracy, speed and reliability
- Integrate the bot with your systems, platforms or APIs as needed`,
            ru:
`- Оцениваю требования и выбираю подходящие технологии
- Разрабатываю основные компоненты бота на **Python**
- Интегрирую функциональность языковой модели
- Тестирую и дорабатываю бота для обеспечения точности, скорости и надёжности
- Интегрирую бота в Ваши системы, платформы или API (при необходимости)`
        },
        prerequisites: {
            en: 
`- A clear description of the task or problem you want the bot to address
- Access to the data sources, APIs, bot accounts or platforms the bot will interact with
- (Optional) Information on the preferred bot hosting or deployment platform (if applicable)
- (Optional) Examples or specifications for desired bot behavior

If you order an userbot, then make sure there's nothing confidential or important on it. To access accounts API, in Telegram for instance, I need phone numbers with confirmation codes to log in, and passwords if you have two-factor authentication.`,
            ru:
`- Чёткое описание задачи или проблемы, которую Вы хотите решить с помощью бота
- Доступ к источникам данных, API, бот-аккаунтам или платформам, с которыми будет взаимодействовать бот
- (Необязательно) Информация о предпочтительной платформе хостинга/развёртывания бота
- (Необязательно) Примеры или характеристики желаемого поведения бота

Если Вы заказываете юзербота (бота на основе аккаунта пользователя) — убедитесь, что на нём нет ничего конфиденциального или важного. Чтобы получить доступ к API аккаунта, например, в Telegram, мне понадобятся номер телефона и код подтверждения для входа, а при наличии двухфакторной аутентификации — ещё и пароль.`
        },
        pricing: {
            en: 
`This service is highly unpredictable in price. In average, an NLP-driven bot of medium complexity with APIs integration or databases costs **~$130**.`,
            ru:
`Данная услуга крайне непредсказуема в цене. В среднем, NLP-ориентированный бот с не самым простым функционалом, интеграцией API или базой данных стоит **~$130**.`
        },
        paymentModel: {
            en:
`Payment is normally pre-fixed and always per-deliverable.`,
            ru:
`Оплата, как правило, предварительно фиксированная и попроектная.`
        },
    },
    service10: {
        desc: {
            en: 
`Data collection software automates the gathering of structured or unstructured data from various sources like websites, APIs or databases. If you need to collect dynamic data for research, analytics, reporting or decision-making, this service will provide you with a reusable tool.`,
            ru:
`ПО для сбора данных автоматизирует получение структурированных или неструктурированных данных из различных источников, таких как сайты, API или базы данных. Если Вы нуждаетесь в сборе динамических данных для исследований, аналитики, подготовки отчётов или принятия решений, эта услуга предоставит инструмент для многократного использования.`
        },
        youGet: {
            en: 
`- Custom-built software for your data collection needs
- Data delivered in a structured format like Excel, CSV or a database
- Features like error handling, scheduling and automated updates
- Documentation and training on how to use the software effectively`,
            ru:
`- Индивидуально разработанное ПО для сбора данных
- Получение данных в структурированном формате (Excel, CSV, БД)
- Такие функции, как обработка ошибок, scheduling и автоматическое обновление
- Документация и обучение эффективному использованию`
        },
        why: {
            en: 
`- **Save time**: automate tedious data collection tasks
- **Improve decision-making**: access high-quality data to power analytics and insights
- **Stay competitive**: gather real-time data for trends, pricing or customer behavior`,
            ru:
`- **Экономия времени**: автоматизация трудоемких задач по сбору данных
- **Улучшение процесса принятия решений**: доступ к высококачественным данным, позволяющим проводить аналитику и исследования
- **Сохраняйте конкурентоспособность**: оперативно собирайте данные о тенденциях, ценообразовании или поведении клиентов в режиме реального времени`
        },
        iDo: {
            en: 
`- Analyze your data collection requirements
- Develop software using Python tools (**BeautifulSoup**, **Scrapy**, **requests**) and API integrations
- Test the software extensively to ensure accuracy and reliability
- Deliver the tool with documentation`,
            ru:
`- Анализирую Ваши требования
- Разрабатываю ПО с использованием Python-инструментов (**BeautifulSoup**, **Scrapy**, **requests**) и интеграциями API
- Тестирую ПО, убеждаюсь в точности и надёжности
- Передаю инструмент с документацией`
        },
        prerequisites: {
            en: 
`- A clear description of the data you need and where it can be sourced from
- Information on the preferred output format or storage location
- (Optional) Access to APIs, databases or websites requiring authentication`,
            ru:
`- Четкое описание требуемых данных и источников их получения
- Информация о предпочтительном формате вывода или способе хранения
- (Необязательно) Доступ к API, базам данных или сайтам, требующим аутентификации`
        },
        pricing: {
            en: 
`**$100–$150** for one-time data extraction tool. **$150–$300** for tools with scheduling, filtering or error-handling. Real-time data collection may double the price.`,
            ru:
`**$100-$150** за разовые инструменты извлечения данных. **$150-$300** за инструменты с scheduling, фильтрацией или обработкой ошибок. Сбор данных в режиме реального времени может удвоить цену.`
        },
        paymentModel: {
            en:
`Payment is normally pre-fixed and always per-deliverable.`,
            ru:
`Оплата, как правило, предварительно фиксированная и попроектная.`
        },
    },
    service11: {
        desc: {
            en: 
`Hypothesis testing is a statistical method for evaluating assumptions about data. It's perfect for researchers, analysts and business owners who need to make data-driven decisions (by testing marketing strategies, customer preferences, product effectiveness and so on).`,
            ru:
`Проверка гипотез — это статистический метод оценки суждений о данных. Он подходит для исследователей, аналитиков и владельцев бизнеса, которым необходимо принимать решения на основе данных, тестируя маркетинговые стратегии, предпочтения клиентов, эффективность разрабатываемых продуктов и т.д.`
        },
        youGet: {
            en: 
`- Statistical analysis performed using industry-standard techniques
- Report that explain the results in a simple way
- Recommendations or next steps based on the findings`,
            ru:
`- Статистический анализ, выполненный с использованием стандартных для данной отрасли методов
- Отчёт, объясняющий результаты простым языком
- Рекомендации или последующие шаги на основе полученных результатов`
        },
        why: {
            en: 
`- **Validate ideas**: make confident decisions based on data, not guesses
- **Improve strategies**: identify what works and what doesn't for your goals
- **Optimize resources**: focus efforts on initiatives with proven success potential`,
            ru:
`- **Проверка обоснованности идей**: принимайте уверенные решения, основанные на данных, а не на предположениях
- **Совершенствование стратегий**: определите, что именно способствует достижению Ваших целей, а что нет
- **Оптимизация ресурсов**: сосредоточьте усилия на инициативах с доказанным потенциалом успеха`
        },
        iDo: {
            en: 
`- Define the null and alternative hypotheses based on your objectives
- Collect or clean data to ensure it meets testing requirements
- Perform statistical tests using Python tools (**SciPy**, **Statsmodels** and many others)
- Create clear visuals (e.g., graphs, p-value tables) to interpret the results
- Write a detailed report summarizing the findings and their implications`,
            ru:
`- Определяю нулевую и альтернативную гипотиезы, основываясь на Ваших целях
- Собираю и очищаю данные для обеспечения их соответствия требованиям
- Провожу статистические тесты с использованием инструментов Python (**SciPy**, **Statsmodels** и многие другие)
- Создаю понятные визуализации (например, графики, таблицы значения p-value и т.д.) для интерпретации результата
- Пишу детальный отчёт, резюмируя результаты и их приложения`
        },
        prerequisites: {
            en: 
`- A setup and explanation of the hypothesis to be tested, or a research question
- A dataset relevant to the hypothesis (raw or cleaned)
- Information on the context of the problem (e.g., what decision will the results impact?)
- (Optional) Benchmarks or expected results for comparison`,
            ru:
`- Постановка и объяснение проверяемой гипотезы или вопрос исследования
- Набор данных, относящийся к гипотезе (необработанный или очищенный)
- Информация о контексте рассматриваемой задачи (например, на какое решение должны повлиять результаты)
- (Необязательно) Контрольные или ожидаемые результаты для сравнения`
        },
        pricing: {
            en: 
`This service depends on many factors, price is negotiable.`,
            ru:
`Данная услуга зависит от многих факторов, цена договорная.`
        },
        paymentModel: {
            en:
`Payment is normally on an hourly basis.`,
            ru:
`Оплата, как правило, почасовая.`
        },
    },
    service12: {
        desc: {
            en: 
`Dashboards are interactive visual tools that aggregate, analyze and display data in real time. Ideal for business leaders, analysts and teams needing to monitor KPIs, track performance or derive insights quickly.`,
            ru:
`Дашборды — это интерактивные визуальные инструменты, которые агрегируют, анализируют и компактно отображают данные в реальном времени. Идеально для руководителей, аналитиков и команд, которые желают отслеживать ключевые показатели (KPI), контролировать производительность или быстро получать инсайты.`
        },
        youGet: {
            en: 
`- A custom-built, interactive dashboard
- Integration with data sources (Excel, databases, APIs, etc.) for real-time updates
- Clean, user-friendly layouts designed to display critical metrics effectively
- (Optional) Tutorials or guides to help your team navigate and utilize the dashboard`,
            ru:
`- Индивидуально разработанный интерактивный дашборд
- Интеграция с источниками данных (Excel, базы данных, API и т.д.) для обновлений в реальном времени
- Чистый и удобный интерфейс для эффективного отображения ключевых метрик
- (Необязательно) Руководство/инструкции для помощи Вашей команде в использовании дашборда`
        },
        why: {
            en: 
`- **Improved decision-making**: access insights instantly
- **Time savings**: consolidate data from multiple sources into one view
- **Enhanced collaboration**: share insights seamlessly with your team or stakeholders`,
            ru:
`- **Ускорение принятия решений**: имейте мгновенный доступ к инсайтам
- **Экономия времени**: консолидация данных из нескольких источников в одну единственную обзорную панель
- **Упрощение совместной работы**: беспрепятственный обмен информацией с командой и не только с ней`
        },
        iDo: {
            en: 
`- Understand your key metrics, pick the right tool and design a layout that meets your needs
- Build a dashboard using the chosen tool (see below)
- Connect the dashboard to your data sources for live or automated updates
- Optionally use helper Python libraries (**Matplotlib**, **Seaborn**, **Pandas**) and **SQL**
- Optimize visuals for clarity, ensuring metrics are easy to interpret
- Provide training or documentation for effective use and updates

How I usually choose a tool to create a dashboard:
- **Google Sheets** and/or **Looker Studio** (alt. **Excel**): for simple, ad-hoc projects (small-scale, highly portable dashboards, mostly for non-technical clients) and projects requiring little scripting (Google Apps Script); usually GS acts as a lightweight backend for Looker Studio (formerly Google Data Studio)
- **Dash**: for complex, interactive and highly customizable dashboards, especially for embedding analytics in web apps or other code-driven projects (it's a part of Plotly, a Python library)
- **Apache Superset**: for projects that rely heavily on SQL and/or as a lightweight & open-source alternative of Tableau (it's no-code, therefore it's faster)
- **Grafana**: for real-time monitoring projects, especially when working with time series; probably the best option for DevOps working with cloud systems like Prometheus, Elasticsearch, etc.
- **Tableau Public**: for simple dashboards, fast building (it's no-code too), demos and quick sharing with non-technical clients

Besides these tools, some “exotic” types of dashboards can be created using **Streamlit**. Streamlit apps development is moved to a [separate type of services](/freelance/services/#15).`,
            ru:
`- Анализирую ключевые метрики, подбираю правильный инструмент и разрабатываю макет, отвечающий Вашим потребностям
- Создаю дашборд с использованием выбранного инструмента (см. ниже)
- Связываю дашборд к Вашими источникам данных для автоматических обновлений или обновлений в реальном времени
- При необходимости использую дополнительные Python-инструменты (**Matplotlib**, **Seaborn**, **Pandas**) и **SQL**
- Оптимизирую визуализации для наглядности, чтобы метрики легко интерпретировались
- Обучаю или предоставляю документацию для эффективного использования и дальнейших обновлений дашборда

Как я обычно выбираю инструмент для создания дашборда:
- **Google Sheets** и/или **Looker Studio** (альтернатива **Excel**): для простых, ad-hoc проектов (небольшие и хорошо портируемые дашборды, в первую очередь для нетехнических клиентов) и проектов, требующих немного скриптов (Google Apps Script); обычно GS выступает в качестве легковесного бэкенда для Looker Studio (в прошлом Google Data Studio)
- **Dash**: для сложных, интерактивных и гибко настраиваемых дашбордов, особенно для встраивания аналитики в веб-приложения или другое ПО (является частью Plotly, библиотеки Python)
- **Apache Superset**: для проектов, которые в значительной степени зависят от SQL и/или как лекговесная и опенсорсная альтернатива Tableau (это no-code инструмент, поэтому разработка на нём быстрее)
- **Grafana**: для проектов, связанных с мониторингом в реальном времени, особенно при работе с временными рядами; вероятно, лучший вариант для DevOps, работающих с такими облачными системами, как Prometheus, Elasticsearch и т.д.
- **Tableau Public**: для простых дашбордов, быстрой разработки (это тоже no-code), демонстраций и быстрого обмена с нетехническими клиентами

Помимо этих инструментов, некоторые "экзотические" виды дашбордов создаются с использованием **Streamlit**. Разработка Streamlit-приложений вынесена в [отдельный тип услуг](/freelance/ru/services/#15).`
        },
        prerequisites: {
            en: 
`- A clear understanding of the KPIs or data you want to track
- Access to your data sources (e.g., files, databases, APIs)
- (Optional) Branding guidelines or design preferences
- (Optional) Examples of dashboards you like or features you need (e.g., filters, drill-downs)
- (Optional) Preferred dashboard development tool from the list above`,
            ru:
`- Четкое описание ключевых метрик или данных, которые Вы хотите отслеживать
- Доступ к Вашим источникам данных (файлы, базы данных, API)
- (Необязательно) Руководство по брендингу или предпочтения в дизайне
- (Необязательно) Примеры дашбордов или функционал, который Вам нужен: фильтры, углубление в данные (drill-downs) и т.д.
- (Необязательно) Предпочтительный инструмент разработки из перечисленных выше`
        },
        pricing: {
            en: 
`Dashboards with simple visualizations and KPIs cost **$100–$300**. Custom features with advanced analytics, real-time updates and handling many data sources may cost **$300–$800**. The average price is **~$350**.`,
            ru:
`Дашборды с простыми визуализациями и ключевыми показателями стоят **$100–$300**. Специальные функции с расширенной аналитикой, обновлением в реальном времени и работой с большим количеством источников данных могут стоить **$300-$800**. Средняя стоимость составляет **~$350**.`
        },
        paymentModel: {
            en:
`Payment is normally on an hourly basis.`,
            ru:
`Оплата, как правило, почасовая.`
        },
    },
    service13: {
        desc: {
            en: 
`Technical writing transforms complex concepts into clear, concise documentation. This service is perfect for businesses needing user manuals, API documentation, technical blogs or guides. Whether you're targeting developers, users or potential clients, you get materials that are professional and easy to understand.`,
            ru:
`Техрайтинг превращает сложные концепции в понятную и лаконичную документацию. Эта услуга идеально подходит для создания руководств, документации API, технических блогов или уроков. Независимо от целевой аудитории — разработчики, пользователи или потенциальные клиенты — Вы получите профессионально выглядящий и легкочитаемый материал.`
        },
        youGet: {
            en: 
`- Well-organized, professional text to your audience in preferred writing style
- Accurate and concise language, free from ambiguity
- (Optional) Visual aids such as flowcharts, diagrams or screenshots`,
            ru:
`- Хорошо структурированный, профессиональный текст, написанный с учетом стиля Вашей аудитории
- Точная и лаконичная формулировка, без двусмысленностей
- (Необязательно) Визуальные материалы, такие как схемы, диаграммы или скриншоты`
        },
        why: {
            en: 
`- **Streamlined communication**: help users or teams understand your tools and systems
- **Increased efficiency**: deduce support requests with clear, self-service documentation
- **Enhanced credibility**: professional materials reflect the quality of your product or service`,
            ru:
`- **Упрощение коммуникации**: помогите пользователям или командам понять Ваши инструменты и системы
- **Повышение эффективности**: уменьшите количество запросов в поддержку с помощью понятно изложенной документации
- **Повышение доверия**: профессиональные тексты подчеркивают качество Вашего продукта или услуги`
        },
        iDo: {
            en: 
`- Research and analyze your product or process to understand its functionality
- Organize and structure content based on user needs and objectives
- Write and edit clear, accurate and engaging technical documents
- Ensure consistency with your brand's tone and style`,
            ru:
`- Изучаю и анализирую Ваш продукт или процесс
- Организовываю и структурирую контент с учетом потребностей пользователей и целей
- Пишу понятные, точные и легкочитаемые тексты
- Обеспечиваю соответствие текстов тону и стилю Вашего бренда`
        },
        prerequisites: {
            en: 
`- A description of the product, process or system needing documentation
- Access to relevant materials, such as prototypes, systems or existing notes
- Details about your target audience and their familiarity with the subject
- (Optional) Examples of documentation styles or formats you prefer`,
            ru:
`- Описание продукта, процесса или системы, требующих документации
- Доступ к соответствующим материалам, таким как прототипы, системы или заметки
- Информация о целевой аудитории и её уровне понимания темы
- (Необязательно) Примеры стилей или форматов, которые Вам нравятся`
        },
        pricing: {
            en: 
`Simple documentation cost **$50–$150** (guides or FAQs), depending on text length. API documentation and user manuals cost **$150–$300**. Complex technical whitepapers may cost more.`,
            ru:
`Простая документация (инструкции, FAQ) стоит **$50–$150** в зависимости от объёма текста. Документация API и руководства пользователя стоят **$150–$300**. Сложные технические бизнес-документы (white papers) могут стоить дороже.`
        },
        paymentModel: {
            en:
`Payment is always on an hourly basis.`,
            ru:
`Оплата всегда почасовая.`
        },
    },
    service14: {
        desc: {
            en: 
`Scripting involves writing code to automate tasks, enhance workflows or solve specific problems. If you're looking to save time or add custom functionality to your tools, this service can help you.`,
            ru:
`Скриптинг — это написание кода для автоматизации операций, ускорения рабочих процессов или решения конкретных задач. Если Вы хотите сэкономить время или добавить уникальный функционал в свои инструменты, эта услуга подойдет Вам.`
        },
        youGet: {
            en: 
`- Custom scripts to automate tasks, process data or solve specific challenges
- Fully tested, efficient and error-free code in your preferred scripting language (Python, Bash, PowerShell)
- Clear instructions for running the scripts and integrating them into your systems`,
            ru:
`- Индивидуально разработанные скрипты для автоматизации операций, обработки данных или решения специфических задач
- Полностью протестированный, эффективный и корректно работающий код на Вашем предпочтительном скриптовом языке (Python, Bash, PowerShell)
- Понятные инструкции по запуску скриптов и их интеграции в Ваши системы`
        },
        why: {
            en: 
`- **Save time**: automate repetitive tasks, freeing up resources
- **Improve accuracy**: minimize errors in manual processes
- **Increase productivity**: speed up workflows with efficient, reusable scripts`,
            ru:
`- **Экономия времени**: автоматизируйте повторяющиеся задачи и освободите ресурсы
- **Повышение точности**: минимизация ошибок, которые часто появляются при ручной обработке
- **Увеличение продуктивности**: ускорение рабочих процессов с помощью эффективных, многократно используемых скриптов`
        },
        iDo: {
            en: 
`- Analyze your needs and the tasks to be automated or solved
- Develop **Python** scripts and/or **Shell** scripts
- Test the scripts extensively
- Deliver the scripts with usage instructions`,
            ru:
`- Анализирую Ваши потребности и задачи, которые необходимо автоматизировать или решить
- Разрабатываю **Python**- и/или **Shell**-скрипты
- Тщательно тестирую скрипты
- Передаю скрипты с инструкциями по использованию`
        },
        prerequisites: {
            en: 
`- A clear description of the task or workflow you want to automate or enhance
- Access to the systems, data or tools the script will interact with
- Preferred scripting language (if applicable)
- (Optional) Examples or specifications for desired script functionality`,
            ru:
`- Четкое описание задачи/процесса, которые необходимо автоматизировать/улучшить
- Доступ к системам, данным или инструментам, с которыми будут взаимодействовать скрипты
- Предпочтительный язык скриптов (если уместно)
- (Необязательно) Примеры или спецификации желаемой функциональности скриптов`
        },
        pricing: {
            en: 
`**$50–$150** for simple automation tasks, **$150–$400** for handling data processing, working with databases or API integration. **$500–$1000+** for end-to-end workflow or highly complex logic. The averace price is **~$80**.`,
            ru:
`**$50–$150** за простую автоматизацию задач, **$150–$400** за обработку данных, работу с базами данных или интеграцию API. **$500–$1000+** за end-to-end рабочие процессы или достаточно сложную логику. Средняя цена составляет за услугу **~$80**.`
        },
        paymentModel: {
            en:
`Payment is always per-deliverable and pre-fixed.`,
            ru:
`Оплата всегда попроектная и предварительно фиксированная.`
        },
    },
    service15: {
        desc: {
            en: 
`Streamlit apps turn your data, models or algorithms into interactive web applications. Ideal for data scientists, ML engineers and businesses wanting to share insights, predictive tools or custom solutions quickly, without the need for a full website.`,
            ru:
`Приложения Streamlit превращают Ваши данные, модели или алгоритмы в интерактивные веб-приложения. Идеально для датасаентистов, ML-инженеров и компаний, которые желают быстро делиться инсайтами, инструментами прогнозирования или кастомными решениями без необходимости создавать полноценный сайт.`
        },
        youGet: {
            en: 
`- A sleek, interactive web application built using Streamlit
- Features like dropdowns, sliders, charts and tables to enhance user interaction
- Seamless integration with your data sources, APIs or machine learning models
- Fully deployable and accessible on the web or internal platforms`,
            ru:
`- Элегантное, интерактивное веб-приложение, разработанное с использованием Streamlit
- Элементы взаимодействия, такие как выпадающие списки, слайдеры, графики и таблицы
- Интеграция с Вашими источниками данных, API или моделями машинного обучения
- Полностью готовое к внедрению приложение, доступное онлайн или на локальных платформах`
        },
        why: {
            en: 
`- **Showcase insights**: share interactive reports with your team or clients
- **Streamline workflows**: provide an easy-to-use interface for complex processes or models
- **Save time**: rapidly build and deploy apps without extensive coding overhead`,
            ru:
`- **Демонстрация инсайтов**: делитесь интерактивными отчетами с командой или клиентами
- **Оптимизация работы**: предоставьте простой интерфейс для сложных моделей или процессов
- **Экономия времени**: быстрое создание и развертывание приложений без необходимости в написании кода`
        },
        iDo: {
            en: 
`- Develop the application using Streamlit, integrating necessary libraries
- Add features like file upload, live data updates and interactive widgets
- Test the app (usability, performance, reliability)
- Assist with deployment on platforms`,
            ru:
`- Разработываю приложение и интегрирую необходимые библиотеки
- Добавляю функции, такие как загрузка файлов, обновление данных в реальном времени и интерактивные виджеты
- Тестирую приложение на удобство использования, производительность и надежность
- Предоставляю помощь с развертыванием на различных платформах`
        },
        prerequisites: {
            en: 
`- A clear description of the app's purpose and target audience
- Access to data, machine learning models or APIs the app will utilize
- Preferred hosting platform for deployment
- (Optional) Examples of similar apps or specific features you want included`,
            ru:
`- Четкое описание назначения приложения и целевой аудитории
- Доступ к данным, моделям машинного обучения или API, которые будет использовать приложение
- Предпочтительный хостинг для развертывания
- (Необязательно) Примеры похожих приложений или специфические функции, которые Вы хотите включить`
        },
        pricing: {
            en: 
`Highly depends on initial software. The average price for static data displays and basic interactivity is **~$100**.`,
            ru:
`Сильно зависит от исходного ПО. Средняя цена за отображение статических данных и базовой интерактивности составляет **~$100**.`
        },
        paymentModel: {
            en:
`Payment is normally pre-fixed and always per-deliverable.`,
            ru:
`Оплата, как правило, предварительно фиксированная и всегда попроектная.`
        },
    },
    service16: {
        desc: {
            en: 
`This service provides expert assistance with coding projects, Linux tasks, probability theory, statistics or research-related coursework and thesis requirements. Perfect for students, researchers and professionals aiming to enhance their understanding, complete assignments, or achieve academic goals with polished, high-quality work.`,
            ru:
`Данная услуга предоставляет экспертную помощь в проектах и задачах по программированию, Linux, теории вероятностей, статистике, а также в написании курсовых и дипломных работ. Идеально подходит для студентов, которым необходимо завершить учебные задания и достигнуть академических целей, а также исследователей и специалистов, которые желают углубить свои знания.`
        },
        youGet: {
            en: 
`- Coding projects: debugged and well-commented **Python**, **SQL**, **JavaScript** or **TypeScript** code for your assignment or thesis requirements
- **Linux** support: guidance with advanced shell scripting, system configuration or tools
- **Probability & statistics**: step-by-step solutions, visualizations and statistical analysis
- **Research** assistance: help with structuring, coding or interpreting results for thesis projects, along with insights on best practices and clear documentation`,
            ru:
`- Проекты по программированию: отлаженный и подробно комментированный код на **Python**, **SQL**, **JavaScript** или **TypeScript** для ваших практических заданий или дипломных работ
- **Linux**: помощь в написании продвинутых сценариев оболочки, настройке системы или инструментов
- **Теория вероятностей и статистика**: пошаговые решения, визуализации и статистический анализ
- Сопровождение в **исследованиях**: помощь в структурировании, программировании или интерпретации результатов для дипломных проектов, а также рекомендации по лучшим практикам и четкой документации`
        },
        why: {
            en: 
`- **Improve academic performance**: understand key concepts and submit high-quality work
- **Save time**: get efficient solutions while focusing on learning`,
            ru:
`- **Улучшение успеваемости**: разберитесь в ключевых понятиях и подготовьте качественную работу
- **Экономия времени**: получите эффективные решения, сосредоточившись на учебе`
        },
        iDo: {
            en: 
`- Review your assignment or project guidelines to understand the requirements
- Provide solutions with comments, explanations and, probably, visual demonstrations`,
            ru:
`- Изучаю требования Вашей задачи или проекта
- Предоставляю решения с комментариями, пояснениями и, возможно, визуальной демонстрацией`
        },
        prerequisites: {
            en: 
`- Detailed instructions for the assignment, coursework or thesis goals
- Access to any relevant datasets, systems or materials for your project
- Any tools, frameworks or environments required by your institution`,
            ru:
`- Подробные инструкции по выполнению задания, курсовой или дипломной работы
- Доступ к любым соответствующим наборам данных, системам или материалам
- Какие-либо инструменты, фреймворки или среды, требуемые Вашим учебным заведением`
        },
        pricing: {
            en: 
`**$50–$300** for coding tasks, statistical and mixed problems. **$500+** for complex research projects. These prices are mostly determined by urgency.`,
            ru:
`**$50-$300** за задач по программированию, статистических и смешанных работ. **$500+** за сложные исследовательские проекты. Данные цены в основном зависят от срочности.`
        },
        paymentModel: {
            en:
`Payment is always on an hourly basis.`,
            ru:
`Оплата всегда почасовая.`
        },
    },
    service17: {
        desc: {
            en: 
`Using machine learning, I can help you to solve a wide range of problems related to transforming data into useful information by automating decisions and predicting outcomes, giving you a competitive edge. Whether you represent a company or just working on a standalone project, I can implement, update or maintain (ongoing or ad-hoc) statistical algorithms, neural network models or ML pipelines for classification, regression, clustering, dimensionality reduction, anomaly detection and other (mixed) problems.

This service is extremely diverse and will be divided into more specific sub-types in the future. At the moment, all **details are subject of discussion**.`,
            ru:
`Используя машинное обучение, я могу помочь в решении широкого спектра задач, связанных с преобразованием данных в полезную информацию путем автоматизации принятия решений и прогнозирования результатов, что обеспечит Вам конкурентное преимущество. Независимо от того, представляете ли вы компанию или просто работаете над независимым проектом, я могу внедрить, обновить или поддерживать (на постоянной или разовой основе) статистические алгоритмы, модели нейронных сетей или ML-пайплайны для классификации, регрессии, кластеризации, уменьшения размерности, обнаружения аномалий и других (смешанных) задач.

Данная услуга крайне разнообразна, и в дальнейшем она будет разбита на более конкретные подтипы. В настоящий момент все **условия обговариваются лично**.`
        },
        pricing: {
            en: 
`Price is negotiable.`,
            ru:
`Цена договорная.`
        },
    },
}
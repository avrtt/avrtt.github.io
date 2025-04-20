/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import H from "../../components/Highlight"
import { Link } from "gatsby"
import { freelanceStatus, dateOfStartResponding, dateOfStartRespondingRu } from "../../data/announcements"
import arrow from "../../images/freelance/services/arrow2.svg"
import * as stylesPlaques from "../../styles/plaques.module.scss"
import * as stylesAnnouncements from "../../styles/announcements.module.scss"

const status = freelanceStatus as number;
let statusEmoji: React.ReactNode; 
let statusString: React.ReactNode;
let statusStringRu: React.ReactNode;
let statusExtraDesc: React.ReactNode;
let statusExtraDescRu: React.ReactNode;
let backgroundColor: string = "";
let color: string = "";
let isArrowVisible: boolean = false;
let isDateOfStartRespondingVisible: boolean = false;

if (status === 1) {
	statusEmoji = "👀"
	backgroundColor = "#7aff99"
	color = "#3dd460"
	statusString = <><b>Working status:</b> <H color={color}>open to any freelance proposals</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}>открыт к любым предложениям по фрилансу</H></>;
	statusExtraDesc = "This notice indicates that I have almost no workload at the moment, and I'd like to consider any kind of project."
	statusExtraDescRu = "Эта табличка означает, что на данный момент я практически не нагружен работой и готов рассмотреть любые виды проектов."
	isArrowVisible = true
	isDateOfStartRespondingVisible = false
} else if (status === 2) {
	statusEmoji = "😎"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><b>Working status:</b> <H color={color}>open to long-term freelance projects only</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}> только долгосрочные фриланс-проекты</H></>;
	statusExtraDesc = "This notice indicates that I'm not looking for short-term (1-10 day) paid projects at this time, considering the most interesting and challenging ones."
	statusExtraDescRu = "Эта табличка означает, что на данный момент я не ищу краткосрочные (1-10 дней) заказы, рассматривая исключительно интересные и сложные предложения."
	isArrowVisible = true
	isDateOfStartRespondingVisible = false
} else if (status === 3) {
	statusEmoji = "⚡"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><b>Working status:</b> <H color={color}>open to short-term freelance gigs</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}> только небольшие фриланс-проекты</H></>;
	statusExtraDesc = "This notice indicates that I'm not looking for long-term paid projects at this time, only 1-10 day jobs."
	statusExtraDescRu = "Эта табличка означает, что на данный момент я не ищу долгосрочные заказы, исключительно работу продолжительностью 1-10 дней."
	isArrowVisible = true
	isDateOfStartRespondingVisible = false
} else if (status === 4) {
	statusEmoji = "🤔"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><b>Working status:</b> <H color={color}>busy, but open to freelance proposals for the future</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}>занят, но рассматриваю фриланс-заказы на будущее</H></>;
	statusExtraDesc = "This notice indicates that I'm not ready to take on new projects at this time, but I'm forming a client queue, providing an approximate date of starting the work when contacted."
	statusExtraDescRu = "Эта табличка означает, что на данный момент я не готов взяться за выполнение новых проектов, но продолжаю формировать очередь клиентов, сообщая примерную дату начала работы при обращении."
	isArrowVisible = true
	isDateOfStartRespondingVisible = false
} else if (status === 5) {
	statusEmoji = "🔥"
	backgroundColor = "#ffafa6"
	color = "#fa6a5a"
	statusString = <><b>Working status:</b> <H color={color}>too busy, not responding to any messages for a while</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}>занят и временно не отвечаю на сообщения</H></>;
	statusExtraDesc = "This notice indicates that I'm currently not ready to respond to new freelance offers, but I'll definitely consider them in the near future."
	statusExtraDescRu = "Эта табличка означает, что на данный момент я настолько загружен работой, что не готов отвечать на новые предложения по фрилансу, однако обязательно рассмотрю их в ближайшее время."
	isArrowVisible = false
	isDateOfStartRespondingVisible = true
} else if (status === 6) {
	statusEmoji = "😴"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><b>Working status:</b> <H color={color}>unable to work for a while</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}>временно не имею возможности работать</H></>;
	statusExtraDesc = "This notice indicates that I'm likely on the road at the moment, or have no connection and other working conditions. I'm still considering freelance offers, but not ready to respond quickly and/or give an approximate start date."
	statusExtraDescRu = "Эта табличка означает, что, скорее всего, в данный момент я нахожусь в дороге, либо не имею связи или других рабочих условий. Я всё ещё рассматриваю предложения по фрилансу, но не готов ответить сразу и/или сообщить примерные сроки начала работы."
	isArrowVisible = false
	isDateOfStartRespondingVisible = true
} else if (status === 7) {
	statusEmoji = "😌"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><b>Working status:</b> <H color={color}>not taking on any new projects</H></>;
	statusStringRu = <><b>Рабочий статус:</b> <H color={color}>не рассматриваю новые предложения</H></>;
	statusExtraDesc = "This notice typically indicates that I'm preparing for a vacation, finishing up all my active projects. Please don't contact me for work-related questions unless you are one of my current clients."
	statusExtraDescRu = "Эта табличка означает, как правило, что я готовлюсь к отпуску, завершая все активные проекты. Пожалуйста, не связывайтесь со мной по рабочим вопросам, если Вы не мой текущий клиент."
	isArrowVisible = false
	isDateOfStartRespondingVisible = true
} else if (status === 8) {
	statusEmoji = "🏝️"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><H color={color}>I'm on vacation!</H></>;
	statusStringRu = <><H color={color}>Я в отпуске!</H></>;
	statusExtraDesc = "This notice indicates that I'm not gonna respond to any work-related messages. Don't even try."
	statusExtraDescRu = "Эта табличка означает, что я не отвечу ни на какие сообщения, связанные с работой. Даже не пытайтесь."
	isArrowVisible = false
	isDateOfStartRespondingVisible = true
} else if (status === 9) {
	statusEmoji = "🍄"
	backgroundColor = ""
	color = "#ffd56a"
	statusString = <><H color={color}>Hermit mode</H></>
	statusStringRu = <><H color={color}>Режим отшельника</H></>
	statusExtraDesc = <>This notice indicates that I've probably went off to mountains or woods for an uncertain period of time. I'm not responding to <b>any messages</b> right now. Apologize for that.</>
	statusExtraDescRu = <>Эта табличка означает, что я, скорее всего, ушёл в горы или лес на неопределённое время. Я не отвечаю <b>ни на какие сообщения</b> на данный момент. Приносим извинения за предоставленные неудобства.</>
	isArrowVisible = false
	isDateOfStartRespondingVisible = false
}

const noticeStyle = {
	backgroundColor: backgroundColor
}

interface FreelanceStatusProps {
	isRussian?: boolean;
	isHome?: boolean;
}

const FreelanceStatus: React.FC<FreelanceStatusProps> = ({ isRussian=false, isHome=false }) => {
	return isRussian ? ( 
		<>
		<div style={noticeStyle} className={stylesPlaques.greyNoticeCompact}>
			<p>
				{statusStringRu}
				&nbsp;
				<span style={{ fontSize: "clamp(1.4rem, 2vw, 2.5rem)", verticalAlign: "middle"}}>
					{statusEmoji}
				</span>
			</p>
			<p>{statusExtraDescRu}</p>
			{(dateOfStartRespondingRu && isDateOfStartRespondingVisible) ? 
				<p>Начну отвечать: <H color={color}>{dateOfStartRespondingRu}</H></p> : ""
			}
		</div>
		</>
	) : (
		<>
		<div style={noticeStyle} className={stylesPlaques.greyNoticeCompact}>
			<p>
				{statusString}
				&nbsp;
				<span style={{ fontSize: "clamp(1.4rem, 2vw, 2.5rem)", verticalAlign: "middle"}}>
					{statusEmoji}
				</span>
			</p>
			<p>{statusExtraDesc}
				&thinsp;&thinsp;
				{isHome && isArrowVisible ? 
					<span>
						<Link to="/freelance">
							<img src={arrow} className={stylesAnnouncements.linkArrow} alt="link-to-freelance-page"/>
						</Link>
					</span> : ""
				}
			</p>
			{(dateOfStartResponding && isDateOfStartRespondingVisible) ? 
				<p>Start responding: <H color={color}>{dateOfStartResponding}</H></p> : ""
			}
		</div>
		</>
	)
};
export default FreelanceStatus;
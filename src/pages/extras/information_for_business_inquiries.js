import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';


const TITLE = 'Information for Business Inquiries - avrtt.blog'

const Business = () => {
		
  return (
	<motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>

		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>
	
		<div class="aboutBody">

вроде этого страница
https://www.lostwithpurpose.com/work/

<M text="## Ads" />
условия рекламы на разных площадках

<M text="## Collaboration" />
f

<M text="## Working with me" />
открытые вакансии (редактор, хост на канале и т.д.)
монтажёр видео
хайлайтер
smm, менеджер, пиарщики

<M text="## Volunteering" />
модерация сообщества (дискорд сервер, телеграм-чаты)
помощь в создании субтитров к видео

		</div>    
   </motion.div>
	);
};
  
export default Business;

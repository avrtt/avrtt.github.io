/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from 'react';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import { projects, categories } from '../../data/freelance/arrays';
import FreelanceProject from'../../components/FreelanceProject'
import MachineLearningIcon from "../../images/freelance/machineLearningIcon.svg";
import DataVisualizationIcon from "../../images/freelance/dataVisualizationIcon.svg";
import DataCollectionIcon from "../../images/freelance/dataCollectionIcon.svg";
import PythonAppsIcon from "../../images/freelance/pythonAppsIcon.svg";
import WebDevelopmentIcon from "../../images/freelance/webDevelopmentIcon.svg";
import ResearchIcon from "../../images/freelance/researchIcon.svg";
import TechnicalWritingIcon from "../../images/freelance/technicalWritingIcon.svg";
import PostProductionIcon from "../../images/freelance/postProductionIcon.svg";
import MiscIcon from "../../images/freelance/miscIcon.svg";
import Spoiler from '../../components/Spoiler';
import GoBackButton from "../../components/GoBackButton"
import { Link } from "gatsby"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const projectsFiltered = projects.filter(item => item.categoryKey === 'data_analysis')
const categoryItem = categories.find(item => item.categoryKey === 'data_analysis');
const categoryDescDetailedRu = categoryItem ? categoryItem.categoryDescDetailedRu : '';

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const DataAnalysisRu = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>

		<GoBackButton link="/freelance/ru" title="К основной странице" />
		
		<div className={stylesFreelancePages.categorySwitchWrapper}>
			<Link title="Проекты по машинному обучению" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/machine_learning"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по визуализации данных" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/data_visualization"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по сбору данных" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/data_collection"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Python-приложения" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/python_apps"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по веб-разработке" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/web_development"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты-исследования" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/research"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={ResearchIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по техрайтингу" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/technical_writing"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по пост-продакшену" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/post_production"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={PostProductionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Прочие проекты" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/ru/projects/misc"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
		</div>

		<div className="freelanceBody">

			<div className="mobileOnlySupport"><br/></div>
			<Spoiler 
				title={"Подробнее про эту категорию"}  
				block1={categoryDescDetailedRu}
				block2={"В данном списке представлены некоторые мои проекты, связанные с анализом данных (исключая вклад в open-source и прочие проприетарные или небольшие проекты)."}
			/>
			<br/>

			{projectsFiltered.map((project) => (
				<FreelanceProject 
					emoji={project.emoji}
					projectName={project.projectNameRu}
					projectDesc={project.projectDescRu}
					date={project.dateRu}
					duration={project.durationRu}
					tag={project.tagRu}
					source1={project.source1}
					source1Link={project.source1Link}
					source2={project.source2}
					source2Link={project.source2Link}
					source3={project.source3}
					source3Link={project.source3Link}
					extraContentHide={project.extraContentHide}
					extraDesc={project.extraDescRu}
					demoImg1={project.demoImg1}
					demoImg2={project.demoImg2}
					demoImg3={project.demoImg3}
					demoVidYTKey={project.demoVidYTKey}
				/>
			))}

		</div>
    </motion.div>
  );
};
  
export default DataAnalysisRu;

export const Head = () => (
  <SEO 
    title="Проекты: анализ данных - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl=""
    schemaType="WebPage"
    
  />
)

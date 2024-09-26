import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import { projects, categories } from '../itemData';
import FreelanceProject from'../../components/FreelanceProject'
import MachineLearningIcon from "../../images/freelance/machineLearningIcon.svg";
import DataAnalysisIcon from "../../images/freelance/dataAnalysisIcon.svg";
import DataVisualizationIcon from "../../images/freelance/dataVisualizationIcon.svg";
import DataCollectionIcon from "../../images/freelance/dataCollectionIcon.svg";
import PythonAppsIcon from "../../images/freelance/pythonAppsIcon.svg";
import ResearchIcon from "../../images/freelance/researchIcon.svg";
import TechnicalWritingIcon from "../../images/freelance/technicalWritingIcon.svg";
import PostProductionIcon from "../../images/freelance/postProductionIcon.svg";
import MiscIcon from "../../images/freelance/miscIcon.svg";
import Spoiler from '../../components/Spoiler';
import { Link } from "gatsby"

const projectsFiltered = projects.filter(item => item.categoryKey === 'web_development')
const categoryDescDetailedRu = categories.find(item => item.categoryKey === 'web_development').categoryDescDetailedRu;

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const TITLE = 'Проекты: веб-разработка - avrtt.blog'

const WebDevelopmentRu = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>

		<div class="categorySwitchWrapper">
			<Link title="Проекты по машинному обучению" class="categoryButton noselect" to="/freelance/ru/projects/machine_learning"><div class="categoryButton noselect"><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по анализу данных" class="categoryButton noselect" to="/freelance/ru/projects/data_analysis"><div class="categoryButton noselect"><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по визуализации данных" class="categoryButton noselect" to="/freelance/ru/projects/data_visualization"><div class="categoryButton noselect"><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по сбору данных" class="categoryButton noselect" to="/freelance/ru/projects/data_collection"><div class="categoryButton noselect"><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Python-приложения" class="categoryButton noselect" to="/freelance/ru/projects/python_apps"><div class="categoryButton noselect"><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты-исследования" class="categoryButton noselect" to="/freelance/ru/projects/research"><div class="categoryButton noselect"><img src={ResearchIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по техрайтингу" class="categoryButton noselect" to="/freelance/ru/projects/technical_writing"><div class="categoryButton noselect"><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по пост-продакшену" class="categoryButton noselect" to="/freelance/ru/projects/post_production"><div class="categoryButton noselect"><img src={PostProductionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Прочие проекты" class="categoryButton noselect" to="/freelance/ru/projects/misc"><div class="categoryButton noselect"><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
		</div>

		<div class="freelanceBody">

			<Spoiler 
				title={"Подробнее про эту категорию проектов"} 
				block1={categoryDescDetailedRu}
			/>
			<br/>
			<M text="В данном списке представлены некоторые мои проекты, связанные с веб-разработкой (исключая вклад в open-source и прочие проприетарные или небольшие проекты):"/>

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
  
export default WebDevelopmentRu;

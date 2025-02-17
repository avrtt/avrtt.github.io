import React, { useEffect } from 'react';
import SEO from '../../components/seo'
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import { projects, categories } from '../../data/freelance/arrays';
import FreelanceProject from'../../components/FreelanceProject'
import DataAnalysisIcon from "../../images/freelance/dataAnalysisIcon.svg";
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

const projectsFiltered = projects.filter(item => item.categoryKey === 'machine_learning')
const categoryDescDetailedRu = categories.find(item => item.categoryKey === 'machine_learning').categoryDescDetailedRu;

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const MachineLearningRu = () => {

  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>

		<GoBackButton link="/freelance/ru" title="К основной странице" />
	
		<div class={stylesFreelancePages.categorySwitchWrapper}>
			<Link title="Проекты по анализу данных" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/data_analysis"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по визуализации данных" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/data_visualization"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по сбору данных" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/data_collection"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Python-приложения" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/python_apps"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по веб-разработке" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/web_development"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты-исследования" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/research"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={ResearchIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по техрайтингу" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/technical_writing"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Проекты по пост-продакшену" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/post_production"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={PostProductionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Прочие проекты" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/ru/projects/misc"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
		</div>

		<div class="freelanceBody">

			<div class="mobileOnlySupport"><br/></div>
			<Spoiler 
				title={"Подробнее про эту категорию"}  
				block1={categoryDescDetailedRu}
			/>
			<br/>
			<M text="В данном списке представлены некоторые мои проекты, связанные с машинным обучением (исключая вклад в open-source и прочие проприетарные или небольшие проекты):"/>

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
  
export default MachineLearningRu;

export const Head = () => (
  <SEO 
    title="Проекты: машинное обучение - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl=""
    schemaType=""
    children
  />
)

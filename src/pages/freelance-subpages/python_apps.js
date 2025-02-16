import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import { projects, categories } from '../../data/freelance/arrays';
import FreelanceProject from'../../components/FreelanceProject'
import MachineLearningIcon from "../../images/freelance/machineLearningIcon.svg";
import DataAnalysisIcon from "../../images/freelance/dataAnalysisIcon.svg";
import DataVisualizationIcon from "../../images/freelance/dataVisualizationIcon.svg";
import DataCollectionIcon from "../../images/freelance/dataCollectionIcon.svg";
import WebDevelopmentIcon from "../../images/freelance/webDevelopmentIcon.svg";
import ResearchIcon from "../../images/freelance/researchIcon.svg";
import TechnicalWritingIcon from "../../images/freelance/technicalWritingIcon.svg";
import PostProductionIcon from "../../images/freelance/postProductionIcon.svg";
import MiscIcon from "../../images/freelance/miscIcon.svg";
import Spoiler from '../../components/Spoiler';
import GoBackButton from "../../components/GoBackButton"
import { Link } from "gatsby"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const projectsFiltered = projects.filter(item => item.categoryKey === 'python_apps')
const categoryDescDetailed = categories.find(item => item.categoryKey === 'python_apps').categoryDescDetailed;

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const TITLE = 'Python projects - avrtt.blog'

const PythonApps = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>

		<GoBackButton link="/freelance" />
	
		<div class={stylesFreelancePages.categorySwitchWrapper}>
			<Link title="Machine learning projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/machine_learning"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data analysis projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/data_analysis"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data visualization projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/data_visualization"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data collection projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/data_collection"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Web development projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/web_development"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Research projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/research"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={ResearchIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Technical writing projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/technical_writing"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Post-production projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/post_production"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={PostProductionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Misc projects" class="noselect" className={stylesFreelancePages.categoryButton} to="/freelance/projects/misc"><div class="noselect" className={stylesFreelancePages.categoryButton}><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
		</div>

		<div class="freelanceBody">

			<div class="mobileOnlySupport"><br/></div>
			<Spoiler 
				title={"More about this category"} 
				block1={categoryDescDetailed}
			/>
			<br/>
			<M text="The following list represents some of my highlighted Python projects (excluding open-source contributions and other proprietary or small projects):"/>

			{projectsFiltered.map((project) => (
				<FreelanceProject 
					emoji={project.emoji}
					projectName={project.projectName}
					projectDesc={project.projectDesc}
					date={project.date}
					duration={project.duration}
					tag={project.tag}
					source1={project.source1}
					source1Link={project.source1Link}
					source2={project.source2}
					source2Link={project.source2Link}
					source3={project.source3}
					source3Link={project.source3Link}
					extraContentHide={project.extraContentHide}
					extraDesc={project.extraDesc}
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
  
export default PythonApps;

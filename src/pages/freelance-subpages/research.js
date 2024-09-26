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
import WebDevelopmentIcon from "../../images/freelance/webDevelopmentIcon.svg";
import TechnicalWritingIcon from "../../images/freelance/technicalWritingIcon.svg";
import PostProductionIcon from "../../images/freelance/postProductionIcon.svg";
import MiscIcon from "../../images/freelance/miscIcon.svg";
import Spoiler from '../../components/Spoiler';
import { Link } from "gatsby"

const projectsFiltered = projects.filter(item => item.categoryKey === 'research')
const categoryDescDetailed = categories.find(item => item.categoryKey === 'research').categoryDescDetailed;

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const TITLE = 'Research projects - avrtt.blog'

const Research = () => {
	
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
			<Link title="Machine learning projects" class="categoryButton noselect" to="/freelance/projects/machine_learning"><div class="categoryButton noselect"><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data analysis projects" class="categoryButton noselect" to="/freelance/projects/data_analysis"><div class="categoryButton noselect"><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data visualization projects" class="categoryButton noselect" to="/freelance/projects/data_visualization"><div class="categoryButton noselect"><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data collection projects" class="categoryButton noselect" to="/freelance/projects/data_collection"><div class="categoryButton noselect"><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Python projects" class="categoryButton noselect" to="/freelance/projects/python_apps"><div class="categoryButton noselect"><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Web development projects" class="categoryButton noselect" to="/freelance/projects/web_development"><div class="categoryButton noselect"><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Technical writing projects" class="categoryButton noselect" to="/freelance/projects/technical_writing"><div class="categoryButton noselect"><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Post-production projects" class="categoryButton noselect" to="/freelance/projects/post_production"><div class="categoryButton noselect"><img src={PostProductionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Misc projects" class="categoryButton noselect" to="/freelance/projects/misc"><div class="categoryButton noselect"><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
		</div>

		<div class="freelanceBody">

			<Spoiler 
				title={"More about this category of projects"} 
				block1={categoryDescDetailed}
			/>
			<br/>
			<M text="The following list represents some of my highlighted research projects:"/>

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
  
export default Research;

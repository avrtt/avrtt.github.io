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
import DataAnalysisIcon from "../../images/freelance/dataAnalysisIcon.svg";
import DataVisualizationIcon from "../../images/freelance/dataVisualizationIcon.svg";
import DataCollectionIcon from "../../images/freelance/dataCollectionIcon.svg";
import PythonAppsIcon from "../../images/freelance/pythonAppsIcon.svg";
import WebDevelopmentIcon from "../../images/freelance/webDevelopmentIcon.svg";
import ResearchIcon from "../../images/freelance/researchIcon.svg";
import PostProductionIcon from "../../images/freelance/postProductionIcon.svg";
import MiscIcon from "../../images/freelance/miscIcon.svg";
import Spoiler from '../../components/Spoiler';
import GoBackButton from "../../components/GoBackButton"
import { Link } from "gatsby"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const projectsFiltered = projects.filter(item => item.categoryKey === 'technical_writing')
const categoryItem = categories.find(item => item.categoryKey === 'technical_writing');
const categoryDescDetailed = categoryItem ? categoryItem.categoryDescDetailed : '';

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const TechnicalWriting = () => {
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>

		<GoBackButton link="/freelance" />
	
		<div className={stylesFreelancePages.categorySwitchWrapper}>
			<Link title="Machine learning projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/machine_learning"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data analysis projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/data_analysis"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data visualization projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/data_visualization"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Data collection projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/data_collection"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Python projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/python_apps"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Web development projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/web_development"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Research projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/research"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={ResearchIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Post-production projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/post_production"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={PostProductionIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
			<Link title="Misc projects" className={`noselect ${stylesFreelancePages.categoryButton}`} to="/freelance/projects/misc"><div className={`noselect ${stylesFreelancePages.categoryButton}`}><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></Link>
		</div>

		<div className="freelanceBody">

			<div className="mobileOnlySupport"><br/></div>
			<Spoiler 
				title={"More about this category"} 
				block1={categoryDescDetailed}
				block2={"The following list represents some of my highlighted technical writing projects."}
			/>
			<br/>

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
  
export default TechnicalWriting;

export const Head = () => (
  <SEO 
    title="Technical writing projects - avrtt.blog"
    description=""
    keywords={[""]}
    image={""}
    canonicalUrl=""
    schemaType="WebPage"
    
  />
)

/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from "react";
import { Link } from "gatsby"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"
import * as styles from "./styles.module.scss"

interface FreelanceCategoryProps {
  categoryName: string;
  categoryDesc: string;
  numProjects: number | string;
  img: string;
  url: string;
}

const FreelanceCategory: React.FC<FreelanceCategoryProps> = ({ categoryName, categoryDesc, numProjects, img, url }) => {
  
  return (
    <Link to={url}><div className={stylesFreelancePages.freelanceCategoryWrapper}>
      <span className={styles.categoryName}>{categoryName}</span>
      <span className={styles.rightUpperCornerWrapper}>
        <span className={styles.numProjects}>{numProjects}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img} className={`${styles.img} noselect`} alt="category_icon" width="60" height="60"/>
      </span>
      <br/>
      <p className={styles.categoryDesc}>{categoryDesc}</p>
    </div></Link>
  )
};
export default FreelanceCategory;



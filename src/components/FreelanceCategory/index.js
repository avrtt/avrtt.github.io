import React, { useEffect } from "react";
import { Link } from "gatsby"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const categoryNameStyle = {
  'font-weight': 'bold',
  'margin-left': '14px',
}; 

const numProjectsStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'float': 'right',
  'line-height': '46.5px',
}; 

const imgStyle = {
  'vertical-align': 'middle',
  'margin-right': '2px',
}; 

const categoryDescStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'margin-left': '14px',
  'margin-top': '32px',
  'width': '80%'
}; 

const FreelanceCategory= ({ categoryName, categoryDesc, numProjects, img, url }) => {
  
  return (
    <Link to={url}><div class={stylesFreelancePages.freelanceCategoryWrapper}>
      <span style={categoryNameStyle}>{categoryName}</span>
      <span style={numProjectsStyle}>
        {numProjects}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img} class="noselect" alt="category_icon" width="60" height="60" style={imgStyle} />
      </span>
      <br/>
      <p style={categoryDescStyle}>{categoryDesc}</p>
    </div></Link>
  )
};
export default FreelanceCategory;



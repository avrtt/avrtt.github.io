import React, { useEffect, useRef } from "react";
import Vid from "../Video"
import Img from "../Image"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const emojiStyle = {
  'margin-right': '19px',
}; 

const projectNameStyle = {
  'font-weight': 'bold',
}; 

const dateDurationStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'float': 'right',
  'line-height': '46.5px',
}; 

const logoStyle = {
  'vertical-align': 'middle',
  'margin-right': '2px',
}; 

const tagStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'margin-left': '47px',
  'margin-top': '-14px'
}; 

const FreelanceProject = ({ isExample=false, emoji, projectName, projectDesc, date, duration, tag, source1, source1Link, source2, source2Link, source3, source3Link, extraContentHide, extraDesc, demoImg1, demoImg2, demoImg3, demoVidYTKey }) => {

  const projectDescStyle = {
    'font-weight': 'lighter',
    'font-size': '18px',
    'margin-left': '47px',
    'width': '75%',
    'line-height': '20px',
    'padding-top': isExample ? '14px' : '0'
  }

  isExample ? tag = '' : tag = tag

  const collRef = useRef([])

  useEffect(() => {
    const coll = collRef.current;
    coll.forEach((element) => {
      if (element) {
        element.addEventListener("click", toggleContent);
      }
    }
  )

  return () => {
      coll.forEach((element) => {
        if (element) {
          element.removeEventListener("click", toggleContent)
        }
      })
    }
  }, [])

  const toggleContent = (event) => {
    const content = event.target.nextElementSibling
    event.target.classList.toggle(stylesFreelancePages.activeExtra)
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  var source1Flag, source2Flag, source3Flag, extraContentHide, extraDescFlag, demoImg1Flag, demoImg2Flag, demoImg3Flag, demoVidYTKeyFlag

  if (source1 === "") { source1Flag = "source1Hide" } 
  if (source2 === "") { source2Flag = "source2Hide" } 
  if (source3 === "") { source3Flag = "source3Hide" } 
  if (extraContentHide === true) { extraContentHide = "extraContentHide" } 
  if (extraDesc === "") { extraDescFlag = "extraDescHide" }
  if (demoImg1 === "") { demoImg1Flag = "demoImg1Hide" }
  if (demoImg2 === "") { demoImg2Flag = "demoImg2Hide" }
  if (demoImg3 === "") { demoImg3Flag = "demoImg3Hide" }
  if (demoVidYTKey === "") { demoVidYTKeyFlag = "demoVidYTKeyHide" }

  return (
    <>
      <div className={`${stylesFreelancePages.freelanceItemWrapper} desktopOnlySupport`}>
        <span style={emojiStyle}>{emoji}</span>
        <span style={projectNameStyle}>{projectName}</span>
        <span style={dateDurationStyle}>
          {date}
          &nbsp;&nbsp;&nbsp;
          {duration}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={source3Link}><img src={source3} id={stylesFreelancePages[source3Flag]} class="noselect" className={stylesFreelancePages.sourceIcon} alt="source_logo" style={logoStyle} /></a>
          <a href={source2Link}><img src={source2} id={stylesFreelancePages[source2Flag]} class="noselect" className={stylesFreelancePages.sourceIcon} alt="source_logo" style={logoStyle} /></a>
          <a href={source1Link}><img src={source1} id={stylesFreelancePages[source1Flag]} class="noselect" className={stylesFreelancePages.sourceIcon} alt="source_logo" style={logoStyle} /></a>
        </span>
        <br/>
        <p style={tagStyle}>{tag}</p>
        <p style={projectDescStyle}>{projectDesc}</p>
        <button id={stylesFreelancePages[extraContentHide]} className={stylesFreelancePages.collapsible} ref={(el) => (collRef.current.push(el))}>
          <span className={stylesFreelancePages.expandText}></span>
        </button>
        <div className={stylesFreelancePages.extraContent}>
          <br/>
          <span id={stylesFreelancePages[extraDescFlag]}>{extraDesc}</span>
          <p></p>
          <span id={stylesFreelancePages[demoImg1Flag]}><Img alt={"demo-image-1"} p={demoImg1} offset="0" /></span>
          <span id={stylesFreelancePages[demoImg2Flag]}><Img alt={"demo-image-2"} p={demoImg2} offset="0" /></span>
          <span id={stylesFreelancePages[demoImg3Flag]}><Img alt={"demo-image-3"} p={demoImg3} offset="0" /></span>
          <span id={stylesFreelancePages[demoVidYTKeyFlag]}><Vid ytKey={demoVidYTKey} offset="0" /></span>
        </div>
      </div>
      <div className="mobileOnlySupport" style={{ lineHeight: "1.25rem" }}>
        <div>
          <span>{emoji}</span> <b>{projectName}</b>
          &nbsp;&#8239;
          <a href={source3Link}>
            <img src={source3} id={stylesFreelancePages[source3Flag]} class="noselect" alt="source_logo" style={{ filter: "invert(1)", width: "1.25rem", verticalAlign: "sub" }}/>
            {source3Link ? <>&nbsp;&#8239;</> : ""}
          </a>
          <a href={source2Link}>
            <img src={source2} id={stylesFreelancePages[source2Flag]} class="noselect" alt="source_logo" style={{ filter: "invert(1)", width: "1.25rem", verticalAlign: "sub" }}/>
            {source2Link ? <>&nbsp;&#8239;</> : ""}
          </a>
          <a href={source1Link}>
            <img src={source1} id={stylesFreelancePages[source1Flag]} class="noselect" alt="source_logo" style={{ filter: "invert(1)", width: "1.25rem", verticalAlign: "sub" }}/>
            {source1Link ? <>&nbsp;&#8239;</> : ""}
          </a>
          <span style={{ opacity: 0.75 }}>— {projectDesc}</span>
          <br/><br/>
        </div>
      </div>
    </>
  )
};
export default FreelanceProject;

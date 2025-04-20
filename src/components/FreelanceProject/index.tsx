/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef } from "react";
import Vid from "../Video"
import Img from "../Image"
import * as stylesFreelancePages from "../../styles/freelance_pages.module.scss"

const emojiStyle = {
  marginRight: '19px',
}; 

const projectNameStyle = {
  fontWeight: 'bold',
}; 

const dateDurationStyle = {
  fontWeight: 'lighter',
  fontSize: '18px',
  float: 'right' as const,
  lineHeight: '46.5px',
  color: '#bababa'
}; 

const logoStyle = {
  verticalAlign: 'middle',
  marginRight: '2px',
}; 

const tagStyle = {
  fontWeight: 'lighter',
  fontSize: '18px',
  marginLeft: '47px',
  marginTop: '-14px',
  color: '#bababa'
}; 

interface FreelanceProjectProps {
  isExample?: boolean;
  emoji: string;
  projectName: string;
  projectDesc: string;
  date: string;
  duration: string;
  tag: string;
  source1: string;
  source1Link: string;
  source2: string;
  source2Link: string;
  source3: string;
  source3Link: string;
  extraContentHide: boolean;
  extraDesc: string;
  demoImg1: string;
  demoImg2: string;
  demoImg3: string;
  demoVidYTKey: string;
}

const FreelanceProject: React.FC<FreelanceProjectProps> = ({ 
  isExample=false, 
  emoji, 
  projectName, 
  projectDesc, 
  date, 
  duration, 
  tag: initialTag, 
  source1, 
  source1Link, 
  source2, 
  source2Link, 
  source3, 
  source3Link, 
  extraContentHide: initialExtraContentHide, 
  extraDesc, 
  demoImg1, 
  demoImg2, 
  demoImg3, 
  demoVidYTKey 
}) => {

  const projectDescStyle = {
    fontWeight: 'lighter',
    fontSize: '18px',
    marginLeft: '47px',
    width: '75%',
    lineHeight: '20px',
    paddingTop: isExample ? '14px' : '0'
  }

  const tag = isExample ? '' : initialTag;

  const collRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const coll = collRef.current;
    coll.forEach((element) => {
      if (element) {
        element.addEventListener("click", toggleContent);
      }
    });

    return () => {
      coll.forEach((element) => {
        if (element) {
          element.removeEventListener("click", toggleContent);
        }
      });
    }
  }, []);

  const toggleContent = (event: Event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const content = button.nextElementSibling as HTMLElement;
    button.classList.toggle(stylesFreelancePages.activeExtra);
    if (content.style.maxHeight) {
      content.style.maxHeight = "";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  const source1Flag = source1 === "" ? "source1Hide" : undefined;
  const source2Flag = source2 === "" ? "source2Hide" : undefined;
  const source3Flag = source3 === "" ? "source3Hide" : undefined;
  const extraContentHideClass = initialExtraContentHide === true ? "extraContentHide" : undefined;
  const extraDescFlag = extraDesc === "" ? "extraDescHide" : undefined;
  const demoImg1Flag = demoImg1 === "" ? "demoImg1Hide" : undefined;
  const demoImg2Flag = demoImg2 === "" ? "demoImg2Hide" : undefined;
  const demoImg3Flag = demoImg3 === "" ? "demoImg3Hide" : undefined;
  const demoVidYTKeyFlag = demoVidYTKey === "" ? "demoVidYTKeyHide" : undefined;

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
          <a href={source3Link}><img src={source3} id={source3Flag ? stylesFreelancePages[source3Flag] : undefined} className={`noselect ${stylesFreelancePages.sourceIcon}`} alt="source_logo" style={logoStyle} /></a>
          <a href={source2Link}><img src={source2} id={source2Flag ? stylesFreelancePages[source2Flag] : undefined} className={`noselect ${stylesFreelancePages.sourceIcon}`} alt="source_logo" style={logoStyle} /></a>
          <a href={source1Link}><img src={source1} id={source1Flag ? stylesFreelancePages[source1Flag] : undefined} className={`noselect ${stylesFreelancePages.sourceIcon}`} alt="source_logo" style={logoStyle} /></a>
        </span>
        <br/>
        <p style={tagStyle}>{tag}</p>
        <p style={projectDescStyle}>{projectDesc}</p>
        <button id={extraContentHideClass ? stylesFreelancePages[extraContentHideClass] : undefined} className={stylesFreelancePages.collapsible} ref={(el) => el && collRef.current.push(el)}>
          <span className={stylesFreelancePages.expandText}></span>
        </button>
        <div className={stylesFreelancePages.extraContent}>
          <br/>
          <span id={extraDescFlag ? stylesFreelancePages[extraDescFlag] : undefined}>{extraDesc}</span>
          <p></p>
          <span id={demoImg1Flag ? stylesFreelancePages[demoImg1Flag] : undefined}><Img alt={"demo-image-1"} p={demoImg1} offset={0} /></span>
          <span id={demoImg2Flag ? stylesFreelancePages[demoImg2Flag] : undefined}><Img alt={"demo-image-2"} p={demoImg2} offset={0} /></span>
          <span id={demoImg3Flag ? stylesFreelancePages[demoImg3Flag] : undefined}><Img alt={"demo-image-3"} p={demoImg3} offset={0} /></span>
          <span id={demoVidYTKeyFlag ? stylesFreelancePages[demoVidYTKeyFlag] : undefined}><Vid ytKey={demoVidYTKey} offset={0} /></span>
        </div>
      </div>
      <div className="mobileOnlySupport" style={{ lineHeight: "1.25rem" }}>
        <div>
          <span>{emoji}</span> <strong>{projectName}</strong>
          &nbsp;&#8239;
          <a href={source3Link}>
            <img src={source3} id={source3Flag ? stylesFreelancePages[source3Flag] : undefined} className="noselect" alt="source_logo" style={{ filter: "invert(1)", width: "1.25rem", verticalAlign: "sub" }}/>
            {source3Link ? <>&nbsp;&#8239;</> : ""}
          </a>
          <a href={source2Link}>
            <img src={source2} id={source2Flag ? stylesFreelancePages[source2Flag] : undefined} className="noselect" alt="source_logo" style={{ filter: "invert(1)", width: "1.25rem", verticalAlign: "sub" }}/>
            {source2Link ? <>&nbsp;&#8239;</> : ""}
          </a>
          <a href={source1Link}>
            <img src={source1} id={source1Flag ? stylesFreelancePages[source1Flag] : undefined} className="noselect" alt="source_logo" style={{ filter: "invert(1)", width: "1.25rem", verticalAlign: "sub" }}/>
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

import React, { useState, useEffect, useRef } from "react";
import checkbox from "../../images/goals/checked.svg";
import refLink from "../../images/goals/refLink.svg";
import resultLink from "../../images/goals/resultLink.svg";
import info from "../../images/goals/info.svg";
import { goalsTags } from "../../data/goals/tags";
import * as stylesGoalsPage from "../../styles/goals_page.module.scss";

const checkboxWrapper = {
    'verticalAlign': 'middle',
}

const refLinkStyle = {
    'textAlign': 'right',
    'verticalAlign': 'middle',
}

const resultLinkStyle = {
    'textAlign': 'left',
    'verticalAlign': 'middle',
}

const infoStyle = {
	'textAlign': 'right',
	'verticalAlign': 'middle',
    'paddingLeft': '1.5vw',
} 

const textStyle = {
    'lineHeight': 'clamp(1.4rem, 2vw, 2rem)',
    'fontSize': 'clamp(0.9rem, 2.5vw, 1.4rem)',
    'paddingRight': '1.5vw',
}

const textChecked = {
    'opacity': '0.6',
}

const textUnchecked = {
    'opacity': '1',
}

const deadlineStyle = {
    'opacity': '0.15',
    'fontWeight': 'lighter',
    'color': 'black'
}

const deadlineHide = {
    'display': 'none',
}

const tooltipHide = {
    'display': 'none',
}

const Goal = ({ goal, isOpaque, hideChecked, hideUnchecked }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef(null);

    const handleIconClick = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

  const diffStyle = {
    'opacity': isOpaque ? 1 : 0,
    'transition': 'opacity 0.3s ease', 
    'fontSize': '20px',
    'verticalAlign': 'middle',
    'borderRadius': '8px',
    'padding': '3px 6px',
    'marginTop': '-24px',
    'lineHeight': '30px',
    'position': 'absolute',
  }

  const safetyStyle = {
    'opacity': isOpaque ? 1 : 0,
    'transition': 'opacity 0.3s ease', 
    'fontSize': '20px',
    'verticalAlign': 'middle',
    'borderRadius': '8px',
    'padding': '3px 6px',
    'marginLeft': '3rem',
    'marginTop': '-24px',
    'lineHeight': '30px',
    'position': 'absolute',
  }

  const tag1Style = {
    'opacity': isOpaque ? 1 : 0,
    'fontSize': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.3s ease, opacity 0.3s ease', 
    'verticalAlign': 'middle',
    'pointerEvents': 'none',
  }

  const tag2Style = {
    'opacity': isOpaque ? 1 : 0,
    'fontSize': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.25s ease, opacity 0.25s ease', 
    'verticalAlign': 'middle',
    'pointerEvents': 'none',
  }

  const tag3Style = {
    'opacity': isOpaque ? 1 : 0,
    'fontSize': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.2s ease, opacity 0.2s ease', 
    'verticalAlign': 'middle',
    'pointerEvents': 'none',
  }

  const tag4Style = {
    'opacity': isOpaque ? 1 : 0,
    'fontSize': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.15s ease, opacity 0.15s ease', 
    'verticalAlign': 'middle',
    'pointerEvents': 'none',
  }

  const tag5Style = {
    'opacity': isOpaque ? 1 : 0,
    'fontSize': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.1s ease', 
    'verticalAlign': 'middle',
    'pointerEvents': 'none',
  }

  const rowStyleC = {
    'display': hideChecked ? 'none' : '',
  }

  const rowStyleU = {
    'display': hideUnchecked ? 'none' : '',
  }

  var showinfo, showref, showresult, showdeadline, textStatus, showtooltip, difftagname, diffdesc, safetytagname, safetydesc, tagname1, tagdesc1, tagname2, tagdesc2, tagname3, tagdesc3, tagname4, tagdesc4, tagname5, tagdesc5, checkboxStyle,legendaryText, rowStyle

  if (goal.info === '') {showinfo = stylesGoalsPage.n} else {showinfo = stylesGoalsPage.y}
  if (goal.refLink === '') {showref = stylesGoalsPage.n} else {showref = stylesGoalsPage.y}
  if (goal.resultLink === '') {showresult = stylesGoalsPage.n} else {showresult = stylesGoalsPage.y}
  if (goal.status === 'c') {showdeadline = deadlineHide} else {showdeadline = deadlineStyle}
  if (goal.status === 'c') {textStatus = textChecked} else {textStatus = textUnchecked}
  if (goal.status === 'u') {showtooltip = tooltipHide} 
  if (goal.difftag !== '') {
    difftagname = goalsTags.find(x => x.emoji === goal.difftag).name
    diffdesc = goalsTags.find(x => x.emoji === goal.difftag).desc
  }
  if (goal.safetytag !== '') {
    safetytagname = goalsTags.find(x => x.emoji === goal.safetytag).name
    safetydesc = goalsTags.find(x => x.emoji === goal.safetytag).desc
  }
  if (goal.tag1 !== '') {
    tagname1 = goalsTags.find(x => x.emoji === goal.tag1).name
    tagdesc1 = goalsTags.find(x => x.emoji === goal.tag1).desc
  } 
  if (goal.tag2 !== '') {
    tagname2 = goalsTags.find(x => x.emoji === goal.tag2).name
    tagdesc2 = goalsTags.find(x => x.emoji === goal.tag2).desc
  } 
  if (goal.tag3 !== '') {
    tagname3 = goalsTags.find(x => x.emoji === goal.tag3).name
    tagdesc3 = goalsTags.find(x => x.emoji === goal.tag3).desc
  } 
  if (goal.tag4 !== '') {
    tagname4 = goalsTags.find(x => x.emoji === goal.tag4).name
    tagdesc4 = goalsTags.find(x => x.emoji === goal.tag4).desc
  } 
  if (goal.tag5 !== '') {
    tagname5 = goalsTags.find(x => x.emoji === goal.tag5).name
    tagdesc5 = goalsTags.find(x => x.emoji === goal.tag5).desc
  } 
  if (goal.dateCompleted !== '') {checkboxStyle = stylesGoalsPage.checkboxStyle} else {checkboxStyle = stylesGoalsPage.checkboxStyleEmptyDate}
  if (goal.difftag === '🌟') {legendaryText = stylesGoalsPage.legendaryText}
  if (goal.status === 'c') {rowStyle = rowStyleC} else {rowStyle = rowStyleU}

  return (  
    <>
        <td style={checkboxWrapper}>
            <div style={showtooltip} className={stylesGoalsPage.tooltipGoals} ref={tooltipRef}>
				<img id={checkboxStyle} src={checkbox} className={goal.status} onClick={handleIconClick} alt='checkbox'/>
				<span style={{ fontWeight: "lighter", left: "50%", marginLeft: "-3rem", width: "max-content", maxWidth: "400px" }} className={isOpen ? `${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.visible}` : stylesGoalsPage.tooltiptextGoals}>{goal.dateCompleted}</span>
			</div>
        </td>
        <td style={textStyle} width='100%' className={stylesGoalsPage.textExtra}>
            <span className={legendaryText} style={textStatus}>{goal.text}</span><span className="noselect" style={showdeadline}> – {goal.deadline}</span>
            <span className="desktopOnlySupport">&nbsp;&nbsp;</span>
            <span className={`noselect ${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span className="desktopOnlySupport" style={tag5Style}>{goal.tag5}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{bottom: "50%", left: "50%", marginLeft: "-210px"}}><span className={stylesGoalsPage.tooltipTitle}>{tagname5}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{tagdesc5}</span>
                    </p>
                </span>
            </span>
            <span className={`noselect ${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span className="desktopOnlySupport" style={tag4Style}>{goal.tag4}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{bottom: "50%", left: "50%", marginLeft: "-210px"}}><span className={stylesGoalsPage.tooltipTitle}>{tagname4}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{tagdesc4}</span>
                    </p>
                </span>
            </span>
            <span className={`noselect ${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span className="desktopOnlySupport" style={tag3Style}>{goal.tag3}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{bottom: "50%", left: "50%", marginLeft: "-210px"}}><span className={stylesGoalsPage.tooltipTitle}>{tagname3}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{tagdesc3}</span>
                    </p>
                </span>
            </span>
            <span className={`noselect ${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span className="desktopOnlySupport" style={tag2Style}>{goal.tag2}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{bottom: "50%", left: "50%", marginLeft: "-210px"}}><span className={stylesGoalsPage.tooltipTitle}>{tagname2}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{tagdesc2}</span>
                    </p>
                </span>
            </span>
            <span className={`noselect ${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span className="desktopOnlySupport" style={tag1Style}>{goal.tag1}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{bottom: "50%", left: "50%", marginLeft: "-210px"}}><span className={stylesGoalsPage.tooltipTitle}>{tagname1}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{tagdesc1}</span>
                    </p>
                </span>
            </span>
        </td>
        <td style={infoStyle}>
			<div style={!goal.info ? { display: "none" } : {}} className={stylesGoalsPage.tooltipGoals} ref={tooltipRef}>
				<img id={stylesGoalsPage.infoExtra} src={info} className={showinfo} alt='info' onClick={handleIconClick}/>
				<span style={{ fontWeight: "lighter" }} className={isOpen ? `${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.visible}` : stylesGoalsPage.tooltiptextGoals}>{goal.info}</span>
			</div>
		</td>
        <td className="desktopOnlySupport" style={refLinkStyle}>
            <a className={showref} href={goal.refLink}>
                <img id={stylesGoalsPage.link} src={refLink} className={showref} alt='reference_link'/>
            </a>
        </td>
        <td className="desktopOnlySupport" style={resultLinkStyle}>
            <a className={showresult} href={goal.resultLink}>
                <img id={stylesGoalsPage.link} src={resultLink} className={showresult} alt='result_link'/>
            </a>
        </td>
        <td className="desktopOnlySupport">
            <span className={stylesGoalsPage.tooltipGoals}>
                <span id={stylesGoalsPage[safetytagname]} className={stylesGoalsPage[safetytagname]} style={safetyStyle}>{goal.safetytag}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{ bottom: "60%" }}><span className={stylesGoalsPage.tooltipTitle}>{safetytagname}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{safetydesc}</span>
                    </p>
                </span>
            </span>
        </td>
        <td>
            <span className={stylesGoalsPage.tooltipGoals}>
                <span id={stylesGoalsPage[difftagname]} className={`desktopOnlySupport ${stylesGoalsPage[difftagname]}`} style={diffStyle}>{goal.difftag}
                    <p className={`${stylesGoalsPage.tooltiptextGoals}`} style={{ bottom: "60%" }}><span className={stylesGoalsPage.tooltipTitle}>{difftagname}</span><br/><br/>
                        <span style={{ fontWeight: "lighter", fontSize: "1rem" }}>{diffdesc}</span>
                    </p>
                </span>
            </span>
        </td>
    </>
  );
};
export default Goal;

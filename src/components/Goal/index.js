import React from "react";
import checkbox from "../../images/goals/checked.svg";
import refLink from "../../images/goals/refLink.svg";
import resultLink from "../../images/goals/resultLink.svg";
import info from "../../images/goals/info.svg";
import { goalsTags } from "../../data/goals/tags";
import * as stylesGoalsPage from "../../styles/goals_page.module.scss";

const checkboxWrapper = {
    'vertical-align': 'middle',
}

const refLinkStyle = {
    'text-align': 'right',
    'vertical-align': 'middle',
}

const resultLinkStyle = {
    'text-align': 'left',
    'vertical-align': 'middle',
}

const infoStyle = {
	'text-align': 'right',
	'vertical-align': 'middle',
} 

const textStyle = {
    'line-height': '30px',
    'padding-right': '3vh',
    'padding-left': '1vh',
}

const textChecked = {
    'opacity': '0.6'
}

const textUnchecked = {
    'opacity': '1'
}

const deadlineStyle = {
    'opacity': '0.15',
    'font-weight': 'lighter',
    'color': 'black'
}

const deadlineHide = {
    'display': 'none',
}

const tooltipHide = {
    'display': 'none',
}

const Goal = ({ goal, isOpaque, hideChecked, hideUnchecked }) => {

  const diffStyle = {
    'opacity': isOpaque ? 1 : 0,
    'transition': 'opacity 0.3s ease', 
    'font-size': '20px',
    'vertical-align': 'middle',
    'border-radius': '8px',
    'padding': '3px 6px',
    'margin-left': '-80px',
    'margin-top': '-24px',
    'line-height': '30px',
    'position': 'absolute',
  }

  const safetyStyle = {
    'opacity': isOpaque ? 1 : 0,
    'transition': 'opacity 0.3s ease', 
    'font-size': '20px',
    'vertical-align': 'middle',
    'border-radius': '8px',
    'padding': '3px 6px',
    'margin-left': '42px',
    'margin-top': '-24px',
    'line-height': '30px',
    'position': 'absolute',
  }

  const tag1Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag2Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag3Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag4Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag5Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
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
    <tr style={rowStyle}>
        <td>
            <span class={stylesGoalsPage.tooltipGoals}>
                <span id={stylesGoalsPage[difftagname]} class={stylesGoalsPage[difftagname]} style={diffStyle}>{goal.difftag}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{difftagname}</span>
                        <p class={stylesGoalsPage.lighterText}>{diffdesc}</p>
                    </p>
                </span>
            </span>
        </td>
        <td style={checkboxWrapper}>
            <div style={showtooltip} class={stylesGoalsPage.tooltipGoals}>
				<img id={stylesGoalsPage.checkboxStyle} src={checkbox} class={goal.status} alt='checkbox'/>
				<span className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}>{goal.dateCompleted}</span>
			</div>
        </td>
        <td style={textStyle} width='100%'>
            <span class={legendaryText} style={textStatus}>{goal.text}</span><span class='noselect' style={showdeadline}> – {goal.deadline}</span>
            <span class="noselect">&nbsp;&nbsp;</span>
            <span class="noselect" className={`${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span style={tag5Style}>{goal.tag5}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{tagname5}</span>
                        <p class={stylesGoalsPage.lighterText}>{tagdesc5}</p>
                    </p>
                </span>
            </span>
            <span class="noselect" className={`${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span style={tag4Style}>{goal.tag4}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{tagname4}</span>
                        <p class={stylesGoalsPage.lighterText}>{tagdesc4}</p>
                    </p>
                </span>
            </span>
            <span class="noselect" className={`${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span style={tag3Style}>{goal.tag3}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{tagname3}</span>
                        <p class={stylesGoalsPage.lighterText}>{tagdesc3}</p>
                    </p>
                </span>
            </span>
            <span class="noselect" className={`${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span style={tag2Style}>{goal.tag2}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{tagname2}</span>
                        <p class={stylesGoalsPage.lighterText}>{tagdesc2}</p>
                    </p>
                </span>
            </span>
            <span class="noselect" className={`${stylesGoalsPage.tooltipGoals} ${stylesGoalsPage.tagAnimation}`}>
                <span style={tag1Style}>{goal.tag1}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsLeft}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{tagname1}</span>
                        <p class={stylesGoalsPage.lighterText}>{tagdesc1}</p>
                    </p>
                </span>
            </span>
        </td>
        <td style={infoStyle}>
			<div class={stylesGoalsPage.tooltipGoals}>
				<img id={checkboxStyle} src={info} class={showinfo} alt='info'/>
				<span className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsRight} ${stylesGoalsPage.lighterText} ${stylesGoalsPage.goalsTooltipPadding}`}>{goal.info}</span>
			</div>
		</td>
        <td style={refLinkStyle}>
            <a class={showref} href={goal.refLink}>
                <img id={stylesGoalsPage.link} src={refLink} class={showref} alt='reference_link'/>
            </a>
        </td>
        <td style={resultLinkStyle}>
            <a class={showresult} href={goal.resultLink}>
                <img id={stylesGoalsPage.link} src={resultLink} class={showresult} alt='result_link'/>
            </a>
        </td>
        <td>
            <span class={stylesGoalsPage.tooltipGoals}>
                <span id={stylesGoalsPage[safetytagname]} class={stylesGoalsPage[safetytagname]} style={safetyStyle}>{goal.safetytag}
                    <p className={`${stylesGoalsPage.tooltiptextGoals} ${stylesGoalsPage.tooltiptextGoalsRight}`}><span class={stylesGoalsPage.tooltipTitle}><p></p>{safetytagname}</span>
                        <p class={stylesGoalsPage.lighterText}>{safetydesc}</p>
                    </p>
                </span>
            </span>
        </td>
    </tr>
  );
};
export default Goal;

import React from "react";
import Goal from '../Goal'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../Markdown';
import * as stylesGoalsPage from "../../styles/goals_page.module.scss";

const descStyle = {
    'text-align': 'center',
    'font-size': '22px',
    'margin-bottom': '32px',
    'margin-top': '-55px',
    'font-weight': 'lighter'
}

const sectionEndStyle = {
    'margin-bottom': '-60px' 
}

const GoalCategory = ({ array, name, desc='', isOpaque, hideChecked, hideUnchecked}) => {
  return (
    <>
  
    <br/>
    <div class="sectionBreak"><M text="----------"/></div>
    <AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
		<div class={stylesGoalsPage.goalsCategoryTitle}>{name}</div>
		<div class="noselect" style={descStyle}>{desc}</div>
		<table class={stylesGoalsPage.goalCategoryTable} className="table table-striped table-bordered">
            <tbody>
                {array && array.map(goal =>        
                    <Goal goal={goal} isOpaque={isOpaque} hideChecked={hideChecked} hideUnchecked={hideUnchecked}/>
                )}
            </tbody>
        </table>
        <p style={sectionEndStyle}></p>
    </AnimationOnScroll>
    
    </>
  );
};
export default GoalCategory;

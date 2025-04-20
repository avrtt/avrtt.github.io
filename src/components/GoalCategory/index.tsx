/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import Goal from '../Goal'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import M from '../Markdown';
import * as stylesGoalsPage from "../../styles/goals_page.module.scss";

const descStyle = {
    'textAlign': 'center' as const,
    'fontSize': 'clamp(1rem, 2.5vw, 1.4rem)',
    'lineHeight': 'clamp(1.2rem, 2.5vw, 1.8rem)',
    'marginBottom': '2rem',
    'marginTop': '-3rem',
    'fontWeight': 'lighter'
}

const sectionEndStyle = {
    'marginBottom': '-60px' 
}

interface GoalType {
  text: string;
  status: string;
  dateCompleted: string;
  deadline: string;
  info: string;
  refLink: string;
  resultLink: string;
  difftag: string;
  safetytag: string;
  tag1: string;
  tag2: string;
  tag3: string;
  tag4: string;
  tag5: string;
}

interface GoalCategoryProps {
  array: GoalType[];
  name: string;
  desc?: string;
  isOpaque: boolean;
  hideChecked: boolean;
  hideUnchecked: boolean;
}

const GoalCategory: React.FC<GoalCategoryProps> = ({ array, name, desc='', isOpaque, hideChecked, hideUnchecked}) => {

  const filteredGoals = array.filter(goal => {
    if (hideChecked && goal.status === 'c') return false;
    if (hideUnchecked && goal.status === 'u') return false;
    return true;
  });

  return (
    <>
      <br/>
      <div className="sectionBreak"><M text="----------"/></div>
      <AnimationOnScroll offset={300} duration={1.2} animateIn="animate__fadeIn" animateOnce={true}>
        <div className={stylesGoalsPage.goalsCategoryTitle}>{name}</div>
        <div className="noselect" style={descStyle}>{desc}</div>
        <LayoutGroup>
          <motion.table 
            className={`${stylesGoalsPage.goalCategoryTable} table table-striped table-bordered`}
            layout
          >
            <motion.tbody layout>
              <AnimatePresence>
                {filteredGoals.map(goal => (
                  <motion.tr
                    key={goal.text}
                    layout
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Goal
                      goal={goal}
                      isOpaque={isOpaque}
                      hideChecked={hideChecked}
                      hideUnchecked={hideUnchecked}
                    />
                  </motion.tr>
                ))}
              </AnimatePresence>
            </motion.tbody>
          </motion.table>
        </LayoutGroup>
        <p style={sectionEndStyle}></p>
      </AnimationOnScroll>
    </>
  );
};
export default GoalCategory;

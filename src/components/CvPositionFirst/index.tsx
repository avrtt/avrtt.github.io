/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from "react";
import cvCalendar from "../../images/cv/cvCalendar.svg";
import cvLocation from "../../images/cv/cvLocation.svg";
import M from '../../components/Markdown';
import H from '../../components/Highlight';

const calendarLogoStyle = {
	verticalAlign: 'middle',
	marginRight: '7px',
	opacity: '0.7'
}; 

const locationLogoStyle = {
	verticalAlign: 'middle',
	marginRight: '5px',
	opacity: '0.7'
}; 

const point1Style = {
  marginBottom: '-26px'
};

const point2Style = {
  marginBottom: '-26px'
};

const point3Style = {
  marginBottom: '-26px'
};

const point4Style = {
  marginBottom: '-26px'
};

const point5Style = {
  marginBottom: '-26px'
};

const emojiStyle = {
  float: 'right',
  fontSize: '32px',
  marginTop: '-12px'
};

interface CvPositionFirstProps {
  positionName: string;
  emoji: string;
  expTime: string;
  expLocation: string;
  expDesc: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  pointLast: string;
}

const CvPositionFirst: React.FC<CvPositionFirstProps> = ({ 
  positionName, 
  emoji,
  expTime, 
  expLocation, 
  expDesc, 
  point1, 
  point2, 
  point3, 
  point4, 
  point5, 
  pointLast 
}) => {
  return (
	<>
    <span className="expPosition"><H>{positionName}</H></span>&nbsp;<span style={emojiStyle}>{emoji}</span>
    <br/>
    <div className="expTimeLocationWrapper">
      <span className="expTime">
        <img src={cvCalendar} className="noselect" alt="calendar_logo" width="20" height="20" style={calendarLogoStyle} />
	      {expTime}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span className="expLocation">
        <img src={cvLocation} className="noselect" alt="location_logo" width="20" height="20" style={locationLogoStyle} />
	      {expLocation}
      </span>
    </div>
    <div className="expDesc">
      <M text={expDesc}/>
    </div>
    <div className="expDescListFirst">
      <span style={point1Style}><M text={point1}/></span>
      <span style={point2Style}><M text={point2}/></span>
      <span style={point3Style}><M text={point3}/></span>
      <span style={point4Style}><M text={point4}/></span>
      <span style={point5Style}><M text={point5}/></span>
      <span><M text={pointLast}/></span>
      <br/>
    </div>
	</>
  );
};
export default CvPositionFirst;



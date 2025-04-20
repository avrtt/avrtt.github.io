/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from "react";
import cvCalendar from "../../images/cv/cvCalendar.svg";
import cvLocation from "../../images/cv/cvLocation.svg";
import M from '../../components/Markdown';

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

interface CvPositionFirstProps {
  positionName: string;
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
    <span className="expPosition">{positionName}</span>
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
      <p style={point1Style}><M text={point1}/></p>
      <p style={point2Style}><M text={point2}/></p>
      <p style={point3Style}><M text={point3}/></p>
      <p style={point4Style}><M text={point4}/></p>
      <p style={point5Style}><M text={point5}/></p>
      <p><M text={pointLast}/></p>
    </div>
	</>
  );
};
export default CvPositionFirst;



import React, { useEffect } from "react";
import cvCalendar from "../../images/cv/cvCalendar.svg";
import cvLocation from "../../images/cv/cvLocation.svg";
import M from '../../components/Markdown';

const calendarLogoStyle = {
	'vertical-align': 'middle',
	'margin-right': '7px',
	'opacity': '0.7'
}; 

const locationLogoStyle = {
	'vertical-align': 'middle',
	'margin-right': '5px',
	'opacity': '0.7'
}; 

const point1Style = {
  'margin-bottom': '-26px'
};

const point2Style = {
  'margin-bottom': '-26px'
};

const point3Style = {
  'margin-bottom': '-26px'
};

const point4Style = {
  'margin-bottom': '-26px'
};

const point5Style = {
  'margin-bottom': '-26px'
};

const CvPosition = ({ positionName, companyName, companyLink, expTime, expLocation, expDesc, point1, point2, point3, point4, point5, pointLast }) => {
  return (
	<>
    <span className="expPosition">{positionName}</span>&nbsp;@&nbsp;<span className="expCompany"><a href={companyLink}>{companyName}</a></span>
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
    <div className="expDescList">
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
export default CvPosition;



import React from "react"
import H from "../../components/Highlight"
import { countryCode, exactTimezone, location, plans } from "../../data/announcements"
import { getFlagByCountryCode, getCountryNameByCountryCode, getTimezoneByCountryCode } from "../../utils/location"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const countryFlag = getFlagByCountryCode(countryCode)
const countryName = getCountryNameByCountryCode(countryCode)

const currentZoneUTC = "UTC" + getTimezoneByCountryCode(countryCode, exactTimezone)

const LocationStatus = ({ backgroundColor }) => {
  return (
	<>
    	<div style={{ backgroundColor: backgroundColor }} className={stylesPlaques.greyNoticeCompact}>
        	<p><b>My current location:</b> <H>{countryFlag} {location ? location : countryName}</H> ({currentZoneUTC})</p>
			<p><b>Planned:</b> {plans ? plans : "TBA"}</p>
    	</div>
	</>
  );
};
export default LocationStatus;
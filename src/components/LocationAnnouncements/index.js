import React from "react"
import H from "../../components/Highlight"
import { countryCode, exactTimezone, location, plans } from "../../data/announcements"
import { getFlagByCountryCode, getCountryNameByCountryCode, getTimezoneByCountryCode } from "../../utils/location"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const countryFlag = getFlagByCountryCode(countryCode)
const countryName = getCountryNameByCountryCode(countryCode)

const currentZoneUTC = "UTC" + getTimezoneByCountryCode(countryCode, exactTimezone)

const LocationStatus = () => {
  return (
	<>
    	<div class={stylesPlaques.greyNoticeCompact}>
        	<p><strong>My current location:</strong> <H>{countryFlag} {location ? location : countryName}</H> ({currentZoneUTC})</p>
			<p><strong>Planned:</strong> {plans ? plans : "TBA"}</p>
    	</div>
	</>
  );
};
export default LocationStatus;
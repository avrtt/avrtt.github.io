/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react"
import H from "../../components/Highlight"
import { countryCode, exactTimezone, location, plans } from "../../data/announcements"
import { getFlagByCountryCode, getCountryNameByCountryCode, getTimezoneByCountryCode } from "../../utils/location"
import * as stylesPlaques from "../../styles/plaques.module.scss"

const countryFlag = getFlagByCountryCode(countryCode)
const countryName = getCountryNameByCountryCode(countryCode)

const currentZoneUTC = "UTC" + getTimezoneByCountryCode(countryCode, exactTimezone)

interface LocationStatusProps {
  backgroundColor: string;
}

const LocationStatus = ({ backgroundColor }: LocationStatusProps) => {
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
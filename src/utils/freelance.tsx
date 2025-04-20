/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { freelanceWorkHourStart, freelanceWorkHourEnd } from '../data/freelance/variables';
import { countryCode, exactTimezone } from '../data/announcements';
import { getTimezoneByCountryCode } from "../utils/location"

// get current timezone string by country code
const currentZoneUTC: string =  getTimezoneByCountryCode(countryCode, exactTimezone)

// fetch my current time zone and working hours (ints)
const myTimeOffset: number = parseInt(currentZoneUTC)
const startHourFetch: number = parseInt(freelanceWorkHourStart)
const endHourFetch: number = parseInt(freelanceWorkHourEnd)

// get user (browser) time zone offset in hours (int)
const userTimeOffset: number = -parseInt(((new Date().getTimezoneOffset()) / 60).toString())

// create "UTC[+/-]<offset>" string
export var strUTCOffset: string;
if (userTimeOffset < 0) {
	strUTCOffset = "UTC" + userTimeOffset 
} else {
	strUTCOffset = "UTC+" + userTimeOffset
}

// get time difference between user and me in hours (int)
export const userDiff: number = myTimeOffset - userTimeOffset

// set Date objects with my working hours in user's time zone
var startTime: Date = new Date()
var endTime: Date = new Date() 
startTime.setHours(startHourFetch - userDiff)
endTime.setHours(endHourFetch - userDiff)

// extract hours from Date objects and create strings
export var startHoursUTC: string = (startTime.getHours()).toString() + ":00"
export var endHoursUTC: string = (endTime.getHours()).toString() + ":00"

const freelanceStartDate = new Date(2024, 5, 1); // date of start freelancing full-time
const freelancePastMonths = 15; // total months of occasional freelancing from January 2020 to June 2024

function calculateWorkExperience(startDate: Date, monthsToAdd: number): number {
    const currentDate = new Date();
    let totalMonths = monthsToAdd;
    let totalYears = currentDate.getFullYear() - startDate.getFullYear();
    totalMonths += currentDate.getMonth() - startDate.getMonth();
    if (totalMonths < 0) {
        totalYears -= 1;
        totalMonths += 12;
    }
    totalMonths += totalYears * 12; 
    let roundedYears = Math.floor(totalMonths / 6) * 0.5;
    return roundedYears;
}

// get rounded years of freelance experience (0, 0.5, 1, 1.5, so on + "years")
export const freelanceExperienceString = `${calculateWorkExperience(freelanceStartDate, freelancePastMonths)} years`;
export const freelanceExperienceStringRu = `${calculateWorkExperience(freelanceStartDate, freelancePastMonths)} лет`;

// get project number string (English)
export function getProjects(projectCount: number): string {
	if (projectCount === 0) { return 'No projects' }
	else if (projectCount === 1) { return projectCount + ' project' } 
	else { return projectCount + ' projects' }
}

// get project number string (Russian)
export function getProjectsRu(projectCount: number): string {
	if (projectCount === 0) { return 'Нет проектов' }
	else if (projectCount % 10 === 1 && !(projectCount % 100 === 11)) { return projectCount + ' проект' }
	else if (projectCount % 10 === 2 && !(projectCount % 100 === 12)) { return projectCount + ' проекта' }
	else if (projectCount % 10 === 3 && !(projectCount % 100 === 13)) { return projectCount + ' проекта' }
	else if (projectCount % 10 === 4 && !(projectCount % 100 === 14)) { return projectCount + ' проекта' }
	else { return projectCount + ' проектов' } // блять инсульт
}
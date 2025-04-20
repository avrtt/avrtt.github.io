/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { countryNamesMap } from "../data/countryNames"
import { singleTimezoneCountries, multipleTimezoneCountries } from "../data/timezones"

function isValidOffset(offset: string): boolean {
  return typeof offset === "string" && /^[+\-]\d+(\.\d+)?$/.test(offset);
}

export function getFlagByCountryCode(countryCode: string): string {
    if (!countryCode || countryCode.length !== 2) {
      return "";
    }
    const codePoints = countryCode
      .toUpperCase() // the Unicode offsets assume uppercase
      .split("")
      .map((char: string) => 127397 + char.charCodeAt(0)); // for each character (A-Z), convert to the corresponding regional indicator symbol
    return String.fromCodePoint(...codePoints);
}

export function getTimezoneByCountryCode(countryCode: string, exactTimezone?: string): string {
  if (!countryCode || countryCode.length !== 2) {
      return "+<?>";
  }

  const upperCode = countryCode.toUpperCase();

  // check if more than one timezone
  if (multipleTimezoneCountries.includes(upperCode)) {
    if (exactTimezone && isValidOffset(exactTimezone)) {
      return exactTimezone;
    } else {
      alert(
          `Country ${upperCode} has more than 1 timezone. ` +
          `Please provide a valid exact timezone offset (e.g., "+5").`
      );
      return "";
    }
  }

  // for single-timezone
  if (upperCode in singleTimezoneCountries) {
      return singleTimezoneCountries[upperCode as keyof typeof singleTimezoneCountries];
  }

  return "+<?>";
}

export function getCountryNameByCountryCode(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) {
    return ""; 
  }

  const upperCode = countryCode.toUpperCase();
  if (upperCode in countryNamesMap) {
    return countryNamesMap[upperCode as keyof typeof countryNamesMap];
  }
  
  return `Country: <?>`; // fallback
}
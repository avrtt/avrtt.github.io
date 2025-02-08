import { countryNamesMap } from "../data/countryNames"
import { singleTimezoneCountries, multipleTimezoneCountries } from "../data/timezones"

function isValidOffset(offset) {
  return typeof offset === "string" && /^[+\-]\d+(\.\d+)?$/.test(offset);
}

export function getFlagByCountryCode(countryCode) {
    if (!countryCode || countryCode.length !== 2) {
      return "";
    }
    const codePoints = countryCode
      .toUpperCase() // the Unicode offsets assume uppercase
      .split("")
      .map(char => 127397 + char.charCodeAt(0)); // for each character (A-Z), convert to the corresponding regional indicator symbol
    return String.fromCodePoint(...codePoints);
}

export function getTimezoneByCountryCode(countryCode, exactTimezone) {
  if (!countryCode || countryCode.length !== 2) {
      return "+<?>";
  }

  const upperCode = countryCode.toUpperCase();

  // check if more than one timezone
  if (multipleTimezoneCountries.includes(upperCode)) {
    if (isValidOffset(exactTimezone)) {
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
  if (singleTimezoneCountries[upperCode]) {
      return singleTimezoneCountries[upperCode];
  }

  return "+<?>";
}

export function getCountryNameByCountryCode(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    return ""; 
  }

  const upperCode = countryCode.toUpperCase();
  if (countryNamesMap[upperCode]) {
    return countryNamesMap[upperCode];
  }
  
  return `Country: <?>`; // fallback
}
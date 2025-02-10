import { mapData } from "../data/exploration/temp";

export function getNumOfVisitedISOa2() {
  return Object.values(mapData).filter((val) => val === 1).length;
}

export function getNumOfAllISOa2() {
  return Object.keys(mapData).length;
}
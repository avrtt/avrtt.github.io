/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { mapData } from "../data/exploration/temp";

export function getNumOfVisitedISOa2() {
  return Object.values(mapData).filter((val) => val === 1).length;
}

export function getNumOfAllISOa2() {
  return Object.keys(mapData).length;
}
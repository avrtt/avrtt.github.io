/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import { VectorMap } from "react-jvectormap";
import { mapData } from '../../data/exploration/temp';

const handleClick = (e: React.MouseEvent, countryCode: string): void => {
  console.log(countryCode);
};

const Map: React.FC = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px"
        }}
        onRegionClick={handleClick} // gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc" 
          },
          selectedHover: {}
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: mapData, 
              scale: ["#dbd9d9", "#146805"],
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </div>
  );
};
export default Map;
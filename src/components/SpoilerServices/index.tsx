/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef } from "react";
import M from "../Markdown";
import Arrow from "../../images/freelance/services/arrow2.svg"
import * as stylesSpoilers from "../../styles/spoilers.module.scss"

// Define a type for service items
interface ServiceItem {
  text?: string;
  textRu?: string;
  icon?: string;
}

const Spoiler: React.FC<SpoilerServicesProps> = ({ title, services = [], spoilerExtraDesc, isEnglish=true }) => {
  
  // Use proper type for the ref 
  const collRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Define the toggle content function with the correct type
  const toggleContent = (event: Event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const content = button.nextElementSibling as HTMLElement;
    button.classList.toggle(stylesSpoilers.activeSpoiler);
    if (content.style.maxHeight) {
      content.style.maxHeight = "";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  useEffect(() => {
    const coll = collRef.current;
    coll.forEach((element) => {
      if (element) {
        element.addEventListener("click", toggleContent);
      }
    });

    return () => {
      coll.forEach((element) => {
        if (element) {
          element.removeEventListener("click", toggleContent);
        }
      });
    };
  }, []);

  return isEnglish ? (
    <div>
      <button
        className={`noselect ${stylesSpoilers.spoilerButton}`}
        ref={(el) => el && collRef.current.push(el)}
      >
        &nbsp;&nbsp;
        <span className={stylesSpoilers.spoilerText}></span>
        {title}
        &nbsp;&nbsp;
      </button>
      <div className={stylesSpoilers.spoilerContentWrapper}>
        <div className={stylesSpoilers.spoilerContentServices}>
          <br />
          {services.map(
            (block: ServiceItem, index) =>
              block.text && block.icon && (
                <p key={index} id={stylesSpoilers.spoilerBlockServices}>
                  <span className="noselect">
                    <img src={block.icon} alt="service-category-icon" />
                    &nbsp;&nbsp;
                  </span>
                  <span>{block.text}</span>
                  &nbsp;&thinsp;
                  <a href={"/freelance/services/#" + index}>
                    <img title="Go to detailed description" src={Arrow} alt="button-icon" id={stylesSpoilers.anchorArrow}/>
                  </a>
                </p>
              )
          )}
          <br />
          {spoilerExtraDesc && (
            <p className={stylesSpoilers.spoilerExtraDesc}>
              <br/>
              <M span={true} text={spoilerExtraDesc} />
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button
        className={`noselect ${stylesSpoilers.spoilerButton}`}
        ref={(el) => el && collRef.current.push(el)}
      >
        &nbsp;&nbsp;
        <span className={stylesSpoilers.spoilerText}></span>
        {title}
        &nbsp;&nbsp;
      </button>
      <div className={stylesSpoilers.spoilerContentWrapper}>
        <div className={stylesSpoilers.spoilerContentServices}>
          <br />
          {services.map(
            (block: ServiceItem, index) =>
              block.textRu && block.icon && (
                <p key={index} id={stylesSpoilers.spoilerBlockServices}>
                  <span className="noselect">
                    <img src={block.icon} alt="service-category-icon" />
                    &nbsp;&nbsp;
                  </span>
                  <span>{block.textRu}</span>
                  &nbsp;&thinsp;
                  <a href={"/freelance/ru/services/#" + index}>
                    <img title="Go to detailed description" src={Arrow} alt="button-icon" id={stylesSpoilers.anchorArrow}/>
                  </a>
                </p>
              )
          )}
          <br />
          {spoilerExtraDesc && (
            <p className={stylesSpoilers.spoilerExtraDesc}>
              <br/>
              <M span={true} text={spoilerExtraDesc} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spoiler;

import React, { useEffect, useRef } from "react";
import M from "../Markdown";
import Arrow from "../../images/freelance/services/arrow2.svg"
import * as stylesSpoilers from "../../styles/spoilers.module.scss"

const Spoiler = ({ title, services = [], spoilerExtraDesc, isEnglish=true }) => {
  
  const collRef = useRef([]);

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

  const toggleContent = (event) => {
    const content = event.target.nextElementSibling;
    event.target.classList.toggle(stylesSpoilers.activeSpoiler);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  return isEnglish ? (
    <div>
      <button
        className={`noselect ${stylesSpoilers.spoilerButton}`}
        ref={(el) => collRef.current.push(el)}
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
            (block, index) =>
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
              <M text={spoilerExtraDesc} />
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button
        className={`noselect ${stylesSpoilers.spoilerButton}`}
        ref={(el) => collRef.current.push(el)}
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
            (block, index) =>
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
              <M text={spoilerExtraDesc} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spoiler;

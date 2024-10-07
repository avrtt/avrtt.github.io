import React, { useEffect, useRef } from "react";
import M from "../Markdown";
import Arrow from "../../images/freelance/services/arrow2.svg"

const Spoiler = ({ title, services = [], spoilerExtraDesc }) => {
  
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
    event.target.classList.toggle("activeSpoiler");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  return (
    <div>
      <button
        className="spoilerButton noselect"
        ref={(el) => collRef.current.push(el)}
      >
        &nbsp;&nbsp;
        <span className="spoilerText"></span>
        {title}
        &nbsp;&nbsp;
      </button>
      <div className="spoilerContentWrapper">
        <div className="spoilerContentServices">
          <br />
          {services.map(
            (block, index) =>
              block.text && block.icon && (
                <p key={index} id="spoilerBlockServices">
                  <span className="noselect">
                    <img src={block.icon} alt="" />
                    &nbsp;&nbsp;
                  </span>
                  <span>{block.text}</span>
                  &nbsp;&thinsp;
                  <a href={"/freelance/services/#" + index}>
                    <img src={Arrow} alt="" id="anchorArrow"/>
                  </a>
                </p>
              )
          )}
          <br />
          {spoilerExtraDesc && (
            <p className="spoilerExtraDesc">
              <M text={spoilerExtraDesc} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spoiler;

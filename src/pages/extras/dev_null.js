import React, { useState, useEffect } from "react";
import SEO from '../../components/seo';
import spoody from "../../gifs/spoody.gif";
import web from "../../images/spider_web.png";

const DevNull = () => {
  const [randomNum] = useState(() => Math.random() * 10);
  const [showSpider, setShowSpider] = useState(false);
  const [forceHideSpider, setForceHideSpider] = useState(false);

  useEffect(() => {
    const appearTimeout = setTimeout(() => {
      setShowSpider(true);

      const disappearTimeout = setTimeout(() => {
        setShowSpider(false);
      }, 1000);

      return () => clearTimeout(disappearTimeout);
    }, 0);

    return () => clearTimeout(appearTimeout);
  }, []);

  useEffect(() => {
    if (randomNum < 0.5) {
      const redirectTimeout = setTimeout(() => {
        window.location.href = "/dev/";
      }, 666);
      return () => clearTimeout(redirectTimeout);
    } else if (randomNum < 8) {
      setForceHideSpider(true);
    }
  }, [randomNum]);

  return (
    <>
      <div
        className="noselect"
        style={{
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
        }}
      >
        {randomNum >= 0.5 && !forceHideSpider && showSpider && (
          <img
            src={spoody}
            alt="spider"
            style={{
              width: "6rem",
              position: "absolute",
              right: "1rem",
              top: 0,
              zIndex: 99,
              transition: "opacity 0.5s ease-out",
            }}
          />
        )}
        {randomNum >= 0.5 && (
          <img
            src={web}
            alt="spider web"
            style={{
              width: "14rem",
              position: "absolute",
              top: "-0.4rem",
              right: "-0.2rem",
              opacity: 0.5,
              transition: "opacity 0.5s ease-out",
            }}
          />
        )}
      </div>
    </>
  );
};

export default DevNull;

export const Head = () => (
  <SEO 
    title="‎ "
  />
)

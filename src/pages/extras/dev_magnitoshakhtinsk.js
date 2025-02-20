import React from "react"
import SEO from '../../components/seo';
import HiddenNotice from "../../components/HiddenNotice"
import AnomalyNotice from "../../components/AnomalyNotice"
import Notice from "../../components/Notice"

// ?
import img1 from "../../images/posts/adventures/content/magnitoshakhtinsk/photo_2025-01-27_19-55-49.jpg"
import img2 from "../../images/posts/adventures/content/magnitoshakhtinsk/photo_2025-01-27_19-34-56.jpg"

const Dev = () => {
  return (
    <>
      <div
        className="noselect"
        style={{
          backgroundColor: "black",
          position: "fixed",
          overflow: "scroll",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ position: "absolute", left: "0%", right: "15%", marginInline: "auto", width: "75%", marginTop: "1%" }}>
          <HiddenNotice/>
          <AnomalyNotice/>
          <Notice title="Last report: 2025/02/06" text="(removed) <br/><br/> *Notice: deadly cognitohazard.*"/>
          <Notice title='"Fluctuating pattern\"' text="This page is categorized separately as a media content manipulator. Photos are altered depending on presence of an observer AND on the characteristics of the observer. Video manipulation is insufficiently investigated. Moderate risk of cognitohazard; special behavioral safety awareness is required. Start of containing: 2023/03/12. Crawler status: active."/>
          <br/><br/><br/>
          <img src={img1}/>
          <img src={img2}/>
        </div>
      </div>
    </>
  );
};

export default Dev;

export const Head = () => (
  <SEO 
    title="‎ "
    flagHidden={true}
  />
)
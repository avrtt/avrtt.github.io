import React from "react"
import SEO from '../../components/seo'
import { Link } from "gatsby"
import web from "../../images/spider_web.png"
import HiddenNotice from "../../components/HiddenNotice"
import S from "../../components/Shine"

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
        <img 
            src={web} 
            style={{ 
                width: "14rem", 
                position: "absolute",  
                top: "-0.4rem", 
                right: "-0.2rem", 
                opacity: 0.5,
                transition: "opacity 0.5s ease-out"
            }} 
        />
        <div style={{ position: "absolute", left: "0%", right: "15%", marginInline: "auto", width: "75%", marginTop: "1%" }}>
          <S sparkleFrequency = {300} sparkleSize = {[10, 16]}>
            <p style={{ fontWeight: "900", backgroundColor: "#f2f2f2", width: "fit-content", padding: "0.5rem 1rem", borderRadius: "2vh" }}>🥚 You've found one of the Easter eggs!</p>
          </S>
          <HiddenNotice/>
        </div>
        <div style={{ marginTop: "50vh", marginLeft: "5%" }}>
          <Link to="/dev">.</Link><br/>
          <Link to="/">..</Link><br/>
          <Link to="/dev/null">/null</Link><br/>
          <Link to="/dev/magnitoshakhtinsk">/magnitoshakhtinsk</Link><br/>
          <Link to="/dev/backrooms">/qwerty</Link><br/>
          <Link to="/dev/crawler_test">/crawler_test</Link><br/>
          <Link to="/all">~/all</Link><br/>
          <Link to="/asd">~/asd</Link><br/>
          <Link to="/redroom">~/redroom</Link><br/>
          <Link to="/123">~/123</Link><br/>
          <Link to="/1">~/1</Link><br/>
          <Link to="/f">~/f</Link><br/>
          <Link to="/entity">~/entity</Link><br/>
          <Link to="/adventures/magnitoshakhtinsk">~/adventures/magnitoshakhtinsk</Link><br/>
          <Link to="/backrooms">~/backrooms</Link> ? <br/>
          <Link to="/avrtt">~/avrtt</Link> ? <br/>
          <Link to="/null">~/null</Link><br/>
          <br/><br/><br/>
        </div>
      </div>
    </>
  );
};

export default Dev;

export const Head = () => (
  <SEO 
    title="/dev"
    flagHidden={true}
  />
)

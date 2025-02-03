import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";
import CountPosts from "../../fetchers/count_posts";
import * as styles from "./styles.module.scss"

const Navbar = () => {
  const location = useLocation();
  const [dropdownPostsVisible, setDropdownPostsVisible] = useState(false);
  const [dropdownWorksVisible, setDropdownWorksVisible] = useState(false);

  const isHomePage = location.pathname === "/";
  const isAdventuresPost = location.pathname.includes("/adventures")
  const isResearchPost = location.pathname.includes("/research")
  const isThoughtsPost = location.pathname.includes("/thoughts")
                      
  const isFreelanceSubpage = location.pathname.startsWith("/freelance/") && location.pathname !== "/freelance/";

  const showPostsDropdown = () => setDropdownPostsVisible(true);
  const hidePostsDropdown = () => setDropdownPostsVisible(false);
  const showWorksDropdown = () => setDropdownWorksVisible(true);
  const hideWorksDropdown = () => setDropdownWorksVisible(false);

  const { adventuresCount, researchCount, thoughtsCount } = CountPosts();
  const totalPostsCount = adventuresCount + researchCount + thoughtsCount;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarMenu}>
          <Link to="/" style={{"pointer-events": isHomePage ? "none" : ""}}>
            <StaticImage
              className={styles.logo}
              src="./logo.png"
              alt={styles.logo}
              loading="eager"
              backgroundColor="transparent"
              placeholder='none'
            />
          </Link>
          <div className={styles.dropdown} onMouseEnter={showWorksDropdown} onMouseLeave={hideWorksDropdown}>
            <Link
              activeClassName={styles.active}
              className={`${dropdownWorksVisible ? styles.active : ""} ${styles.navLink}`}
              style={{
                "opacity": dropdownWorksVisible ? "0.5" : "1",
                "background-color": "transparent",
                "padding-right": "1px",
              }}
            >
              Works
            </Link>
            {dropdownWorksVisible && (
              <div className={styles.dropdownMenu}>
                <Link className={styles.dropdownItem}
                  to="/publications"
                  activeClassName={styles.active}
                >
                  Publications
                </Link>
                <Link className={styles.dropdownItem}
                  to="/software"
                  activeClassName={styles.active}
                >
                  Software
                </Link>
                <Link className={styles.dropdownItem}
                  to="/music"
                  activeClassName={styles.active}
                >
                  Music
                </Link>
              </div>
            )}
          </div>
          <div className={styles.dropdown} onMouseEnter={showPostsDropdown} onMouseLeave={hidePostsDropdown}>
            <Link
              activeClassName={styles.active}
              className={`${dropdownPostsVisible ? styles.active : ""} ${styles.navLink}`}
              style={{
                "opacity": dropdownPostsVisible ? "0.5" : "1",
                "background-color": "transparent",
                "padding-right": "34px",
              }}
            >
              Posts
              &#8198;
              <span 
                style={{
                  "color": "#bababa",
                  "pointer-events": "none",
                  "opacity": dropdownPostsVisible ? "0" : "0.85",
                  "transition": "opacity 0.3s ease",
                }}>
                  {totalPostsCount}
              </span>
            </Link>
            {dropdownPostsVisible && (
              <div className={styles.dropdownMenu}>
                <Link
                  to="/adventures"
                  activeClassName={styles.active}
                  className={`${isAdventuresPost ? styles.navbarPostSection : ""} ${styles.dropdownItem}`}
                  style={{
                    "background-color": isAdventuresPost ? "transparent" : "",
                  }}
                >
                  Adventures <span style={{
                    "color": "#bababa", 
                    "opacity": isAdventuresPost ? "0" : "",
                    "transition": "opacity 0.3s ease"
                  }}>&#8198;{adventuresCount}</span>
                </Link>
                <Link
                  to="/research"
                  activeClassName={styles.active}
                  className={`${isResearchPost ? styles.navbarPostSection : ""} ${styles.dropdownItem}`}
                  style={{
                    "background-color": isResearchPost ? "transparent" : "",
                  }}
                >
                  Research <span style={{
                    "color": "#bababa", 
                    "opacity": isResearchPost ? "0" : "",
                    "transition": "opacity 0.3s ease"
                  }}>&#8198;{researchCount}</span>
                </Link>
                <Link
                  to="/thoughts"
                  activeClassName={styles.active}
                  className={`${isThoughtsPost ? styles.navbarPostSection : ""} ${styles.dropdownItem}`}
                  style={{
                    "background-color": isThoughtsPost ? "transparent" : "",
                  }}
                >
                  Thoughts <span style={{
                    "color": "#bababa", 
                    "opacity": isThoughtsPost ? "0" : "",
                    "transition": "opacity 0.3s ease"
                  }}>&#8198;{thoughtsCount}</span>
                </Link>
                <p style={{ margin: "6px 0" }}> </p>
                <Link className={styles.dropdownItem}
                  to="/tags"
                  activeClassName={styles.active}
                >
                  Filter by tag
                </Link>
              </div>
            )}
          </div>
          <Link className={styles.navLink} to="/course" activeClassName={styles.active}>
            Course
          </Link>
          <Link className={styles.navLink} to="/talks" activeClassName={styles.active}>
            Talks
          </Link>
          <Link className={styles.navLink} to="/goals" activeClassName={styles.active}>
            Goals
          </Link>
          <Link className={styles.navLink} to="/exploration" activeClassName={styles.active}>
            Exploration
          </Link>
          <Link
            to="/freelance" 
            activeClassName={styles.active}
            partiallyActive={true}
            className={`${isFreelanceSubpage ? styles.freelanceSubpage : ""} ${styles.navLink}`}
          >
            Freelance
          </Link>
          <Link className={styles.navLink} to="/cv" activeClassName={styles.active}>
            CV
          </Link>
          <Link className={styles.navLink} to="/about" activeClassName={styles.active}>
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

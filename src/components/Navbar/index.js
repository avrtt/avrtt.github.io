import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Nav, NavLink, NavMenu, Dropdown, DropdownMenu, DropdownItem } from "./NavbarElements";
import { StaticImage } from "gatsby-plugin-image";
import CountPosts from "../../fetchers/count_posts";

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
      <Nav>
        <NavMenu>
          <Link to="/" style={{"pointer-events": isHomePage ? "none" : ""}}>
            <StaticImage
              className="logo"
              src="./logo.png"
              alt="logo"
              loading="eager"
              backgroundColor="transparent"
              placeholder='none'
            />
          </Link>
          <Dropdown onMouseEnter={showWorksDropdown} onMouseLeave={hideWorksDropdown}>
            <NavLink
              activeClassName="active"
              className={dropdownWorksVisible ? "active" : ""}
              style={{
                "opacity": dropdownWorksVisible ? "0.5" : "1",
                "background-color": "transparent",
                "padding-right": "1px",
              }}
            >
              Works
            </NavLink>
            {dropdownWorksVisible && (
              <DropdownMenu>
                <DropdownItem
                  to="/publications"
                  activeClassName="active"
                >
                  Publications
                </DropdownItem>
                <DropdownItem
                  to="/software"
                  activeClassName="active"
                >
                  Software
                </DropdownItem>
                <DropdownItem
                  to="/music"
                  activeClassName="active"
                >
                  Music
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
          <Dropdown onMouseEnter={showPostsDropdown} onMouseLeave={hidePostsDropdown}>
            <NavLink
              activeClassName="active"
              className={dropdownPostsVisible ? "active" : ""}
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
            </NavLink>
            {dropdownPostsVisible && (
              <DropdownMenu>
                <DropdownItem
                  to="/adventures"
                  activeClassName="active"
                  className={isAdventuresPost ? "navbarPostSection" : ""}
                  style={{
                    "background-color": isAdventuresPost ? "transparent" : "",
                  }}
                >
                  Adventures <span style={{
                    "color": "#bababa", 
                    "opacity": isAdventuresPost ? "0" : "",
                    "transition": "opacity 0.3s ease"
                  }}>&#8198;{adventuresCount}</span>
                </DropdownItem>
                <DropdownItem
                  to="/research"
                  activeClassName="active"
                  className={isResearchPost ? "navbarPostSection" : ""}
                  style={{
                    "background-color": isResearchPost ? "transparent" : "",
                  }}
                >
                  Research <span style={{
                    "color": "#bababa", 
                    "opacity": isResearchPost ? "0" : "",
                    "transition": "opacity 0.3s ease"
                  }}>&#8198;{researchCount}</span>
                </DropdownItem>
                <DropdownItem
                  to="/thoughts"
                  activeClassName="active"
                  className={isThoughtsPost ? "navbarPostSection" : ""}
                  style={{
                    "background-color": isThoughtsPost ? "transparent" : "",
                  }}
                >
                  Thoughts <span style={{
                    "color": "#bababa", 
                    "opacity": isThoughtsPost ? "0" : "",
                    "transition": "opacity 0.3s ease"
                  }}>&#8198;{thoughtsCount}</span>
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
          <NavLink to="/course" activeClassName="active">
            Course
          </NavLink>
          <NavLink to="/talks" activeClassName="active">
            Talks
          </NavLink>
          <NavLink to="/goals" activeClassName="active">
            Goals
          </NavLink>
          <NavLink to="/exploration" activeClassName="active">
            Exploration
          </NavLink>
          <NavLink 
            to="/freelance" 
            activeClassName="active"
            partiallyActive={true}
            className={isFreelanceSubpage ? "freelance-subpage" : ""}
          >
            Freelance
          </NavLink>
          <NavLink to="/cv" activeClassName="active">
            CV
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

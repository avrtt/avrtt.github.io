import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Nav, NavLink, NavMenu, Dropdown, DropdownMenu, DropdownItem } from "./NavbarElements";
import { StaticImage } from "gatsby-plugin-image";
import CountPosts from "../../fetchers/count_posts";

const Navbar = () => {
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isHomePage = location.pathname === "/";
  const isAdventuresPost = location.pathname.includes("/adventures")
  const isResearchPost = location.pathname.includes("/research")
  const isThoughtsPost = location.pathname.includes("/thoughts")
                      
  const isFreelanceSubpage = location.pathname.startsWith("/freelance/") && location.pathname !== "/freelance/";

  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  const { adventuresCount, researchCount, thoughtsCount } = CountPosts();

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
          <Dropdown onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <NavLink
              activeClassName="active"
              className={dropdownVisible ? "active" : ""}
              style={{
                "opacity": dropdownVisible ? "0.5" : "1",
                "background-color": "transparent",
                "padding-right": "28px",
              }}
            >
              Posts
            </NavLink>
            {dropdownVisible && (
              <DropdownMenu>
                <DropdownItem
                  to="/adventures"
                  activeClassName="active"
                  className={isAdventuresPost ? "navbarPostSection" : ""}
                  style={{
                    "background-color": isAdventuresPost ? "transparent" : "",
                  }}
                >
                  Adventures ({adventuresCount})
                </DropdownItem>
                <DropdownItem
                  to="/research"
                  activeClassName="active"
                  className={isResearchPost ? "navbarPostSection" : ""}
                  style={{
                    "background-color": isResearchPost ? "transparent" : "",
                  }}
                >
                  Research ({researchCount})
                </DropdownItem>
                <DropdownItem
                  to="/thoughts"
                  activeClassName="active"
                  className={isThoughtsPost ? "navbarPostSection" : ""}
                  style={{
                    "background-color": isThoughtsPost ? "transparent" : "",
                  }}
                >
                  Thoughts ({thoughtsCount})
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
          <NavLink to="/course" activeClassName="active">
            Course
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

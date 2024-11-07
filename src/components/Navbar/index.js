import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Nav, NavLink, NavMenu, Dropdown, DropdownMenu, DropdownItem } from "./NavbarElements";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isPostsPage = location.pathname.includes("/adventures") ||
                      location.pathname.includes("/research") ||
                      location.pathname.includes("/thoughts");

  const isAdventuresPage = location.pathname.includes("/adventures");
  const isResearchPage = location.pathname.includes("/research");
  const isThoughtsPage = location.pathname.includes("/thoughts");

  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <>
      <Nav>
        <NavMenu>
          <Link to="/">
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
              className={isPostsPage || dropdownVisible ? "active" : ""}
            >
              Posts
            </NavLink>
            {dropdownVisible && (
              <DropdownMenu>
                <DropdownItem
                  to="/adventures"
                  activeClassName="active"
                  className={isAdventuresPage ? "active" : ""}
                >
                  Adventures
                </DropdownItem>
                <DropdownItem
                  to="/research"
                  activeClassName="active"
                  className={isResearchPage ? "active" : ""}
                >
                  Research
                </DropdownItem>
                <DropdownItem
                  to="/thoughts"
                  activeClassName="active"
                  className={isThoughtsPage ? "active" : ""}
                >
                  Thoughts
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
          <NavLink to="/goals" activeClassName="active">
            Goals
          </NavLink>
          <NavLink to="/exploration" activeClassName="active">
            Exploration
          </NavLink>
          <NavLink to="/freelance" activeClassName="active">
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

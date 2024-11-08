import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Nav, NavLink, NavMenu, Dropdown, DropdownMenu, DropdownItem } from "./NavbarElements";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isHomePage = location.pathname === "/";
  const isPostsPage = location.pathname.includes("/adventures") ||
                      location.pathname.includes("/research") ||
                      location.pathname.includes("/thoughts");
                      
  const isFreelanceSubpage = location.pathname.startsWith("/freelance/") && location.pathname !== "/freelance/";

  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

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
              className={isPostsPage || dropdownVisible ? "active" : ""}
              style={{
                "background-color": "transparent"
              }}
            >
              Posts
            </NavLink>
            {dropdownVisible && (
              <DropdownMenu>
                <DropdownItem
                  to="/adventures"
                  activeClassName="active"
                >
                  Adventures
                </DropdownItem>
                <DropdownItem
                  to="/research"
                  activeClassName="active"
                >
                  Research
                </DropdownItem>
                <DropdownItem
                  to="/thoughts"
                  activeClassName="active"
                >
                  Thoughts
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

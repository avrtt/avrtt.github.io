import React from "react";
import { Link } from "gatsby";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
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
              placeholder= 'none'
            />
          </Link>
          <NavLink to="/adventures" activeClassName="active" partiallyActive={true}>
            Adventures
          </NavLink>
          <NavLink to="/research" activeClassName="active" partiallyActive={true}>
            Research
          </NavLink>
          <NavLink to="/thoughts" activeClassName="active" partiallyActive={true}>
            Thoughts
          </NavLink>
          <NavLink to="/goals" activeClassName="active">
            Goals
          </NavLink>
          <NavLink to="/exploration" activeClassName="active">
            Exploration
          </NavLink>
          <NavLink to="/freelance" activeClassName="active" partiallyActive={true}>
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

import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import CountPosts from "../../fetchers/count_posts";
import close from "./close.svg";
import * as styles from "./styles.module.scss";

const Navbar = () => {
  const location = useLocation();
  const [dropdownPostsVisible, setDropdownPostsVisible] = useState(false);
  const [dropdownWorksVisible, setDropdownWorksVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isAdventuresPost = location.pathname.includes("/adventures");
  const isResearchPost = location.pathname.includes("/research");
  const isThoughtsPost = location.pathname.includes("/thoughts");
  const isFreelanceSubpage = location.pathname.startsWith("/freelance/") && location.pathname !== "/freelance/";

  const { adventuresCount, researchCount, thoughtsCount } = CountPosts();
  const totalPostsCount = adventuresCount + researchCount + thoughtsCount;

  const showPostsDropdown = () => setDropdownPostsVisible(true);
  const hidePostsDropdown = () => setDropdownPostsVisible(false);
  const showWorksDropdown = () => setDropdownWorksVisible(true);
  const hideWorksDropdown = () => setDropdownWorksVisible(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarMenu}>
          <Link to="/" style={{ pointerEvents: isHomePage ? "none" : "" }}>
            <StaticImage
              className={styles.logo}
              src="./logo.png"
              alt="logo"
              loading="eager"
              backgroundColor="transparent"
              placeholder="none"
            />
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={showWorksDropdown}
            onMouseLeave={hideWorksDropdown}
          >
            <Link
              activeClassName={styles.active}
              className={`${dropdownWorksVisible ? styles.active : ""} ${styles.navLink}`}
              style={{
                opacity: dropdownWorksVisible ? "0.5" : "1",
                backgroundColor: "transparent",
                paddingRight: "1px",
              }}
            >
              Works
            </Link>
            {dropdownWorksVisible && (
              <div className={styles.dropdownMenu}>
                <Link className={styles.dropdownItem} to="/publications" activeClassName={styles.active}>
                  Publications
                </Link>
                <Link className={styles.dropdownItem} to="/software" activeClassName={styles.active}>
                  Software
                </Link>
                <Link className={styles.dropdownItem} to="/music" activeClassName={styles.active}>
                  Music
                </Link>
              </div>
            )}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={showPostsDropdown}
            onMouseLeave={hidePostsDropdown}
          >
            <Link
              activeClassName={styles.active}
              className={`${dropdownPostsVisible ? styles.active : ""} ${styles.navLink}`}
              style={{
                opacity: dropdownPostsVisible ? "0.5" : "1",
                backgroundColor: "transparent",
                paddingRight: "34px",
              }}
            >
              Posts
              &#8198;
              <span 
                style={{
                  color: "#bababa",
                  pointerEvents: "none",
                  opacity: dropdownPostsVisible ? "0" : "0.85",
                  transition: "opacity 0.3s ease",
                }}
              >
                {totalPostsCount}
              </span>
            </Link>
            {dropdownPostsVisible && (
              <div className={styles.dropdownMenu}>
                <Link
                  to="/adventures"
                  activeClassName={styles.active}
                  className={styles.dropdownItem}
                  style={{
                    backgroundColor: isAdventuresPost ? "transparent" : "",
                  }}
                >
                  Adventures&#8198;&#8198;
                  <span 
                    style={{
                      color: "#bababa",
                      opacity: isAdventuresPost ? "0" : "",
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    {adventuresCount}
                  </span>
                </Link>
                <Link
                  to="/research"
                  activeClassName={styles.active}
                  className={styles.dropdownItem}
                  style={{
                    backgroundColor: isResearchPost ? "transparent" : "",
                  }}
                >
                  Research&#8198;&#8198;
                  <span 
                    style={{
                      color: "#bababa",
                      opacity: isResearchPost ? "0" : "",
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    {researchCount}
                  </span>
                </Link>
                <Link
                  to="/thoughts"
                  activeClassName={styles.active}
                  className={styles.dropdownItem}
                  style={{
                    backgroundColor: isThoughtsPost ? "transparent" : "",
                  }}
                >
                  Thoughts&#8198;&#8198;
                  <span 
                    style={{
                      color: "#bababa",
                      opacity: isThoughtsPost ? "0" : "",
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    {thoughtsCount}
                  </span>
                </Link>
                <p style={{ margin: "6px 0" }}> </p>
                <Link className={styles.dropdownItem} to="/tags" activeClassName={styles.active}>
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

          <Link to="/all" className={`${styles.all} ${styles.mobileNavLinkMain}`} activeClassName={styles.active}>
            📝 Posts
          </Link>
          <Link to="/about" className={`${styles.about} ${styles.mobileNavLinkMain}`} activeClassName={styles.active}>
            👤 About
          </Link>

          <div>
            <button className={styles.hamburgerWrapper} onClick={toggleMobileMenu}>
              <StaticImage
                className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}
                src="./hamburger.png"
                alt="menu"
                loading="eager"
                backgroundColor="transparent"
                placeholder="none"
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${mobileMenuOpen ? styles.open : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuContent}>
          <motion.button onClick={toggleMobileMenu} className={styles.closeButton} style={{ opacity: 0.5 }} whileTap={{ scale: 0.9, opacity: 1 }}>
            <img src={close} width="30rem" height="30rem"/>
          </motion.button>

          <Link className={styles.mobileNavLink} to="/" onClick={toggleMobileMenu}>
            🏠 Home
          </Link>
          <Link className={styles.mobileNavLink} to="/publications" onClick={toggleMobileMenu}>
            📄 Publications
          </Link>
          <Link className={styles.mobileNavLink} to="/software" onClick={toggleMobileMenu}>
            ⚙️ Software
          </Link>
          <Link className={styles.mobileNavLink} to="/music" onClick={toggleMobileMenu}>
            🎵 Music
          </Link>
          <Link className={styles.mobileNavLink} to="/all" onClick={toggleMobileMenu}>
            📝 Posts
          </Link>
          <Link className={styles.mobileNavLink} to="/course" onClick={toggleMobileMenu}>
            🎓 Course
          </Link>
          <Link className={styles.mobileNavLink} to="/talks" onClick={toggleMobileMenu}>
            💬 Talks
          </Link>
          <Link className={styles.mobileNavLink} to="/goals" onClick={toggleMobileMenu}>
            🏆 Goals
          </Link>
          <Link className={styles.mobileNavLink} to="/exploration" onClick={toggleMobileMenu}>
            🌏 Exploration
          </Link>
          <Link className={styles.mobileNavLink} to="/freelance" onClick={toggleMobileMenu}>
            🤝 Freelance
          </Link>
          <Link className={styles.mobileNavLink} to="/cv" onClick={toggleMobileMenu}>
            💼 CV
          </Link>
          <Link className={styles.mobileNavLink} to="/about" onClick={toggleMobileMenu}>
            👤 About
          </Link>
          <Link className={styles.mobileNavLink} to="/donate" onClick={toggleMobileMenu}>
            🎁 Donate
          </Link>
          <Link className={styles.mobileNavLink} to="/contact" onClick={toggleMobileMenu}>
            👋 Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

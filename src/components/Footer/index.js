import React from "react";
import { Link } from "gatsby";
import Telegram from "./telegram.svg";
import Instagram from "./instagram.svg";
import Email from "./email.svg";
import Map from "./map.svg";
import YouTube from "./youtube.svg";
import Facebook from "./facebook.svg";
import { footerYear } from "../../data/lastUpdated";
import * as styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>

        {/* links */}
        <div className={`${styles.row} ${styles.footerLinksStyle}`}>
          <a className={styles.footerLink} href="mailto:avrtt@tuta.io">
            <img src={Email} className={styles.linkImg} alt="email-logo"/>
          </a>
          <a className={styles.footerLink} href="https://www.facebook.com/avrttblog">
            <img src={Facebook} className={styles.linkImg} alt="facebook-logo"/>
          </a>
          <a className={styles.footerLink} href="https://www.instagram.com/avrttv">
            <img src={Instagram} className={styles.linkImg} alt="intagram-logo"/>
          </a>
          <a className={styles.footerLink} href="https://www.youtube.com/@vladaverett">
            <img src={YouTube} className={styles.linkImg} alt="youtube-logo"/>
          </a>
          <a className={styles.footerLink} href="https://t.me/avrttclub">
            <img src={Telegram} className={styles.linkImg} alt="telegram-logo"/>
          </a>
          <a className={styles.footerLink} href="https://www.google.com/maps/d/viewer?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ll=0.3349379679001004%2C0&z=2">
            <img src={Map} className={styles.linkImg} alt="map-logo"/>
          </a>
        </div>

        {/* badges on the left */}
        <div className={`${styles.row} ${styles.badgesLeftWrapper}`}>
          <Link to="/donate">
            <img
              className={`${styles.footerBadgeStyle} ${styles.badgeFirst}`}
              src="https://img.shields.io/badge/🎁%20Donate-f2f2f2?style=flat-square"
              alt="donate-badge"
            />
          </Link>

          <a href="https://github.com/avrtt/avrtt.github.io/issues/new">
            <img
              className={`${styles.footerBadgeStyle} ${styles.badgeSecond}`}
              src="https://img.shields.io/badge/🐞%20Report%20a%20bug-f2f2f2?style=flat-square"
              alt="report-bug-badge"
            />
          </a>

          <a href="https://github.com/avrtt/avrtt.github.io/blob/main/README.md">
            <img
              className={`${styles.footerBadgeStyle} ${styles.badgeThird}`}
              src="https://img.shields.io/badge/🤓%20README.md-f2f2f2?style=flat-square"
              alt="readme-badge"
            />
          </a>

          <a href="https://github.com/avrtt/avrtt.github.io/activity?ref=gh-pages&activity_type=direct_push">
            <img
              className={`${styles.footerBadgeStyle} ${styles.badgeFourth}`}
              src="https://img.shields.io/github/last-commit/avrtt/avrtt.github.io/gh-pages?style=flat-square&label=⚙️%20Last%20deploy%3A&labelColor=%23f2f2f2&color=%23f2f2f2"
              alt="last-deploy-badge"
            />
          </a>

          <a href="https://github.com/avrtt/avrtt.github.io/commits/main/">
            <img
              className={`${styles.footerBadgeStyle} ${styles.badgeFifth}`}
              src="https://img.shields.io/github/commit-activity/t/avrtt/avrtt.github.io/main?style=flat-square&label=🧩%20Commits%20(main%20branch)%3A&labelColor=%23f2f2f2&color=%23f2f2f2"
              alt="commit-activity-badge"
            />
          </a>

          <img
            className={`${styles.footerBadgeStyle} ${styles.badgeSixth}`}
            src="https://img.shields.io/github/repo-size/avrtt/avrtt.github.io?style=flat-square&label=📦%20Repo%20size%3A&labelColor=%23f2f2f2&color=%23f2f2f2"
            alt="repository-size-badge"
          />
        </div>

        {/* badges on the right */}
        <div className={`${styles.row} ${styles.badgesRightWrapper}`}>
          <img
            className={styles.visitsTodayBadge}
            src="https://api.visitorbadge.io/api/daily?path=https%3A%2F%2Favrtt.github.io%2F&label=TODAY&labelColor=%23f2f2f2&countColor=%23D9D9D9&style=flat-square&labelStyle=none"
            alt="visits-today-badge"
          />
          <img
            className={styles.visitsTotalBadge}
            src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Favrtt.github.io%2F&label=TOTAL&labelColor=%23f2f2f2&countColor=%23D9D9D9&style=flat-square&labelStyle=none"
            alt="visits-total-badge"
          />
        </div>

        {/* copyright, contact button */}
        <div className={`${styles.row} ${styles.badgesRightWrapper}`}>
          <p className={styles.footerCopyStyle} title="Made with love!">
            Copyright © {footerYear}&nbsp;
            <span className={styles.footerNameStyle}>Vladislav Averett</span>
          </p>
          <Link to="/contact">
            <img
              className={`${styles.footerContactStyle} ${styles.contactButtonStyle}`}
              src="https://img.shields.io/badge/💬%20Contact-282828?style=flat-square"
              alt="contact-badge"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
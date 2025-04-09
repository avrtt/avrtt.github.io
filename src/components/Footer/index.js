import React from "react";
import { Link } from "gatsby";
import Telegram from "./telegram.svg";
import Instagram from "./instagram.svg";
import Email from "./email.svg";
import Map from "./map.svg";
import YouTube from "./youtube.svg";
import Facebook from "./facebook.svg";
import { footerYear } from "../../data/lastUpdated";
import { freelanceStatus, location } from "../../data/announcements"
import { startHoursUTC, endHoursUTC } from '../../utils/freelance';
import * as styles from "./styles.module.scss";

var statusEmoji
if (freelanceStatus === 1) {
  statusEmoji = "👀"
} else if (freelanceStatus === 2) {
  statusEmoji = "😎"
} else if (freelanceStatus === 3) {
  statusEmoji = "⚡"
} else if (freelanceStatus === 4) {
  statusEmoji = "🤔"
} else if (freelanceStatus === 5) {
  statusEmoji = "🔥"
} else if (freelanceStatus === 6) {
  statusEmoji = "😴"
} else if (freelanceStatus === 7) {
  statusEmoji = "😌"
} else if (freelanceStatus === 8) {
  statusEmoji = "🏝️"
} else if (freelanceStatus === 9) {
  statusEmoji = "🍄"
}

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
            <p className={`${styles.badgeFirst}`}>🎁 Donate</p>
          </Link>
          <Link to="/contact">
            <p className={`${styles.badgeSecond}`}>💬 Contact</p>
          </Link>
          <a href="https://github.com/avrtt/avrtt.github.io/issues/new">
            <p className={`${styles.badgeThird}`}>🐞 Report a bug</p>
          </a>
          <a href="https://github.com/avrtt/avrtt.github.io/blob/main/README.md">
            <p className={`${styles.badgeFourth}`}>🤓 README.md</p>
          </a>
        </div>

        {/* badges on the right */}
        <div className={`${styles.row} ${styles.badgesRightWrapper}`}>
          <span>
            <p className={`${styles.badgeFirstRight}`}> </p>
          </span>
          <span>
            <p className={`${styles.badgeSecondRight}`}> </p>
          </span>
          <Link to="/freelance">
            <p className={`${styles.badgeThirdRight}`}>{startHoursUTC}–{endHoursUTC} &nbsp;{statusEmoji}</p>
          </Link>
          <span>
            <p className={`${styles.badgeFourthRight}`}>{location}</p>
          </span>
        </div>

        {/* copyright */}
        <div className={`${styles.row}`}>
          <p className={styles.footerCopyStyle} title="Made with love!">
            Copyright © {footerYear}&nbsp;
            <span className={styles.footerNameStyle}>Vladislav Averett</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
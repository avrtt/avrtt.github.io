import React from "react";
import Telegram from "./telegram.svg";
import GitHub from "./github.svg";
import Email from "./email.svg";
import Map from "./map.svg";
import YouTube from "./youtube.svg";
import {
  Box,
  Container,
  Row,
  FooterLink,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
		<Row>
            <FooterLink href="mailto:segfaultnomad@tuta.io"><img src={Email} style={{ height: 40, width: 40 }} alt="email-logo" /></FooterLink>
            <FooterLink href="https://github.com/segfaultnomad"><img src={GitHub} style={{ height: 40, width: 40 }} alt="github-logo" /></FooterLink>
            <FooterLink href="https://t.me/segfaultnomadism"><img src={Telegram} style={{ height: 40, width: 40 }} alt="telegram-logo" /></FooterLink>
            <FooterLink href="https://www.google.com/maps/d/viewer?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ll=0.3349379679001004%2C0&z=2"><img src={Map} style={{ height: 40, width: 40 }} alt="map-logo" /></FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UCSGEQmkFLhS29sTSaFhqCIQ"><img src={YouTube} style={{ height: 40, width: 40 }} alt="youtube-logo" /></FooterLink>
		</Row>
		<Row>
			<p>copyright © segfaultnomad</p>
		</Row>
      </Container>
    </Box>
  );
};
export default Footer;

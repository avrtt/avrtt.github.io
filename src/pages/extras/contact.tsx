/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import M from '../../components/Markdown';
import Code from "../../components/Code"
import * as stylesWallets from "../../styles/wallets.module.scss"

const Contact = () => {
    return (
        <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.15 }}>
            
            <div className="contactBody">
                <M text="Questions, corrections, business proposals, creative suggestions, bucket list ideas, offers to travel together, just chatting:"/>
                <div className="list">
                    <M text={`
- 📲 Telegram (fastest way): **[@averett](https://t.me/averett)**<br/>
- 📩 Email: **[avrtt@tuta.io](mailto:avrtt@tuta.io)**<br/>
- 👤 Facebook: **[@vladaverett](https://www.facebook.com/vladaverett)**
                    `}/>
                </div>
                <M text="I'm open to making friends with people all over the world."/>
                <p>If you're reaching out about business (i.e. ads and collaboration), please consider reading the <Link to="/information_for_business_inquiries">Information for Business Inquiries</Link>. If you're addressing a question, it may have already been answered <Link to="/faq">here</Link>.</p>
                <span className="desktopOnlySupport">
                <br/>
                <M text="---"/>
                <br/>
                </span>
                Share my opinion on the importance of secure communication? You might find these magic scribbles useful:
                <ul>
<li>[m]: <a href="https://matrix.to/#/!IkPReSNEepRWuitAYY:matrix.org">!IkPReSNEepRWuitAYY</a>:matrix.org, <a href="https://matrix.to/#/@avrtt:digitalprivacy.diy">@avrtt</a>:digitalprivacy.diy</li>
<li className="desktopOnlySupport">Session: <b>05a7b2f8134fc6915ded9df78f9c834a33a9157ce43d8ec40a195db8e3f834f35f</b></li>
<li className="mobileOnlySupport">Session: <b><motion.button className={stylesWallets.mobileWalletButton} onClick={() => navigator.clipboard.writeText("05a7b2f8134fc6915ded9df78f9c834a33a9157ce43d8ec40a195db8e3f834f35f")} whileTap={{ scale: 0.95 }}>Copy ID</motion.button></b></li>
                </ul>
                <div className="desktopOnlySupport">
                    <Code text='
mDMEZ1KmZRYJKwYBBAHaRw8BAQdAhDFnbiRMGWqAO1D6AUNdTuVeIQz6zoVlqvd6
uUx9Pkm0GVZsYWRpc2xhdiA8YXZydHRAdHV0YS5pbz6IkwQTFgoAOxYhBBXEpnmU
st0uikFNXSbyHQrTGEHhBQJnUqZlAhsDBQsJCAcCAiICBhUKCQgLAgQWAgMBAh4H
AheAAAoJECbyHQrTGEHhLFkA/jXu0m3p/w9SmCZJhWKI8LlWNoVM25I19Xikq6nB
9IusAP9MjSkVh9lNTR5m+Zlm9dr08WkQIs/5bi+SnMPmlk51Brg4BGdSpmUSCisG
AQQBl1UBBQEBB0CdZEZQVxRYpv2McO4cz1z8+VyNy4Yku9V+QIbbmaweIAMBCAeI
eAQYFgoAIBYhBBXEpnmUst0uikFNXSbyHQrTGEHhBQJnUqZlAhsMAAoJECbyHQrT
GEHhDvYBAIUwUljg/hFxgI71yMaJWFmH1hCBA1mHKYuI7qCSsqdvAQCsvpUjJn8R
oukZqhXuxAdlr5geyAbMceZFWz7aYO8GBw==
=Jigm' language="bash"/>
                </div>
                <span className="mobileOnlySupport">PGP key: </span><a href="https://raw.githubusercontent.com/avrtt/pgp-keys/main/general.asc">general.asc</a> <span className="desktopOnlySupport">|</span><span className="mobileOnlySupport"><br/></span> PGP fingerprint: <b><span className="desktopOnlySupport">15C4 A679 94B2 DD2E 8A41 4D5D 26F2 </span><u>1D0A D318 41E1</u></b>
                <span className="mobileOnlySupport"><br/><br/></span>
            </div>
        </motion.div>
    );
};

export default Contact;

export const Head = () => (
  <SEO 
    title="Contact - avrtt.blog"
    description="Find out how to contact Vladislav Averett in multiple ways."
    keywords={["contact me", "contact page"]}
    image={""}
    canonicalUrl="https://avrtt.github.io/contact"
    schemaType="ContactPage"
    
  />
)

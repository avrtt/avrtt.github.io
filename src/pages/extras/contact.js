import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../../components/Markdown';

const TITLE = 'Contact - avrtt.blog'

const Contact = () => {
    return (
        <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.15 }}>
            
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            
            <div class="contactBody">
                <M text="Questions, corrections, business proposals, creative suggestions, bucket list ideas, offers to travel together, just chatting:"/>
                <div class="listHome">
                    <M text="
                    📲 Telegram (fastest way): **[@averett](https://t.me/averett)**<br/>
                    📩 Email: **[avrtt@tuta.io](mailto:avrtt@tuta.io)**<br/>
                    👤 Facebook: **[@vladaverett](https://www.facebook.com/vladaverett)**
                    "/>
                </div>
                <M text="I'm open to making friends with people all over the world."/>
                <M text="If you're reaching out about business (i.e. ads and collaboration), please consider reading the [Information for Business Inquiries](/information_for_business_inquiries)."/>
            </div> 
        </motion.div>
    );
};

export default Contact;

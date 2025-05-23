/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

// global styles
import "../styles/page_bodies.scss"
import "../styles/page_structure_utils.scss"
import "../styles/selection_general.scss"
import "../styles/headings_general.scss"
import "../styles/tables_general.scss"
import "../styles/media_general.scss"
import "../styles/scrollbar.scss"
import "../styles/last_updates.scss"
import "../styles/links.scss"
import "../styles/lists.scss"
import "../styles/compatibility.scss"

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  location: {
    pathname: string;
    hash: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {

  useEffect(() => {
    const { pathname, hash } = location;
    const exemptPaths = [
      '/freelance/services', '/freelance/ru/services',
      '/adventures', '/research', '/thoughts'
    ];
    // keep anchors when navigating to services or post chapters (prevent from scrolling on top)
    if (exemptPaths.some(exemptPath => pathname.startsWith(exemptPath)) && hash) {
      return;
    }
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  const path = location?.pathname || '';
  // console.log('Layout rendered for path:', path);
  
  const isDevNull = [
    "/dev/null/",
    "/dev/magnitoshakhtinsk/",
    "/dev/",
    "/null/",
    "/avrtt/"
  ].includes(path);

  return (
    <>
      {!isDevNull && <Navbar />}
      <AnimatePresence mode='wait'>
        <motion.main
          key={path} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {!isDevNull && <Footer />}
    </>
  );
};

export default Layout;

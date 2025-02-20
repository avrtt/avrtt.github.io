import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = ({ children, location }) => {
  const path = location?.pathname || '';
  
  var isDevNull = false;
  if (
    path === "/dev/null/" ||
    path === "/dev/magnitoshakhtinsk/" ||
    path === "/dev/" ||
    path === "/null/" ||
    path === "/avrtt/"
  ) { isDevNull = true }

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

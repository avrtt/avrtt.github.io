import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import Arrow from '../../images/freelance/services/arrow.svg';

const GoBackButton = () => {
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);
  const initialTopOffset = 12;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 6 + initialTopOffset;

      if (window.scrollY >= threshold && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY < threshold && scrolled) {
        setScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`goBackWrapper ${scrolled ? 'scrolled' : ''}`}
      style={!scrolled ? { top: `${initialTopOffset}vh` } : {}}
      ref={buttonRef}
    >
      <Link title="Back to the main page" className="goBack noselect" to="/freelance">
        <div className="goBack noselect">
          <img src={Arrow} alt="button_icon" width="50%" height="100%" />
        </div>
      </Link>
    </div>
  );
};

export default GoBackButton;



/*import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import Arrow from '../../images/freelance/services/arrow.svg';

const GoBackButton = () => {
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const buttonTop = buttonRef.current.getBoundingClientRect().top;

        if (buttonTop <= 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`goBackWrapper ${scrolled ? 'scrolled' : ''}`}
      ref={buttonRef}
    >
      <Link title="Back to the main page" className="goBack noselect" to="/freelance">
        <div className="goBack noselect">
          <img src={Arrow} alt="button_icon" width="50%" height="100%" />
        </div>
      </Link>
    </div>
  );
};

export default GoBackButton;
*/
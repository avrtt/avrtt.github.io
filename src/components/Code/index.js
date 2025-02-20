import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs';  
import * as styles from './styles.module.scss';

const Code = ({ text = '\n// empty code block', language = 'python' }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = screenWidth <= 767;

  const customStyle = {
    lineHeight: 'clamp(0.8rem, 2vw, 1.2rem)',
    fontSize: 'clamp(0.75rem, 2vw, 1.2rem)',
    borderRadius: isMobile ? 0 : '2vh',
    backgroundColor: '#383838',
    padding: '0.2em 1.5em 1em 1.5em',
  }

  return (
    <div className={styles.codeWrapper}>
      <SyntaxHighlighter
        language={language}
        style={zenburn}
        showLineNumbers={false}
        wrapLines
        wrapLongLines={!isMobile}
        customStyle={customStyle}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code


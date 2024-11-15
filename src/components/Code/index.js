import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs';  

const customStyle = {
  lineHeight: '1.2',
  fontSize: '1.5rem',
  borderRadius: '2vh',
  backgroundColor: '#383838',
  padding: '0.2em 1.5em 1em 1.5em',
}

const Code = ({ text='\n// empty code block', language='python' }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={zenburn}
      showLineNumbers={false}
      wrapLines
      wrapLongLines={false}
      customStyle={customStyle}
    >
      {text}
    </SyntaxHighlighter>
  )
}

export default Code

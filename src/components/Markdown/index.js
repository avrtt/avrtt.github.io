import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
  
const M = ({ text, span=false }) => {
  return (
    <ReactMarkdown 
      components={span ? { p: "span" } : {}} 
      rehypePlugins={[rehypeRaw]}>
        {text}
    </ReactMarkdown>
  );
};
export default M;
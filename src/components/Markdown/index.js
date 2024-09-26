import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
  
const M = ({ text }) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
  );
};
export default M;
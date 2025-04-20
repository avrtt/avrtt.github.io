/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
  text: string;
  span?: boolean;
}
  
const M = ({ text, span=false }: MarkdownProps) => {
  return (
    <ReactMarkdown 
      components={span ? { p: "span" } : {}} 
      rehypePlugins={[rehypeRaw]}>
        {text}
    </ReactMarkdown>
  );
};
export default M;
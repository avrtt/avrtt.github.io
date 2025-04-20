/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css'; 

interface LatexProps {
  text: string;
}
  
const L = ({ text }: LatexProps) => {
  return (
    <Latex>{text}</Latex>
  );
};
export default L;

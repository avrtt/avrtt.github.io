/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { CSSProperties } from 'react';

interface HighlightProps {
  color?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  [x: string]: any; // For any additional props
}

const H: React.FC<HighlightProps> = ({ color = '#ffd56a', children, style = {}, ...rest }) => {
  
  const defaultStyle: CSSProperties = {
    backgroundColor: color,
    padding: '0.2em 0.3em',
    borderRadius: '1vh',
    fontWeight: 'bold',
    borderBottomLeftRadius: '1vh',
    borderBottomRightRadius: '1vh',
    borderTopRightRadius: '1vh',
    borderTopLeftRadius: '1vh',
    boxDecorationBreak: 'clone',
    WebkitBoxDecorationBreak: 'clone',
  };

  return (
    <span style={{ ...defaultStyle, ...style }} {...rest}>
      {children}
    </span>
  );
};

export default H;
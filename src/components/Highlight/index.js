import React from 'react';
import PropTypes from 'prop-types';

const H = ({ color, children, style, ...rest }) => {
  
  const defaultStyle = {
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

H.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

H.defaultProps = {
  color: '#ffd56a',
  style: {},
};

export default H;